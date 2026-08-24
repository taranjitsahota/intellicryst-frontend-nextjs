import { GoogleGenAI } from "@google/genai";
import mammoth from "mammoth";
import { NextResponse } from "next/server";
import { PDFParse } from "pdf-parse";
import { quotationCurrency, quotationRates } from "@/data/quotation-rates";

export const runtime = "nodejs";

type QuotationItem = {
  module: string;
  item: string;
  quantity: number;
  unit: string;
  rate: number;
  amount: number;
};

type Quotation = {
  scope: string;
  plan: string[];
  items: QuotationItem[];
  total: number;
  assumptions: string[];
  answers: string[];
};

type AgentResponse =
  | {
      type: "clarification";
      questions: Array<{ id: string; question: string; options: string[]; suggestion: string }>;
    }
  | {
      type: "quotation";
      scope: string;
      plan: string[];
      items: Array<{
        rateKey: string;
        module: string;
        item: string;
        quantity: number;
        unit: string;
        rateLevel: "good" | "better" | "outstanding";
      }>;
      assumptions: string[];
      answers: string[];
    };

const INTERNAL_BUFFER = 1.1;

async function extractDocument(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
    const parser = new PDFParse({ data: buffer });
    try {
      return (await parser.getText()).text;
    } finally {
      await parser.destroy();
    }
  }

  if (
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.name.toLowerCase().endsWith(".docx")
  ) {
    return (await mammoth.extractRawText({ buffer })).value;
  }

  throw new Error("Please upload a PDF or DOCX document.");
}

function parseAgentResponse(text: string): AgentResponse {
  const jsonText = text.replace(/^```json\s*|^```\s*|\s*```$/g, "").trim();
  const response = JSON.parse(jsonText) as AgentResponse;

  if (response.type === "clarification") {
    if (!Array.isArray(response.questions) || response.questions.length === 0) {
      throw new Error("The AI returned invalid clarification questions.");
    }
    return response;
  }

  if (
    response.type !== "quotation" ||
    typeof response.scope !== "string" ||
    !Array.isArray(response.plan) ||
    !Array.isArray(response.items) ||
    !Array.isArray(response.assumptions) ||
    !Array.isArray(response.answers)
  ) {
    throw new Error("The AI returned an invalid quotation format.");
  }

  return response;
}

function calculateQuotation(response: Extract<AgentResponse, { type: "quotation" }>): Quotation {
  const items = response.items.map((item) => {
    const rate = quotationRates[item.rateKey];
    const quantity = Number(item.quantity);

    if (
      !rate ||
      !Number.isFinite(quantity) ||
      quantity <= 0 ||
      typeof item.module !== "string" ||
      typeof item.item !== "string" ||
      !["good", "better", "outstanding"].includes(item.rateLevel)
    ) {
      throw new Error("The AI returned an invalid quotation item.");
    }

    const baseRate = item.rateLevel === "good"
      ? rate.minRate
      : item.rateLevel === "outstanding"
        ? rate.maxRate
        : (rate.minRate + rate.maxRate) / 2;
    const quotedRate = Math.round(baseRate * INTERNAL_BUFFER);
    return {
      module: item.module.trim() || "General",
      item: item.item.trim() || rate.label,
      quantity,
      unit: rate.unit,
      rate: quotedRate,
      amount: quotedRate * quantity,
    };
  });

  return {
    scope: response.scope,
    plan: response.plan,
    items,
    total: items.reduce((total, item) => total + item.amount, 0),
    assumptions: response.assumptions,
    answers: response.answers,
  };
}

const estimationPrompt = `You are Intellicryst's estimation analyst. First decompose the project into modules and detailed deliverables, then price every deliverable. Use only these rate keys in ${quotationCurrency}: ${JSON.stringify(quotationRates)}. The chart has no standalone UX-design key, so map UX/design work to the closest applicable webPage or minorUiChange key.

Always collect a short discovery questionnaire before quoting. If the conversation does not contain clear client answers to a questionnaire, return valid JSON only in this shape: {"type":"clarification","questions":[{"id":"ui-quality","question":"What UI/UX quality level do you want?","options":["Good: clean standard interface","Better: polished responsive interface","Outstanding: premium custom experience"],"suggestion":"Better is suitable for most business applications."}]}. Ask 4 to 7 useful general or requirement-specific questions. Include questions about UI/UX quality, web/mobile scope, authentication and roles, third-party integrations, expected scale, and QA/release needs when relevant. Avoid asking questions that the requirements already answer. Options must be practical and include a brief suggestion.

Once the client has answered, return valid JSON only in this exact shape: {"type":"quotation","scope":"short summary","plan":["module and implementation step"],"items":[{"rateKey":"thirdPartyIntegration","module":"Payments - Razorpay","item":"Create Razorpay order API","quantity":1,"unit":"integration","rateLevel":"better"}],"assumptions":["assumption"],"answers":["question: selected answer"]}. Never combine an entire module into one line. For each module, list every concrete deliverable separately: each API endpoint or backend workflow, database/migration task, UI page or screen, frontend API integration, UX/design task, third-party setup, webhook/callback handling, failure/refund/security handling, QA/testing, and deployment task when applicable. For Razorpay or another payment provider, normally consider separate lines for order creation, payment verification/signature validation, webhook handling, refund/status handling, frontend checkout integration, payment UI, database/payment status changes, sandbox/live setup, and payment testing, then omit only what the requirements clearly do not need. Use the precise human-readable module and task names in the output. Set rateLevel to good, better, or outstanding according to the client's UI/quality answers; use better when no quality answer applies. The server calculates all rates and totals, so never return rate, amount, total, taxes, discounts, timelines, or buffer details. Do not mention internal pricing logic or any buffer to the user.`;

async function generateAgentResponse(requirements: string): Promise<AgentResponse> {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("No AI provider is configured. Add GEMINI_API_KEY.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const chat = ai.chats.create({
    model: "gemini-3.6-flash",
    config: { systemInstruction: estimationPrompt },
  });
  const result = await chat.sendMessage({ message: requirements });
  return parseAgentResponse(result.text || "");
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const message = String(formData.get("message") || "").trim();
    const file = formData.get("file");

    if (!message && !(file instanceof File)) {
      return NextResponse.json({ error: "Add a project description or document." }, { status: 400 });
    }

    let requirements = message;
    if (file instanceof File) {
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "The document must be smaller than 10 MB." }, { status: 400 });
      }
      requirements = `${requirements}\n\nDocument requirements:\n${await extractDocument(file)}`.trim();
    }

    if (!requirements) {
      return NextResponse.json({ error: "The uploaded document did not contain readable text." }, { status: 400 });
    }

    const agentResponse = await generateAgentResponse(requirements);

    if (agentResponse.type === "clarification") {
      return NextResponse.json({
        reply: "Before I prepare the quotation, please answer these questions:",
        questions: agentResponse.questions,
      });
    }

    const quotation = calculateQuotation(agentResponse);

    return NextResponse.json({
      reply: "Your quotation is ready. Download the attached document for the detailed estimate.",
      quotation,
    });
  } catch (error: unknown) {
    console.error("FULL ERROR:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create a quotation." },
      { status: 500 },
    );
  }
}

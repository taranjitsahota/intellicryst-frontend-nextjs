import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const chat = ai.chats.create({
      model: "gemini-2.0-flash",
    });

    const result = await chat.sendMessage({ message });

    return NextResponse.json({ reply: result.text });
  } catch (error: any) {
    console.error("FULL ERROR:", error);
    return NextResponse.json(
      { reply: error.message || "Error occurred" },
      { status: 500 },
    );
  }
}

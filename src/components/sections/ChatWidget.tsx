import React, { useState, useRef, useEffect } from "react";
import { Download, FileText, MessageCircle, Paperclip, X, Send, Loader2 } from "lucide-react";

type ChatMessage = {
  role: "user" | "model";
  text: string;
  quotation?: Quotation;
  questions?: Question[];
};

type Question = {
  id: string;
  question: string;
  options: string[];
  suggestion: string;
};

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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function downloadQuotation(quotation: Quotation) {
  const quotationDate = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date());
  const rows = quotation.items
    .map(
      (item) => `<tr>
        <td>${escapeHtml(item.module)}</td>
        <td>${escapeHtml(item.item)}</td>
        <td>${item.quantity} ${escapeHtml(item.unit)}</td>
        <td>${formatCurrency(item.rate)}</td>
        <td>${formatCurrency(item.amount)}</td>
      </tr>`,
    )
    .join("");
  const assumptions = quotation.assumptions
    .map((assumption) => `<li>${escapeHtml(assumption)}</li>`)
    .join("");
  const plan = quotation.plan.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
  const answers = quotation.answers.map((answer) => `<li>${escapeHtml(answer)}</li>`).join("");
  const documentHtml = `
    <html>
      <head><meta charset="utf-8"><title>Intellicryst Quotation</title></head>
      <body style="font-family:Arial,sans-serif;color:#102a43;line-height:1.6;max-width:800px;margin:40px auto">
        <h1 style="color:#012b48;margin-bottom:4px">Intellicryst Project Quotation</h1>
        <p style="color:#627d98">Prepared on ${escapeHtml(quotationDate)}</p>
        <h2 style="color:#012b48">Scope</h2>
        <p>${escapeHtml(quotation.scope)}</p>
        <h2 style="color:#012b48">Implementation plan</h2>
        <ol>${plan}</ol>
        <table style="border-collapse:collapse;width:100%;margin-top:24px">
          <thead><tr style="background:#012b48;color:white">
            <th style="padding:10px;text-align:left">Module</th>
            <th style="padding:10px;text-align:left">Detailed task</th>
            <th style="padding:10px;text-align:left">Quantity</th>
            <th style="padding:10px;text-align:right">Rate</th>
            <th style="padding:10px;text-align:right">Amount</th>
          </tr></thead>
          <tbody>${rows}</tbody>
          <tfoot><tr>
            <td colspan="4" style="padding:12px;text-align:right;font-weight:bold;border-top:2px solid #012b48">Total</td>
            <td style="padding:12px;text-align:right;font-weight:bold;border-top:2px solid #012b48">${formatCurrency(quotation.total)}</td>
          </tr></tfoot>
        </table>
        <h2 style="color:#012b48">Client preferences</h2>
        <ul>${answers}</ul>
        <h2 style="color:#012b48">Assumptions</h2>
        <ul>${assumptions}</ul>
      </body>
    </html>`;
  const blob = new Blob([documentHtml], { type: "application/msword" });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = `intellicryst-quotation-${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Share a project brief or upload a PDF/DOCX. I will turn it into a concise implementation quotation.",
    },
  ]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Ensure the chat window scrolls to the latest message */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    const selectedAnswerText = Object.values(selectedAnswers).join("\n");
    if ((!textToSend.trim() && !selectedAnswerText && !file) || isLoading) return;

    const userMessage = [selectedAnswerText, textToSend.trim()].filter(Boolean).join("\n");
    setMessages((prev) => [...prev, { role: "user", text: userMessage || file?.name || "Uploaded project brief" }]);
    setInput("");
    setIsLoading(true);
    const formData = new FormData();
    const previousConversation = messages
      .filter((message) => message.role === "user" || message.questions)
      .map((message) => `${message.role === "user" ? "User" : "Estimator"}: ${message.text}${message.questions ? `\n${message.questions.map((question) => `${question.question}\nOptions: ${question.options.join(", ")}\nSuggestion: ${question.suggestion}`).join("\n")}` : ""}`)
      .join("\n");
    formData.append(
      "message",
      previousConversation ? `${previousConversation}\nUser: ${userMessage}` : userMessage,
    );
    if (file) formData.append("file", file);
    setFile(null);

    try {
      const response = await fetch("/api/chat", { method: "POST", body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to create a quotation.");
      setMessages((prev) => [
        ...prev,
        { role: "model", text: data.reply, quotation: data.quotation, questions: data.questions },
      ]);
      setSelectedAnswers({});
    } catch (error) {
      setMessages((prev) => [...prev, { role: "model", text: error instanceof Error ? error.message : "Unable to create a quotation." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[360px] bg-white rounded-[32px] shadow-[0_32px_128px_-24px_rgba(1,43,72,0.25)] border border-slate-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-[var(--deep-blue)] p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-[var(--primary-color)] to-[var(--primary-blue)] rounded-xl flex items-center justify-center">
                <MessageCircle size={22} className="text-[var(--deep-blue)]" />
              </div>
              <div>
                <h4 className="text-white font-black text-sm tracking-tight">
                  Intellicryst Nexus
                </h4>
                <div className="flex items-center gap-1.5">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${isLoading ? "bg-amber-400" : "bg-[var(--primary-color)]"} animate-pulse`}
                  ></div>
                  <span className="text-[10px] text-white/50 font-black uppercase tracking-widest">
                    {isLoading ? "Analyzing..." : "Active Architect"}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white transition-colors p-2"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div
            ref={scrollRef}
            className="h-[320px] overflow-y-auto p-6 space-y-5 bg-slate-50/30 scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border shadow-sm max-w-[90%] text-sm leading-relaxed font-medium ${
                  msg.role === "user"
                    ? "bg-[var(--deep-blue)] text-white ml-auto rounded-tr-none border-[var(--deep-blue)]"
                    : "bg-white text-[var(--navy-text)] mr-auto rounded-tl-none border-slate-100"
                }`}
              >
                {msg.text}
                {msg.questions && (
                  <div className="mt-3 space-y-3">
                    {msg.questions.map((question) => (
                      <div key={question.id}>
                        <p className="font-bold">{question.question}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {question.options.map((option) => (
                            <button
                              type="button"
                              key={option}
                              onClick={() => setSelectedAnswers((previous) => ({ ...previous, [question.id]: `${question.question}: ${option}` }))}
                              className={`rounded-lg border px-2 py-1 text-left text-xs font-semibold transition-colors ${
                                selectedAnswers[question.id] === `${question.question}: ${option}`
                                  ? "border-[var(--primary-color)] bg-[var(--primary-color)]/20"
                                  : "border-slate-200 hover:border-[var(--primary-color)]"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        <p className="mt-1 text-xs opacity-70">Suggestion: {question.suggestion}</p>
                        {selectedAnswers[question.id] && (
                          <p className="mt-1 text-xs font-bold text-[var(--deep-blue)]">Selected</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {msg.quotation && (
                  <button
                    type="button"
                    onClick={() => downloadQuotation(msg.quotation as Quotation)}
                    className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--primary-color)] px-3 py-2 text-xs font-bold text-[var(--deep-blue)] transition-colors hover:bg-[var(--primary-color)]"
                  >
                    <Download size={14} />
                    Download quotation
                  </button>
                )}
              </div>
            ))}

            {messages.length < 3 && !isLoading && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() =>
                    handleSend("Explain your development methodology.")
                  }
                  className="w-full text-left px-5 py-3 rounded-xl bg-white border border-slate-200 text-[var(--deep-blue)] text-xs font-bold hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all"
                >
                  Service Capabilities
                </button>
                <button
                  onClick={() =>
                    handleSend("I'd like to request a system security audit.")
                  }
                  className="w-full text-left px-5 py-3 rounded-xl bg-white border border-slate-200 text-[var(--deep-blue)] text-xs font-bold hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all"
                >
                  Project Blueprint Request
                </button>
              </div>
            )}

            {isLoading && (
              <div className="flex gap-2 p-2">
                <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-bounce"></div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 border-t border-slate-100 bg-white"
          >
            {file && (
              <div className="mb-3 flex items-center gap-2 rounded-xl bg-cyan-50 px-3 py-2 text-xs font-bold text-[var(--deep-blue)]">
                <FileText size={14} />
                <span className="min-w-0 flex-1 truncate">{file.name}</span>
                <button type="button" onClick={() => setFile(null)} aria-label="Remove attached document">
                  <X size={14} />
                </button>
              </div>
            )}
            <div className="flex gap-3">
              <label
                title="Attach a PDF or DOCX"
                className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-slate-200 text-[var(--deep-blue)] transition-all hover:border-[var(--primary-color)] hover:text-[var(--primary-blue)]"
              >
                <Paperclip size={18} />
                <input
                  type="file"
                  accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="sr-only"
                  disabled={isLoading}
                  onChange={(event) => setFile(event.target.files?.[0] || null)}
                />
              </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe the project..."
              disabled={isLoading}
              className="flex-1 px-5 py-3.5 bg-slate-50 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || (!input.trim() && !Object.keys(selectedAnswers).length && !file)}
              className="w-12 h-12 bg-[var(--deep-blue)] text-white rounded-2xl flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-[var(--deep-blue)] transition-all shadow-lg disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <Send size={18} />
              )}
            </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[var(--deep-blue)] rounded-[24px] flex items-center justify-center text-[var(--primary-color)] shadow-2xl hover:scale-110 transition-transform relative group hover:cursor-pointer"
      >
        <div className="absolute inset-0 bg-[var(--primary-color)] rounded-[24px] scale-90 opacity-0 group-hover:opacity-20 transition-all"></div>
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;

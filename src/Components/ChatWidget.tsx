
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
/* Import GoogleGenAI and associated types for Gemini integration */
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Welcome to Intellicryst! How can our engineering team assist your project today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  /* Use a ref to store the chat session persistent across re-renders */
  const chatRef = useRef<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Ensure the chat window scrolls to the latest message */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  /* Lazy initialize the Gemini chat session with context-specific instructions */
  const getChatSession = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: 'You are an expert solution architect at Intellicryst, a high-end digital engineering firm. You assist clients with technical queries regarding web/mobile development, hybrid cloud infrastructure, and security. Be professional, direct, and helpful. Use technical terminology accurately but remain accessible.',
        },
      });
    }
    return chatRef.current;
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage = textToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = getChatSession();
      /* Call Gemini sendMessage and extract the resulting text */
      const result: GenerateContentResponse = await chat.sendMessage({ message: userMessage });
      const botResponse = result.text || "I'm having trouble connecting to my knowledge base right now. Please try again later.";
      
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Nexus connection interrupted. Our engineers are investigating." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[360px] bg-white rounded-[32px] shadow-[0_32px_128px_-24px_rgba(1,43,72,0.25)] border border-slate-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-[#012B48] p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-[#00F5D4] to-[#00B6FF] rounded-xl flex items-center justify-center">
                <MessageCircle size={22} className="text-[#012B48]" />
              </div>
              <div>
                <h4 className="text-white font-black text-sm tracking-tight">Intellicryst Nexus</h4>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-amber-400' : 'bg-[#00F5D4]'} animate-pulse`}></div>
                  <span className="text-[10px] text-white/50 font-black uppercase tracking-widest">
                    {isLoading ? 'Analyzing...' : 'Active Architect'}
                  </span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-2">
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div ref={scrollRef} className="h-[320px] overflow-y-auto p-6 space-y-5 bg-slate-50/30 scroll-smooth">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`p-5 rounded-2xl border shadow-sm max-w-[90%] text-sm leading-relaxed font-medium ${
                  msg.role === 'user' 
                    ? 'bg-[#012B48] text-white ml-auto rounded-tr-none border-[#012B48]' 
                    : 'bg-white text-[#05182C] mr-auto rounded-tl-none border-slate-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
            
            {messages.length < 3 && !isLoading && (
              <div className="flex flex-col gap-2">
                 <button 
                   onClick={() => handleSend("Explain your development methodology.")}
                   className="w-full text-left px-5 py-3 rounded-xl bg-white border border-slate-200 text-[#012B48] text-xs font-bold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-all"
                 >
                    Service Capabilities
                 </button>
                 <button 
                   onClick={() => handleSend("I'd like to request a system security audit.")}
                   className="w-full text-left px-5 py-3 rounded-xl bg-white border border-slate-200 text-[#012B48] text-xs font-bold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-all"
                 >
                    Project Blueprint Request
                 </button>
              </div>
            )}

            {isLoading && (
              <div className="flex gap-2 p-2">
                <div className="w-1.5 h-1.5 bg-[#00F5D4] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-[#00F5D4] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#00F5D4] rounded-full animate-bounce"></div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-4 border-t border-slate-100 flex gap-3 bg-white"
          >
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your query..." 
              disabled={isLoading}
              className="flex-1 px-5 py-3.5 bg-slate-50 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all disabled:opacity-50"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-[#012B48] text-white rounded-2xl flex items-center justify-center hover:bg-[#00F5D4] hover:text-[#012B48] transition-all shadow-lg disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            </button>
          </form>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#012B48] rounded-[24px] flex items-center justify-center text-[#00F5D4] shadow-2xl hover:scale-110 transition-transform relative group"
      >
        <div className="absolute inset-0 bg-[#00F5D4] rounded-[24px] scale-90 opacity-0 group-hover:opacity-20 transition-all"></div>
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;

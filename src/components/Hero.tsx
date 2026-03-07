import React from "react";
import { Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

const ParticleWaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Particle Wave Image Layer */}
    <div className="absolute inset-0 opacity-40 mix-blend-screen overflow-hidden">
      <div
        className="absolute inset-0 w-[200%] h-full animate-particle-slide"
        style={{
          backgroundImage: "url('/images/home/hero-bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "hue-rotate(140deg) brightness(1.2) contrast(1.1)",
        }}
      ></div>
    </div>

    {/* Brand Color Overlays for Depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05080F]/60 to-[#05080F]"></div>
    <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4]/5 via-transparent to-[#00B6FF]/5"></div>

    {/* Animated Glow Accents (Minimum Opacity) */}
    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#00F5D4] blur-[180px] opacity-[0.08] rounded-full animate-float-slow"></div>
    <div
      className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#00B6FF] blur-[200px] opacity-[0.06] rounded-full animate-float-slow"
      style={{ animationDelay: "-5s" }}
    ></div>
  </div>
);

const AnimatedText = ({
  text,
  className,
  baseDelay = 0,
  highlightWords = [],
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  highlightWords?: string[];
}) => {
  const words = text.split(" ");
  return (
    <span
      className={`${className} inline-flex flex-wrap justify-center gap-[0.25em]`}
    >
      {words.map((word, i) => {
        // Match word ignoring punctuation for highlighting
        const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
        const isHighlighted = highlightWords.includes(cleanWord);

        return (
          <span
            key={i}
            className={`inline-block opacity-0 animate-fade-up ${isHighlighted ? "gradient-text" : ""}`}
            style={{
              animationDelay: `${baseDelay + i * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#05080F] overflow-hidden">
      <style>
        {`
          @keyframes particle-slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fade-up {
            from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0px); }
          }
          .animate-particle-slide {
            animation: particle-slide 20s linear infinite;
          }
          .animate-fade-up {
            animation: fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          .hero-headline {
            /* Standard word spacing for clarity */
            word-spacing: normal;
          }
        `}
      </style>

      <ParticleWaveBackground />

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10 text-center space-y-6 py-8 pt-20">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-[10px] uppercase tracking-[0.4em] animate-in fade-in slide-in-from-top-4 duration-1000">
          <Cpu size={14} className="text-[#00F5D4]" />
          Engineered for Performance
        </div>

        <div className="space-y-6 max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="hero-headline text-3xl md:text-5xl xl:text-6xl font-black text-white leading-[1.2] md:leading-[1.1] tracking-normal flex flex-col items-center">
            <AnimatedText
              text="We design, build, deploy,"
              highlightWords={["design", "build", "deploy"]}
              baseDelay={0.2}
            />
            <AnimatedText
              text="and secure digital applications."
              baseDelay={0.8}
            />
          </h1>
          <p className="text-base md:text-lg text-white/50 font-bold max-w-4xl mx-auto leading-relaxed tracking-wide animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-1000">
            Web development · Mobile apps · Cloud (AWS & Azure) · Network &
            application security
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-[1.2s]">
          <Link href="/contact">
            <button className="group px-8 py-4 text-sm rounded-full bg-white text-[#05080F] font-black flex items-center gap-4 transition-all hover:bg-[#00F5D4] hover:scale-105 shadow-[0_0_80px_rgba(255,255,255,0.15)] hover:cursor-pointer">
              Talk to Us
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Link>
          <Link href="/projects">
            <button className="px-8 py-4 text-sm rounded-full border-2 border-white/10 text-white/60 font-black transition-all hover:text-white hover:border-white/40 hover:bg-white/5 hover:cursor-pointer">
              See What We Build
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

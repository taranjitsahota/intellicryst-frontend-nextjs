import React, { useRef } from "react";
import { processSteps } from "@/data/process";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Process: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - 400 : scrollLeft + 400;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative py-16 lg:py-20 bg-white">
      {/* Background Gaussian Blur Accent */}
      <div className="gaussian-blur-accent w-[600px] h-[600px] -top-20 -right-20 opacity-[0.03]"></div>

      <div className="flex flex-col md:flex-row items-end justify-between mb-12 lg:mb-16 gap-8">
        <div className="space-y-4">
          <h4 className="text-[var(--deep-blue)] font-black text-[10px] lg:text-xs uppercase tracking-[0.5em] opacity-50">
            Execution Roadmap
          </h4>
          <h2 className="text-4xl lg:text-6xl font-black text-[var(--deep-blue)] tracking-tighter leading-[0.95]">
            Our structured <br />
            <span className="gradient-text italic">process.</span>
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 pb-2">
          <button
            onClick={() => scroll("left")}
            className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center text-[var(--deep-blue)] hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all group shadow-sm bg-white"
            aria-label="Scroll Left"
          >
            <ChevronLeft
              size={24}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center text-[var(--deep-blue)] hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all group shadow-sm bg-white"
            aria-label="Scroll Right"
          >
            <ChevronRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Process Scroll Container */}
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="relative h-[360px] min-w-[1200px]">
          {/* Main Fluid Gradient Path - Layered behind icons and text */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none p-40">
            <svg
              className="w-full overflow-visible"
              height="200"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 100 C 140 100, 140 30, 280 30 C 420 30, 420 170, 560 170 C 700 170, 700 30, 840 30 C 980 30, 980 170, 1120 170 C 1260 170, 1260 100, 1400 100"
                stroke="url(#processGradientFullMove)"
                strokeWidth="6"
                strokeLinecap="round"
                className="opacity-40"
              />
              <defs>
                <linearGradient
                  id="processGradientFullMove"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="15%" stopColor="#00F5D4" />
                  <stop offset="50%" stopColor="#00B6FF" />
                  <stop offset="85%" stopColor="#00F5D4" />
                  <stop offset="100%" stopColor="#00B6FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps distributed end-to-end with sufficient horizontal breathing room (px-20) */}
          <div className="absolute inset-0 flex justify-between items-center px-20 py-10">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              const Icon = step.icon;
              // Positioning on the 100% width track, but px-20 on the container handles the edge "cutting"
              const leftPos = (i / (processSteps.length - 1)) * 100;

              return (
                <div
                  key={i}
                  className="absolute transition-all duration-700 z-10"
                  style={{
                    left: `${leftPos}%`,
                    top: isEven ? "20%" : "80%",
                    transform: "translate(110%, -50%)",
                  }}
                >
                  {/* Step Number Backdrop - Shifted further left and up to be more visible */}
                  <div className="absolute -top-16 -left-12 text-[4rem] lg:text-[5rem] font-black text-slate-100/80 select-none z-[-1] transition-all duration-500 group-hover:text-[var(--primary-color)]/10">
                    {i + 1}
                  </div>

                  {/* Icon Node Container */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-color)]/20 to-[var(--primary-blue)]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[32px] bg-white border border-slate-100 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center text-[var(--deep-blue)] group-hover:scale-110 group-hover:border-[var(--primary-color)] group-hover:-translate-y-2 transition-all duration-700 relative z-10">
                      <div className="text-[var(--primary-color)] transform group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Text Content - Positioned with more vertical space to avoid overlap with the SVG path */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[180px] lg:w-[200px] text-center transition-all duration-500 z-20 ${
                      isEven ? "top-20" : "bottom-20"
                    }`}
                  >
                    <h3 className="text-xl font-black text-[var(--deep-blue)] mb-2 tracking-tight transition-colors group-hover:text-[var(--primary-color)]">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-[var(--grey-text)] font-semibold leading-relaxed px-4 opacity-70 group-hover:opacity-100">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

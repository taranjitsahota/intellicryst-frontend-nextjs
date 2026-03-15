import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import Link from "next/link";

const ServicesGrid: React.FC = () => {
  return (
    <div className="max-w-[1800px] mx-auto p-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background Gaussian Blur Accent */}
      <div className="gaussian-blur-accent w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-[0.05]"></div>

      <div className="text-center mb-16 space-y-6">
        <h4 className="text-[var(--deep-blue)] font-black text-xs uppercase tracking-[0.4em]">
          What We Do
        </h4>
        <h2 className="text-4xl lg:text-5xl font-black text-[var(--deep-blue)] tracking-tighter leading-[0.95]">
          Intellicryst Features, <br className="hidden md:block" />
          <span className="gradient-text">Engineered For Your Growth</span>
        </h2>
        <p className="text-[var(--grey-text)] font-semibold max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
          Enjoy seamless development, smarter cloud predictions, and
          personalized security protocols powered by our elite engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isFirst = i === 0;
          return (
            <div
              key={i}
              className={`group p-6 xl:p-7 rounded-2xl transition-all duration-500 flex flex-col justify-between h-full min-h-[260px] ${
                isFirst
                  ? "bg-[var(--deep-blue)] text-white shadow-[0_32px_128px_-24px_rgba(1,43,72,0.3)] hover:-translate-y-3"
                  : "bg-white border border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-3"
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 mb-5 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isFirst
                      ? "bg-white/10 text-[var(--primary-color)]"
                      : "bg-slate-50 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)]/10"
                  } ${s.animClass}`}
                >
                  <Icon size={24} />
                </div>

                <h3
                  className={`text-xl font-black leading-tight mb-4 ${
                    isFirst ? "text-white" : "text-[var(--deep-blue)]"
                  }`}
                >
                  {s.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed font-medium ${
                    isFirst ? "text-white/60" : "text-[var(--grey-text)]"
                  }`}
                >
                  {s.description}
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href={`/services/${s.slug}`}
                  className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest group/link transition-all ${
                    isFirst
                      ? "text-white hover:text-[var(--primary-color)]"
                      : "text-[var(--deep-blue)] hover:text-[var(--primary-color)]"
                  }`}
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesGrid;

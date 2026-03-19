import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import circuit from "../../../public/images/home/circuit.jpg";
import Image from "next/image";
import { techStacks } from "@/data/techstack";

const allTechnologies = techStacks.flatMap((stack) => stack.technologies);

const CallToActionChips: React.FC = () => {
  return (
    <div className="relative w-full bg-white pt-16 overflow-hidden">
      {/* Tech Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-30">
        <Image
          src={circuit}
          alt="Technology Patterns"
          fill
          className="w-full h-full object-cover opacity-80"
        />
        {/* Vertical Linear Fade: Transparent at bottom, White at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/60 to-white"></div>
      </div>

      {/* Content Layer (z-10 to stay above background) */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 text-center mb-12">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black text-[var(--deep-blue)] leading-[1.1] tracking-tighter">
            Let’s Create an{" "}
            <span className="text-[var(--primary-color)]">Amazing</span> <br />
            Project Together!
          </h2>
        </div>

        {/* Primary Action Area */}
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center mb-20 relative">
          {/* Glow effect for background */}
          <div className="absolute inset-0 bg-[var(--primary-color)]/10 blur-[60px] rounded-full scale-75 pointer-events-none"></div>

          <div className="relative z-10 py-10">
            <Link
              href="/contact"
              className="bg-[var(--primary-color)] text-[var(--deep-blue)] px-10 py-4 text-base lg:text-lg rounded-full font-black uppercase tracking-[0.2em] shadow-2xl shadow-cyan-400/50 hover:scale-110 transition-all duration-500 flex items-center gap-4 group cursor-pointer"
            >
              Contact Us
              <ArrowUpRight
                size={22}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Marquee Bar */}
      <div className="w-full bg-[var(--deep-blue)] py-4 border-y-4 border-[var(--light-grey)] relative overflow-hidden group z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 mx-8">
              {allTechnologies.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <React.Fragment key={index}>
                    <span className="flex items-center gap-3 text-2xl lg:text-3xl font-black text-[var(--primary-color)] uppercase tracking-tighter">
                      <Icon className="text-3xl" />
                      {tech.name}
                    </span>

                    <span className="text-2xl lg:text-3xl font-black text-[var(--primary-color)] opacity-20">
                      ✦
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          ))}
        </div>

        {/* Circular Arrow Decoration */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-[var(--deep-blue)] shadow-xl group-hover:scale-125 transition-transform duration-500">
          <Link href="/technology">
            <ArrowUpRight size={24} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionChips;

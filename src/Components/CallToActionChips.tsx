
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CallToActionChips: React.FC = () => {
  return (
    <div className="relative w-full bg-white pt-32 overflow-hidden">
      {/* Tech Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
          alt="Technology Patterns" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        {/* Vertical Linear Fade: Transparent at bottom, White at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/60 to-white"></div>
      </div>

      {/* Content Layer (z-10 to stay above background) */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black text-[#012B48] leading-[1.1] tracking-tighter">
            Let’s Create an <span className="text-[#00F5D4]">Amazing</span> <br />
            Project Together!
          </h2>
        </div>

        {/* Primary Action Area */}
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center mb-32 relative">
          {/* Glow effect for background */}
          <div className="absolute inset-0 bg-[#00F5D4]/10 blur-[100px] rounded-full scale-75 pointer-events-none"></div>
          
          <div className="relative z-10 py-10">
            <button className="bg-[#00F5D4] text-[#012B48] px-16 py-8 rounded-full font-black text-xl lg:text-2xl uppercase tracking-[0.2em] shadow-2xl shadow-cyan-400/50 hover:scale-110 transition-all duration-500 flex items-center gap-4 group">
              Contact Us 
              <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Marquee Bar */}
      <div className="w-full bg-[#00F5D4] py-8 border-y-4 border-[#012B48] relative overflow-hidden group z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 mx-8">
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] uppercase tracking-tighter">Web Design</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] opacity-20 text-stroke">✦</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] uppercase tracking-tighter">App Design</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] opacity-20">✦</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] uppercase tracking-tighter">Dashboard</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] opacity-20">✦</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] uppercase tracking-tighter">Wireframe</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] opacity-20">✦</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] uppercase tracking-tighter">UI UX</span>
              <span className="text-4xl lg:text-5xl font-black text-[#012B48] opacity-20">✦</span>
            </div>
          ))}
        </div>
        
        {/* Circular Arrow Decoration */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-[#012B48] shadow-xl group-hover:scale-125 transition-transform duration-500">
          <ArrowUpRight size={40} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default CallToActionChips;

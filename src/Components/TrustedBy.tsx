
import React from 'react';

const logos = [
  { name: 'Skyline Dynamics', icon: 'F' },
  { name: 'Vortex Core', icon: 'V' },
  { name: 'Quantum Path', icon: 'Q' },
  { name: 'NovaChain', icon: 'N' },
  { name: 'Apex Systems', icon: 'A' },
  { name: 'Cloud Drift', icon: 'C' },
  { name: 'Nexus Logic', icon: 'L' },
];

const TrustedBy: React.FC = () => {
  return (
    <div className="bg-white py-24 animate-in fade-in duration-1000 delay-700">
      <div className="max-w-full mx-auto overflow-hidden">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-10 px-6">
            <div className="h-[1px] w-32 bg-slate-100"></div>
            <p className="text-[11px] font-black uppercase tracking-[0.6em] text-[#012B48]/30 whitespace-nowrap">
              Trusted by 50+ Global Businesses
            </p>
            <div className="h-[1px] w-32 bg-slate-100"></div>
          </div>
          
          {/* Marquee Container - Left to Right Scroll */}
          <div className="relative marquee-mask">
            <div className="flex items-center animate-marquee-reverse gap-24 py-6">
              {/* Duplicate logos to ensure seamless looping (3x for safety on wider screens) */}
              {[...logos, ...logos, ...logos].map((logo, idx) => (
                <div key={`${logo.name}-${idx}`} className="flex items-center gap-10 text-[#012B48] group cursor-default shrink-0">
                  {/* Significantly Bigger Logo Circle */}
                  <div className="w-24 h-24 rounded-[32px] bg-slate-50 border border-slate-100 flex items-center justify-center font-black text-3xl group-hover:bg-[#012B48] group-hover:text-[#00F5D4] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    {logo.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black tracking-tight text-xl md:text-2xl uppercase opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                      {logo.name}
                    </span>
                    <div className="h-1 mt-1 w-0 bg-[#00F5D4] group-hover:w-full transition-all duration-700 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;

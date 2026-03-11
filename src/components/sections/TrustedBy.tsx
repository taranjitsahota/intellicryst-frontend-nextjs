
import React from 'react';
import { logos } from '@/data/trusted';


const TrustedBy: React.FC = () => {
  return (
    <div className="bg-white py-14 animate-in fade-in duration-1000 delay-700">
      <div className="max-w-full mx-auto overflow-hidden">
        <div className="space-y-10">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-10 px-6">
            <div className="h-[1px] w-32 bg-slate-100"></div>
            <p className="text-[11px] font-black uppercase tracking-[0.6em] text-[var(--deep-blue)]/30 whitespace-nowrap">
              Trusted by Global Businesses
            </p>
            <div className="h-[1px] w-32 bg-slate-100"></div>
          </div>
          
          {/* Marquee Container - Left to Right Scroll */}
          <div className="relative marquee-mask">
            <div className="flex items-center animate-marquee-reverse gap-14 py-6">
              {/* Duplicate logos to ensure seamless looping (3x for safety on wider screens) */}
              {[...logos, ...logos, ...logos].map((logo, idx) => (
                <div key={`${logo.name}-${idx}`} className="flex items-center gap-10 text-[var(--deep-blue)] group cursor-default shrink-0">
                  {/* Significantly Bigger Logo Circle */}
                  <div className="w-16 h-16 text-xl rounded-[32px] bg-slate-50 border border-slate-100 flex items-center justify-center font-black group-hover:bg-[var(--deep-blue)] group-hover:text-[var(--primary-color)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    {logo.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black tracking-tight text-lg md:text-xl uppercase opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                      {logo.name}
                    </span>
                    <div className="h-1 mt-1 w-0 bg-[var(--primary-color)] group-hover:w-full transition-all duration-700 rounded-full"></div>
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

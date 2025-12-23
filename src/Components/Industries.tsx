
import React from 'react';
import { Sprout, Truck, ShoppingCart, LayoutPanelLeft, ArrowRight } from 'lucide-react';

const industries = [
  { icon: <Sprout size={16} />, title: "Agriculture & AgriTech" },
  { icon: <Truck size={16} />, title: "Mobility & Transportation" },
  { icon: <ShoppingCart size={16} />, title: "eCommerce" },
  { icon: <LayoutPanelLeft size={16} />, title: "SaaS Platforms" }
];

const Industries: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
      {/* Container with decreased height and theme deep blue background (#012B48) */}
      <div className="bg-[#012B48] rounded-[48px] min-h-[320px] lg:min-h-[380px] relative overflow-hidden flex flex-col justify-center p-8 lg:p-12 group">
        
        {/* Swirling Ribbon / Flow Background (Matching Reference) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Main Swirl Component - SVG for precision */}
          <svg className="absolute right-[-5%] top-[-10%] w-[70%] h-[120%] opacity-80" viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#glowRibbon)">
              <path d="M800 1000C600 800 400 600 500 300C600 0 800 100 800 100" stroke="#00F5D4" strokeWidth="1" strokeOpacity="0.2"/>
              <path d="M850 1000C650 750 350 550 450 250C550 -50 850 50 850 50" stroke="white" strokeWidth="40" strokeOpacity="0.05"/>
              {/* The Gold/Amber Highlight Ribbon from reference */}
              <path d="M900 1000C700 700 300 500 400 200C500 -100 900 0 900 0" stroke="url(#ribbonGrad)" strokeWidth="60" strokeOpacity="0.8"/>
            </g>
            <defs>
              <linearGradient id="ribbonGrad" x1="400" y1="200" x2="900" y2="1000" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="white" />
                <stop offset="0.3" stopColor="#FFC107" />
                <stop offset="0.6" stopColor="#FF5722" />
                <stop offset="1" stopColor="#012B48" />
              </linearGradient>
              <filter id="glowRibbon" x="0" y="-200" width="1200" height="1400" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="40" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
              </filter>
            </defs>
          </svg>

          {/* Floating Stars/Particles (Matching Reference) */}
          <div className="absolute top-[30%] right-[35%] w-1.5 h-1.5 bg-white rounded-full blur-[2px] opacity-40"></div>
          <div className="absolute top-[50%] right-[30%] w-2 h-2 bg-white rounded-full blur-[4px] opacity-60 animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-1 h-1 bg-white rounded-full blur-[1px] opacity-30"></div>
          
          {/* Subtle star shape from reference */}
          <div className="absolute top-[35%] right-[40%] opacity-20">
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 0V40M0 20H40" stroke="white" strokeWidth="0.5"/>
                <circle cx="20" cy="20" r="1" fill="white"/>
             </svg>
          </div>
        </div>

        {/* Content Section - More compact spacing */}
        <div className="relative z-10 space-y-6 max-w-2xl">
          <div className="space-y-3">
            <div className="inline-flex items-center text-white/40 text-[9px] font-black uppercase tracking-[0.5em]">
              Industries & Solutions
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-[1] max-w-xl">
              Expertise Across <br />
              <span className="italic opacity-90 text-[#00F5D4]">Key Industries</span>
            </h2>
            
            <p className="text-white/50 text-sm lg:text-base font-medium max-w-md leading-relaxed">
              We design, build, and deploy high-availability systems tailored to the 
              specific demands of your market sector.
            </p>
          </div>

          {/* Industry Selection Pills - Smaller icons/text */}
          <div className="flex flex-wrap gap-2">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 hover:border-white/20 transition-all cursor-default backdrop-blur-md"
              >
                <div className="text-[#00F5D4]">{ind.icon}</div>
                <span className="text-white/80 font-bold text-[9px] uppercase tracking-widest">{ind.title}</span>
              </div>
            ))}
          </div>

          {/* Action Button - Compact */}
          <div className="pt-2">
            <button className="px-8 py-3.5 bg-white text-[#012B48] rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all hover:bg-[#00F5D4] hover:scale-105 shadow-2xl">
              Start Exploring
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Industries;

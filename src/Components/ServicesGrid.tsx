
import React from 'react';
import { 
  Layout, 
  Smartphone, 
  Database, 
  Palette, 
  Globe, 
  ShieldCheck, 
  Zap, 
  TestTube,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <Layout size={24} />,
    title: "Web platforms & portals",
    desc: "Robust, scalable web systems built for high-performance and growth.",
    animClass: "group-hover:animate-pulse-gentle"
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile applications (Android & iOS)",
    desc: "Native and cross-platform mobile apps with exceptional user experience.",
    animClass: "group-hover:animate-bounce"
  },
  {
    icon: <Database size={24} />,
    title: "Full-stack systems & APIs",
    desc: "End-to-end architecture connecting users to complex backend services.",
    animClass: "group-hover:animate-float-mini"
  },
  {
    icon: <Palette size={24} />,
    title: "UI / UX design for web & mobile",
    desc: "Aesthetic interfaces designed for usability and brand identity.",
    animClass: "group-hover:rotate-12 transition-transform duration-500"
  },
  {
    icon: <Globe size={24} />,
    title: "Multi-Platform Deployment",
    desc: "Seamless rollout across edge, cloud, and on-premises environments.",
    animClass: "group-hover:animate-spin transition-all duration-[3000ms]"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Cloud, network & application security",
    desc: "Zero-trust security layers protecting your digital assets 24/7.",
    animClass: "animate-shield-flow"
  },
  {
    icon: <Zap size={24} />,
    title: "SEO-ready application structure",
    desc: "Engineered for search visibility and lightning-fast loading speeds.",
    animClass: "group-hover:scale-125 transition-transform duration-300"
  },
  {
    icon: <TestTube size={24} />,
    title: "Application testing & QA",
    desc: "Rigorous quality checks ensuring stability and flawless execution.",
    animClass: "group-hover:-rotate-12 transition-transform duration-300"
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative">
      {/* Background Gaussian Blur Accent */}
      <div className="gaussian-blur-accent w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-[0.05]"></div>

      <div className="text-center mb-24 space-y-6">
        <h4 className="text-[#012B48] font-black text-xs uppercase tracking-[0.4em]">What We Do</h4>
        <h2 className="text-5xl lg:text-7xl font-black text-[#012B48] tracking-tighter leading-[0.95]">
          Intellicryst Features, <br className="hidden md:block" /> 
          <span className="gradient-text">Engineered For Your Growth</span>
        </h2>
        <p className="text-[#5A6C7C] font-semibold max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
          Enjoy seamless development, smarter cloud predictions, and personalized security 
          protocols powered by our elite engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => {
          const isFirst = i === 0;
          return (
            <div 
              key={i}
              className={`group p-8 xl:p-10 rounded-[48px] transition-all duration-500 flex flex-col justify-between h-full min-h-[340px] ${
                isFirst 
                  ? 'bg-[#012B48] text-white shadow-[0_32px_128px_-24px_rgba(1,43,72,0.3)] hover:-translate-y-3' 
                  : 'bg-white border border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-3'
              }`}
            >
              <div>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 transition-all duration-500 ${
                  isFirst ? 'bg-white/10 text-[#00F5D4]' : 'bg-slate-50 text-[#00F5D4] group-hover:bg-[#00F5D4]/10'
                } ${s.animClass}`}>
                  {s.icon}
                </div>
                
                <h3 className={`text-xl font-black leading-tight mb-4 ${
                  isFirst ? 'text-white' : 'text-[#012B48]'
                }`}>
                  {s.title}
                </h3>
                
                <p className={`text-sm leading-relaxed font-medium ${
                  isFirst ? 'text-white/60' : 'text-[#5A6C7C]'
                }`}>
                  {s.desc}
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="#" 
                  className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest group/link transition-all ${
                    isFirst ? 'text-white hover:text-[#00F5D4]' : 'text-[#012B48] hover:text-[#00F5D4]'
                  }`}
                >
                  Learn more 
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesGrid;

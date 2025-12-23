
import React from 'react';
import { 
  Activity, 
  BarChart3, 
  Zap, 
  RefreshCw, 
  ShieldCheck, 
  MessagesSquare 
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const choosePoints = [
    { 
      title: "Clear Decisions, Not Guesswork", 
      desc: "Data-driven architectural choices.",
      icon: <BarChart3 size={14} />
    },
    { 
      title: "Built With Execution in Mind", 
      desc: "Engineered for rapid deployment.",
      icon: <Zap size={14} />
    },
    { 
      title: "Ownership Through the Lifecycle", 
      desc: "Post-launch support and updates.",
      icon: <RefreshCw size={14} />
    },
    { 
      title: "Security Considered From Day One", 
      desc: "Zero-trust security by design.",
      icon: <ShieldCheck size={14} />
    },
    { 
      title: "Straightforward Communication", 
      desc: "Transparent engineering updates.",
      icon: <MessagesSquare size={14} />
    }
  ];

  const stats = [
    { value: "150+", label: "Systems Deployed" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "24/7", label: "Security Monitoring" }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-24 relative overflow-hidden">
      {/* Background Gaussian Blur */}
      <div className="gaussian-blur-accent w-[600px] h-[600px] top-1/2 left-[-10%] opacity-[0.05]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        
        {/* Left Side: Image with Overlay */}
        <div className="relative animate-in slide-in-from-left duration-1000">
          <div className="rounded-[64px] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
              alt="Intellicryst Engineering" 
              className="w-full h-[550px] lg:h-[700px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012B48]/40 to-transparent"></div>
          </div>

          {/* Performance Overview Overlay */}
          <div className="absolute top-10 left-10 md:-left-12 glass border border-white/40 p-8 md:p-10 rounded-[40px] shadow-[0_32px_128px_-24px_rgba(1,43,72,0.2)] w-[300px] md:w-[360px] backdrop-blur-3xl animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="flex items-center justify-between mb-8">
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#012B48]">System Performance</h5>
              <Activity size={18} className="text-[#00F5D4]" />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Security Score', value: 98, color: 'bg-[#00F5D4]' },
                { label: 'Uptime Index', value: 99, color: 'bg-[#00B6FF]' },
                { label: 'Latency (ms)', value: 85, color: 'bg-[#012B48]' },
                { label: 'Cloud Efficiency', value: 92, color: 'bg-slate-300' }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center text-[11px] font-bold text-[#5A6C7C] uppercase tracking-wider">
                    <span>{item.label}</span>
                    <span className="text-[#012B48]">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} transition-all duration-1000`} 
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Content and Stats */}
        <div className="space-y-16 animate-in slide-in-from-right duration-1000">
          <div className="space-y-8">
            <h4 className="text-[#012B48] font-black text-xs uppercase tracking-[0.4em]">Work With The Best</h4>
            <h2 className="text-5xl lg:text-7xl font-black text-[#012B48] tracking-tighter leading-[0.95]">
              Why Clients Choose <br />
              <span className="gradient-text">Intellicryst Tech.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#5A6C7C] font-semibold leading-relaxed max-w-xl">
              At Intellicryst, we focus on delivering tailored engineering solutions. 
              With advanced cloud infrastructure and security-first development.
            </p>
          </div>

          {/* Features Checklist with Relevant Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {choosePoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-8 h-8 rounded-xl bg-[#00F5D4]/10 flex items-center justify-center text-[#00F5D4] group-hover:bg-[#00F5D4] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                  {point.icon}
                </div>
                <div>
                  <h5 className="text-base font-black text-[#012B48] mb-1">{point.title}</h5>
                  <p className="text-xs text-[#5A6C7C] font-semibold opacity-70 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Row */}
          <div className="grid grid-cols-3 gap-10 pt-12 border-t border-slate-100">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-3">
                <div className="text-4xl lg:text-6xl font-black text-[#012B48] tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[11px] font-black uppercase tracking-widest text-[#5A6C7C] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button className="flex items-center gap-3 text-xs font-black text-[#012B48] hover:text-[#00F5D4] transition-colors uppercase tracking-[0.3em] group">
              Learn our methodology
              <div className="w-10 h-[3px] bg-[#012B48] group-hover:bg-[#00F5D4] group-hover:w-16 transition-all"></div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;

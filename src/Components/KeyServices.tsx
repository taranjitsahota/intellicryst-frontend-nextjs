
import React from 'react';
import { 
  Search, 
  ChevronDown, 
  Layout, 
  ShieldCheck, 
  CheckCircle2, 
  Zap,
  Cloud,
  Lock
} from 'lucide-react';

const KeyServices: React.FC = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-20">
      {/* Background Gradients - Reduced Opacity */}
      <div className="gaussian-blur-accent w-[800px] h-[800px] top-[-10%] left-[-20%] opacity-[0.02]"></div>
      <div className="gaussian-blur-accent w-[600px] h-[600px] bottom-[-10%] right-[-10%] opacity-[0.03]" style={{ background: '#00B6FF' }}></div>

      <div className="text-center mb-24 space-y-4">
        <h4 className="text-[#012B48] font-black text-xs uppercase tracking-[0.4em]">Core Capabilities</h4>
        <h2 className="text-5xl lg:text-7xl font-black text-[#012B48] tracking-tighter leading-[0.95]">
          Engineering the <span className="gradient-text">impossible.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 auto-rows-fr">
        
        {/* Card 1: Security Engineering - Emerald/Cyan Pastel */}
        <div className="md:col-span-3 lg:col-span-4 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F5D4] blur-[100px] rounded-full -mr-28 -mt-28 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-300 blur-[60px] rounded-full -ml-10 -mb-10 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700"></div>
          
          <div className="p-10 pb-0 relative z-10">
            <h3 className="text-2xl font-black text-[#012B48] mb-3">Security Engineering</h3>
            <p className="text-sm text-[#5A6C7C] font-semibold leading-relaxed">
              We implement zero-trust controls at network, application, and access layers.
            </p>
          </div>
          <div className="flex-1 relative flex items-center justify-center min-h-[240px] z-10">
            <div className="relative w-44 h-44">
              <div className="absolute inset-0 bg-gradient-to-br from-[#012B48] to-[#00B6FF] rounded-3xl transform rotate-12 group-hover:rotate-0 transition-transform duration-700 shadow-2xl flex items-center justify-center">
                <Lock size={72} className="text-[#00F5D4] opacity-80" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#00F5D4] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
                <ShieldCheck size={28} className="text-[#012B48]" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Multi-Cloud - Amber/Orange Pastel */}
        <div className="md:col-span-3 lg:col-span-4 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 relative">
          <div className="absolute inset-0 bg-amber-200/30 blur-[120px] rounded-full opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200/20 blur-[90px] rounded-full -ml-20 -mt-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
          
          <div className="p-10 pb-0 relative z-10">
            <h3 className="text-2xl font-black text-[#012B48] mb-3">Cloud Infrastructure</h3>
            <p className="text-sm text-[#5A6C7C] font-semibold leading-relaxed">
              Resilient multi-cloud deployments across AWS, Azure, and edge platforms.
            </p>
          </div>
          <div className="flex-1 relative flex items-center justify-center min-h-[240px] z-10">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center border border-slate-100 shadow-sm relative z-10">
                <Cloud size={40} className="text-[#00B6FF]" />
              </div>
              <div className="absolute top-[-50px] left-[-60px] w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-[11px] font-black text-[#012B48]">AWS</span>
              </div>
              <div className="absolute top-[-10px] right-[-70px] w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                <span className="text-[11px] font-black text-[#012B48]">AZURE</span>
              </div>
              <div className="absolute bottom-[20px] left-[-70px] w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.2s' }}>
                <span className="text-[11px] font-black text-[#012B48]">GCP</span>
              </div>
              <div className="absolute bottom-[-20px] right-[-50px] w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1s' }}>
                <span className="text-[11px] font-black text-[#012B48]">NEXUS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: SEO & Quality - Rose/Pink Pastel */}
        <div className="md:col-span-6 lg:col-span-4 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200 blur-[130px] rounded-full opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-pink-100 blur-[80px] rounded-full -mr-16 -mb-16 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
          
          <div className="p-10 pb-0 relative z-10">
            <h3 className="text-2xl font-black text-[#012B48] mb-3">SEO & Quality</h3>
            <p className="text-sm text-[#5A6C7C] font-semibold leading-relaxed">
              Performance-focused structure and post-deployment validation.
            </p>
          </div>
          <div className="p-10 flex-1 relative z-10">
            <div className="bg-white/70 rounded-[32px] border border-white overflow-hidden shadow-sm h-full flex flex-col backdrop-blur-md">
              <div className="px-6 py-4 bg-white/80 border-b border-slate-200 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
              </div>
              <div className="p-6 space-y-5">
                {[
                  { label: 'Technical Audit', score: 98 },
                  { label: 'Core Web Vitals', score: 100 },
                  { label: 'Security Scan', score: 'Passed' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-[#5A6C7C] uppercase tracking-wider">{item.label}</span>
                    <span className={`text-[11px] font-black ${typeof item.score === 'number' ? 'text-rose-500' : 'text-blue-500'}`}>
                      {item.score}
                    </span>
                  </div>
                ))}
                <div className="pt-4 flex flex-col gap-2">
                   <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-rose-400"></div>
                   </div>
                   <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-[#012B48]"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Web & Mobile Dev - Violet/Indigo Pastel */}
        <div className="md:col-span-6 lg:col-span-8 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row group hover:shadow-2xl transition-all duration-500 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200 blur-[140px] rounded-full -mr-32 -mt-32 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200 blur-[120px] rounded-full -ml-32 -mb-32 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
          
          <div className="p-10 lg:w-1/3 flex flex-col justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-black text-[#012B48] mb-3">Full-Stack Development</h3>
              <p className="text-sm text-[#5A6C7C] font-semibold leading-relaxed">
                Frontend interfaces, backend services, and multi-platform mobile applications.
              </p>
            </div>
            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#00F5D4]" />
                <span className="text-[11px] font-black text-[#012B48] uppercase tracking-wider">Web Apps</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#00F5D4]" />
                <span className="text-[11px] font-black text-[#012B48] uppercase tracking-wider">iOS & Android</span>
              </div>
            </div>
          </div>
          <div className="p-10 flex-1 bg-white/40 backdrop-blur-sm border-l border-slate-100 relative z-10">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <div className="flex-1 min-w-[140px] bg-white border border-slate-200 rounded-2xl p-3 flex items-center gap-3">
                  <Search size={16} className="text-slate-400" />
                  <div className="h-2.5 w-full bg-slate-100 rounded"></div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center gap-3 min-w-[90px]">
                  <div className="w-5 h-5 rounded-full bg-slate-100"></div>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center gap-3 min-w-[90px]">
                  <Layout size={16} className="text-slate-400" />
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Core Engine', tag: 'React', color: 'bg-[#00F5D4]' },
                  { name: 'Backend', tag: 'Node.js', color: 'bg-[#00B6FF]' },
                  { name: 'Architecture', tag: 'Terraform', color: 'bg-[#012B48]' },
                  { name: 'Quality', tag: 'Testing', color: 'bg-violet-500' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/90 border border-slate-200 rounded-3xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 overflow-hidden flex items-center justify-center text-xs font-black">
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#012B48]">{item.name}</p>
                        <p className="text-[9px] font-bold text-[#5A6C7C] uppercase tracking-widest">{item.tag}</p>
                      </div>
                    </div>
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Custom Solutions - Sky/Azure Pastel */}
        <div className="md:col-span-6 lg:col-span-4 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 relative">
          <div className="absolute top-0 left-0 w-80 h-80 bg-sky-300 blur-[110px] rounded-full -ml-24 -mt-24 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-azure-200 blur-[90px] rounded-full -mr-16 -mb-16 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
          
          <div className="p-10 pb-0 relative z-10">
            <h3 className="text-2xl font-black text-[#012B48] mb-3">Agility & Performance</h3>
            <p className="text-sm text-[#5A6C7C] font-semibold leading-relaxed">
              We deliver at the speed of execution, focusing on stability first.
            </p>
          </div>
          <div className="flex-1 relative flex items-center justify-center min-h-[220px] z-10">
            <div className="relative">
              <div className="w-56 h-36 bg-white/60 rounded-3xl border border-white absolute top-6 left-6 -z-10 backdrop-blur-md"></div>
              <div className="w-56 h-36 bg-slate-50/50 rounded-3xl border border-slate-100 absolute top-3 left-3 -z-10 backdrop-blur-sm"></div>
              <div className="w-56 h-36 bg-gradient-to-br from-blue-600 to-[#012B48] rounded-3xl shadow-2xl p-6 flex flex-col justify-between group-hover:-translate-y-3 transition-transform duration-700">
                <div className="w-10 h-10 rounded-full bg-white/20"></div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/20 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="w-5 h-5 bg-[#00F5D4] rounded-full animate-ping"></div>
                  <Zap size={20} className="text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeyServices;

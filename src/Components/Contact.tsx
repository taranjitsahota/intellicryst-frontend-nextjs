
import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Massive Spread Gradient Backgrounds - Substantially Reduced Opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#00F5D4]/3 to-[#00B6FF]/5 blur-[180px] rounded-full pointer-events-none opacity-40"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00F5D4]/2 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10 py-12">
        
        {/* Left Content Side */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <h4 className="text-[#012B48] font-black text-xs uppercase tracking-[0.4em] opacity-60">Let's Talk</h4>
            <h2 className="text-5xl lg:text-7xl font-black text-[#012B48] leading-[1] tracking-tighter">
              Have a project to discuss <br /> or a <span className="gradient-text">system to improve?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#5A6C7C] font-semibold max-w-md leading-relaxed">
              We’re available to understand your requirements and explore next steps.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#012B48] group-hover:bg-[#00F5D4] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-500">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-[#012B48] font-black text-lg group-hover:text-[#00F5D4] transition-colors">hello@intellicryst.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#012B48] group-hover:bg-[#00F5D4] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-500">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-[#012B48] font-black text-lg group-hover:text-[#00F5D4] transition-colors">+1 (555) 000-TECH</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#012B48] group-hover:bg-[#00F5D4] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-500">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Visit Us</p>
                <p className="text-[#012B48] font-black text-lg group-hover:text-[#00F5D4] transition-colors">Tech Plaza, Silicon District</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Glass Form Side */}
        <div className="flex-1 w-full relative">
          {/* Internal Glow for form reflection effect - Reduced opacity */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#00F5D4]/10 to-[#00B6FF]/10 blur-[60px] rounded-[60px] pointer-events-none"></div>
          
          <div className="relative z-10 bg-white/40 backdrop-blur-3xl border border-white/80 rounded-[48px] p-8 lg:p-14 shadow-[0_32px_128px_-24px_rgba(1,43,72,0.1)]">
             <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#012B48] uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-8 py-5 rounded-2xl bg-white/60 border border-white focus:border-[#00F5D4] focus:bg-white transition-all outline-none font-semibold text-[#012B48] shadow-sm placeholder:text-slate-300" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#012B48] uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-8 py-5 rounded-2xl bg-white/60 border border-white focus:border-[#00F5D4] focus:bg-white transition-all outline-none font-semibold text-[#012B48] shadow-sm placeholder:text-slate-300" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#012B48] uppercase tracking-widest ml-1">Project Type</label>
                  <div className="relative">
                    <select className="w-full px-8 py-5 rounded-2xl bg-white/60 border border-white focus:border-[#00F5D4] focus:bg-white transition-all outline-none appearance-none font-semibold text-[#012B48] shadow-sm">
                      <option>Software Development</option>
                      <option>Cloud Infrastructure</option>
                      <option>Security Engineering</option>
                      <option>SEO & Quality Assurance</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#012B48]/30">
                      <Send size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#012B48] uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project requirements..." 
                    className="w-full px-8 py-5 rounded-2xl bg-white/60 border border-white focus:border-[#00F5D4] focus:bg-white transition-all outline-none font-semibold text-[#012B48] shadow-sm placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <button className="flex-1 bg-[#012B48] text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[#00F5D4] hover:text-[#012B48] transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-navy/30">
                      Start Project <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                   <button className="px-10 py-6 border-2 border-[#012B48] text-[#012B48] rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/80 transition-all">
                      Talk To Us
                   </button>
                </div>
             </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

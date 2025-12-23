
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, User, Database, Shield, Layout, Search, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Aris Thorne",
    role: "Lead Systems Architect",
    stat: "12+ Yrs",
    statLabel: "EXPERIENCE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    icon: <Database size={24} />
  },
  {
    name: "Elena Vance",
    role: "Cloud Infrastructure Lead",
    stat: "450+",
    statLabel: "CLOUDS DEPLOYED",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    icon: <Zap size={24} />
  },
  {
    name: "Marcus Holloway",
    role: "Cybersecurity Principal",
    stat: "99.9%",
    statLabel: "SECURITY SCORE",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    icon: <Shield size={24} />
  },
  {
    name: "Sarah Jenkins",
    role: "UI/UX Design Director",
    stat: "85+",
    statLabel: "PRODUCT LAUNCHES",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    icon: <Layout size={24} />
  },
  {
    name: "Victor Stone",
    role: "Full-Stack Engineer",
    stat: "1.2M",
    statLabel: "LINES OF CODE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    icon: <Search size={24} />
  }
];

const Team: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextMember = () => setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  const prevMember = () => setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative py-20 overflow-hidden">
      <div className="gaussian-blur-accent w-[800px] h-[800px] top-1/2 left-[-10%] opacity-[0.03]"></div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Side: Content & Search */}
        <div className="lg:w-1/3 space-y-12">
          <div className="space-y-6">
            <h4 className="text-[#012B48] font-black text-xs uppercase tracking-[0.4em]">The Human Core</h4>
            <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-[#012B48] leading-[0.9] tracking-tighter">
              Watch.<br />Build.<br /><span className="gradient-text">Deploy.</span>
            </h2>
            <p className="text-lg lg:text-xl text-[#5A6C7C] font-semibold leading-relaxed max-w-sm">
              Meet the elite architects and engineers driving your digital transformation.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={prevMember}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-[#012B48] hover:bg-[#00F5D4] hover:border-[#00F5D4] transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextMember}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-[#012B48] hover:bg-[#00F5D4] hover:border-[#00F5D4] transition-all group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Expandable Bar Layout (Reference Design) */}
        <div className="lg:w-2/3 w-full h-[600px] flex gap-4 lg:gap-6 items-stretch">
          {teamMembers.map((member, idx) => {
            const isExpanded = activeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-[40px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isExpanded ? 'flex-[4] shadow-2xl shadow-navy/20' : 'flex-1 group'
                }`}
              >
                {/* Background Image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                    isExpanded ? 'scale-100' : 'scale-110 group-hover:scale-105'
                  }`}
                />

                {/* Vertical Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#012B48] via-[#012B48]/20 to-transparent opacity-80"></div>

                {/* Squeezed View: Vertical Designation (Readable Edition) */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="rotate-[-90deg] whitespace-nowrap">
                    <span className="text-white/80 font-black text-sm lg:text-base uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-300">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Expanded View: Full Details */}
                <div 
                  className={`absolute inset-0 p-10 flex flex-col justify-end transition-all duration-700 delay-100 ${
                    isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
                >
                  <div className="glass border border-white/20 p-8 rounded-[32px] backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20 text-[#00F5D4]">
                      {member.icon}
                    </div>
                    
                    <div className="flex items-end justify-between gap-6">
                      <div className="space-y-2">
                        <p className="text-[#00F5D4] font-black text-[10px] uppercase tracking-[0.3em] mb-2">{member.role}</p>
                        <h3 className="text-3xl font-black text-white tracking-tighter">{member.name}</h3>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-4xl font-black text-white tracking-tighter">{member.stat}</div>
                        <div className="text-[8px] font-black text-white/50 uppercase tracking-widest">{member.statLabel}</div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                       <div className="h-1 w-20 bg-gradient-to-r from-[#00F5D4] to-transparent rounded-full"></div>
                       <button className="text-[10px] font-black text-white uppercase tracking-[0.2em] hover:text-[#00F5D4] transition-colors">
                         View engineering docs
                       </button>
                    </div>
                  </div>
                </div>

                {/* Hover Sheen for collapsed bars */}
                {!isExpanded && (
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;

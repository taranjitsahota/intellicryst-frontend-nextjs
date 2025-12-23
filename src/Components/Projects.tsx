
import React, { useState } from 'react';
import { ExternalLink, Sprout, Car, Tractor, Shield, ChevronLeft, ChevronRight, MessageSquare, Plus } from 'lucide-react';

interface ProjectCardProps {
  project: {
    name: string;
    handle: string;
    title: string;
    description: string;
    tags: string[];
    headerColor: string;
    themeColor: string;
    icon: React.ReactNode;
    avatar: string;
  };
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, position, onClick }) => {
  const translateX = position * 40;
  const translateY = position * -20;
  const scale = 1 - (position * 0.05);
  const opacity = 1 - (position * 0.4);
  const blur = position > 0 ? 'blur(8px)' : 'blur(0px)';
  const zIndex = 50 - position;

  // Dynamic shadow based on position
  const shadowClass = position === 0 
    ? 'shadow-[0_80px_160px_-40px_rgba(1,43,72,0.22)]' // More pronounced for active
    : 'shadow-[0_20px_40px_-10px_rgba(1,43,72,0.05)]'; // Softer for background

  return (
    <div 
      onClick={onClick}
      style={{ 
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        zIndex: zIndex,
        opacity: opacity,
        filter: blur,
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
      className={`absolute top-0 left-0 w-full max-w-[480px] bg-white rounded-[40px] border border-slate-50 overflow-hidden cursor-pointer group ${shadowClass}`}
    >
      {/* Card Header */}
      <div className={`h-52 w-full relative flex items-center justify-center ${project.headerColor}`}>
        <div 
          className="transform group-hover:scale-110 transition-transform duration-1000"
          style={{ color: project.themeColor, opacity: 0.8 }}
        >
          {project.icon}
        </div>
        <div className="absolute top-6 right-6 opacity-30">
          <Shield size={20} className="text-[#012B48]" />
        </div>
      </div>

      {/* Avatar Overlap */}
      <div className="relative -mt-12 px-10 flex items-end justify-between">
        <div className="w-24 h-24 rounded-full border-[6px] border-white bg-white shadow-xl overflow-hidden flex items-center justify-center">
          <img src={project.avatar} alt={project.name} className="w-full h-full object-cover" />
        </div>
        <div className="pb-4">
          <div className="w-4 h-4 rounded-full bg-[#00F5D4] border-4 border-white shadow-[0_0_20px_#00F5D4] animate-pulse"></div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-10 space-y-8">
        <div className="space-y-1">
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="text-2xl font-black text-[#012B48] tracking-tight">{project.name}</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
              <span className="bg-amber-100 text-amber-700 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">Pro</span>
              <span className="bg-pink-100 text-pink-600 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">Wizard</span>
            </div>
          </div>
          <p className="text-xs font-bold text-[#5A6C7C] opacity-40">{project.handle}</p>
        </div>

        <div className="space-y-3">
          <p className="text-base font-black text-[#012B48]">{project.title}</p>
          <p className="text-sm text-[#5A6C7C] leading-relaxed font-medium">
            {project.description}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#012B48]/30">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-slate-50 text-[#012B48] text-[10px] font-black px-4 py-2 rounded-xl border border-slate-100 group-hover:bg-[#00F5D4]/10 group-hover:border-[#00F5D4]/20 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="flex-1 bg-white border-2 border-slate-100 text-[#012B48] py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Messages
          </button>
          <button className="flex-1 bg-[#012B48] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#00F5D4] hover:text-[#012B48] transition-all shadow-xl shadow-navy/20 flex items-center justify-center gap-2">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectsData = [
    {
      name: "Car Rental Platform",
      handle: "@nexus_mobility",
      title: "Enterprise Fleet & Reservation System",
      description: "Replaces legacy manual processes with a high-performance web dashboard for real-time inventory management and customer reservations.",
      tags: ["Angular", "Azure SQL", "Redis"],
      headerColor: "bg-[#E0F7FA]",
      themeColor: "#00B6FF",
      icon: <Car size={80} strokeWidth={1.5} />,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
    },
    {
      name: "Ezykheti",
      handle: "@ezykheti_agri",
      title: "AgriTech Booking & Scheduling Hub",
      description: "A comprehensive solution solving fragmented coordination between farmers and machine operators through real-time booking and dispatch.",
      tags: ["React Engine", "Node.js", "PostgreSQL"],
      headerColor: "bg-[#F1F8E9]",
      themeColor: "#689F38",
      icon: <Sprout size={80} strokeWidth={1.5} />,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper"
    },
    {
      name: "Ezyfarms",
      handle: "@ezyfarms_ops",
      title: "Farm Operations Management Platform",
      description: "Empowering agricultural managers with data-driven activity logging and location-based resource tracking to ensure operational stability.",
      tags: ["React Native", "Firebase", "AWS S3"],
      headerColor: "bg-[#FFF3E0]",
      themeColor: "#F57C00",
      icon: <Tractor size={80} strokeWidth={1.5} />,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna"
    }
  ];

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % projectsData.length);
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Dynamic Background Glow that changes according to the active project */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[80%] opacity-[0.15] blur-[160px] pointer-events-none z-0 transition-all duration-1000"
        style={{ 
          background: `radial-gradient(circle at 70% 50%, ${projectsData[activeIndex].themeColor}, transparent 70%)` 
        }}
      ></div>
      
      {/* Secondary accent glow */}
      <div 
        className="absolute right-[-10%] top-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none z-0 transition-all duration-1000 opacity-20"
        style={{ backgroundColor: projectsData[activeIndex].themeColor }}
      ></div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Left */}
          <div className="space-y-10 animate-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h4 className="text-[#012B48] font-black text-xs uppercase tracking-[0.4em]">Featured Case Studies</h4>
              <h2 className="text-6xl lg:text-8xl font-black text-[#012B48] tracking-tighter leading-[0.9]">
                Building the <br />
                <span className="gradient-text">future of systems.</span>
              </h2>
              <div 
                className="h-1.5 w-24 rounded-full transition-all duration-700"
                style={{ backgroundColor: projectsData[activeIndex].themeColor }}
              ></div>
            </div>
            
            <p className="text-xl lg:text-2xl text-[#5A6C7C] font-semibold leading-relaxed max-w-lg">
              Our portfolio spans critical infrastructure in agriculture and mobility, 
              focusing on high-availability and zero-trust security architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <button className="px-12 py-6 bg-[#012B48] text-white rounded-2xl font-black text-lg flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-navy/30">
                Explore All <ExternalLink size={24} />
              </button>
              
              <div className="flex items-center gap-5">
                <button onClick={prevProject} className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center text-[#012B48] hover:bg-slate-50 transition-all group bg-white shadow-sm">
                  <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button onClick={nextProject} className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center text-[#012B48] hover:bg-slate-50 transition-all group bg-white shadow-sm">
                  <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Right - Positioned with breathing space on the right */}
          <div className="relative h-[800px] w-full flex items-center justify-center lg:justify-end lg:pr-24">
            <div className="relative w-full max-w-[480px] h-full">
              {projectsData.map((proj, i) => {
                let position = (i - activeIndex + projectsData.length) % projectsData.length;
                return (
                  <ProjectCard 
                    key={proj.name}
                    project={proj}
                    isActive={position === 0}
                    position={position}
                    onClick={() => setActiveIndex(i)}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import { ExternalLink, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { caseStudies, Project } from "@/data/case-studies";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  position,
  onClick,
}) => {
  const Icon = project.icon;
  const translateX = position * 40;
  const translateY = position * -20;
  const scale = 1 - position * 0.05;
  const opacity = 1 - position * 0.4;
  const blur = position > 0 ? "blur(8px)" : "blur(0px)";
  const zIndex = 50 - position;

  // Dynamic shadow based on position
  const shadowClass =
    position === 0
      ? "shadow-[0_80px_160px_-40px_rgba(1,43,72,0.22)]" // More pronounced for active
      : "shadow-[0_20px_40px_-10px_rgba(1,43,72,0.05)]"; // Softer for background

  return (
    <div
      onClick={() => (window.location.href = `/case-studies/${project.slug}`)}
      style={{
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        zIndex: zIndex,
        opacity: opacity,
        filter: blur,
        transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className={`absolute top-0 left-0 w-full max-w-[420px] bg-white rounded-[40px] border border-slate-50 overflow-hidden cursor-pointer group ${shadowClass}`}
    >
      {/* Card Header */}
      <div
        className="h-32 w-full relative flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${project.themeColor}25, ${project.themeColor}05)`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[size:22px_22px]" />
        </div>
        <div
          className="transform group-hover:scale-110 transition-transform duration-1000"
          style={{ color: project.themeColor, opacity: 0.8 }}
        >
          <Image
            src={Icon}
            alt={project.name}
            width={64}
            height={64}
            className="mx-auto"
          />
        </div>
        <div className="absolute top-6 right-6 opacity-30">
          <Shield size={20} className="text-[var(--deep-blue)]" />
        </div>
      </div>

      <div className="relative -mt-10 px-10 flex items-center justify-between">
        {/* LEFT: Product Identity */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100">
              <Image
                src={project.icon}
                alt={project.name}
                width={30}
                height={30}
              />
            </div>

            {/* Live Pulse Dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          </div>

          {/* Name + System Type */}
          <div>
            <p className="text-sm font-black text-[var(--deep-blue)]">
              {project.name}
            </p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              {project.slug === "ezykheti" && "AgriTech Platform"}
              {project.slug === "rs-goa-car-rental" &&
                "Fleet Management System"}
              {project.slug === "ezyfarms" && "Farm Ops Platform"}
            </p>
          </div>
        </div>

        {/* RIGHT: System Status */}
        <div className="text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-green-600 uppercase">
              Live
            </span>
          </div>

          <p className="text-[10px] text-slate-400 font-bold">99.9% Uptime</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="text-xl font-black text-[var(--deep-blue)] tracking-tight">
              {project.name}
            </h3>
            {project.isFeatured && (
              <span className="bg-green-100 text-green-700 text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-widest">
                Flagship
              </span>
            )}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px]">
                ✓
              </div>
              {/* <span className="bg-amber-100 text-amber-700 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">
                Pro
              </span>
              <span className="bg-pink-100 text-pink-600 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">
                Wizard
              </span> */}
            </div>
          </div>
          <p className="text-xs font-bold text-[var(--grey-text)] opacity-40">
            {project.handle}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-base font-black text-[var(--deep-blue)]">
            {project.title}
          </p>
          <p className="text-sm text-[var(--grey-text)] leading-relaxed font-medium">
            {project.description}
          </p>

          {project.metrics && (
            <div className="flex gap-4 flex-wrap pt-2">
              {project.metrics.slice(0, 2).map((m) => (
                <div key={m.label} className="text-xs">
                  <p className="font-black text-[var(--deep-blue)]">
                    {m.value}
                  </p>
                  <p className="text-[10px] text-[var(--grey-text)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--deep-blue)]/30">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-50 text-[var(--deep-blue)] text-[10px] font-black px-4 py-2 rounded-xl border border-slate-100 group-hover:bg-[var(--primary-color)]/10 group-hover:border-[var(--primary-color)]/20 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          {project.liveUrl && (
            <a
              onClick={(e) => e.stopPropagation()}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[var(--deep-blue)] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-navy/20 flex items-center justify-center gap-2"
            >
              Live Project <ExternalLink size={16} />
            </a>
          )}

          <Link
            onClick={(e) => e.stopPropagation()}
            href={`/case-studies/${project.slug}`}
          >
            <button className="flex-1 bg-white border-2 border-slate-200 text-[var(--deep-blue)] p-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] hover:cursor-pointer">
              View Case Study
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () =>
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prevProject = () =>
    setActiveIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Dynamic Background Glow that changes according to the active project */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[80%] opacity-[0.15] blur-[160px] pointer-events-none z-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 70% 50%, ${caseStudies[activeIndex].themeColor}, transparent 70%)`,
        }}
      ></div>

      {/* Secondary accent glow */}
      <div
        className="absolute right-[-10%] top-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none z-0 transition-all duration-1000 opacity-20"
        style={{ backgroundColor: caseStudies[activeIndex].themeColor }}
      ></div>

      <div className="max-w-[1800px] mx-auto p-4 md:p-8 lg:p-12 xl:p-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Left */}
          <div className="space-y-10 animate-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h4 className="text-[var(--deep-blue)] font-black text-xs uppercase tracking-[0.4em]">
                Featured Case Studies
              </h4>
              <h2 className="text-4xl lg:text-5xl font-black text-[var(--deep-blue)] tracking-tighter leading-[0.9]">
                Building the <br />
                <span className="gradient-text">future of systems.</span>
              </h2>
              <div
                className="h-1.5 w-24 rounded-full transition-all duration-700"
                style={{
                  backgroundColor: caseStudies[activeIndex].themeColor,
                }}
              ></div>
            </div>

            <p className="text-base lg:text-lg text-[var(--grey-text)] font-semibold leading-relaxed max-w-lg">
              Our portfolio spans critical infrastructure in agriculture and
              mobility, focusing on high-availability and zero-trust security
              architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Link href="/case-studies">
                <button className="px-8 py-4 text-sm bg-[var(--deep-blue)] text-white rounded-2xl font-black flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-navy/30 hover:cursor-pointer">
                  Explore All <ExternalLink size={24} />
                </button>
              </Link>

              <div className="flex items-center gap-5">
                <button
                  onClick={prevProject}
                  className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-[var(--deep-blue)] hover:bg-slate-50 transition-all group bg-white shadow-sm"
                >
                  <ChevronLeft
                    size={32}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={nextProject}
                  className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-[var(--deep-blue)] hover:bg-slate-50 transition-all group bg-white shadow-sm"
                >
                  <ChevronRight
                    size={32}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Right - Positioned with breathing space on the right */}
          <div className="relative h-[620px] w-full flex items-center justify-center lg:justify-end lg:pr-24">
            <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end lg:pr-24">
              {caseStudies.map((proj, i) => {
                let position =
                  (i - activeIndex + caseStudies.length) % caseStudies.length;
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

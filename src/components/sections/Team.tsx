import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Database,
  Shield,
  Layout,
  Search,
  Zap,
} from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ezykheti Platform",
    slug: "ezykheti",
    role: "AgriTech Infrastructure",
    stat: "10K+",
    statLabel: "FARMERS SERVED",
    image: "/images/case-studies/ezykheti/dashboard.png",
    icon: <Database size={24} />,
  },
  {
    name: "RS Goa System",
    slug: "rs-goa-car-rental",
    role: "Fleet Management",
    stat: "60%",
    statLabel: "BOOKING GROWTH",
    image: "/images/case-studies/rs-goa-car-rental/dashboard.png",
    icon: <Zap size={24} />,
  },
  {
    name: "Ezyfarms Ops",
    slug: "ezyfarms",
    role: "Farm Operations SaaS",
    stat: "70%",
    statLabel: "MANUAL WORK REDUCED",
    image: "/images/case-studies/ezyfarms/dashboard.png",
    icon: <Shield size={24} />,
  },
  {
    name: "Admin Control Layer",
    slug: "admin-control-layer",
    role: "Dashboard Systems",
    stat: "99.9%",
    statLabel: "UPTIME",
    image: "/images/case-studies/random/dashboard.png",
    icon: <Layout size={24} />,
  },
];

const Team: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextMember = () =>
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  const prevMember = () =>
    setActiveIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );

  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative py-16 overflow-hidden">
      <div className="gaussian-blur-accent w-[800px] h-[800px] top-1/2 left-[-10%] opacity-[0.03]"></div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-center">
        {/* Left Side: Content & Search */}
        <div className="lg:w-1/3 space-y-12">
          <div className="space-y-6">
            <h4 className="text-[var(--deep-blue)] font-black text-xs uppercase tracking-[0.4em]">
              SYSTEM ARCHITECTURE
            </h4>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[var(--deep-blue)] leading-[0.9] tracking-tighter">
              Design.
              <br />
              Build.
              <br />
              <span className="gradient-text">Deploy.</span>
            </h2>
            <p className="text-base lg:text-lg text-[var(--grey-text)] font-semibold leading-relaxed max-w-sm">
              Explore the core systems we’ve engineered — powering real-world
              operations across industries.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevMember}
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-[var(--deep-blue)] hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all group"
            >
              <ChevronLeft
                size={24}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={nextMember}
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-[var(--deep-blue)] hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all group"
            >
              <ChevronRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Right Side: Expandable Bar Layout (Reference Design) */}
        <div className="lg:w-2/3 w-full">
          {/* ✅ MOBILE: Vertical cards */}
          <div className="flex flex-col gap-4 lg:hidden">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden relative h-[220px]"
              >
                <img
                  src={member.image}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)] to-transparent opacity-90" />

                <div className="absolute bottom-0 p-4 w-full">
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider">
                    {member.role}
                  </p>
                  <h3 className="text-lg font-black text-white">
                    {member.name}
                  </h3>

                  <div className="mt-2 text-sm font-bold text-white">
                    {member.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ DESKTOP: your original layout */}
          <div className="hidden lg:flex h-[460px] gap-6 items-stretch">
            {teamMembers.map((member, idx) => {
              const isExpanded = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative rounded-[40px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isExpanded
                      ? "flex-[4] shadow-2xl shadow-navy/20"
                      : "flex-1 group"
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`absolute inset-0 w-full object-contain h-full bg-gradient-to-t from-transparent to-[var(--deep-blue)]/60 transition-transform duration-1000 ${
                      isExpanded ? "scale-100" : "scale-110 hover:scale-100"
                    }`}
                  />

                  {/* Vertical Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)] via-[var(--deep-blue)]/20 to-transparent opacity-80"></div>

                  {/* Squeezed View: Vertical Designation (Readable Edition) */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      isExpanded
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
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
                    className={`absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transition-all duration-700 delay-100 ${
                      isExpanded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
                  >
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent">
                      <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary-color)] opacity-20 blur-3xl group-hover:opacity-30 transition" />

                        <div className="absolute top-4 right-4 opacity-10 text-white">
                          {member.icon}
                        </div>

                        <div className="flex items-end justify-between gap-6 relative z-10">
                          <div className="space-y-2">
                            <p className="text-white/60 font-bold text-[10px] uppercase tracking-[0.3em]">
                              {member.role}
                            </p>

                            <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
                              {member.name}
                            </h3>
                          </div>

                          <div className="text-right">
                            <div className="text-3xl font-black text-[var(--primary-color)] tracking-tight">
                              {member.stat}
                            </div>
                            <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                              {member.statLabel}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />

                        <div className="mt-4 flex items-center justify-between relative z-10">
                          <div className="h-1 w-16 bg-gradient-to-r from-[var(--primary-color)] to-transparent rounded-full" />

                          <Link
                            href={`/case-studies/${member.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-[11px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 hover:text-[var(--primary-color)] transition-all group"
                          >
                            Explore System
                            <span className="transform group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </Link>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--primary-color)]/60 via-transparent to-transparent opacity-70" />
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
    </div>
  );
};

export default Team;

import React, { useMemo, useState, useEffect } from "react";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Lock,
  Smartphone,
  Cloud,
  Terminal,
  Zap,
  Database,
  Search,
  ShieldCheck,
  Server,
  Workflow,
} from "lucide-react";

const techItems = [
  { name: "React", icon: <Code2 size={20} />, orbit: 1, angle: 0 },
  { name: "Node.js", icon: <Server size={20} />, orbit: 1, angle: 90 },
  { name: "AWS", icon: <Cloud size={20} />, orbit: 1, angle: 180 },
  { name: "Flutter", icon: <Smartphone size={20} />, orbit: 1, angle: 270 },
  { name: "Python", icon: <Terminal size={18} />, orbit: 2, angle: 45 },
  { name: "Azure", icon: <Layers size={18} />, orbit: 2, angle: 135 },
  { name: "Android", icon: <Smartphone size={18} />, orbit: 2, angle: 225 },
  { name: "iOS", icon: <Globe size={18} />, orbit: 2, angle: 315 },
  { name: "Laravel", icon: <Database size={18} />, orbit: 2, angle: 15 },
  { name: "Angular", icon: <Workflow size={18} />, orbit: 2, angle: 105 },
  { name: "Terraform", icon: <Cpu size={16} />, orbit: 3, angle: 30 },
  { name: "Ansible", icon: <Workflow size={16} />, orbit: 3, angle: 120 },
  { name: "Zero Trust", icon: <ShieldCheck size={16} />, orbit: 3, angle: 210 },
  { name: "WAF", icon: <Lock size={16} />, orbit: 3, angle: 300 },
  { name: "SEO", icon: <Search size={16} />, orbit: 3, angle: 75 },
  { name: "Rest APIs", icon: <Zap size={16} />, orbit: 3, angle: 165 },
];

const decorativeDots = [
  { orbit: 1, angle: 45, color: "bg-[#00F5D4]" },
  { orbit: 1, angle: 135, color: "bg-[#00B6FF]" },
  { orbit: 1, angle: 225, color: "bg-[#00F5D4]" },
  { orbit: 1, angle: 315, color: "bg-[#00B6FF]" },
  { orbit: 2, angle: 0, color: "bg-[#00B6FF]" },
  { orbit: 2, angle: 60, color: "bg-[#00F5D4]" },
  { orbit: 2, angle: 180, color: "bg-[#00B6FF]" },
  { orbit: 2, angle: 270, color: "bg-[#00F5D4]" },
  { orbit: 3, angle: 15, color: "bg-[#00F5D4]" },
  { orbit: 3, angle: 100, color: "bg-[#00B6FF]" },
  { orbit: 3, angle: 150, color: "bg-[#00F5D4]" },
  { orbit: 3, angle: 250, color: "bg-[#00B6FF]" },
];

const pastelColors = [
  "bg-pink-100 border-pink-200 text-pink-600",
  "bg-emerald-100 border-emerald-200 text-emerald-600",
  "bg-blue-100 border-blue-200 text-blue-600",
  "bg-orange-100 border-orange-200 text-orange-600",
  "bg-purple-100 border-purple-200 text-purple-600",
  "bg-yellow-100 border-yellow-200 text-yellow-600",
  "bg-red-100 border-red-200 text-red-600",
  "bg-indigo-100 border-indigo-200 text-indigo-600",
  "bg-teal-100 border-teal-200 text-teal-600",
  "bg-cyan-100 border-cyan-200 text-cyan-600",
  "bg-lime-100 border-lime-200 text-lime-600",
  "bg-rose-100 border-rose-200 text-rose-600",
  "bg-fuchsia-100 border-fuchsia-200 text-fuchsia-600",
  "bg-violet-100 border-violet-200 text-violet-600",
  "bg-sky-100 border-sky-200 text-sky-600",
  "bg-amber-100 border-amber-200 text-amber-600",
];

const OrbitNode: React.FC<{
  item: (typeof techItems)[0];
  radius: number;
  index: number;
  isActive: boolean;
}> = ({ item, radius, index, isActive }) => {
  const colorClass = pastelColors[index % pastelColors.length];
  const style = useMemo(() => {
    const x = Math.cos((item.angle * Math.PI) / 180) * radius;
    const y = Math.sin((item.angle * Math.PI) / 180) * radius;
    return {
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    };
  }, [item.angle, radius]);

  return (
    <div
      style={style}
      className={`absolute top-1/2 left-1/2 group z-20 transition-all duration-300 ${
        isActive ? "scale-125" : "scale-100"
      }`}
    >
      <div
        className={`relative transition-all duration-300 ${
          isActive ? "-translate-y-4" : "translate-y-0"
        }`}
      >
        <div
          className={`w-10 h-10 md:w-16 md:h-16 backdrop-blur-md rounded-full border shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex items-center justify-center transition-all duration-300 cursor-pointer ${colorClass} ${
            isActive ? "ring-4 ring-[#00F5D4]/20 shadow-xl" : ""
          }`}
        >
          {item.icon}
        </div>
        <div
          className={`absolute -bottom-12 left-1/2 -translate-x-1/2 transition-all duration-300 bg-[#012B48] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-xl ${
            isActive
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-90"
          }`}
        >
          {item.name}
        </div>
      </div>
    </div>
  );
};

const DecorativeDot: React.FC<{
  dot: (typeof decorativeDots)[0];
  radius: number;
}> = ({ dot, radius }) => {
  const style = useMemo(() => {
    const x = Math.cos((dot.angle * Math.PI) / 180) * radius;
    const y = Math.sin((dot.angle * Math.PI) / 180) * radius;
    return {
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    };
  }, [dot.angle, radius]);

  return (
    <div
      style={style}
      className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] animate-pulse ${dot.color} z-10`}
    />
  );
};

const TechStack: React.FC = () => {
  const [radii, setRadii] = useState({
    1: 280,
    2: 420,
    3: 580,
  });

  useEffect(() => {
    const updateRadii = () => {
      const isMobile = window.innerWidth < 768;

      setRadii({
        1: isMobile ? 140 : 280,
        2: isMobile ? 220 : 420,
        3: isMobile ? 300 : 580,
      });
    };

    updateRadii(); // run once after hydration
    window.addEventListener("resize", updateRadii);

    return () => window.removeEventListener("resize", updateRadii);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techItems.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getRadius = (orbit: number) => {
    return radii[orbit as 1 | 2 | 3] ?? 0;
  };

  return (
    <div className="relative w-full min-h-[700px] md:min-h-[900px] flex items-center justify-center overflow-hidden py-32 bg-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="#012B48"
              strokeWidth="0.1"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative w-full max-w-[1400px] aspect-square flex items-center justify-center px-6 md:px-12">
        {/* Orbit Lines */}
        <div className="absolute w-[280px] h-[280px] md:w-[560px] md:h-[560px] border border-slate-200 rounded-full"></div>
        <div className="absolute w-[440px] h-[440px] md:w-[840px] md:h-[840px] border border-slate-200/60 rounded-full"></div>
        <div className="absolute w-[600px] h-[600px] md:w-[1160px] md:h-[1160px] border border-slate-200/30 rounded-full"></div>

        {/* Decorative dots on orbitals */}
        {decorativeDots.map((dot, i) => (
          <DecorativeDot
            key={`dot-${i}`}
            dot={dot}
            radius={getRadius(dot.orbit)}
          />
        ))}

        {/* Center circular box */}
        <div className="text-center z-30 w-[320px] h-[320px] md:w-[500px] md:h-[500px] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-1000 bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-full border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
          <p className="text-[#012B48] font-black text-[10px] uppercase tracking-[0.5em] mb-4 opacity-50">
            Execution Engine
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#012B48] leading-[1.1] tracking-tighter mb-6 max-w-xs md:max-w-md">
            The engine for <br />
            <span className="gradient-text italic">modern systems.</span>
          </h2>
          <p className="text-[#5A6C7C] font-semibold text-sm md:text-lg leading-relaxed max-w-xs mx-auto opacity-80">
            Automated engineering stacks delivering peak performance across
            every environment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#012B48] text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#00F5D4] hover:text-[#012B48] transition-all shadow-xl shadow-navy/20">
              Methodology
            </button>
          </div>
        </div>

        {techItems.map((item, i) => (
          <OrbitNode
            key={i}
            item={item}
            radius={getRadius(item.orbit)}
            index={i}
            isActive={activeIndex === i}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;

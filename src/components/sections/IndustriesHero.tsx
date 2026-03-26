    "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--primary-color)] opacity-10 blur-[160px] rounded-full pointer-events-none" />

      {/* 🔥 Grid Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-slate-200 bg-white"
        >
          <Sparkles size={14} className="text-[var(--primary-color)]" />
          INDUSTRIES
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-[var(--deep-blue)] leading-[0.9] tracking-tighter"
        >
          Systems Built for <br />
          <span className="italic text-[var(--primary-color)]">
            Real Industries
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-lg text-[var(--grey-text)] max-w-2xl mx-auto leading-relaxed"
        >
          We don’t build generic apps. We engineer production-grade systems
          tailored for agriculture, mobility, and real-world operations —
          designed to scale, automate, and perform.
        </motion.p>

        {/* 🔥 Stats Row (VERY IMPORTANT) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-10"
        >
          {[
            { value: "3+", label: "Industries Served" },
            { value: "10K+", label: "Users Impacted" },
            { value: "99.9%", label: "System Reliability" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-black text-[var(--deep-blue)]">
                {item.value}
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 🔥 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--deep-blue)] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[var(--primary-color)] hover:text-[var(--deep-blue)] transition-all shadow-xl"
          >
            Explore Our Systems <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
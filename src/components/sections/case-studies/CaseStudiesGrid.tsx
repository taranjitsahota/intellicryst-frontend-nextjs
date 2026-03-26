"use client";

import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CaseStudiesGrid() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-[var(--primary-color)]/5 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[var(--primary-blue)]/5 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-[var(--deep-blue)]">
            Case Studies
          </h1>

          <p className="mt-6 text-lg text-[var(--grey-text)]">
            Real systems we’ve designed and engineered to power agriculture,
            mobility, and modern digital infrastructure.
          </p>

          <div className="w-24 h-1.5 bg-[var(--primary-color)] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {caseStudies.map((project) => {
            const Icon = project.icon;

            return (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className="group"
              >
                <article className="relative bg-white border border-slate-100 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                  {/* hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition"
                    style={{
                      background: `radial-gradient(circle at 70% 20%, ${project.themeColor}, transparent 60%)`,
                    }}
                  />

                  {/* header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-2xl ${project.headerColor}`}
                    >
                      <Image
                        src={Icon}
                        alt={project.name}
                        width={64}
                        height={64}
                        className="mx-auto"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[var(--deep-blue)]">
                        {project.name}
                      </h3>

                      <p className="text-xs text-[var(--grey-text)] opacity-60">
                        {project.handle}
                      </p>
                    </div>
                  </div>

                  {/* title */}
                  <h4 className="text-lg font-bold text-[var(--deep-blue)] leading-snug">
                    {project.title}
                  </h4>

                  {/* description */}
                  <p className="mt-4 text-sm text-[var(--grey-text)] leading-relaxed">
                    {project.description}
                  </p>

                  {/* tech stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-[10px] font-bold text-[var(--deep-blue)] rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* footer */}
                  <div className="flex items-center justify-between mt-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--grey-text)]">
                      View Case Study
                    </span>

                    <ArrowRight
                      size={18}
                      className="text-[var(--deep-blue)] transition group-hover:translate-x-1"
                    />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

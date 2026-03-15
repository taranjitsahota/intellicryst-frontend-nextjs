import { techStacks } from "@/data/techstack";
import { slugify } from "@/data/slugify";
import Link from "next/link";

export default function TechStackDetails() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="gaussian-blur-accent top-[-10%] right-[-10%] opacity-[0.05]" />

      {/* Glow accents */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[var(--primary-color)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--primary-blue)]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-24">
          <h4 className="text-[var(--deep-blue)] font-black text-xs uppercase tracking-[0.4em] mb-6">
            Our Stack
          </h4>

          <h2 className="text-5xl lg:text-6xl font-black text-[var(--deep-blue)] tracking-tight">
            Technologies That{" "}
            <span className="gradient-text">Power Our Systems</span>
          </h2>

          <p className="text-[var(--grey-text)] font-semibold max-w-2xl mx-auto mt-6 text-lg">
            We use modern frameworks, scalable cloud infrastructure, and
            enterprise-grade tools to build high-performance applications.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className="
              bg-white/70 backdrop-blur
              border border-slate-100
              rounded-3xl
              p-10
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]
              hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]
              hover:-translate-y-2
              transition-all duration-500
              "
            >
              <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-8">
                {stack.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {stack.technologies.map((tech, i) => {
                  const Icon = tech.icon;

                  return (
                    <Link
                      key={i}
                      href={`/technology/${slugify(tech.name)}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-white transition group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-xl text-[var(--primary-color)]" />
                        <span className="text-sm font-semibold text-[var(--grey-text)]">
                          {tech.name}
                        </span>
                      </div>

                      <span className="opacity-0 group-hover:opacity-100 transition">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

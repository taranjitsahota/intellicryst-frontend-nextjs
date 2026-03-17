import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const dynamicParams = true;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* SEO Metadata */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const caseStudy = caseStudies.find((s) => s.slug === slug);

  if (!caseStudy) {
    return {
      title: "Service | Intellicryst",
    };
  }

  return {
    title: `${caseStudy.title} | Intellicryst`,
    description: caseStudy.description,
  };
}

/* Page */
export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const caseStudy = caseStudies.find((s) => s.slug === slug);

  if (!caseStudy) return notFound();

  const Icon = caseStudy.icon;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="py-28 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-2xl ${caseStudy.headerColor}`}
          >
            {typeof Icon === "function" ? (
              <Icon
                size={28}
                strokeWidth={1.5}
                style={{ color: caseStudy.themeColor }}
              />
            ) : (
              <Image
                src={Icon}
                alt={caseStudy.name}
                width={28}
                height={28}
                className="object-contain"
              />
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[var(--deep-blue)] mt-8">
            {caseStudy.title}
          </h1>

          <p className="mt-6 text-lg text-[var(--grey-text)] max-w-2xl mx-auto">
            {caseStudy.description}
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[var(--light-grey)] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-[var(--deep-blue)] text-center mb-16">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-[var(--deep-blue)]">
                Scalable Architecture
              </h3>
              <p className="mt-3 text-[var(--grey-text)]">
                Systems designed to grow with your business and scale
                efficiently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-[var(--deep-blue)]">
                Modern Technology
              </h3>
              <p className="mt-3 text-[var(--grey-text)]">
                Built using modern frameworks and industry best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-[var(--deep-blue)]">
                Secure Infrastructure
              </h3>
              <p className="mt-3 text-[var(--grey-text)]">
                Security-first development with hardened infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-black text-[var(--deep-blue)]">
          Ready to build your next system?
        </h2>

        <p className="mt-4 text-[var(--grey-text)]">
          Let's design and launch your next digital product.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-[var(--deep-blue)] text-white rounded-full font-bold hover:bg-[var(--primary-color)] transition"
        >
          Start a Project
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

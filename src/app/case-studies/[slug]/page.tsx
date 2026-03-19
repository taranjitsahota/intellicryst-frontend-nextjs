import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImageLightbox from "@/components/ui/ImageLightbox";
import CaseStudyDetail from "@/components/sections/case-studies/CaseStudyDetail";

export const dynamicParams = true;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* SEO */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((s) => s.slug === slug);

  if (!caseStudy) {
    return { title: "Case Study | Intellicryst" };
  }

  return {
    title: `${caseStudy.title} | Intellicryst`,
    description: caseStudy.description,
  };
}

/* PAGE */
export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((s) => s.slug === slug);

  if (!caseStudy) return notFound();

  return (
    <main className="bg-white">
      <CaseStudyDetail caseStudy={caseStudy} />
    </main>
  );
}

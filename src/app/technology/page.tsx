import TechStackSection from "@/components/sections/TechStackDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Stack | Intellicryst",
  description:
    "Discover the technologies we use to build scalable web, mobile, cloud and secure digital systems.",
};

export default function TechnologyPage() {
  return (
    <main >

      {/* <section className="py-28 text-center">
        <h1 className="text-6xl font-black text-[var(--deep-blue)]">
          Technology Stack
        </h1>

        <p className="mt-6 text-lg text-[var(--grey-text)] max-w-2xl mx-auto">
          Our engineering teams use modern frameworks, scalable cloud
          infrastructure and secure development practices to deliver
          high-performance applications.
        </p>
      </section> */}

      <TechStackSection />

    </main>
  );
}
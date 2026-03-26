"use client";

import KeyServices from "@/components/sections/KeyServices";
import Process from "@/components/sections/Process";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      {/* <section className="py-12 bg-white text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[var(--deep-blue)] mb-6">
          Our Services
        </h1>
        <p className="text-[var(--grey-text)] max-w-2xl mx-auto text-lg">
          We design, build, and scale digital systems that power global businesses.
        </p>
      </section> */}

      {/* components */}
      <ServicesGrid />
      <KeyServices />
    </main>
  );
}

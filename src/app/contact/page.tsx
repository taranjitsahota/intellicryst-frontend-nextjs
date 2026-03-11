"use client";

import Contact from "@/components/sections/Contact";
import Process from "@/components/sections/Process";

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      {/* <section className="py-32 bg-white text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[var(--deep-blue)] mb-6">
          Our Services
        </h1>
        <p className="text-[var(--grey-text)] max-w-2xl mx-auto text-lg">
          We design, build, and scale digital systems that power global businesses.
        </p>
      </section> */}

      {/* components */}
      <Process />
      <Contact />
    </main>
  );
}

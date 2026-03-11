"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white px-6">

      {/* Subtle Brand Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-color)] blur-[140px] opacity-[0.06] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[var(--primary-blue)] blur-[160px] opacity-[0.05] rounded-full"></div>

      <div className="relative z-10 text-center max-w-xl space-y-6">

        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[150px] font-black text-[var(--deep-blue)] leading-none tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-black text-[var(--navy-text)]">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-[var(--grey-text)] text-lg leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">

          <Link href="/">
            <button className="group px-8 py-4 text-sm rounded-full bg-[var(--deep-blue)] text-white font-black flex items-center gap-4 transition-all hover:bg-[var(--primary-color)] hover:text-[var(--deep-blue)] hover:scale-105 shadow-lg hover:cursor-pointer">
              Go Home
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 text-sm rounded-full border-2 border-[var(--deep-blue)] text-[var(--deep-blue)] font-black transition-all hover:bg-[var(--deep-blue)] hover:text-white hover:cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Go Back
            </span>
          </button>

        </div>
      </div>
    </main>
  );
}
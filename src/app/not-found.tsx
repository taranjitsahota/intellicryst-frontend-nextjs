"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6">
      
      {/* Error Code */}
      <h1 className="text-[120px] font-extrabold text-green-700 leading-none">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-center max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-green-700 px-6 py-3 text-white font-medium hover:bg-green-800 transition"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="rounded-lg border border-green-700 px-6 py-3 text-green-700 font-medium hover:bg-green-50 transition"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

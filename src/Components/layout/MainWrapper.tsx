"use client";

import { usePathname } from "next/navigation";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <main className={!isHomePage ? "pt-24 pb-16 min-h-screen" : "min-h-screen"}>
      {children}
    </main>
  );
}

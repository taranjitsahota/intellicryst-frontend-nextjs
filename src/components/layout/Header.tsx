"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const logoSrc =
  isHomePage && !scrolled
    ? "/images/logo/logo_v.1.2.svg"
    : "/images/logo/logo_v.1.0.svg";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Technology", href: "/technology" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const textColorClass = isHomePage
    ? scrolled
      ? "text-[var(--deep-blue)]"
      : "text-white"
    : "text-[var(--deep-blue)]";
  const logoTextClass = isHomePage
    ? scrolled
      ? "text-[var(--deep-blue)]"
      : "text-white"
    : "text-[var(--deep-blue)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? "glass py-3 shadow-md border-b border-black/20"
            : "bg-transparent py-6"
          : "glass py-3 shadow-md border-b border-black/20"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={logoSrc}
              alt="Intellicryst Logo"
              width={150}
              height={150}
              className="transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-bold text-md transition-colors relative group
                ${active ? "text-[var(--primary-color)]" : textColorClass}
                hover:text-[var(--primary-color)]`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--primary-color)] transition-all duration-300
                  ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/start-building"
            className={`text-sm font-bold ${textColorClass} hover:text-[var(--primary-color)] transition-colors flex items-center gap-1`}
          >
            Start Building <ExternalLink size={14} />
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-blue)] text-[var(--deep-blue)] px-7 py-3 rounded-xl text-sm font-black hover:scale-110 transition-all shadow-xl shadow-cyan-400/20 border border-white/20"
          >
            Talk to Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-bold text-[var(--deep-blue)] py-2 hover:text-[var(--primary-color)]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <Link
              href="/contact"
              className="cursor-pointer text-center w-full bg-[var(--deep-blue)] text-white py-4 rounded-xl font-black hover:bg-[#02395f] transition"
              onClick={() => setIsOpen(false)}
            >
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

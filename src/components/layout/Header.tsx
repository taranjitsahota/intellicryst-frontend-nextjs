"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LogoMark = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:rotate-90 transition-transform duration-500"
  >
    <rect width="40" height="40" rx="8" fill="url(#logoGrad)" />
    <path
      d="M10 15V25H20V15H15"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M30 15H20V30H10"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="logoGrad"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00F5D4" />
        <stop offset="1" stopColor="#00B6FF" />
      </linearGradient>
    </defs>
  </svg>
);

const Header: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navItems = [
  //   { label: "Home", href: "#" },
  //   { label: "Services", href: "#services-summary" },
  //   { label: "Key Services", href: "#key-services" },
  //   { label: "Why Us", href: "#why-us" },
  //   { label: "Team", href: "#team" },
  //   { label: "Projects", href: "#projects" },
  //   { label: "Testimonials", href: "#testimonials" },
  //   { label: "Tech Stack", href: "#tech-stack" },
  //   { label: "Industries", href: "#industries" },
  //   { label: "Process", href: "#process" },
  //   { label: "Contact", href: "#contact" },
  // ];
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Technology", href: "/technology" },
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
            <LogoMark />
            <span
              className={`text-xl font-black tracking-tight transition-colors duration-300 ${logoTextClass}`}
            >
              INTELLICRYST
            </span>
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

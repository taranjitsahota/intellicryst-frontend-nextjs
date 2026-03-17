import React from "react";
import {
  X,
  Linkedin,
  Github,
  ArrowUpRight,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import Link from "next/link";

const LogoMark = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="url(#footerLogoGrad)" />
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
        id="footerLogoGrad"
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

const socials = [
  {
    icon: X,
    href: "https://x.com/intellicryst",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/intellicryst",
  },
  {
    icon: Github,
    href: "https://github.com/intellicryst",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/intellicryst",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/intellicryst",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/intellicryst",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--deep-blue)] text-[var(--light-grey)] pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000">
          <path
            d="M0 100H200V300H500V500H1000"
            stroke="#00F5D4"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200 0V200H400V400H600V1000"
            stroke="#00B6FF"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="text-xl font-black tracking-tighter">
                INTELLICRYST
              </span>
            </div>
            <p className="text-[var(--light-grey)]/60 leading-relaxed font-semibold max-w-sm">
              Premium digital engineering for complex systems. Your vision. Our
              future. Accelerated by the speed of high-performance execution.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => {
                const Icon = social.icon;

                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--light-grey)]/60 hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] hover:bg-white/10 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[var(--primary-color)] mb-10">
              Capabilities
            </h4>
            <ul className="space-y-5">
              {[
                { label: "Web & Mobile Systems", href: "/services/web-mobile" },
                {
                  label: "Product Experience Design",
                  href: "/services/design",
                },
                { label: "Hybrid Cloud Deployment", href: "/services/cloud" },
                {
                  label: "Infrastructure Security",
                  href: "/services/security",
                },
                { label: "Platform QA & SEO", href: "/services/qa-seo" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--light-grey)]/70 hover:text-white transition-colors flex items-center font-bold group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all ml-1 -translate-y-1 translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[var(--primary-color)] mb-10">
              Case Studies
            </h4>
            <ul className="space-y-5">
              {[
                { label: "Ezykheti", href: "/case-studies/ezykheti" },
                { label: "Ezyfarms", href: "/case-studies/ezyfarms" },
                { label: "Mobility Hub", href: "/case-studies/mobility-hub" },
                { label: "Secure Gateway", href: "/case-studies/secure-gateway" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--light-grey)]/70 hover:text-white transition-colors flex items-center font-bold group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all ml-1 -translate-y-1 translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[var(--primary-color)] mb-10">
              Nexus
            </h4>
            <ul className="space-y-5">
              {[
                { label: "About Intellicryst", href: "/about" },
                { label: "Contact Engineering", href: "/contact" },
                { label: "Career Portal", href: "/careers" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--light-grey)]/70 hover:text-white transition-colors flex items-center font-bold group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all ml-1 -translate-y-1 translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] text-[var(--light-grey)]/30 font-black tracking-[0.4em] uppercase">
          <p>
            © {new Date().getFullYear()} Intellicryst Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">
              Global Ops
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Incident Hub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

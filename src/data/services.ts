import {
  Layout,
  Smartphone,
  Database,
  Palette,
  Globe,
  ShieldCheck,
  Zap,
  TestTube,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  animClass?: string;
};

export const services: Service[] = [
  {
    slug: "web-platform-development",
    title: "Web platforms & portals",
    description:
      "Robust, scalable web systems built for high-performance and growth.",
    icon: Layout,
    animClass: "group-hover:animate-pulse-gentle",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile applications (Android & iOS)",
    description:
      "Native and cross-platform mobile apps with exceptional user experience.",
    icon: Smartphone,
    animClass: "group-hover:animate-bounce",
  },
  {
    slug: "fullstack-api-systems",
    title: "Full-stack systems & APIs",
    description:
      "End-to-end architecture connecting users to complex backend services.",
    icon: Database,
    animClass: "group-hover:animate-float-mini",
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX design for web & mobile",
    description:
      "Aesthetic interfaces designed for usability and brand identity.",
    icon: Palette,
    animClass: "group-hover:rotate-12 transition-transform duration-500",
  },
  {
    slug: "multi-platform-deployment",
    title: "Multi-Platform Deployment",
    description:
      "Seamless rollout across edge, cloud, and on-premises environments.",
    icon: Globe,
    animClass: "group-hover:animate-spin transition-all duration-[3000ms]",
  },
  {
    slug: "cloud-security",
    title: "Cloud, network & application security",
    description:
      "Zero-trust security layers protecting your digital assets 24/7.",
    icon: ShieldCheck,
    animClass: "animate-shield-flow",
  },
  {
    slug: "seo-ready-architecture",
    title: "SEO-ready application structure",
    description:
      "Engineered for search visibility and lightning-fast loading speeds.",
    icon: Zap,
    animClass: "group-hover:scale-125 transition-transform duration-300",
  },
  {
    slug: "application-testing-qa",
    title: "Application testing & QA",
    description:
      "Rigorous quality checks ensuring stability and flawless execution.",
    icon: TestTube,
    animClass: "group-hover:-rotate-12 transition-transform duration-300",
  },
];

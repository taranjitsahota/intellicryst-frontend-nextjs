/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  CheckCircle2,
  Smartphone,
  LayoutDashboard,
  Calendar,
  MapPin,
  CreditCard,
  Users,
  ArrowRight,
  Menu,
  X,
  Database,
  ShieldCheck,
  Zap,
  TrendingUp,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import type { Project } from "@/data/case-studies";
import { StaticImageData } from "next/image";
import Link from "next/link";

const iconMap = {
  smartphone: Smartphone,
  dashboard: LayoutDashboard,
  shield: ShieldCheck,
  map: MapPin,
  calendar: Calendar,
  database: Database,
};

const featureIconMap = {
  calendar: Calendar,
  map: MapPin,
  payment: CreditCard,
  database: Database,
};

function renderImage(src: string | StaticImageData, className: string) {
  if (typeof src === "string") {
    return <img src={src} className={className} />;
  }

  return <Image src={src} alt="" className={className} />;
}

// --- Sub-components ---

const BrowserFrame = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-white ${className}`}
  >
    <div className="bg-slate-50 border-bottom border-slate-200 px-4 py-3 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
      </div>
      <div className="mx-auto bg-white border border-slate-200 rounded-md px-3 py-1 text-[10px] text-slate-400 w-1/2 text-center">
        admin.ezykheti.com
      </div>
    </div>
    <div className="relative aspect-video bg-slate-100 overflow-hidden">
      {children}
    </div>
  </div>  
);

const PhoneFrame = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ${className}`}
  >
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
    <div className="relative h-full w-full bg-white overflow-hidden">
      {children}
    </div>
  </div>
);

const SectionHeading = ({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-black mb-4 ${light ? "text-white" : "text-slate-900"}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl ${light ? "text-slate-300" : "text-slate-600"}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const MetricCard = ({
  value,
  label,
  icon: Icon,
  color,
}: {
  value: string;
  label: string;
  icon: any;
  color: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all"
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6`}
      style={{ backgroundColor: `${color}15`, color }}
    >
      <Icon size={24} />
    </div>
    <div className="text-4xl font-black mb-2" style={{ color }}>
      {value}
    </div>
    <div className="text-slate-500 font-medium">{label}</div>
  </motion.div>
);

// --- Main App ---

export default function CaseStudyAIDemo({ caseStudy }: { caseStudy: Project }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Challenge" },
    { id: "solution", label: "Solution" },
    { id: "product", label: "Product" },
    { id: "features", label: "Features" },
    { id: "impact", label: "Impact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: `${caseStudy.themeColor}20` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: `${caseStudy.themeColor}10` }}
        />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8 border"
            style={{
              background: `${caseStudy.themeColor}15`,
              color: caseStudy.themeColor,
              borderColor: `${caseStudy.themeColor}30`,
            }}
          >
            {/* <Zap size={14} /> */}
            <Image src={caseStudy.icon} alt={caseStudy.name} width={20} />
            {caseStudy.name} CASE STUDY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[var(--deep-blue)] text-leading-[0.9]  mb-8 leading-[1.1] tracking-tighter"
          >
            {caseStudy.name}: The Future of <br />
            <span style={{ color: caseStudy.themeColor }} className="italic">
              {caseStudy.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-l text-[var(--grey-text)] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {caseStudy.description}
          </motion.p>

          {caseStudy.liveUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mt-8"
            >
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} 
                className="flex justify-center mb-12 relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm shadow-xl transition-all hover:scale-105"
                style={{
                  backgroundColor: caseStudy.themeColor,
                  color: "#fff",
                }}
              >
                Visit Live Project <ExternalLink size={18} />
              </a>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex -space-x-3">
              {caseStudy.users?.map((user, i) => (
                <img
                  key={i}
                  src={user}
                  className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                  alt="User"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-900">
                {caseStudy.highlight?.value}
              </div>
              <div className="text-sm text-slate-500">
                {caseStudy.highlight?.label}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Main Content Grid --- */}
      <div className="max-w-full mx-auto p-16 grid lg:grid-cols-[240px_1fr] gap-20 pb-32">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Navigation
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm font-semibold py-2 px-3 rounded-lg transition-all"
                    style={
                      activeSection === section.id
                        ? {
                            background: `${caseStudy.themeColor}15`,
                            color: caseStudy.themeColor,
                          }
                        : undefined
                    }
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-6 bg-[var(--deep-blue)] rounded-2xl text-white">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/10 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold bg-white text-[var(--deep-blue)] px-3 py-2 rounded-lg hover:scale-105 transition-all"
              >
                Visit Website <ExternalLink size={12} />
              </a>
            )}
          </div>
        </aside>

        {/* Content Sections */}
        <main className="space-y-40">
          {/* Overview */}
          <section id="overview" className="scroll-mt-32">
            <SectionHeading
              title={caseStudy.overview?.title || caseStudy.name}
              subtitle={caseStudy.overview?.subtitle || caseStudy.description}
            />

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.metrics?.map((metric, i) => {
                const icons = [Users, TrendingUp, CheckCircle2];

                return (
                  <MetricCard
                    key={metric.label}
                    icon={icons[i] || Users}
                    value={metric.value}
                    label={metric.label}
                    color={caseStudy.themeColor}
                  />
                );
              })}
            </div>
          </section>

          {/* The Problem */}
          <section id="problem" className="scroll-mt-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  title={caseStudy.problemSection?.title || "The Problem"}
                  subtitle={
                    caseStudy.problemSection?.subtitle ||
                    "Understanding the core challenges behind the system."
                  }
                />

                <ul className="space-y-6">
                  {caseStudy.problemSection?.points.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div
                        className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-red-400"
                        style={{
                          background: `${caseStudy.themeColor}15`,
                        }}
                      >
                        <X size={12} className="bg-red-50" />
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl -z-10"
                  style={{ background: `${caseStudy.themeColor}10` }}
                />
                {caseStudy.problemSection?.image &&
                  renderImage(
                    caseStudy.problemSection.image,
                    "rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700",
                  )}
              </div>
            </div>
          </section>

          {/* Solution */}
          <section id="solution" className="scroll-mt-32">
            <div className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-white">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 40%, ${caseStudy.themeColor}40, transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                <SectionHeading
                  title={caseStudy.solutionSection?.title || "Solution"}
                  subtitle={
                    caseStudy.solutionSection?.subtitle ||
                    "How we solved the problem with scalable architecture."
                  }
                />

                <div className="grid md:grid-cols-3 gap-10 mt-16">
                  {caseStudy.solutionSection?.items.map((item, i) => {
                    const Icon = iconMap[item.icon];

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                      >
                        {/* ✨ Glow on hover */}
                        <div
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
                          style={{
                            background: `${caseStudy.themeColor}25`,
                          }}
                        />

                        <div className="relative z-10 space-y-4">
                          {/* ICON */}
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                            style={{
                              background: `${caseStudy.themeColor}15`,
                              color: caseStudy.themeColor,
                            }}
                          >
                            <Icon size={26} />
                          </div>

                          {/* TITLE */}
                          <h4 className="text-xl font-black text-slate-900">
                            {item.title}
                          </h4>

                          {/* DESC */}
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Product Experience */}
          <section id="product" className="scroll-mt-32">
            <SectionHeading
              title={caseStudy.productSection?.title || "Product"}
              subtitle={caseStudy.productSection?.subtitle || ""}
            />

            <div className="space-y-32">
              {/* ================= DASHBOARD ================= */}
              {caseStudy.productSection?.dashboard && (
                <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
                  {/* <BrowserFrame> */}
                  {renderImage(
                    caseStudy.productSection.dashboard.image,
                    "w-full h-full object-cover",
                  )}
                  {/* </BrowserFrame> */}

                  <div>
                    <h3 className="text-2xl font-black mb-4">
                      {caseStudy.productSection.dashboard.title}
                    </h3>
                    {caseStudy.liveUrl && (
                      <a
                        href={caseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold mt-2"
                        style={{ color: caseStudy.themeColor }}
                      >
                        Open Live Dashboard <ExternalLink size={14} />
                      </a>
                    )}

                    <p className="text-slate-600 mb-6">
                      {caseStudy.productSection.dashboard.description}
                    </p>

                    <div className="space-y-3">
                      {caseStudy.productSection.dashboard.points.map((p, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm font-bold text-slate-700"
                        >
                          <CheckCircle2
                            size={16}
                            style={{ color: caseStudy.themeColor }}
                          />
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ================= MOBILE ================= */}
              {caseStudy.productSection?.mobile && (
                <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-center">
                  {/* TEXT */}
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-black mb-4">
                      {caseStudy.productSection.mobile.title}
                    </h3>

                    <p className="text-slate-600 mb-6">
                      {caseStudy.productSection.mobile.description}
                    </p>

                    {caseStudy.productSection.mobile.highlight && (
                      <div
                        className="p-6 rounded-2xl border"
                        style={{
                          background: `${caseStudy.themeColor}10`,
                          borderColor: `${caseStudy.themeColor}30`,
                        }}
                      >
                        <p
                          className="font-bold italic"
                          style={{ color: caseStudy.themeColor }}
                        >
                          "{caseStudy.productSection.mobile.highlight}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* PHONES */}
                  <div className="flex justify-center gap-8 order-1 lg:order-2">
                    {caseStudy.productSection.mobile.images.map((img, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className={`${
                          i === 1 ? "hidden md:block translate-y-6" : ""
                        }`}
                      >
                        {renderImage(
                          img,
                          "w-[220px] sm:w-[260px] md:w-[280px] h-auto object-contain drop-shadow-xl border border-slate-200 rounded-2xl",
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="scroll-mt-32">
            <SectionHeading
              title={caseStudy.featuresSection?.title || "Features"}
              subtitle={caseStudy.featuresSection?.subtitle || ""}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.featuresSection?.items.map((feature, i) => {
                const Icon = featureIconMap[feature.icon];

                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
                  >
                    <div
                      className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center mb-6"
                      style={{
                        background: `${caseStudy.themeColor}10`,
                        color: caseStudy.themeColor,
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <h4 className="font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h4>

                    <p className="text-slate-500 text-xs leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Impact */}
          <section id="impact" className="scroll-mt-32">
            <div className="relative p-12 md:p-20 rounded-[3rem] overflow-hidden border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100">
              {/* 🌈 Soft Glow */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${caseStudy.themeColor}40, transparent 70%)`,
                }}
              />

              <div className="relative z-10 text-center">
                <SectionHeading
                  title={caseStudy.impactSection?.title || "Impact"}
                  subtitle={caseStudy.impactSection?.subtitle || ""}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                  {caseStudy.impactSection?.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                    >
                      {/* VALUE */}
                      <div
                        className="text-4xl font-black mb-2"
                        style={{ color: caseStudy.themeColor }}
                      >
                        {stat.value}
                      </div>

                      {/* LABEL */}
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* --- CTA Section --- */}
      <section className="bg-[var(--deep-blue)] p-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Ready to build your <br />
            <span className="text-[var(--primary-color)] italic">
              next big system?
            </span>
          </h2>
          <p className="text-xl text-[var(--grey-text)] mb-12 max-w-2xl mx-auto">
            We partner with visionary founders to design and engineer scalable
            digital platforms tailored for real-world impact.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="px-10 py-5 bg-emerald-500 text-white rounded-full font-black text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link
              href="/case-studies"
              className="px-10 py-5 bg-white/10 text-white rounded-full font-black text-lg hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 flex items-center gap-2"
            >
              <ArrowLeft size={20} /> View All Work
            </Link>
          </div>

          <div className="mt-20 pt-16 border-t border-white/20">
            <div className="flex justify-center gap-10 text-center">
              {[
                {
                  title: "Scalable Architecture",
                  desc: "Built for long-term growth and performance",
                },
                {
                  title: "Real-world Use Cases",
                  desc: "Designed for actual business operations",
                },
                {
                  title: "Clean UX Flows",
                  desc: "Simple interfaces with powerful workflows",
                },
                {
                  title: "Production Ready",
                  desc: "Fully tested and deployment-ready systems",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="max-w-[200px] transition hover:-translate-y-1"
                >
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

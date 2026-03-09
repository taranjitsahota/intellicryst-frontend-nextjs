"use client";

import React from "react";
import { Send } from "lucide-react";

import FormWrapper from "@/components/forms/FormWrapper";
import FormField from "@/components/forms/FormField";
import FormSelect from "@/components/forms/FormSelect";
import FormTextarea from "@/components/forms/FormTextarea";

const StartBuilding: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-[var(--primary-color)]/3 to-[var(--primary-blue)]/5 blur-[180px] rounded-full pointer-events-none opacity-40"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary-color)]/2 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col items-center relative z-10 py-16">
        {/* Heading */}
        <div className="text-center max-w-2xl mb-16 space-y-6">
          <h4 className="text-[var(--deep-blue)] font-black text-xs uppercase tracking-[0.4em] opacity-60">
            Start Building
          </h4>

          <h2 className="text-5xl lg:text-6xl font-black text-[var(--deep-blue)] leading-[1.1] tracking-tighter">
            Let's build your <span className="gradient-text">next product</span>
          </h2>

          <p className="text-base lg:text-lg text-[var(--grey-text)] font-semibold">
            Tell us about your project and we'll help you plan the next step.
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-[760px] relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--primary-color)]/10 to-[var(--primary-blue)]/10 blur-[60px] rounded-[60px] pointer-events-none"></div>

          <div className="relative z-10 bg-white/40 backdrop-blur-3xl border border-white/80 rounded-[48px] p-6 lg:p-8 shadow-[0_32px_128px_-24px_rgba(1,43,72,0.1)]">
            <FormWrapper>
              {({ loading }) => (
                <>
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input
                      type="hidden"
                      name="formType"
                      value="start-building"
                    />
                    <FormField
                      label="Full Name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />

                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+1 000 000 000"
                    />

                    <FormField
                      label="Company"
                      name="company"
                      placeholder="Company Name"
                    />
                  </div>

                  {/* Project Type */}
                  <FormSelect
                    label="Project Type"
                    name="projectType"
                    options={[
                      "AI System",
                      "Web Application",
                      "Mobile Application",
                      "SaaS Platform",
                      "Cloud Infrastructure",
                      "DevOps / Architecture",
                      "Other",
                    ]}
                  />

                  {/* Budget */}
                  <FormSelect
                    label="Estimated Budget"
                    name="budget"
                    options={[
                      "$2k – $5k",
                      "$5k – $10k",
                      "$10k – $25k",
                      "$25k – $50k",
                      "$50k+",
                      "Not sure yet",
                    ]}
                  />

                  {/* Timeline */}
                  <FormSelect
                    label="Project Timeline"
                    name="timeline"
                    options={[
                      "ASAP",
                      "2–4 Weeks",
                      "1–2 Months",
                      "3–6 Months",
                      "Flexible",
                    ]}
                  />

                  {/* Message */}
                  <FormTextarea
                    label="Project Details"
                    name="message"
                    placeholder="Describe your project, goals, features required, and any references..."
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--deep-blue)] text-white py-3.5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[var(--primary-color)] hover:text-[var(--deep-blue)] transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-navy/30 hover:cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Submitting...
                      </>
                    ) : (
                      "Start Building"
                    )}

                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </>
              )}
            </FormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartBuilding;

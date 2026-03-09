"use client";

import React from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import FormWrapper from "@/components/forms/FormWrapper";
import FormField from "@/components/forms/FormField";
import FormSelect from "@/components/forms/FormSelect";
import FormTextarea from "@/components/forms/FormTextarea";

const Contact: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Massive Spread Gradient Backgrounds - Substantially Reduced Opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-[var(--primary-color)]/3 to-[var(--primary-blue)]/5 blur-[180px] rounded-full pointer-events-none opacity-40"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary-color)]/2 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center relative z-10 py-12">
        {/* Left Content Side */}
        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <h4 className="text-[var(--deep-blue)] font-black text-xs uppercase tracking-[0.4em] opacity-60">
              Let's Talk
            </h4>
            <h2 className="text-5xl lg:text-7xl font-black text-[var(--deep-blue)] leading-[1] tracking-tighter">
              Have a project to discuss <br /> or a{" "}
              <span className="gradient-text">system to improve?</span>
            </h2>
            <p className="text-base lg:text-lg text-[var(--grey-text)] font-semibold max-w-md leading-relaxed">
              We’re available to understand your requirements and explore next
              steps.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[var(--deep-blue)] group-hover:bg-[var(--primary-color)] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-500">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Email Us
                </p>
                <p className="text-[var(--deep-blue)] font-black text-lg group-hover:text-[var(--primary-color)] transition-colors">
                  <a href="mailto: intellicryst@gmail">
                    intellicryst@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[var(--deep-blue)] group-hover:bg-[var(--primary-color)] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-500">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Call Us
                </p>
                <p className="text-[var(--deep-blue)] font-black text-lg group-hover:text-[var(--primary-color)] transition-colors">
                  <a href="tel: +1 (555) 000-TECH">+1 (555) 000-TECH</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[var(--deep-blue)] group-hover:bg-[var(--primary-color)] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-500">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Visit Us
                </p>
                <p className="text-[var(--deep-blue)] font-black text-lg group-hover:text-[var(--primary-color)] transition-colors">
                  Belapur, Navi Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Glass Form Side */}
        <div className="flex-1 w-full relative">
          {/* Internal Glow for form reflection effect - Reduced opacity */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--primary-color)]/10 to-[var(--primary-blue)]/10 blur-[60px] rounded-[60px] pointer-events-none"></div>

          <div className="relative z-10 bg-white/40 backdrop-blur-3xl border border-white/80 rounded-[48px] p-6 lg:p-8 shadow-[0_32px_128px_-24px_rgba(1,43,72,0.1)]">
            <FormWrapper>
              {({ loading }) => (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input type="hidden" name="formType" value="contact" />
                    <FormField
                      label="Full Name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <FormSelect
                    label="Project Type"
                    name="projectType"
                    options={[
                      "Software Development",
                      "Cloud Infrastructure",
                      "Security Engineering",
                      "SEO & QA",
                      "Other",
                    ]}
                  />

                  <FormTextarea
                    label="Message"
                    name="message"
                    placeholder="Tell us about your project requirements..."
                  />

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-[var(--deep-blue)] text-white py-3.5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[var(--primary-color)] hover:text-[var(--deep-blue)] transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-navy/30 hover:cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Sending...
                        </>
                      ) : (
                        "Start Project "
                      )}
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </button>
                    <a
                      href="https://wa.me/918104535322?text=Hi%20there,%20I%20am%20interested%20in%20your%20services."
                      target="_blank"
                      className="px-10 py-3.5 border-2 border-[var(--deep-blue)] text-[var(--deep-blue)] rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/80 transition-all hover:cursor-pointer"
                    >
                      Talk to us
                    </a>
                    {/* <button className="px-10 py-3.5 border-2 border-[var(--deep-blue)] text-[var(--deep-blue)] rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/80 transition-all hover:cursor-pointer">
                  Talk To Us
                </button> */}
                  </div>
                </>
              )}
            </FormWrapper>
            {/* {submitted && (
              <div className="mt-6 flex items-center gap-3 p-5 rounded-2xl bg-white border border-[var(--primary-color)]/40 shadow-lg animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-bold">
                  ✓
                </div>

                <div>
                  <p className="font-bold text-[var(--deep-blue)]">Message Sent</p>
                  <p className="text-sm text-slate-500">
                    We'll get back to you shortly.
                  </p>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

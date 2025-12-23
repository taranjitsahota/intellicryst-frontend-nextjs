"use client"
import React, { useEffect, useState } from 'react';
import Hero from '@/Components/Hero';
import TrustedBy from '@/Components/TrustedBy';
import ServicesGrid from '@/Components/ServicesGrid';
import KeyServices from '@/Components/KeyServices';
import WhyChooseUs from '@/Components/WhyChooseUs';
import Projects from '@/Components/Projects';
import Testimonials from '@/Components/Testimonials';
import TechStack from '@/Components/TechStack';
import Team from '@/Components/Team';
import Industries from '@/Components/Industries';
import Process from '@/Components/Process';
import Contact from '@/Components/Contact';
import CallToActionChips from '@/Components/CallToActionChips';
import Footer from '@/Components/Footer';
import ChatWidget from '@/Components/ChatWidget';
import Header from '@/Components/Header';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-200 selection:text-navy-900 overflow-x-hidden bg-white">
      {/* Global Background Accents (Ultra-Minimum Opacity) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#00F5D4]/1 blur-[160px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-15%] w-[900px] h-[900px] bg-[#00B6FF]/2 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-20%] w-[1000px] h-[1000px] bg-[#00F5D4]/1 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-[#00B6FF]/1 blur-[150px] rounded-full"></div>
      </div>

      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="trusted">
          <TrustedBy />
        </section>

        <section id="services-summary" className="py-32 bg-transparent relative">
          <ServicesGrid />
        </section>

        {/* Premium Gradient Blur Separator - Opacity reduced by 50% */}
        <div className="relative h-48 -mt-24 -mb-24 z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[400px] bg-gradient-to-r from-[#00F5D4]/5 via-[#00B6FF]/10 to-[#00F5D4]/5 blur-[140px] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00F5D4]/8 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00B6FF]/8 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <section id="key-services" className="py-32 bg-slate-50/5 relative">
          <KeyServices />
        </section>

        <section id="why-us" className="py-32 bg-transparent">
          <WhyChooseUs />
        </section>

        <section id="team" className="py-32 bg-slate-50/20 relative">
          {/* Section specific accent - Reduced opacity */}
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#00F5D4]/3 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <Team />
        </section>

        <section id="projects" className="py-32 bg-transparent">
          <Projects />
        </section>

        <section id="testimonials" className="py-32 bg-slate-50/5 relative">
          <Testimonials />
        </section>

        <section id="tech-stack" className="py-32 bg-slate-50/10 relative">
          <TechStack />
        </section>

        <section id="industries" className="py-24 bg-transparent">
          <Industries />
        </section>

        <section id="process" className="py-32 bg-slate-50/15 relative">
          <Process />
        </section>

        <section id="contact" className="py-32 bg-transparent">
          <Contact />
        </section>

        <section id="cta-chips">
          <CallToActionChips />
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default App;

"use client"
import React, { useEffect, useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const LogoMark = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-transform duration-500">
    <rect width="40" height="40" rx="8" fill="url(#logoGrad)" />
    <path d="M10 15V25H20V15H15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 15H20V30H10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F5D4" />
        <stop offset="1" stopColor="#00B6FF" />
      </linearGradient>
    </defs>
  </svg>
);

const Header: React.FC<{  }> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { label: 'Services', href: '#key-services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const textColorClass = scrolled ? 'text-[#012B48]' : 'text-white';
  const logoTextClass = scrolled ? 'text-[#012B48]' : 'text-white';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-md border-b border-black/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <LogoMark />
          <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${logoTextClass}`}>
            INTELLICRYST
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`${textColorClass} hover:text-[#00F5D4] font-bold text-sm transition-colors relative group`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5D4] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className={`text-sm font-bold ${textColorClass} hover:text-[#00F5D4] transition-colors flex items-center gap-1`}>
            Start a Project <ExternalLink size={14} />
          </a>
          <button className="bg-gradient-to-r from-[#00F5D4] to-[#00B6FF] text-[#012B48] px-7 py-3 rounded-xl text-sm font-black scale-105 hover:scale-110 transition-all shadow-xl shadow-cyan-400/20 relative overflow-hidden group border border-white/20">
            <span className="relative z-10">Talk to Us</span>
            <div className="absolute inset-0 bg-[#012B48] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all flex items-center justify-center font-black">Talk to Us</span>
          </button>
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
              className="text-lg font-bold text-[#012B48] py-2 hover:text-[#00F5D4]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <button className="w-full bg-[#012B48] text-white py-4 rounded-xl font-black">
              Talk to Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

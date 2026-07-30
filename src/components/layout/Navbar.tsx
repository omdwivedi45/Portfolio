"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  BriefcaseBusiness,
  Cpu,
  Trophy,
  Rocket,
  Award,
  Camera,
  Mail,
  Menu,
  X,
  Sparkles
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home", num: "01", label: "HOME", icon: Home },
  { id: "about", num: "02", label: "ABOUT", icon: User },
  { id: "experience", num: "03", label: "EXPERIENCE", icon: BriefcaseBusiness },
  { id: "skills", num: "04", label: "SKILLS", icon: Cpu },
  { id: "milestones", num: "05", label: "MILESTONES", icon: Trophy },
  { id: "projects", num: "06", label: "PROJECTS", icon: Rocket },
  { id: "certifications", num: "07", label: "CERTIFICATIONS", icon: Award },
  { id: "gallery", num: "08", label: "GALLERY", icon: Camera },
  { id: "contact", num: "09", label: "CONTACT", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Rishabh-Style Monogram Brand Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 group text-left shrink-0 select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center text-white font-tech font-black text-lg group-hover:border-purple-500/60 group-hover:scale-105 transition-all shadow-md">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">O.</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight font-tech text-white uppercase group-hover:text-purple-300 transition-colors">
              OMPRAKASH<span className="text-purple-500">.</span>
            </span>
          </div>
        </button>

        {/* Rishabh-Style Desktop Pill Navigation Header Bar */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl shadow-2xl">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-tech font-bold tracking-wider transition-all duration-300 select-none ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-zinc-800/90 border border-white/15 rounded-xl -z-10 shadow-lg shadow-purple-950/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="text-[10px] font-mono text-zinc-500 font-normal">
                  {item.num}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-purple-400" : "text-zinc-400"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Status Badge & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-purple-500/30 text-purple-300 text-[11px] font-tech backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="uppercase font-bold tracking-wider">SYSTEM ONLINE // 2026</span>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050505]/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-tech font-bold tracking-wider transition-all ${
                      isActive
                        ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-white border border-transparent"
                    }`}
                  >
                    <span className="text-[10px] font-mono text-zinc-500">{item.num}</span>
                    <Icon className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

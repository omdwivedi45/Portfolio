"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone, FileText, Sparkles, BarChart3, Database } from "lucide-react";
import NeonButton from "@/components/ui/NeonButton";
import AmbientGrid from "@/components/ui/AmbientGrid";
import { USER_PROFILE, SOCIAL_LINKS } from "@/data/portfolioData";

export default function HeroSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-5 h-5" />;
      case "Linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "Phone":
        return <Phone className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505] selection:bg-purple-500/30"
    >
      {/* Background Interactive Ambient Grid */}
      <AmbientGrid />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[250px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-purple-500/30 backdrop-blur-md shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              <span className="text-xs font-tech tracking-wider text-purple-300 uppercase">
                {USER_PROFILE.statusBadge}
              </span>
              <span className="text-zinc-600 font-tech">|</span>
              <span className="text-[11px] font-tech text-zinc-400">
                {USER_PROFILE.location}
              </span>
            </div>

            {/* Name & Role Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-tech text-sm font-semibold tracking-wider">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span>HELLO, I'M {USER_PROFILE.name.toUpperCase()}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-tech leading-tight">
                Turning Data into Insights That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500">
                  Drive Better Decisions.
                </span>
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="text-zinc-300 text-base lg:text-lg leading-relaxed max-w-2xl font-sans">
              {USER_PROFILE.subtitle}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <NeonButton
                href="#projects"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View My Work
              </NeonButton>

              <NeonButton
                href="#resume"
                variant="outline"
                icon={<FileText className="w-4 h-4" />}
              >
                Download Resume
              </NeonButton>

              <NeonButton href="#contact" variant="secondary">
                Contact Me
              </NeonButton>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-tech text-zinc-500 uppercase tracking-widest mr-2">
                CONNECT:
              </span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-purple-300 hover:border-purple-500/40 hover:bg-zinc-800 transition-all duration-300 group shadow-md"
                  aria-label={link.name}
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/40 bg-zinc-900 group">
              {/* Suit Photo Image */}
              <Image
                src={USER_PROFILE.avatarUrl}
                alt={USER_PROFILE.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Gradient Bottom Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

              {/* Floating Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-md space-y-1">
                <div className="flex items-center justify-between text-xs font-tech">
                  <span className="text-white font-bold">{USER_PROFILE.name}</span>
                  <span className="text-purple-400 font-semibold">{USER_PROFILE.title}</span>
                </div>
                <p className="text-[11px] font-tech text-zinc-400">
                  B.Tech AI & ML // Baderia Global Institute
                </p>
              </div>

              {/* Corner Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/30 to-indigo-600/30 blur-xl pointer-events-none -z-10 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>

        {/* Key Stats Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 mt-16 border-t border-white/5"
        >
          {USER_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md text-left hover:border-purple-500/30 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold font-tech text-white">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-purple-300 font-tech mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-tech mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

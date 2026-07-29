"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Terminal, Shield, Globe } from "lucide-react";
import { USER_PROFILE } from "@/data/portfolioData";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata", // IST zone matching original portfolio footer
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-12 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 radial-mask pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-white/5">
          {/* Brand Tag */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-tech text-white tracking-wider flex items-center gap-2">
              <Terminal className="w-5 h-5 text-purple-400" />
              <span>{USER_PROFILE.name}</span>
            </h3>
            <p className="text-xs font-tech text-zinc-500 max-w-md">
              {USER_PROFILE.title} — Building resilient web software & distributed applications.
            </p>
          </div>

          {/* Time & System Node Info */}
          <div className="flex items-center gap-6 font-tech text-xs text-zinc-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/5">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>IST // {currentTime || "19:02:16"}</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/5 text-emerald-400">
              <Shield className="w-3.5 h-3.5" />
              <span>PROTOCOL ONLINE</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-tech text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {USER_PROFILE.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-zinc-600 uppercase tracking-widest text-[10px]">
              RESTRICTED ACCESS // V2.0
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-purple-300 transition-all group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

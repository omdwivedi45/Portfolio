"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";

interface AnimatedPreloaderProps {
  onComplete?: () => void;
}

export default function AnimatedPreloader({ onComplete }: AnimatedPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing System Identity...");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textSequence = [
      { threshold: 15, text: "Authenticating Access Protocol..." },
      { threshold: 40, text: "Loading Core Capabilities Arsenal..." },
      { threshold: 70, text: "Prefetching Interactive Media Assets..." },
      { threshold: 90, text: "System State Synchronized." },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 3;
        const currentCap = Math.min(next, 100);

        const currentStep = textSequence.find((step) => currentCap >= step.threshold);
        if (currentStep) {
          setStatusText(currentStep.text);
        }

        return currentCap;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-purple-500/30"
        >
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 radial-mask pointer-events-none" />

          {/* Central Loader Box */}
          <div className="relative z-10 w-full max-w-md px-6 text-center space-y-6">
            {/* Animated Icon Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900/80 border border-purple-500/30 text-purple-400 shadow-xl shadow-purple-950/40 relative group"
            >
              <Cpu className="w-8 h-8 animate-pulse" />
              <span className="absolute -inset-1 rounded-2xl bg-purple-500/20 blur-md -z-10" />
            </motion.div>

            {/* Title & Status */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-xs font-tech tracking-widest text-purple-400 uppercase">
                <Terminal className="w-3.5 h-3.5" />
                <span>SYSTEM_BOOT // V2.0</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold font-tech text-zinc-100 tracking-tight">
                {statusText}
              </h2>
            </div>

            {/* Progress Bar Container */}
            <div className="space-y-2">
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-white/5 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-xs font-tech text-zinc-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>SECURITY_TOKEN: VALID</span>
                </span>
                <span className="text-purple-400 font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

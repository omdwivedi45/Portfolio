"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, Cpu, Database, BarChart3, Code2 } from "lucide-react";

interface AnimatedPreloaderProps {
  onComplete?: () => void;
}

const DATA_ANALYTICS_CODE_SNIPPETS = [
  { text: "import sqlite3, csv, json, math", type: "import" },
  { text: "conn = sqlite3.connect('enterprise_warehouse.db')", type: "sql" },
  { text: "SELECT client_id, SUM(revenue) AS total_sales, RANK() OVER (ORDER BY SUM(revenue) DESC)", type: "query" },
  { text: "FROM sales_fact GROUP BY client_id HAVING total_sales > 10000;", type: "query" },
  { text: "records = conn.execute(query).fetchall()", type: "python" },
  { text: "churn_risk = ['High' if r > 90 else 'Low' for r in recency_list]", type: "logic" },
  { text: "kpis = calculate_analytics(records, group='region')", type: "analytics" },
  { text: "powerbi.publish_dashboard(kpis, theme='cyber_dark', status='ONLINE')", type: "bi" }
];

export default function AnimatedPreloader({ onComplete }: AnimatedPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Dashboards and Analytics Engine...");
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textSequence = [
      { threshold: 10, text: "Initializing Dashboards and Analytics Engine..." },
      { threshold: 30, text: "Connecting Data Warehouses & Analytics Pipelines..." },
      { threshold: 55, text: "Processing Interactive Dashboards & DAX KPI Aggregations..." },
      { threshold: 80, text: "Compiling Power BI Dashboards & Visual Intelligence..." },
      { threshold: 95, text: "Data Insights Synchronized // Portfolio Ready." },
    ];

    // Total duration around 3.2 seconds
    const intervalTime = 40; 
    const stepIncrement = 1.3;

    let currentVal = 0;
    const timer = setInterval(() => {
      currentVal += stepIncrement + (Math.random() * 0.8);
      
      if (currentVal >= 100) {
        currentVal = 100;
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 500);
        return;
      }

      const rounded = Math.floor(currentVal);
      setProgress(rounded);

      // Add code lines dynamically as progress advances
      const snippetIndex = Math.floor((currentVal / 100) * DATA_ANALYTICS_CODE_SNIPPETS.length);
      if (snippetIndex < DATA_ANALYTICS_CODE_SNIPPETS.length) {
        const nextSnippet = DATA_ANALYTICS_CODE_SNIPPETS[snippetIndex].text;
        setCodeLines((prev) => {
          if (!prev.includes(nextSnippet)) {
            return [...prev, nextSnippet].slice(-5); // Keep last 5 lines visible
          }
          return prev;
        });
      }

      const currentStep = textSequence.slice().reverse().find((step) => currentVal >= step.threshold);
      if (currentStep) {
        setStatusText(currentStep.text);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-purple-500/30 px-4"
        >
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

          {/* Central Content Box */}
          <div className="relative z-10 w-full max-w-xl text-center space-y-6">
            
            {/* Header Emblems & Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-purple-500/30 text-purple-400 shadow-xl shadow-purple-950/40 relative">
                <Database className="w-6 h-6 animate-pulse" />
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-emerald-500/30 text-emerald-400 shadow-xl shadow-emerald-950/40 relative">
                <BarChart3 className="w-6 h-6 animate-pulse" />
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-cyan-500/30 text-cyan-400 shadow-xl shadow-cyan-950/40 relative">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
            </motion.div>

            {/* Title & Status */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[11px] font-tech tracking-widest text-purple-300 uppercase">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>DATA_ANALYTICS_KERNEL // OM_PRAKASH</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-tech text-zinc-100 tracking-tight min-h-[28px] transition-all">
                {statusText}
              </h2>
            </div>

            {/* Data Analytics Code Stream Terminal Box */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full text-left rounded-xl bg-zinc-950/90 border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm"
            >
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-[11px] font-tech text-zinc-400 ml-2 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" /> analytics_pipeline.py
                  </span>
                </div>
                <span className="text-[10px] font-tech text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  STREAMING
                </span>
              </div>

              {/* Code Lines Stream */}
              <div className="p-4 space-y-2 min-h-[140px] bg-[#08080a] text-zinc-300 overflow-x-auto leading-relaxed">
                {codeLines.length === 0 ? (
                  <div className="text-zinc-600 italic"># Booting Analytics Engine...</div>
                ) : (
                  codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-zinc-600 select-none text-[11px] w-5 text-right shrink-0">{i + 1}</span>
                      <span className="text-purple-400 shrink-0">&gt;</span>
                      <span className={
                        line.startsWith("import") ? "text-cyan-300 font-semibold" :
                        line.startsWith("SELECT") ? "text-amber-300 font-bold" :
                        line.startsWith("df") ? "text-emerald-300" :
                        line.startsWith("powerbi") ? "text-purple-300" : "text-zinc-200"
                      }>
                        {line}
                      </span>
                    </motion.div>
                  ))
                )}
                <div className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-7 align-middle" />
              </div>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="space-y-3 pt-2">
              <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-white/10 relative p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 via-emerald-400 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-xs font-tech text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-zinc-300 font-semibold">SECURITY: VERIFIED</span>
                </span>
                <span className="text-purple-400 font-bold text-sm tracking-wider font-tech">
                  {progress}%
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

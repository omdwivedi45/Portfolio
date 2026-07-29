"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Terminal, MapPin, Phone, Linkedin, Github, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { USER_PROFILE } from "@/data/portfolioData";

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate transmission state
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 radial-mask pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Contact Node"
          title="Get In Touch //"
          highlightTitle="Let's Build Together"
          description="Direct contact channels for data analytics opportunities, dashboard projects, or collaborations."
          icon={<Mail className="w-3.5 h-3.5" />}
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-tech">
                <Terminal className="w-3.5 h-3.5" />
                <span>DIRECT_TRANSMISSION_NODE</span>
              </div>
              <h3 className="text-2xl font-bold font-tech text-white">
                Let's Build Something Meaningful Together.
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                I'm actively looking for opportunities in Data Analytics, Business Intelligence, and Data Visualization. Whether you have a project, collaboration, or job opportunity, feel free to reach out.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 font-tech text-xs">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-zinc-500 block text-[10px]">EMAIL_ADDRESS</span>
                  <a
                    href={`mailto:${USER_PROFILE.email}`}
                    className="text-white font-bold hover:text-purple-300 transition-colors truncate block"
                  >
                    {USER_PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">PHONE_CONTACT</span>
                  <a
                    href={`tel:${USER_PROFILE.phone}`}
                    className="text-white font-bold hover:text-emerald-300 transition-colors"
                  >
                    {USER_PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">LOCATION_NODE</span>
                  <span className="text-white font-bold">{USER_PROFILE.location}</span>
                </div>
              </div>
            </div>

            {/* Links Bar */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/5 font-tech text-xs">
              <a
                href={USER_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={USER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 shadow-2xl relative"
          >
            {isSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-tech text-white">
                    Signal Transmitted Successfully!
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400 max-w-md mx-auto font-tech">
                    Thank you, {USER_PROFILE.name} has received your message and will respond promptly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-zinc-800 text-xs font-tech text-purple-300 hover:bg-zinc-700 border border-white/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-tech font-semibold text-zinc-300 block">
                      YOUR_NAME <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hiring Manager / Recruiter"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 text-xs font-tech transition-all"
                    />
                    {errors.name && (
                      <span className="text-[10px] font-tech text-rose-400 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-tech font-semibold text-zinc-300 block">
                      EMAIL_ADDRESS <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. recruiter@company.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email format",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 text-xs font-tech transition-all"
                    />
                    {errors.email && (
                      <span className="text-[10px] font-tech text-rose-400 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-xs font-tech font-semibold text-zinc-300 block">
                    SUBJECT // PURPOSE
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Data Analyst Role / Dashboard Project"
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 text-xs font-tech transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-tech font-semibold text-zinc-300 block">
                    MESSAGE_PAYLOAD <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your project details or job opportunity inquiry..."
                    {...register("message", { required: "Message payload is required" })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 text-xs font-tech transition-all resize-none"
                  />
                  {errors.message && (
                    <span className="text-[10px] font-tech text-rose-400 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-tech font-bold text-xs tracking-wider uppercase shadow-lg shadow-purple-900/30 hover:shadow-purple-600/40 hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Transmitting Signal...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

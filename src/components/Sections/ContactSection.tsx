"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { sendEmail } from "../../utils/sendEmail";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Status management for interactive UX feedback
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Remap your local state values to match the EmailJS variable structure
    const emailPayload = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      await sendEmail(emailPayload);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error?.message || "An unexpected issue blocked submission.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-white text-neutral-900 select-none border-b border-neutral-100 pb-20 mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
      <SectionHeader
        number="05"
        category="Collaboration"
        title="Let's Build"
        description="Available for remote contracts globally from Lilongwe, Malawi."
      />

      {/* Contact Logic Layout Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
        {/* Left Side: Call to Action Header Parameters */}
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-neutral-900 font-futura max-w-xl leading-[1.15]">
            Have an open ecosystem challenge, internship, or pipeline to build?
          </h2>

          <div className="font-mono text-[11px] text-neutral-400 space-y-1.5 pt-8 border-t border-neutral-100 max-w-xs">
            <p>// Operating Asynchronously Globally</p>
            <p>// Response Latency: &lt; 12 Hours</p>
          </div>
        </div>

        {/* Right Side: High-End Editorial Interactive Form */}
        <div className="lg:col-span-7 bg-neutral-50/50 border border-neutral-200/50 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Input Row: Name */}
            <div className="relative group">
              <input
                type="text"
                required
                disabled={status === "submitting"}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 font-medium disabled:opacity-50"
              />
            </div>

            {/* Input Row: Email */}
            <div className="relative group">
              <input
                type="email"
                required
                disabled={status === "submitting"}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 font-medium disabled:opacity-50"
              />
            </div>

            {/* Input Row: Message TextArea */}
            <div className="relative group">
              <textarea
                required
                rows={4}
                disabled={status === "submitting"}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Project parameters or brief message details..."
                className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 font-medium resize-none leading-relaxed disabled:opacity-50"
              />
            </div>

            {/* Status Feedback Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-600 bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-sm font-medium"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message received! I'll get back to you shortly.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 text-rose-600 bg-rose-50/60 border border-rose-100 rounded-xl p-4 text-sm font-medium"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Failed to send message</p>
                  <p className="text-xs opacity-90 mt-0.5">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            {/* Form Submit Micro-Interaction Action Button */}
            <div className="pt-2 flex justify-end">
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileTap={status !== "submitting" ? { scale: 0.97 } : undefined}
                whileHover={
                  status !== "submitting" ? { scale: 1.01 } : undefined
                }
                className="bg-neutral-950 text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-full shadow-sm hover:bg-neutral-800 transition-all duration-200 flex items-center gap-2 group disabled:bg-neutral-400 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    Sending...
                    <Loader2 className="w-3 h-3 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

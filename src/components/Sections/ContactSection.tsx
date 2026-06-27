"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here (Formspree, Web3Forms, API routes, etc.)
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="bg-white text-neutral-900 select-none border-b border-neutral-100 pb-20"
    >
      <SectionHeader
        number="05"
        category="Collaboration"
        title="Let's Build"
        description="Available for remote contracts globally from Lilongwe, Malawi."
      />

      {/* Contact Logic Layout Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
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
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 font-medium"
              />
            </div>

            {/* Input Row: Email */}
            <div className="relative group">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 font-medium"
              />
            </div>

            {/* Input Row: Message TextArea */}
            <div className="relative group">
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Project parameters or brief message details..."
                className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 font-medium resize-none leading-relaxed"
              />
            </div>

            {/* Form Submit Micro-Interaction Action Button */}
            <div className="pt-2 flex justify-end">
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.01 }}
                className="bg-neutral-950 text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-full shadow-sm hover:bg-neutral-800 transition-all duration-200 flex items-center gap-2 group"
              >
                Send Message
                <Send className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

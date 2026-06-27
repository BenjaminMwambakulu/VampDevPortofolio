"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, ArrowDown } from "lucide-react";

const documents = [
  { name: "Curriculum Vitae", type: "PDF / 1.2 MB", href: "#" },
  { name: "Academic Transcripts", type: "PDF / 3.4 MB", href: "#" },
  { name: "GCI World Data Science Validation", type: "PDF / 850 KB", href: "#" },
];

export default function CombinedFooter() {
  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-100 overflow-hidden pt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ==================== SECTION 1: THE DOCUMENTS VAULT ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24 border-b border-neutral-100">
          <div className="lg:col-span-4">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400 block mb-2">
              04 / Credentials
            </span>
            <h3 className="text-2xl font-semibold tracking-tight font-futura text-neutral-900">
              Verified Documents
            </h3>
            <p className="text-neutral-500 text-sm mt-2 max-w-xs leading-relaxed">
              Direct access to my academic records, professional certifications, and detailed background parameters.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-2">
            {documents.map((doc, idx) => (
              <motion.a
                key={idx}
                href={doc.href}
                download
                className="group flex items-center justify-between p-5 rounded-2xl border border-neutral-100 bg-neutral-50/30 hover:bg-neutral-50 hover:border-neutral-200 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/60 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 transition-colors shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 group-hover:text-neutral-900 transition-colors">
                      {doc.name}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-400 block mt-0.5">
                      {doc.type}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-400 transition-all shadow-sm">
                  <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ==================== SECTION 2: ASYMMETRIC CONTACT ==================== */}
        <div className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400 block">
              05 / Collaboration
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-neutral-900 font-futura max-w-2xl leading-[1.1]">
              Have an open ecosystem challenge, internship, or full-stack pipeline to build?
            </h2>
            <motion.a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-3 text-lg font-medium text-neutral-950 border-b-2 border-neutral-900 pb-1 pt-2 hover:text-neutral-600 hover:border-neutral-400 transition-all group"
              whileHover={{ gap: "16px" }}
            >
              Let's connect via email
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
          
          <div className="lg:col-span-4 lg:text-right font-mono text-xs text-neutral-400 space-y-1.5 pt-4 lg:pt-16">
            <p>// Available for remote contracts globally</p>
            <p>// Current location: Lilongwe, Malawi</p>
          </div>
        </div>

        {/* ==================== SECTION 3: THE TYPOGRAPHIC BILLBOARD ==================== */}
        <div className="pt-16 border-t border-neutral-100 select-none">
          {/* Top meta-bar of the footer */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-3">
              {/* Clean abstract Geometric Logo instead of a generic img icon */}
              <div className="w-6 h-6 bg-neutral-950 rounded-lg flex items-center justify-center text-[10px] font-bold text-white tracking-tighter font-mono">
                BM
              </div>
              <span>© {new Date().getFullYear()} All Rights Reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-900 transition-colors">GitHub</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* The Massive Massive Name Layout */}
          <div className="w-full text-center sm:text-left overflow-hidden -mb-3 md:-mb-6">
            <h1 className="text-[11vw] font-black tracking-tighter text-neutral-100/70 lowercase leading-none block whitespace-nowrap font-futura">
              mwambakulu.
            </h1>
          </div>
        </div>

      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import SectionHeader from "../SectionHeader";

const documents = [
  {
    name: "Resume",
    type: "PDF / Google Drive",
    href: "https://drive.google.com/uc?export=download&id=1feb_20wbtIU4w9nwFM59p5FdET44S7WB",
  },
];

export default function CredentialsSection() {
  return (
    <section className="border-b border-neutral-100 pb-20">
      <SectionHeader
        number="04"
        category="Credentials"
        title="Verified Documents"
        description="Direct access to my academic records, professional certifications, and detailed background parameters."
      />

      <div className="space-y-2">
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
    </section>
  );
}

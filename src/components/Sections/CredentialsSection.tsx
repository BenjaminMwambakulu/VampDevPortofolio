"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Download, Award } from "lucide-react";
import SectionHeader from "../SectionHeader";

const documents = [
  {
    name: "Curriculum Vitae",
    type: "PDF / Verified Version",
    size: "66 kb",
    href: "https://drive.google.com/uc?export=download&id=1YFmtL5t10ZeAnpj9DeYLhzW6d52JT0jO",
    tag: "Core Profile",
  },
  // Add space for future credentials you might want to showcase later
  {
    name: "Academic Transcript",
    type: "University Records",
    size: "2.4 MB",
    href: "#",
    tag: "Education",
    comingSoon: true,
  },
];

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="border-b border-neutral-100 pb-20 mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20"
    >
      <SectionHeader
        number="04"
        category="Credentials"
        title="Verified Documents"
        description="Direct access to my academic records, professional certifications, and detailed background parameters."
      />

      {/* Asymmetric Structural Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12 items-stretch">
        {/* Left Side: Context / Stats Card */}
        <div className="md:col-span-4 bg-neutral-950 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group min-h-60 md:min-h-auto">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

          <div className="space-y-2 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-neutral-300">
              <Award className="w-4 h-4" />
            </div>
            <p className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase pt-2">
              // Trust & Verification
            </p>
            <h3 className="text-xl font-light font-futura tracking-tight max-w-xs leading-snug">
              A vetted repository of my background, and
              records.
            </h3>
          </div>
        </div>

        {/* Right Side: Interactive Editorial Document Links */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {documents.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 min-h-55 ${
                doc.comingSoon
                  ? "border-neutral-100 bg-neutral-50/20 opacity-60 cursor-not-allowed"
                  : "border-neutral-200/60 bg-neutral-50/40 hover:bg-white hover:border-neutral-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
              }`}
            >
              {/* Card Top Information Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                      doc.comingSoon
                        ? "bg-neutral-100 border-neutral-200 text-neutral-400"
                        : "bg-white border-neutral-200/80 text-neutral-500 group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[9px] tracking-wider uppercase bg-neutral-200/50 text-neutral-600 px-2.5 py-1 rounded-full font-medium">
                    {doc.tag}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-medium text-neutral-900 tracking-tight">
                    {doc.name}
                  </h4>
                  <p className="text-[11px] font-mono text-neutral-400 mt-1 flex items-center gap-2">
                    <span>{doc.type}</span>
                    {!doc.comingSoon && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-neutral-300" />
                        <span>{doc.size}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Card Bottom / Action Drawer Trigger */}
              <div className="pt-6 border-t border-neutral-100/80 flex items-center justify-between">
                {doc.comingSoon ? (
                  <span className="font-mono text-[10px] text-neutral-400 italic">
                    Coming Soon // Pipeline
                  </span>
                ) : (
                  <>
                    <a
                      href={doc.href}
                      download
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-neutral-500 hover:text-neutral-900 transition-colors font-medium"
                    >
                      <Download className="w-3 h-3" />
                      Download file
                    </a>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-400 group-hover:text-neutral-950 group-hover:border-neutral-900 transition-all duration-300 shadow-sm"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

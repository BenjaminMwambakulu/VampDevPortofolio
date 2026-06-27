"use client";

import { Link } from "react-router-dom";
import { socialLinks } from "../../constants/socialLinks";
import getImage from "../../utils/getImage";


export default function FooterBillboard() {
  const horizontalLinks = Object.entries(socialLinks).map(
    ([platform, url]) => ({
      label:
        platform === "devto"
          ? "Dev.to"
          : platform.charAt(0).toUpperCase() + platform.slice(1),
      url,
    }),
  );

  return (
    <section className="select-none relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-neutral-500 mb-16">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-neutral-950 rounded-lg flex items-center justify-center overflow-hidden shadow-sm p-1">
            <img
              src={getImage("vampdevCrest.png")}
              alt="Logo Small"
              className="w-full h-full object-contain"
            />
          </div>
          <span>© {new Date().getFullYear()} All Rights Reserved.</span>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 max-w-xl md:justify-end">
          {horizontalLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors duration-200 relative py-0.5 group block text-[11px]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-px bg-neutral-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </div>

      {/* Massive Typographic Billboard Container */}
      <div className="w-full relative flex flex-col items-center justify-center overflow-hidden -mb-3 md:-mb-6 pt-8">
        {/* Massive Centered Title */}
        <h1 className="text-[12vw] font-black text-center tracking-tighter text-neutral-200/60 leading-none whitespace-nowrap font-futura z-10 mx-auto">
          VampDev
        </h1>

        {/* Centered Background Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
          <img
            src={getImage("crestLog.png")}
            alt="Logo Watermark"
            className="w-[20vw] h-[20vw] min-w-30 min-h-30 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

import { socialLinks } from "../../constants/socialLinks";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function SocialConnect() {
  // Convert object keys into an iterable clean array
  const linksArray = Object.entries(socialLinks).map(([platform, url]) => ({
    platform: platform.charAt(0).toUpperCase() + platform.slice(1), // Capitalize
    url,
  }));

  return (
    <section className="py-20 bg-white select-none">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Row Layout for Social Directory */}
        <div className="border-t border-neutral-100 divide-y divide-neutral-100">
          {linksArray.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 relative overflow-hidden transition-colors duration-300"
              initial="initial"
              whileHover="hover"
            >
              {/* Left Side: Index + Name */}
              <div className="flex items-center gap-6 z-10">
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
                  // {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium tracking-tight text-neutral-800 group-hover:text-neutral-950 transition-colors duration-200">
                  {link.platform === "Devto" ? "Dev.to" : link.platform}
                </span>
              </div>

              {/* Right Side: Arrow Micro-interaction */}
              <div className="flex items-center gap-2 z-10 text-neutral-400 group-hover:text-neutral-900 transition-colors duration-200">
                <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0 transform native-transition">
                  connect
                </span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>

              {/* Minimalist Apple-style Hover Background Slide */}
              <motion.div 
                className="absolute inset-0 bg-neutral-50/60 z-0 origin-left"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1 }
                }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
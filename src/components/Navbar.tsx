import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import getImage from "../utils/getImage";

const NAVLINKS = [
  { name: "Home", sectionId: "home" },
  { name: "About", sectionId: "about" },
  { name: "Skills", sectionId: "skills" },
  { name: "Projects", sectionId: "projects" },
  { name: "Contact", sectionId: "contact" },
];

// Cleaned up variants with fluid, liquid physics baked directly in
const containerVariants = {
  hidden: {
    y: -150,
    scaleY: 1.3,
    scaleX: 0.8,
    opacity: 0,
  },
  visible: {
    y: 0,
    scaleY: 1,
    scaleX: 1,
    opacity: 1,
  },
};

export default function Navbar() {
  const [isOverHero, setIsOverHero] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateNavbarTheme = () => {
      const heroThreshold = window.innerHeight - 96;
      setIsOverHero(window.scrollY < heroThreshold);

      const currentSection = NAVLINKS.reduce((active, link) => {
        const section = document.getElementById(link.sectionId);
        if (!section) return active;

        const sectionTop = section.offsetTop - 140;
        return window.scrollY >= sectionTop ? link.sectionId : active;
      }, "home");

      setActiveSection(currentSection);
    };

    updateNavbarTheme();
    window.addEventListener("scroll", updateNavbarTheme, { passive: true });
    window.addEventListener("resize", updateNavbarTheme);

    return () => {
      window.removeEventListener("scroll", updateNavbarTheme);
      window.removeEventListener("resize", updateNavbarTheme);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navOffset = 104;
    const top =
      section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  const topLineClass = isOverHero ? "via-white/30" : "via-black/15";

  const navShellClass = isOverHero
    ? "border-white/20 bg-white/10 shadow-black/60"
    : "border-black/10 bg-white/85 shadow-black/10";

  const brandTextClass = isOverHero ? "text-white" : "text-black";
  const linkClass = isOverHero
    ? "text-white/90 hover:text-white"
    : "text-black/70 hover:text-black";
  const activeLinkClass = isOverHero ? "text-white" : "text-black";
  const activeIndicatorClass = isOverHero ? "bg-white" : "bg-black";
  const ctaClass = isOverHero
    ? "bg-white text-black shadow-black/30 hover:bg-white/90"
    : "bg-black text-white shadow-black/15 hover:bg-black/85";
  const logoImage = isOverHero ? "vampdevCrest.png" : "crestLog.png";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Subtle top highlight line */}
      <div
        className={`h-px bg-linear-to-r from-transparent to-transparent transition-colors duration-300 ${topLineClass}`}
      />

      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ transformOrigin: "top center" }} // Crucial for drop perspective
          className={`
            relative mt-3 rounded-3xl border ${navShellClass}
            shadow-2xl backdrop-blur-2xl
            transition-colors duration-300 /* REMOVED transition-all to fix Framer jank */
          `}
        >
          <div className="flex h-16 items-center justify-between px-8">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src={getImage(logoImage)}
                  alt="VampDev Crest"
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span
                className={`text-2xl font-light tracking-tighter transition-colors duration-300 ${brandTextClass}`}
              >
                VampDev
              </span>
            </button>

            {/* Navigation */}
            <ul className="flex items-center gap-8 text-sm font-medium">
              {NAVLINKS.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <li key={link.sectionId}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.sectionId)}
                      className={`
                        relative px-4 py-2 transition-colors duration-300
                        ${linkClass}
                        ${isActive ? activeLinkClass : ""}
                      `}
                    >
                      {link.name}
                      {isActive && (
                        <span
                          className={`absolute bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full transition-colors duration-300 ${activeIndicatorClass}`}
                        />
                      )}
                    </button>
                  </li>
                );
              })}

              {/* CTA Button */}
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className={`
                    rounded-2xl px-6 py-2.5 text-sm font-semibold
                    shadow-lg transition-all duration-300
                    hover:scale-105 active:scale-95 ${ctaClass}
                  `}
                >
                  Let's Talk
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

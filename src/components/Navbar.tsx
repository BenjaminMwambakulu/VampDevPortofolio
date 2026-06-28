import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import getImage from "../utils/getImage";

const NAVLINKS = [
  { name: "Home", sectionId: "home" },
  { name: "About", sectionId: "about" },
  { name: "Skills", sectionId: "skills" },
  { name: "Projects", sectionId: "projects" },
];

const containerVariants: Variants = {
  hidden: { y: -150, scaleY: 1.3, scaleX: 0.8, opacity: 0 },
  visible: { y: 0, scaleY: 1, scaleX: 1, opacity: 1 },
};

// Mobile menu drawer animation
const drawerVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

// Stagger children for mobile links
const listVariants: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
};

export default function Navbar() {
  const [isOverHero, setIsOverHero] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const navOffset = 104;
    const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    setMenuOpen(false); // Close menu after nav
  };

  // ── Theme-aware classes ──────────────────────────────────────────
  const topLineClass   = isOverHero ? "via-white/30"    : "via-black/15";
  const navShellClass  = isOverHero
    ? "border-white/20 bg-white/10 shadow-black/60"
    : "border-black/10 bg-white/85 shadow-black/10";
  const brandTextClass = isOverHero ? "text-white"      : "text-black";
  const linkClass      = isOverHero ? "text-white/90 hover:text-white" : "text-black/70 hover:text-black";
  const activeLinkClass    = isOverHero ? "text-white"  : "text-black";
  const activeIndicatorClass = isOverHero ? "bg-white"  : "bg-black";
  const ctaClass       = isOverHero
    ? "bg-white text-black shadow-black/30 hover:bg-white/90"
    : "bg-black text-white shadow-black/15 hover:bg-black/85";
  const logoImage      = isOverHero ? "vampdevCrest.png" : "crestLog.png";

  // Hamburger bar colours
  const barClass = isOverHero ? "bg-white" : "bg-black";

  // Mobile drawer styles (always uses opaque white style for readability)
  const mobileLinkClass        = "text-black/70 hover:text-black";
  const mobileActiveLinkClass  = "text-black";
  const mobileIndicatorClass   = "bg-black";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Subtle top highlight line */}
      <div className={`h-px bg-linear-to-r from-transparent to-transparent transition-colors duration-300 ${topLineClass}`} />

      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ transformOrigin: "top center" }}
          className={`relative mt-3 rounded-3xl border ${navShellClass} shadow-2xl backdrop-blur-2xl transition-colors duration-300`}
        >
          <div className="flex h-16 items-center justify-between px-6 md:px-8">

            {/* ── Logo ──────────────────────────────────────────────── */}
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
              <span className={`text-2xl font-light tracking-tighter transition-colors duration-300 ${brandTextClass}`}>
                VampDev
              </span>
            </button>

            {/* ── Desktop Navigation ────────────────────────────────── */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              {NAVLINKS.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <li key={link.sectionId}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.sectionId)}
                      className={`relative px-4 py-2 transition-colors duration-300 ${linkClass} ${isActive ? activeLinkClass : ""}`}
                    >
                      {link.name}
                      {isActive && (
                        <span className={`absolute bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full transition-colors duration-300 ${activeIndicatorClass}`} />
                      )}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className={`rounded-2xl px-6 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${ctaClass}`}
                >
                  Let's Talk
                </button>
              </li>
            </ul>

            {/* ── Mobile Hamburger ──────────────────────────────────── */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 group"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${barClass}`}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${barClass}`}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${barClass}`}
              />
            </button>
          </div>

          {/* ── Mobile Drawer ──────────────────────────────────────── */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden overflow-hidden rounded-b-3xl border-t border-black/5 bg-white/95 backdrop-blur-2xl"
              >
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col px-6 py-5 gap-1"
                >
                  {NAVLINKS.map((link) => {
                    const isActive = activeSection === link.sectionId;
                    return (
                      <motion.li key={link.sectionId} variants={itemVariants}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.sectionId)}
                          className={`relative w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-colors duration-200
                            ${isActive
                              ? `${mobileActiveLinkClass} bg-black/5`
                              : `${mobileLinkClass} hover:bg-black/[0.03]`
                            }`}
                        >
                          {link.name}
                          {isActive && (
                            <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full ${mobileIndicatorClass}`} />
                          )}
                        </button>
                      </motion.li>
                    );
                  })}

                  {/* CTA in drawer */}
                  <motion.li variants={itemVariants} className="pt-3 mt-1 border-t border-black/5">
                    <button
                      type="button"
                      onClick={() => scrollToSection("contact")}
                      className="w-full rounded-2xl bg-black text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-black/85 active:scale-[0.98] transition-all duration-200"
                    >
                      Let's Talk
                    </button>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </nav>
  );
}

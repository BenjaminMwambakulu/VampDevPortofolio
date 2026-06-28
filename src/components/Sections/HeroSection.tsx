import GradientBlur from "../GradientBlur";
import getImage from "../../utils/getImage";
import { motion } from "framer-motion";
import {
  container,
  cardBg,
  heading,
  paragraph,
  btnPrimary,
  btnSecondary,
  footer,
} from "../HeroSection/HeroVariants";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navOffset = 104;
    const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat pt-4"
      style={{ backgroundImage: `url(${getImage("home.png")})` }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/70" />

      {/* Enhanced Gradient Blur at bottom */}
      <GradientBlur />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero Content */}
        <div className="flex flex-1 items-end px-6 pb-20 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {/* Glassmorphic Content Card */}
            <motion.div
              className="mb-10 rounded-3xl border border-white/20 bg-white/10 p-10 md:p-12 backdrop-blur-2xl shadow-2xl shadow-black/60"
              variants={cardBg}
            >
              {/* Heading */}
              <motion.h1
                className="font-futura text-6xl md:text-7xl font-light tracking-tighter text-white leading-none"
                variants={heading}
              >
                Full Stack Developer
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 font-light max-w-2xl"
                variants={paragraph}
              >
                I&#39;m Benjamin Mwambakulu (VampDev), a passionate full stack developer based
                in Malawi. I craft modern web applications with React, Laravel,
                and Node.js, and build delightful cross-platform mobile apps
                with Flutter. I also work with PostgreSQL, MongoDB, Python, and
                Power BI to deliver scalable, beautiful digital experiences.
              </motion.p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <motion.button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                  variants={btnPrimary}
                >
                  View My Projects
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="rounded-2xl border border-white/40 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition hover:bg-white/10"
                  variants={btnSecondary}
                >
                  Let&#39;s Work Together
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </motion.section>
  );
}

import { Link } from "react-router-dom";
import GradientBlur from "../GradientBlur";
import getImage from "../../utils/getImage";
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat pt-4"
      style={{ backgroundImage: `url(${getImage("home.png")})` }}
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
            <div className="mb-10 rounded-3xl border border-white/20 bg-white/10 p-10 md:p-12 backdrop-blur-2xl shadow-2xl shadow-black/60">
              <h1 className="font-futura text-6xl md:text-7xl font-light tracking-tighter text-white leading-none">
                Full Stack Developer
              </h1>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 font-light max-w-2xl">
                I'm Benjamin Mwambakulu (VampDev), a passionate full stack developer based
                in Malawi. I craft modern web applications with React, Laravel,
                and Node.js, and build delightful cross-platform mobile apps
                with Flutter. I also work with PostgreSQL, MongoDB, Python, and
                Power BI to deliver scalable, beautiful digital experiences.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                >
                  View My Projects
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-2xl border border-white/40 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Let's Work Together
                </button>
              </div>
            </div>

            {/* Subtle tagline */}
            <p className="pl-2 text-sm uppercase tracking-[3px] text-white/50 font-medium">
              Based in Malawi • Available Worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="h-8 w-px bg-linear-to-b from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

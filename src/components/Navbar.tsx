import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import getImage from "../utils/getImage";

const NAVLINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const updateNavbarTheme = () => {
      const heroThreshold = window.innerHeight - 96;
      setIsOverHero(window.scrollY < heroThreshold);
    };

    updateNavbarTheme();
    window.addEventListener("scroll", updateNavbarTheme, { passive: true });
    window.addEventListener("resize", updateNavbarTheme);

    return () => {
      window.removeEventListener("scroll", updateNavbarTheme);
      window.removeEventListener("resize", updateNavbarTheme);
    };
  }, []);

  const topLineClass = isOverHero
    ? "via-white/30"
    : "via-black/15";

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
        <div
          className={`
            relative mt-3 rounded-3xl border ${navShellClass}
            shadow-2xl backdrop-blur-2xl
            transition-all duration-300
          `}
        >
          <div className="flex h-16 items-center justify-between px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
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
            </Link>

            {/* Navigation */}
            <ul className="flex items-center gap-8 text-sm font-medium">
              {NAVLINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`
                        relative px-4 py-2 transition-all duration-300
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
                    </Link>
                  </li>
                );
              })}

              {/* CTA Button */}
              <li>
                <button
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
        </div>
      </div>
    </nav>
  );
}

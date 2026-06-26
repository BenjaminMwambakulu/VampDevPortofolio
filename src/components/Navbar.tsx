import { Link, useLocation } from "react-router-dom";
import getImage from "../utils/getImage";

const NAVLINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Subtle top highlight line */}
      <div className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20">
        <div
          className={`
            relative mt-3 rounded-3xl border border-white/20 bg-white/10 
            shadow-2xl shadow-black/60 backdrop-blur-2xl
            transition-all duration-300
          `}
        >
          <div className="flex h-16 items-center justify-between px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center mb-1.5 gap-3 group">
              <div className="relative">
                <img
                  src={getImage("vampdevCrest.png")}
                  alt="VampDev Crest"
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-2xl mt-1.5 font-light tracking-tighter text-white">
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
                        relative px-4 py-2 text-white/90 transition-all duration-300
                        hover:text-white
                        ${isActive ? "text-white" : ""}
                      `}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-white" />
                      )}
                    </Link>
                  </li>
                );
              })}

              {/* CTA Button */}
              <li>
                <button
                  className={`
                    rounded-2xl bg-white px-6 py-2.5 text-sm font-semibold text-black 
                    shadow-lg shadow-black/30 transition-all duration-300
                    hover:bg-white/90 hover:scale-105 active:scale-95
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
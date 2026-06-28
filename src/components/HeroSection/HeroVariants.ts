// Framer Motion variant definitions for the HeroSection
import type { Variants } from "framer-motion";

/* -------------------------------------------------
   Global parent container – controls stagger timing
 ------------------------------------------------- */
export const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* -------------------------------------------------
   Navbar – slide‑down + fade‑in
 ------------------------------------------------- */
export const navbar: Variants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

/* -------------------------------------------------
   Background portrait – subtle scale‑up & fade‑in
 ------------------------------------------------- */
export const portrait: Variants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

/* -------------------------------------------------
   Card – background glassmorphism
 ------------------------------------------------- */
export const cardBg: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* -------------------------------------------------
   Heading – fade‑up
 ------------------------------------------------- */
export const heading: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* -------------------------------------------------
   Paragraph – fade‑up (slightly later)
 ------------------------------------------------- */
export const paragraph: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

/* -------------------------------------------------
   Buttons – slide‑up together, primary a touch snappier
 ------------------------------------------------- */
export const btnPrimary: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

export const btnSecondary: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      delay: 0.05,
    },
  },
};

/* -------------------------------------------------
   Footer text – slow fade‑in, appears last
 ------------------------------------------------- */
export const footer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.5,
    transition: { duration: 0.8, delay: 0.8 },
  },
};

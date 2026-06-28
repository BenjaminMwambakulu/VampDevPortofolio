# VampDev Portfolio

> Personal portfolio of **Benjamin Mwambakulu** — Full Stack Developer from Malawi, open to remote.

[![Live Site](https://img.shields.io/badge/Live%20Site-vampdev.dev-black?style=flat-square&logo=vercel)](https://vampdev.dev)
[![Built with React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## Overview

A single-page portfolio site built to showcase my work, skills, and background as a full stack developer. Designed with a focus on premium aesthetics, smooth scroll-driven animations, and full mobile responsiveness.

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Animated entrance with a glassmorphic content card, responsive background images per device |
| 02 | **About** | Background story, philosophy, and a quick-overview profile card |
| 03 | **Skills** | Categorised technical expertise — Backend, Frontend, Data Science & BI, DevOps |
| 04 | **Projects** | Featured work with a sticky parallax scroll effect |
| 05 | **Credentials** | Verified documents — CV and academic transcript |
| 06 | **Contact** | Reach-out form powered by EmailJS |

---

## Tech Stack

**Frontend**
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [Framer Motion](https://www.framer-motion.com) — scroll animations & entrance transitions
- [Lucide React](https://lucide.dev) — icon system

**Tooling**
- [Vite 8](https://vite.dev) — build tool & dev server
- [EmailJS](https://www.emailjs.com) — contact form email delivery
- [ESLint](https://eslint.org) — code quality

---

## Animation Architecture

Scroll-driven animations are implemented with **Framer Motion `whileInView`**, applied directly inside each section component for reliable viewport detection.

```
Hero      →  initial load entrance (variants system)
About     →  whileInView fade-and-rise  (amount: 0.15)
Skills    →  whileInView fade-and-rise  (amount: 0.15)
Projects  →  continuous parallax via useScroll + useTransform (ISOLATED — no whileInView wrapper)
Contact   →  whileInView fade-and-rise  (amount: 0.10)
```

The Projects section uses a sticky-card parallax stack. It is intentionally kept outside any `whileInView` wrapper to prevent conflicts with the frame-by-frame `useScroll` tracking.

---

## Featured Projects

### TicketEase — Bus Ticket Booking System
Comprehensive platform for searching routes, reserving seats, and managing bookings. Supports mobile and USSD access for wider reach.  
`React` `Laravel` `Flutter` `Supabase` `AfricasTalking USSD` `PayChangu`

### TaskIT — Task Management App
Productivity app with deadline tracking and native Linux desktop notifications.  
`Laravel` `Blade` `SQLite` `Tailwind CSS`

### E-commerce Template
Fully responsive store template with product catalog, cart, and checkout flow.  
`React` `Tailwind CSS` · [Live Demo →](https://ecommerce-template-sable.vercel.app/)

### SaaS Landing Page Template
Conversion-focused landing page with pricing, testimonials, and CTAs.  
`React` `Tailwind CSS` `TypeScript` · [Live Demo →](https://app-landing-template.vercel.app/)

### Organisation Landing Page Template
Professional org page with mission, services, team, and contact sections.  
`React` `Tailwind CSS` `TypeScript` · [Live Demo →](https://organizationlandingpage.appwrite.network/)

---

## Contact

- **Email:** via the contact form on the site
- **GitHub:** [@BenjaminMwambakulu](https://github.com/BenjaminMwambakulu)
- **Location:** Lilongwe, Malawi 🇲🇼 — Available for Remote Work Worldwide

---

<p align="center">Designed & built by <strong>Benjamin Mwambakulu (VampDev)</strong></p>

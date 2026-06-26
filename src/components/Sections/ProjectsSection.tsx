/**
 * ProjectsSection.tsx
 *
 * A scroll-driven, stacked-card section for a portfolio or project showcase.
 *
 * Architecture overview
 * ─────────────────────
 * • `ProjectsSection`  – stateless list renderer. Maps projects → StickyProject.
 * • `StickyProject`    – owns its own ref, useScroll, and useTransform calls.
 *                        This is the key fix: hooks live at the top level of a
 *                        dedicated component, never inside a .map() callback.
 * • `ProjectCard`      – pure presentation component, API is not touched.
 *
 * Scroll model
 * ────────────
 * Each StickyProject wrapper is `100vh` tall. Its inner card is `position: sticky`
 * so it pins to the top of the viewport while the user scrolls through that slot.
 *
 * As the *next* card scrolls up (because the next wrapper div is entering the
 * viewport), the *current* card's sticky surface is progressively covered.
 * To reinforce this with parallax depth:
 *   • The incoming card translates from +30 % Y to 0 % (slides up into view).
 *   • The outgoing card scales from 1 → 0.94 and fades to 0.6 (recedes behind
 *     the incoming card).
 *
 * Each card's `scrollYProgress` is scoped to its *own* wrapper div via
 * `useScroll({ target: ref })`, so the animation only reacts to that specific
 * card's position in the viewport — not the global page scroll.
 */

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';
import ProjectCard from '../ProjectCard'; // adjust path if needed

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shape of a single project object passed in from a parent page/section.
 * Extend with any additional fields required by ProjectCard.
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  techStack: string[];
  image: string;
  liveDemo: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// StickyProjectProps
// ─────────────────────────────────────────────────────────────────────────────

interface StickyProjectProps {
  /** The project data forwarded (unchanged) to ProjectCard. */
  project: Project;
  /**
   * Stack order. Higher index cards render visually on top of lower ones.
   * Passed directly as the CSS `z-index` value.
   */
  zIndex: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// StickyProject – the per-card wrapper that owns all animation state
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Renders a single project in a 100 vh wrapper with a sticky inner card.
 *
 * Why a separate component?
 * React's Rules of Hooks forbid calling hooks (useRef, useScroll, useTransform)
 * inside loops or conditional branches. By lifting each card into its own
 * component we call all hooks unconditionally at the top level — exactly what
 * React requires.
 */
function StickyProject({ project, zIndex }: StickyProjectProps): React.ReactElement {
  /**
   * `wrapperRef` points at the outer 100 vh div. We pass this to `useScroll` so
   * that `scrollYProgress` is scoped to *this* card's scroll slot, not the page.
   *
   * offset: ["start end", "end start"]
   *   → progress = 0 when the top of the wrapper reaches the bottom of the viewport
   *   → progress = 1 when the bottom of the wrapper leaves the top of the viewport
   */
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end start'],
  });

  // ── Incoming animation (card slides up into view) ──────────────────────────
  //
  // When this card's wrapper first enters the viewport from the bottom,
  // scrollYProgress is near 0. We translate the sticky card from +30 % (below
  // its natural position) down to 0 % (fully in place).
  //
  // Range [0, 0.3]:
  //   0   → card is 30 % below its resting position (just entering viewport)
  //   0.3 → card has settled at its natural y = 0 position
  //
  // MotionValue<string> is the correct type for percentage-string transforms.
  const y: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['30%', '0%'],
  );

  // ── Outgoing animation (card recedes as the next card slides over it) ──────
  //
  // As the user continues scrolling past this card's slot (scrollYProgress > 0.5),
  // the next sticky card will physically overlap this one.
  // We reinforce that depth with a subtle scale-down and fade so the "buried"
  // card looks further away.
  //
  // Range [0.5, 1]:
  //   0.5 → card is at full size and full opacity (middle of its scroll slot)
  //   1   → card has shrunk to 94 % and faded to 60 % opacity (fully scrolled past)

  const scale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.5, 1],
    [1, 0.94],
  );

  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.5, 1],
    [1, 0.6],
  );

  return (
    /**
     * Outer wrapper — 100 vh tall. This is the "scroll slot" that drives the
     * progress values above. It is NOT position:sticky; it scrolls normally.
     */
    <div
      ref={wrapperRef}
      className="relative h-screen"
      style={{ zIndex }}
    >
      {/**
       * Inner sticky surface — stays pinned to the top of the viewport while
       * the user scrolls through the outer wrapper's 100 vh.
       *
       * `top-0` ensures the card pins flush to the viewport top.
       * The motion values for y, scale, and opacity are applied here so the
       * animation is visible while the card is in its sticky position.
       */}
      <motion.div
        className="sticky top-0 flex h-screen w-full items-center justify-center"
        style={{ y, scale, opacity }}
      >
        {/**
         * ProjectCard is intentionally kept as a pure presentation component.
         * We pass the project via the `project` prop exactly as its API expects —
         * no spreading, no prop renaming, no API modification.
         */}
        <ProjectCard project={project} />
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ProjectsSection – the public-facing list renderer
// ─────────────────────────────────────────────────────────────────────────────

interface ProjectsSectionProps {
  /** Array of projects to render. Safely handles undefined/empty. */
  projects?: Project[];
}

/**
 * Stateless list renderer. Iterates over `projects` and renders one
 * `StickyProject` per item. This component itself owns no animation state —
 * all scroll logic lives inside `StickyProject`.
 *
 * Z-index strategy:
 * Cards that appear later in the list receive a higher z-index so they
 * visually stack on top of earlier cards as the user scrolls down. Card at
 * index 0 gets z-index 1, card at index n gets z-index n+1.
 */
export default function ProjectsSection({
  projects,
}: ProjectsSectionProps): React.ReactElement | null {
  const safeProjects = projects ?? [];

  // Nothing to render if the array is empty.
  if (safeProjects.length === 0) return null;

  return (
    <section
      /**
       * `relative` establishes a stacking context for the z-index values
       * assigned to each StickyProject wrapper.
       */
      className="relative"
      aria-label="Projects"
    >
      {safeProjects.map((project, index) => (
        <StickyProject
          key={project.id}
          project={project}
          /**
           * Cards later in the list get a higher z-index so they paint on top.
           * Base value of 1 ensures we stay above any default-0 page elements.
           */
          zIndex={index + 1}
        />
      ))}
    </section>
  );
}
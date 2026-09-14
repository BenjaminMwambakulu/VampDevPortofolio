// ProjectsSection.tsx
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import ProjectCard from "../ProjectCard";
import SectionHeader from "../SectionHeader";
import { fadeUp, defaultViewport } from "../motionVariants";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveDemo?: string;
  hasCaseStudy?: boolean;
  caseStudyLink?: string;
}

interface StickyProjectProps {
  project: Project;
  index: number;
  totalProjects: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function StickyProject({
  project,
  index,
  totalProjects,
  progress,
}: StickyProjectProps): React.ReactElement {
  const cardStart = index / totalProjects;
  const cardEnd = (index + 1) / totalProjects;

  const scale = useTransform(progress, [cardStart, cardEnd], [1, 0.92]);

  // INCREASED: More space between header and first card
  const headerHeight = 280; // Increased from 200
  const topOffset = headerHeight + index * 20;

  return (
    <div
      className="sticky flex items-start justify-center"
      style={{
        top: `${topOffset}px`,
        height: `calc(100vh - ${topOffset}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div className="relative w-full max-w-7xl" style={{ scale }}>
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10">
          <ProjectCard project={project} reversed={index % 2 !== 0} />
        </div>
      </motion.div>
    </div>
  );
}

interface ProjectsSectionProps {
  projects?: Project[];
}

export default function ProjectsSection({
  projects,
}: ProjectsSectionProps): React.ReactElement | null {
  const safeProjects = projects ?? [];

  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (safeProjects.length === 0) return;
    const next = Math.min(
      Math.max(Math.floor(progress * safeProjects.length) + 1, 1),
      safeProjects.length
    );
    setActiveIndex(next);
  });

  if (safeProjects.length === 0) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-white"
      aria-label="Projects"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* ==================== STICKY SECTION HEADER ==================== */}
        <motion.div
          className="sticky top-0 z-5 bg-white pt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="flex items-start justify-between gap-6">
            <SectionHeader
              number="03"
              category="Featured Work"
              title="Projects"
              description="Selected work from recent years"
            />
            <div
              className="mt-10 font-mono text-sm tracking-[0.2em] text-neutral-400 select-none whitespace-nowrap"
              aria-live="polite"
            >
              <span className="text-neutral-900">{pad(activeIndex)}</span>
              {" / "}
              {pad(safeProjects.length)}
            </div>
          </div>
        </motion.div>

        {safeProjects.map((project, index) => (
          <StickyProject
            key={project.id}
            project={project}
            index={index}
            totalProjects={safeProjects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

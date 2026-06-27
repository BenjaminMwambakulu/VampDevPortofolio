// ProjectsSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "../ProjectCard";
import SectionHeader from "../SectionHeader";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveDemo: string;
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
      className="sticky flex items-start justify-center px-4 sm:px-6 lg:px-8"
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
  if (safeProjects.length === 0) return null;

  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${safeProjects.length * 100 + 100}vh` }}
      aria-label="Projects"
    >
      {/* ==================== STICKY SECTION HEADER ==================== */}
      <div className="sticky top-0 z-5 bg-white px-4 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            number="03"
            category="Featured Work"
            title="Projects"
            description="Selected work from recent years"
          />
        </div>
      </div>

      {safeProjects.map((project, index) => (
        <StickyProject
          key={project.id}
          project={project}
          index={index}
          totalProjects={safeProjects.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}

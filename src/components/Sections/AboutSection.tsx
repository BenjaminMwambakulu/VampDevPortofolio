// ProjectsSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FolderOpen } from "lucide-react";
import ProjectCard from "../ProjectCard";

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

  // Each card sticks at a different offset for the deck effect
  const topOffset = index * 25;

  return (
    <div
      className="sticky flex items-start justify-center px-4 sm:px-6 lg:px-8"
      style={{
        top: `${topOffset}px`,
        height: `calc(100vh - ${topOffset}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="relative w-full max-w-7xl mt-[5vh]"
        style={{ scale }}
      >
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
      className="relative bg-neutral-200"
      style={{ height: `${safeProjects.length * 100 + 50}vh` }}
      aria-label="Projects"
    >
      {/* ==================== SECTION HEADER ==================== */}
      <div className="sticky top-0 z-50 flex flex-col items-center text-center pt-20 pb-8 bg-neutral-200">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-black/30" />
          <FolderOpen className="w-7 h-7 text-black" />
          <div className="h-px w-12 bg-black/30" />
        </div>

        <h2 className="font-futura text-5xl md:text-6xl tracking-tighter font-light">
          Projects
        </h2>

        <p className="mt-4 text-xl text-gray-600 max-w-md">
          Selected work from recent years
        </p>
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

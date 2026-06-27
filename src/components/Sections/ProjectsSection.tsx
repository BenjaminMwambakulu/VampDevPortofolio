// ProjectsSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const opacity = useTransform(progress, [cardStart, cardEnd], [1, 0.6]);

  return (
    <div
      className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ zIndex: index + 1 }}
    >
      {/* Solid background layer — DOES NOT ANIMATE */}
      <div className="absolute inset-0 bg-neutral-100" />

      {/* Animated content layer */}
      <motion.div
        className="relative w-full max-w-6xl"
        style={{ scale, opacity }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
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
      style={{ height: `${safeProjects.length * 100}vh` }}
      aria-label="Projects"
    >
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

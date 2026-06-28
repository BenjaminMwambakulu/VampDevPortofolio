import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  image: string;
  liveDemo?: string;
  hasCaseStudy?: boolean;
  caseStudyLink?: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export default function ProjectCard({
  project,
  reversed = false,
}: ProjectCardProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Content */}
      <div
        className={`lg:col-span-5 ${reversed ? "lg:order-2" : "lg:order-1"} space-y-6`}
      >
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            <span className="h-px w-6 bg-neutral-300" />
            Featured Project
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {project.title}
          </h2>
        </div>

        <p className="text-base leading-relaxed text-neutral-600 max-w-prose lg:text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2">
          {project.hasCaseStudy && project.caseStudyLink && (
            <Link
              to={project.caseStudyLink}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              View Case Study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}

          {project.liveDemo && (
            <Link
              to={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Image */}
      <div
        className={`lg:col-span-7 ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="relative overflow-hidden rounded-xl bg-neutral-100 aspect-16/10">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export interface Project {
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  hasCaseStudy?: boolean;
  caseStudyLink?: string;
  techStack: string[];
}
interface ProjectCardProps {
  project: Project;
}



export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
      {/* Content */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Featured Project
          </p>

          <h2 className="mt-3 text-5xl font-light tracking-tight text-neutral-900">
            {project.title}
          </h2>
        </div>

        <p className="text-lg leading-8 text-neutral-600">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black/10 px-4 py-2 text-sm text-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-8 pt-4">
          {project.hasCaseStudy && project.caseStudyLink && (
            <Link
              to={project.caseStudyLink}
              className="border-b border-black pb-1 text-sm uppercase tracking-widest transition hover:opacity-70"
            >
              View Case Study
            </Link>
          )}

          <Link
            to={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-neutral-500 transition hover:text-black"
          >
            Live Demo
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-neutral-100">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

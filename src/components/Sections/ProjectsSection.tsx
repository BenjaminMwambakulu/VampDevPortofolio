import { Briefcase } from "lucide-react";
import ProjectCard, { type Project } from "../ProjectCard";

const projects: Project[] = [
  {
    title: "Transport Management System",
    description:
      "A platform for managing routes, bookings, QR ticket verification, and fleet operations.",
    image: "https://i.pinimg.com/1200x/b7/28/a5/b728a53a08def6a33d316dcdb064333b.jpg",
    liveDemo: "https://demo.example.com",
    hasCaseStudy: true,
    caseStudyLink: "/case-studies/transport",
    techStack: ["React", "Laravel", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Power BI Sales Dashboard",
    description:
      "Interactive dashboards providing insights into sales, customers, and revenue trends.",
    image: "https://i.pinimg.com/736x/04/17/80/04178000170bf1ca61bc8864ea763d16.jpg",
    liveDemo: "https://demo.example.com",
    techStack: ["Power BI", "SQL Server"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="h-px w-12 bg-black/20" />
          <Briefcase className="w-6 h-6 text-black" />
          <div className="h-px w-12 bg-black/20" />
        </div>

        <h2 className="font-futura text-5xl md:text-6xl tracking-tighter font-light">
          Featured Projects
        </h2>

        <p className="mt-5 max-w-xl text-lg text-neutral-600 leading-relaxed">
          A collection of thoughtfully engineered applications.
        </p>
      </div>

      <div className="mx-auto max-w-7xl py-20">
        <div className="space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

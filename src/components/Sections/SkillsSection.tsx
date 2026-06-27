import { Server, Layout, BarChart3, Terminal } from 'lucide-react';
import SectionHeader from "../SectionHeader";
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardContent,
} from "../GlassCard";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend & Database",
      subtitle: "Core Strength",
      description: "I specialize in architecting secure, scalable server-side systems, designing relational and non-relational schemas, and building robust RESTful APIs.",
      items: [
        "Node.js (ExpressJS), Laravel (PHP), Python",
        "PostgreSQL, MySQL , MongoDB, Supabase, Firebase, Appwrite",
        "REST APIs & Postman",
      ],
    },
    {
      icon: Layout,
      title: "Frontend & Mobile",
      description: "I build responsive, highly-interactive user interfaces with clean architecture, excellent state management, and pixel-perfect implementation.",
      items: [
        "React.js (Context API), Tailwind CSS",
        "Flutter (Provider State Management)",
        "Figma – UI/UX Design & Prototyping",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Science & BI",
      description: "Turning raw data into intelligent insights and executive dashboards that drive real business decisions.",
      items: [
        "Python for Data Analysis & ML",
        "Power BI – Interactive Dashboards",
        "Data Science Training (GCI World)",
      ],
    },
    {
      icon: Terminal,
      title: "DevOps & Workflow",
      description: "Streamlined development environments, version control, and deployment practices for reliable delivery.",
      items: [
        "Linux, Docker",
        "Git & GitHub",
        "CI/CD Fundamentals",
      ],
    },
  ];

  return (
    <section className="bg-white py-24 text-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader
          number="02"
          category="Capabilities"
          title="Technical Expertise"
          description="Technologies I use to bring ideas to life"
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <GlassCard
                key={index}
                className="group hover:-translate-y-1 transition-all duration-30"
              >
                <GlassCardHeader className="pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <GlassCardTitle className="text-2xl text-black!">
                        {skill.title}
                      </GlassCardTitle>
                      {skill.subtitle && (
                        <span className="inline-block mt-1 text-xs font-medium tracking-widest px-3 py-1 bg-black/5 text-black/70 rounded-full">
                          {skill.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCardHeader>

                <GlassCardContent className="space-y-5">
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    {skill.description}
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <ul className="space-y-3">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/60 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCardContent>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;

import SectionHeader from "../SectionHeader";
import getImage from "../../utils/getImage";

export default function AboutSection() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* ==================== SECTION HEADER ==================== */}
        <SectionHeader
          number="01"
          category="Background"
          title="About Me"
          description="Driven by curiosity, built for impact"
        />
        {/* ======================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: Story */}
          <div className="lg:col-span-7 space-y-6 text-[17px] leading-relaxed text-black/80">
            <h3 className="text-4xl font-semibold tracking-tight text-black font-futura">
              Bridging Code, Design, and Business Intelligence
            </h3>

            <p>
              My journey into technology started with a simple question:{" "}
              <span className="italic">"How are video games made?"</span> That
              curiosity led me to pick up C# on my own, sparking a lifelong
              passion for software development. To blend my love for code with
              strategic thinking, I pursued a degree in Business Information
              Technology.
            </p>

            <p>
              While university laid the foundation for core programming
              concepts, my hunger to build pushed me to self-learn the modern
              full-stack ecosystem.
            </p>

            <p>
              For me, development isn't just about writing code, it’s about
              problem-solving. I focus on building digital experiences that are
              powerful on the backend and intuitive on the frontend, creating
              products users want to return to.
            </p>

            <p>
              In today’s AI-driven world, I believe great applications are
              powered by smart data. With a background in Business Intelligence
              and ongoing specialized training in Data Science with GCI World, I
              bridge the gap between application development and data insights.
            </p>

            <p>
              Whether building Flutter mobile apps, designing Laravel backends,
              or creating interactive Power BI dashboards, I always focus on
              scalability and business impact.
            </p>

            <p className="text-black/70">
              When I’m away from my IDE, you’ll usually find me gaming, watching
              football, listening to music, or exploring the latest tech trends.
            </p>

            <p className="font-medium text-black pt-4">
              Want to collaborate on a project or discuss a role? Let’s connect!
            </p>
          </div>

          {/* RIGHT: Quick Overview Glass Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-8 overflow-hidden rounded-3xl bg-white/75 backdrop-blur-2xl border border-white/60 shadow-[0_8px_40px_-8px_rgb(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgb(0,0,0,0.12)]">
              {/* Image Section */}
              <div className="relative overflow-hidden group aspect-5/4 lg:aspect-square">
                <img
                  src={getImage("benjamin.jpg")}
                  alt="Benjamin Mwambakulu, Full Stack Developer from Malawi"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] grayscale group-hover:grayscale-0 group-hover:contrast-[1.2] group-hover:saturate-[1.2] group-hover:brightness-[1.1]"
                />

                {/* Refined vignette + top fade for depth */}
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/30" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-10 pt-9">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] font-futura text-neutral-900 mb-9">
                  Quick Overview
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-[140px_1fr] gap-x-8">
                    <span className="text-xs font-medium uppercase tracking-[0.075em] text-neutral-500">
                      Core Focus
                    </span>
                    <span className="text-[15px] font-medium text-neutral-800">
                      Backend Architecture &amp; Mobile
                    </span>
                  </div>

                  <div className="grid grid-cols-[140px_1fr] gap-x-8">
                    <span className="text-xs font-medium uppercase tracking-[0.075em] text-neutral-500">
                      Education
                    </span>
                    <span className="text-[15px] font-medium text-neutral-800">
                      BSc in Business Information Technology
                    </span>
                  </div>

                  <div className="grid grid-cols-[140px_1fr] gap-x-8">
                    <span className="text-xs font-medium uppercase tracking-[0.075em] text-neutral-500">
                      Specialist
                    </span>
                    <span className="text-[15px] font-medium text-neutral-800">
                      Data Science (GCI World)
                    </span>
                  </div>

                  <div className="grid grid-cols-[140px_1fr] gap-x-8">
                    <span className="text-xs font-medium uppercase tracking-[0.075em] text-neutral-500">
                      Location
                    </span>
                    <span className="text-[15px] font-medium text-neutral-800">
                      Malawi{" "}
                      <span className="font-normal text-neutral-400">
                        (Open to Remote)
                      </span>
                    </span>
                  </div>

                  <div className="grid grid-cols-[140px_1fr] gap-x-8">
                    <span className="text-xs font-medium uppercase tracking-[0.075em] text-neutral-500">
                      Interests
                    </span>
                    <span className="text-[15px] font-medium text-neutral-800">
                      ML Models &amp; BI Dashboards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

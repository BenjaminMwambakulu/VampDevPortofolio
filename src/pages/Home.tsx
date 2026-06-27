import Navbar from "../components/Navbar";
import AboutSection from "../components/Sections/AboutSection";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import TechnicalSkills from "../components/Sections/SkillsSection";

function Home() {
  const sampleProjects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A personal portfolio built with React, TypeScript, and Framer Motion showcasing projects.",
      image: "https://i.pinimg.com/1200x/60/a4/17/60a417fbc2351c810da0408455a6ce69.jpg",
      techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      liveDemo: "https://example.com/portfolio",
    },
    {
      id: "2",
      title: "Chat App",
      description: "Real-time chat application using Socket.io and Node.js.",
      image: "https://i.pinimg.com/736x/3b/0a/5a/3b0a5a09856b8bcfcb6117d4cde79719.jpg",
      techStack: ["Node.js", "Express", "Socket.io", "React"],
      liveDemo: "https://example.com/chat",
    },
    {
      id: "3",
      title: "E‑commerce Store",
      description: "Full‑stack e‑commerce site with Stripe payments.",
      image: "https://i.pinimg.com/736x/f3/ad/af/f3adaf3842740917de8be77264bdbced.jpg",
      techStack: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      liveDemo: "https://example.com/store",
    },
  ];
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnicalSkills/>
      <ProjectsSection projects={sampleProjects} />
    </>
  );
}

export default Home;

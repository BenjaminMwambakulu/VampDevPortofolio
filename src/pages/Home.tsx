import Navbar from "../components/Navbar";
import AboutSection from "../components/Sections/AboutSection";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import TechnicalSkills from "../components/Sections/SkillsSection";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnicalSkills/>
      <ProjectsSection/>
    </>
  );
}

export default Home;

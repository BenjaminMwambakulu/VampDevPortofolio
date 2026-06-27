import Navbar from "../components/Navbar";
import AboutSection from "../components/Sections/AboutSection";
import CombinedFooter from "../components/Sections/CombinedSections";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import TechnicalSkills from "../components/Sections/SkillsSection";
import getImage from "../utils/getImage";

function Home() {
  const sampleProjects = [
    {
      id: "1",
      title: "TicketEase, Bus Ticket Booking System",
      description:
        "A comprehensive bus ticket booking platform that enables passengers to search routes, view schedules, reserve seats, make secure online payments, and manage bookings. The system also supports mobile access and USSD services for greater accessibility.",
      image: getImage("ticketEase.png"),
      techStack: [
        "React",
        "Chart.js",
        "Tailwind CSS",
        "Supabase",
        "Flutter",
        "Laravel",
        "AfricasTalking USSD API",
        "PayChangu Payment Gateway",
      ],
    },
    {
      id: "2",
      title: "TaskIT, Task Management Application",
      description:
        "A productivity-focused task management application that helps users organize work, track progress, manage deadlines, and stay informed with native Linux desktop notifications for upcoming tasks and updates.",
      image: getImage("taskit.png"),
      techStack: [
        "Laravel",
        "Blade",
        "SQLite",
        "Tailwind CSS",
        "Linux Notifications",
      ],
    },
    {
      id: "3",
      title: "E-commerce Website Template",
      description:
        "A modern, fully responsive e-commerce template featuring product catalogs, shopping cart functionality, and a seamless checkout experience. Designed as a scalable foundation for online stores.",
      image: getImage("ecommerceTemplate.png"),
      techStack: ["React", "Tailwind CSS"],
      liveDemo: "https://ecommerce-template-sable.vercel.app/",
    },
    {
      id: "4",
      title: "SaaS Landing Page Template",
      description:
        "A clean and conversion-focused landing page template for SaaS products, showcasing key features, pricing plans, customer testimonials, and compelling calls to action to maximize user engagement.",
      image: getImage("appTemplate.png"),
      techStack: ["React", "Tailwind CSS", "TypeScript"],
      liveDemo: "https://organizationlandingpage.appwrite.network/",
    },
  ];
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnicalSkills />
      <ProjectsSection projects={sampleProjects} />
      <CombinedFooter />
    </>
  );
}

export default Home;

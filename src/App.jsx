import { MotionConfig } from "framer-motion";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { usePortfolioData } from "./hooks/usePortfolioData";

export default function App() {
  const { skills, projects } = usePortfolioData();

  return (
    <MotionConfig reducedMotion="user">
      <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <CustomCursor />
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </>
    </MotionConfig>
  );
}

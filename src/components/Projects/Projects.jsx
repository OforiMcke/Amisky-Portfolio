import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpVariant } from "../../animations/variants";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const filters = ["All", "React", "JavaScript", "HTML/CSS"];

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "HTML/CSS") {
      return project.tags.includes("HTML") || project.tags.includes("CSS");
    }
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="projects">
      <motion.div
        className="projects-header"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <div className="section-label">03 — Selected work</div>
          <h2>
            Things I&apos;ve <span className="accent-gradient">built.</span>
          </h2>
        </div>
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="projectFilterPill"
                  className="filter-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="filter-label">{filter}</span>
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.num} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

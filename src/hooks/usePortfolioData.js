import { useEffect, useState } from "react";
import { projectsData, skillsData } from "../data/portfolioData";

export function usePortfolioData() {
  const [skills, setSkills] = useState(skillsData);
  const [projects, setProjects] = useState(projectsData);
  const [source, setSource] = useState("local");

  useEffect(() => {
    let active = true;
    fetch("/api/portfolio")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("API unavailable"))))
      .then((data) => {
        if (!active) return;
        if (Array.isArray(data.skills) && data.skills.length > 0) {
          setSkills(data.skills);
        }
        if (Array.isArray(data.projects) && data.projects.length > 0) {
          setProjects(data.projects);
        }
        setSource(data.source || "api");
      })
      .catch(() => {
        // Fallback to local portfolioData silently when backend is offline
      });

    return () => {
      active = false;
    };
  }, []);

  return { skills, projects, source };
}

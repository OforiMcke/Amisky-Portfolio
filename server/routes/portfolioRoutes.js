import { Router } from "express";
import { isDbConnected } from "../config/db.js";
import Project from "../models/Project.js";
import SkillGroup from "../models/SkillGroup.js";
import { defaultProjects, defaultSkills, seedPortfolio } from "../seed/seedData.js";

const router = Router();

router.get("/", async (_req, res) => {
  if (!isDbConnected()) {
    return res.json({ source: "fallback", skills: defaultSkills, projects: defaultProjects });
  }

  try {
    let skills = await SkillGroup.find().sort({ order: 1 }).lean();
    let projects = await Project.find().sort({ num: 1 }).lean();

    if (skills.length === 0 || projects.length === 0) {
      await seedPortfolio();
      skills = await SkillGroup.find().sort({ order: 1 }).lean();
      projects = await Project.find().sort({ num: 1 }).lean();
    }

    return res.json({ source: "mongodb", skills, projects });
  } catch (err) {
    return res.status(500).json({ error: "Failed to load portfolio data", details: err.message });
  }
});

export default router;

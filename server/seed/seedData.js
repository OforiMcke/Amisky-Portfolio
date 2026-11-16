import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { connectDB, isDbConnected } from "../config/db.js";
import Project from "../models/Project.js";
import SkillGroup from "../models/SkillGroup.js";
import { projectsData, skillsData } from "../../src/data/portfolioData.js";

export const defaultSkills = skillsData.map((group, idx) => ({ ...group, order: idx + 1 }));
export const defaultProjects = projectsData;

export async function seedPortfolio() {
  if (!isDbConnected()) return false;
  await SkillGroup.deleteMany({});
  await Project.deleteMany({});
  await SkillGroup.insertMany(defaultSkills);
  await Project.insertMany(defaultProjects);
  return true;
}

const isCliRun =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isCliRun) {
  await connectDB();
  const seeded = await seedPortfolio();
  console.log(seeded ? "Portfolio database seeded." : "Skipped seeding: MongoDB not connected.");
  process.exit(seeded ? 0 : 1);
}

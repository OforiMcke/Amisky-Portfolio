import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "../../animations/variants";
import SkillGroupCard from "./SkillGroupCard";
import "./Skills.css";

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-label">02 — Skills</div>
        <h2>
          My <span className="accent-gradient">toolbox.</span>
        </h2>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skills.map((group) => (
          <SkillGroupCard key={group.title} title={group.title} items={group.items} />
        ))}
      </motion.div>
    </section>
  );
}

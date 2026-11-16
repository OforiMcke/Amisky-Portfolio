import { motion } from "framer-motion";
import { pillVariant, scaleCardVariant, staggerContainer } from "../../animations/variants";

export default function SkillGroupCard({ title, items }) {
  return (
    <motion.div
      className="skill-group"
      variants={scaleCardVariant}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div className="skill-group-title"><span aria-hidden="true">✳</span> {title}</div>
      <motion.ul
        className="skill-list"
        variants={staggerContainer(0.06, 0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item) => {
          const name = typeof item === "string" ? item : item.name;
          const rawLevel = typeof item === "string" ? "Learning" : item.level || "Learning";
          const hasNumericLevel = typeof rawLevel === "number" || (typeof rawLevel === "string" && /^\d+$/.test(rawLevel));
          const numericLevel = Number(rawLevel);
          const level = hasNumericLevel
            ? numericLevel >= 80 ? "Confident" : numericLevel >= 60 ? "Working knowledge" : "Learning"
            : rawLevel;

          return (
            <motion.li key={name} className="skill-item" variants={pillVariant}>
              <span className="skill-name">{name}</span>
              <span className="skill-level">{level}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}

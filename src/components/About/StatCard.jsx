import { motion } from "framer-motion";
import { scaleCardVariant } from "../../animations/variants";

export default function StatCard({ num, label }) {
  return (
    <motion.div
      className="stat-card"
      variants={scaleCardVariant}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
    >
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}

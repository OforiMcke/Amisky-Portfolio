import { motion } from "framer-motion";
import { fadeUpVariant } from "../../animations/variants";
import "./Footer.css";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span>© 2026 Ofori Mckeown Julius. All rights reserved.</span>
      <span style={{ color: "var(--accent)" }}>Built with React &amp; Framer Motion.</span>
    </motion.footer>
  );
}

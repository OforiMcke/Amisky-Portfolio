import { motion } from "framer-motion";
import { aboutData } from "../../data/portfolioData";
import { slideLeftVariant, slideRightVariant, staggerContainer } from "../../animations/variants";
import StatCard from "./StatCard";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 — About</div>
      <div className="about-grid">
        <motion.div
          className="about-text"
          variants={slideLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>
            Who I am &amp;
            <br />
            <span className="accent-gradient">what I do.</span>
          </h2>
          {aboutData.paragraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
          <motion.div
            className="about-stats"
            variants={staggerContainer(0.1, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {aboutData.stats.map((stat) => (
              <StatCard key={stat.label} num={stat.num} label={stat.label} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about-img-wrap"
          variants={slideRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="about-img-box"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img src={aboutData.image} alt="Ofori Mckeown Julius" />
          </motion.div>
          <motion.div
            className="about-badge"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            ⚡ Full-Stack &amp; Systems
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

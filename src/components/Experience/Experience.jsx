import { motion } from "framer-motion";
import { educationData, experienceData } from "../../data/portfolioData";
import { fadeUpVariant, staggerContainer } from "../../animations/variants";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="journey-section">
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="section-label">04 — Experience & education</div>
        <h2>My learning <span className="accent-gradient">journey.</span></h2>
      </motion.div>

      <div className="journey-grid">
        <div className="journey-column">
          <h3 className="journey-heading">Experience</h3>
          <motion.div className="journey-list" variants={staggerContainer(0.1, 0.08)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {experienceData.map((item) => (
              <motion.article className="journey-card" key={`${item.organisation}-${item.role}`} variants={fadeUpVariant}>
                <span className="journey-type">{item.type}</span>
                <h4>{item.role}</h4>
                <p className="journey-organisation">{item.organisation}</p>
                <p className="journey-description">{item.description}</p>
                <div className="project-tags">
                  {item.skills.map((skill) => <span className="project-tag" key={skill}>{skill}</span>)}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="journey-column">
          <h3 className="journey-heading">Education</h3>
          {educationData.map((item) => (
            <article className="journey-card education-card" key={item.institution}>
              <span className="journey-type">{item.detail}</span>
              <h4>{item.qualification}</h4>
              <p className="journey-organisation">{item.institution}</p>
              <p className="journey-description">{item.description}</p>
            </article>
          ))}
          <div className="journey-note">
            <span aria-hidden="true">✦</span>
            <p>Learning is ongoing. I’m focused on strengthening my development skills through coursework, practical projects and collaboration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { heroData } from "../../data/portfolioData";
import { heroLineVariant, staggerContainer } from "../../animations/variants";
import HeroCodeCard from "./HeroCodeCard";
import "./Hero.css";
import "./HeroDecor.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid" />
      <motion.div
        className="hero-orb hero-orb-1"
        animate={{ scale: [1, 1.18, 1], x: [0, 30, 0], y: [0, -24, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-orb hero-orb-2"
        animate={{ scale: [1, 1.15, 1], x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />

      <div className="hero-inner">
        <motion.div
          className="hero-content"
          variants={staggerContainer(0.11, 0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-tag" variants={heroLineVariant}>
            {heroData.tag}
          </motion.div>
          <h1>
            <motion.span className="line" variants={heroLineVariant} whileHover={{ x: 8 }}>Building</motion.span>
            <motion.span className="line" variants={heroLineVariant} whileHover={{ x: 8 }}><span className="accent-gradient">modern</span></motion.span>
            <motion.span className="line" variants={heroLineVariant} whileHover={{ x: 8 }}>web</motion.span>
            <motion.span className="line" variants={heroLineVariant} whileHover={{ x: 8 }}>experiences.</motion.span>
          </h1>
          <motion.p className="hero-desc" variants={heroLineVariant}>
            {heroData.description}
          </motion.p>
          <motion.div className="hero-cta" variants={heroLineVariant}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects →
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <HeroCodeCard />
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="scroll-line" />
        Scroll to explore
      </motion.div>
    </section>
  );
}

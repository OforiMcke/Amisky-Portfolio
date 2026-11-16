import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./Navbar.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("#about");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });
  const currentTab = hoveredTab || activeTab;

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveTab("#contact");
        return;
      }
      const triggerY = window.innerHeight * 0.4;
      let current = "#about";
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top <= triggerY) {
          current = item.href;
        }
      }
      setActiveTab(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
    >
      <a href="#hero" className="nav-logo">
        <img src="/images/My.jpg" width="38" alt="OMJ Logo" />
        <span>OMJ</span>
      </a>
      <button className={`menu-toggle ${menuOpen ? "open" : ""}`} type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span /><span /><span />
      </button>
      <ul id="primary-navigation" className={`nav-links ${menuOpen ? "menu-open" : ""}`} onMouseLeave={() => setHoveredTab(null)}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={currentTab === item.href ? "active" : ""}
              onMouseEnter={() => setHoveredTab(item.href)}
              onClick={() => { setActiveTab(item.href); setMenuOpen(false); }}
            >
              {currentTab === item.href && (
                <motion.span
                  layoutId="navIndicator"
                  className="nav-pill"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                />
              )}
              <span className="nav-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-status">
        <span className="status-dot" />
        Available
      </div>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
    </motion.header>
  );
}

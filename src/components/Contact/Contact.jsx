import { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "../../data/portfolioData";
import { fadeUpVariant } from "../../animations/variants";
import ContactForm from "./ContactForm";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact">
      <motion.div
        className="contact-card"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-label">05 — Contact</div>
        <h2>
          Let&apos;s <span className="accent-gradient">work</span> together.
        </h2>
        <p className="contact-sub">{contactData.subtitle}</p>
        <ContactForm />
        <div className="contact-email-row">
          <a href={`mailto:${contactData.email}`} className="contact-email">
            {contactData.email}
          </a>
          <motion.button
            type="button"
            className="copy-btn"
            onClick={handleCopy}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            {copied ? "Copied! ✓" : "Copy Email"}
          </motion.button>
        </div>
        <div className="social-links">
          {contactData.socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              className="social-link"
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {social.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

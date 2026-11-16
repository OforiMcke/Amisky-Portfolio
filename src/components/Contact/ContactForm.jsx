import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpVariant } from "../../animations/variants";
import { contactData } from "../../data/portfolioData";

const initialForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Your message could not be sent. Please try again.");
      }

      setStatus({ type: "success", text: data.message || "Your message has been received." });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        text: `${error.message || "The contact service is unavailable."} You can email me directly at ${contactData.email}.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.form className="contact-form" variants={fadeUpVariant} onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span>Your name</span>
          <input type="text" name="name" autoComplete="name" placeholder="e.g. Ama Mensah" value={form.name} onChange={handleChange} maxLength={80} required />
        </label>
        <label className="form-field">
          <span>Email address</span>
          <input type="email" name="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} maxLength={254} required />
        </label>
      </div>
      <label className="form-field">
        <span>How can I help?</span>
        <textarea name="message" rows="5" placeholder="Tell me a little about your project or opportunity..." value={form.message} onChange={handleChange} maxLength={3000} required />
      </label>
      <motion.button type="submit" className="btn btn-primary" disabled={sending} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
        {sending ? "Sending..." : "Send message ↗"}
      </motion.button>
      <AnimatePresence>
        {status.text && (
          <motion.p role="status" aria-live="polite" className={`form-status ${status.type}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {status.text}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}

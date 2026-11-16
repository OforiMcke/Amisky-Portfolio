import { Router } from "express";
import { isDbConnected } from "../config/db.js";
import Message from "../models/Message.js";

const router = Router();
const recentRequests = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

router.post("/", async (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const recent = (recentRequests.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    return res.status(429).json({ error: "Too many messages. Please wait a few minutes and try again." });
  }

  const { name, email, message } = req.body || {};
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
  const cleanMessage = typeof message === "string" ? message.trim() : "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (cleanName.length > 80 || cleanEmail.length > 254 || cleanMessage.length > 3000) {
    return res.status(400).json({ error: "Please keep your name, email and message within the stated limits." });
  }
  if (!emailPattern.test(cleanEmail)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  recent.push(now);
  recentRequests.set(ip, recent);

  try {
    if (!isDbConnected()) {
      return res.status(503).json({
        error: "The contact service is not connected to its database yet. Please email me directly instead.",
      });
    }

    await Message.create({ name: cleanName, email: cleanEmail, message: cleanMessage });
    return res.status(201).json({
      source: "mongodb",
      message: "Your message has been saved. Thank you for reaching out.",
    });
  } catch {
    return res.status(500).json({ error: "We couldn't save your message. Please email me directly instead." });
  }
});

export default router;

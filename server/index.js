import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB, isDbConnected } from "./config/db.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", mongodb: isDbConnected() ? "connected" : "fallback" });
});

app.use("/api/portfolio", portfolioRoutes);
app.use("/api/contact", contactRoutes);

await connectDB();
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

import mongoose from "mongoose";

const skillGroupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    items: [
      {
        name: { type: String, required: true },
        level: { type: String, default: "Working knowledge" },
      },
    ],
    delay: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model("SkillGroup", skillGroupSchema);

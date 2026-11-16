import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    num: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    image: { type: String, default: null },
    link: { type: String, default: "#" },
    linkLabel: { type: String, default: "View Project →" },
    delay: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Project", projectSchema);

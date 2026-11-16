import mongoose from "mongoose";

let connected = false;

export async function connectDB() {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/amisky_portfolio";
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      dbName: "amisky_portfolio",
    });
    connected = true;
    console.log("MongoDB connected successfully.");
  } catch (err) {
    connected = false;
    console.warn("MongoDB unreachable — running in fallback mode:", err.message);
  }
}

export function isDbConnected() {
  return connected && mongoose.connection.readyState === 1;
}

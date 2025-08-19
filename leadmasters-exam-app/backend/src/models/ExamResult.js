import mongoose from "mongoose";

const examResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  score: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("ExamResult", examResultSchema);

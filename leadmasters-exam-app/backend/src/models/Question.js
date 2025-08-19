import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: Number // index of correct answer
});

export default mongoose.model("Question", questionSchema);

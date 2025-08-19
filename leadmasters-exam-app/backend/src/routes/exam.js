import express from "express";
import Question from "../models/Question.js";
import ExamResult from "../models/ExamResult.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get random 5 questions
router.get("/questions", authMiddleware, async (req, res) => {
  const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
  res.json(questions);
});

// Submit exam
router.post("/submit", authMiddleware, async (req, res) => {
  const { answers } = req.body;
  const questions = await Question.find();
  let score = 0;

  answers.forEach((ans, idx) => {
    if (questions[idx] && questions[idx].answer === ans) {
      score++;
    }
  });

  const result = await ExamResult.create({ user: req.user, score });
  res.json(result);
});

export default router;

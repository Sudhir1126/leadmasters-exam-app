import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Exam() {
  const navigate = useNavigate();

  const questions = [
    { question: "React is a ___?", options: ["Library", "Framework", "Language"], answer: "Library" },
    { question: "JSX stands for?", options: ["Java Syntax Extension", "JavaScript XML", "JSON XML"], answer: "JavaScript XML" },
    { question: "Which hook is used for state?", options: ["useEffect", "useState", "useContext"], answer: "useState" },
    { question: "What is virtual DOM?", options: ["Lightweight copy of DOM", "Real DOM", "Server"], answer: "Lightweight copy of DOM" },
    { question: "React is maintained by ___?", options: ["Google", "Facebook", "Microsoft"], answer: "Facebook" },
    { question: "Which method updates the state?", options: ["setState", "updateState", "changeState"], answer: "setState" },
    { question: "Props are ___?", options: ["Mutable", "Immutable", "Dynamic"], answer: "Immutable" },
    { question: "React components start with ___?", options: ["lowercase", "uppercase", "number"], answer: "uppercase" },
    { question: "Which hook runs after render?", options: ["useEffect", "useState", "useMemo"], answer: "useEffect" },
    { question: "React uses ___ DOM?", options: ["Virtual", "Real", "Shadow"], answer: "Virtual" },
    { question: "Which hook is used for context?", options: ["useEffect", "useState", "useContext"], answer: "useContext" },
    { question: "React Router is used for ___?", options: ["Routing", "Styling", "State management"], answer: "Routing" },
    { question: "Key prop helps with ___?", options: ["Styling", "Performance", "Data binding"], answer: "Performance" },
    { question: "React Fragment syntax is ___?", options: ["<>...</>", "<React.Fragment>...</React.Fragment>", "Both"], answer: "Both" },
    { question: "Which hook memoizes values?", options: ["useMemo", "useCallback", "useRef"], answer: "useMemo" },
  ];

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);
  const totalTime = 180;

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) score++;
    });
    navigate("/result", { state: { score, total: questions.length } });
  };

  const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  const progress = (Object.keys(answers).length / questions.length) * 100;
  const circleRadius = 36;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference * (1 - timeLeft / totalTime);

  return (
    <div style={{ display: "flex", maxWidth: "1000px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <div style={{
        width: "200px",
        borderRight: "2px solid #ddd",
        paddingRight: "10px",
        height: "80vh",
        overflowY: "auto"
      }}>
        <h2 style={{ textAlign: "center" }}>Questions</h2>
        {questions.map((q, i) => (
          <div
            key={i}
            onClick={() => setCurrentQuestion(i)}
            style={{
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: answers[i] ? "#2ecc71" : i === currentQuestion ? "#3498db" : "#f1f1f1",
              color: answers[i] || i === currentQuestion ? "#fff" : "#333",
              fontWeight: i === currentQuestion ? "bold" : "normal",
              transition: "0.3s",
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Main Panel */}
      <div style={{
        flex: 1,
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Circular Timer */}
          <div style={{ position: "relative", width: "80px", height: "80px" }}>
            <svg width="80" height="80">
              <circle cx="40" cy="40" r={circleRadius} stroke="#ddd" strokeWidth="8" fill="none" />
              <circle
                cx="40"
                cy="40"
                r={circleRadius}
                stroke="#e74c3c"
                strokeWidth="8"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s linear" }}
                transform="rotate(-90 40 40)"
              />
            </svg>
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              color: "#e74c3c"
            }}>
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ flex: 1, marginLeft: "20px", height: "20px", backgroundColor: "#ddd", borderRadius: "10px", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "#3498db", transition: "width 0.3s" }}></div>
          </div>
        </div>

        {/* Current Question Card */}
        <div style={{
          marginTop: "30px",
          padding: "25px",
          borderRadius: "12px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          transition: "all 0.3s",
        }}>
          <h3 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "20px" }}>
            {currentQuestion + 1}. {questions[currentQuestion].question}
          </h3>
          {questions[currentQuestion].options.map((option, i) => (
            <label
              key={i}
              style={{
                display: "block",
                margin: "10px 0",
                fontSize: "18px",
                cursor: "pointer",
                padding: "10px 15px",
                borderRadius: "8px",
                border: answers[currentQuestion] === option ? "2px solid #3498db" : "1px solid #ccc",
                backgroundColor: answers[currentQuestion] === option ? "#ecf5ff" : "#fff",
                transition: "all 0.2s",
              }}
            >
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value={option}
                checked={answers[currentQuestion] === option}
                onChange={() => handleChange(currentQuestion, option)}
                style={{ marginRight: "10px" }}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <button
            onClick={() => setCurrentQuestion(prev => Math.max(prev - 1, 0))}
            disabled={currentQuestion === 0}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: currentQuestion === 0 ? "#ccc" : "#3498db",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: currentQuestion === 0 ? "not-allowed" : "pointer"
            }}
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentQuestion(prev => Math.min(prev + 1, questions.length - 1))}
            disabled={currentQuestion === questions.length - 1}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: currentQuestion === questions.length - 1 ? "#ccc" : "#3498db",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: currentQuestion === questions.length - 1 ? "not-allowed" : "pointer"
            }}
          >
            Next
          </button>
        </div>

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "12px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#2ecc71",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#27ae60")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2ecc71")}
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
}

export default Exam;

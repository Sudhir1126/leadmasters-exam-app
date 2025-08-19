import React from "react";

const QuestionCard = ({ question, index, onAnswer }) => {
  return (
    <div style={{ margin: "20px", padding: "15px", border: "1px solid #ddd" }}>
      <h3>{index + 1}. {question.question}</h3>
      {question.options.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            name={`q${index}`}
            onChange={() => onAnswer(index, i)}
          /> {opt}
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;

import React from "react";

const Question = ({ question, onAnswer }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-80">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

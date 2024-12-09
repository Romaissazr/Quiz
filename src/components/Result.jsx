import React, { useState } from "react";

const Result = ({ score, total, onRestart, questions }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-80">
      <h2 className="text-xl font-semibold mb-4">Quiz Finished!</h2>
      <p className="mb-4">Your Score: {score} / {total}</p>
      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 mb-4"
      >
        {showAnswers ? "Hide Correct Answers" : "See Correct Answers"}
      </button>
      {showAnswers && (
        <div className="space-y-4 mb-4">
          {questions.map((q, index) => (
            <div key={index}>
              <p><strong>{q.question}</strong></p>
              <p>Correct Answer: {q.correctAnswer}</p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={onRestart}
        className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;

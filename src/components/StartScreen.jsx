import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-80 text-center">
      <h2 className="text-xl font-semibold mb-4">Welcome to the Quiz!</h2>
      <p className="mb-4">Test your knowledge with 10 random questions.</p>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;

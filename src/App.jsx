import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import StartScreen from "./components/StartScreen";

const App = () => {
  const allQuestions = [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "HyperLink Markup Language", "Hyper Transfer Language"], correctAnswer: "HyperText Markup Language" },
    { question: "Which element defines the title of a webpage?", options: ["<header>", "<title>", "<head>", "<meta>"], correctAnswer: "<title>" },
    { question: "Correct syntax for JavaScript comment?", options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"], correctAnswer: "// comment" },
    { question: "Valid CSS selector?", options: [".class", "#id", "element", "All of the above"], correctAnswer: "All of the above" },
    { question: "JavaScript method for finding element by ID?", options: ["getElementById()", "querySelector()", "getId()", "findId()"], correctAnswer: "getElementById()" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"], correctAnswer: "Cascading Style Sheets" },
    { question: "Link CSS to HTML?", options: ['<link rel="stylesheet" href="style.css">', '<style src="style.css">', '<css src="style.css">', '<stylesheet src="style.css">'], correctAnswer: '<link rel="stylesheet" href="style.css">' },
    { question: "Flex container in CSS?", options: ["display: flex;", "flexbox: true;", "display: block;", "flex-container: true;"], correctAnswer: "display: flex;" },
    { question: "Correct HTML for a list item?", options: ["<ul>", "<ol>", "<li>", "<list>"], correctAnswer: "<li>" },
    { question: "Center an element using CSS?", options: ["margin: auto;", "text-align: center;", "align-items: center;", "All of the above"], correctAnswer: "margin: auto;" },
   
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const shuffleQuestions = (questions) => {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
  };

  const handleStartQuiz = () => {
    setQuestions(shuffleQuestions(allQuestions));
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      setQuizStarted(false);
    }
  };

  const handleRestart = () => {
    handleStartQuiz();
  };

  return (
    <div className="App flex justify-center items-center h-full min-h-screen py-10 bg-gray-100">
      {!quizStarted && !showResults && <StartScreen onStart={handleStartQuiz} />}
      {quizStarted && !showResults && (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
      {showResults && (
        <Result
          score={score}
          total={questions.length}
          onRestart={handleRestart}
          questions={questions}
        />
      )}
    </div>
  );
};

export default App;

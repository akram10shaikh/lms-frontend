import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuizAnswer.css";
import AfterNavbar from "../components/AfterLoginNavbar";
import Footer from "../HomePage/footer";

const QuizAnswer = () => {
  const navigate = useNavigate();

  const quizResults = {
    title: "Quiz 1:Data Structure & Algorithms",
    assignment: "Assignment 1 . 30 Min",
    dueDate: "Dec 22, 11:30AM +04",
    grade: 35.89,
    passingGrade: 74,
    note: "You Need At Least 74% To Pass. We Keep Your Highest Score."
  };

  const questions = [
    {
      id: 1,
      question: "What is the primary purpose of analytical thinking?",
      options: [
        "To memorize information",
        "To break down complex information into smaller parts for better understanding",
        "To repeat information without understanding it",
        "To guess the outcome without data"
      ],
      selectedAnswer: 1,
      correctAnswer: 1,
      isCorrect: true,
      points: "1/1point",
      explanation: "To break down complex information into smaller parts for better understanding."
    },
    {
      id: 2,
      question: "Which of the following are key components of analytical thinking?",
      options: [
        "Observation",
        "Analysis",
        "Inference",
        "Memorization"
      ],
      selectedAnswer: 1,
      correctAnswer: 1,
      isCorrect: false,
      points: "0/1 Point",
      wrongFeedback: "Analysis. Review ways to integrate diverse knowledge in the 'Keys to Innovation' video."
    },
    {
      id: 3,
      question: "What is the primary purpose of analytical thinking?",
      options: [
        "To memorize information",
        "To break down complex information into smaller parts for better understanding",
        "To repeat information without understanding it",
        "To guess the outcome without data"
      ],
      selectedAnswer: 1,
      correctAnswer: 1,
      isCorrect: true,
      points: "1/1point",
      explanation: "To break down complex information into smaller parts for better understanding."
    },
    {
      id: 4,
      question: "Which of the following are key components of analytical thinking?",
      options: [
        "Observation",
        "Analysis",
        "Inference",
        "Memorization"
      ],
      selectedAnswer: 1,
      correctAnswer: 1,
      isCorrect: false,
      points: "0/1 Point",
      wrongFeedback: "Analysis. Review ways to integrate diverse knowledge in the 'Keys to Innovation' video."
    }
  ];

  return (
    <div className="quiz-answer-wrapper">
      <AfterNavbar />

      {/* Header */}
      <div className="quiz-answer-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>

        <div className="quiz-answer-title-section">
          <h1>{quizResults.title}</h1>
          <p>{quizResults.assignment}</p>
        </div>

        <div className="quiz-answer-dates">
          <p><strong>Due</strong> {quizResults.dueDate}</p>
        </div>
      </div>

      {/* Grade Banner */}
      <div className="grade-banner">
        <div className="grade-content">
          <p className="grade-label">Your Grade: <span className="grade-value">{quizResults.grade}%</span></p>
          <p className="grade-note">{quizResults.note}</p>
        </div>
        <button className="back-button">Back</button>
      </div>

      {/* Questions Container */}
      <div className="quiz-answer-container">
        {questions.map((q, index) => (
          <div key={q.id} className="answer-card">
            <div className="answer-card-header">
              <p className="question-number">{index + 1}. {q.question}</p>
              <span className={`points-badge ${q.isCorrect ? 'correct' : 'wrong'}`}>{q.points}</span>
            </div>

            <div className="options-container">
              {q.options.map((option, optIndex) => (
                <label 
                  key={optIndex} 
                  className={`answer-option ${q.selectedAnswer === optIndex ? 'selected' : ''} ${q.correctAnswer === optIndex && q.isCorrect ? 'correct-option' : ''}`}
                >
                  <input
                    type="radio"
                    checked={q.selectedAnswer === optIndex}
                    readOnly
                  />
                  <span className="radio-circle"></span>
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>

            {/* Feedback Box */}
            {q.isCorrect ? (
              <div className="feedback-box correct">
                <div className="feedback-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#10b981"/>
                    <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feedback-content">
                  <p className="feedback-title">Correct</p>
                  <p className="feedback-text">{q.explanation}</p>
                </div>
              </div>
            ) : (
              <div className="feedback-box wrong">
                <div className="feedback-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#ef4444"/>
                    <path d="M15 9l-6 6M9 9l6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="feedback-content">
                  <p className="feedback-title">Wrong</p>
                  <p className="feedback-text">{q.wrongFeedback}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Retry Button */}
        <button className="retry-btn" onClick={() => navigate('/quiz')}>Retry</button>
      </div>

      <Footer />
    </div>
  );
};

export default QuizAnswer;

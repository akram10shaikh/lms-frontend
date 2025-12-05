import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizPage.css";
import questions from "./utils/QuizPage.json";
import AfterNavbar from "../components/AfterLoginNavbar";
import Footer from "../HomePage/footer";
import SubmitPopup from "../popup/SubmitPopup";
import Loaderpopup from "../popup/Loaderpopup";
import MissingDetails from "../popup/MissingDetails";
import LeaveContinue from "../popup/LeaveContinue";

const QuizPage = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showError, setShowError] = useState(false);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showMissingPopup, setShowMissingPopup] = useState(false);
  const [showLeavePopup, setShowLeavePopup] = useState(false);
  
  // Timer state (5 minutes = 300 seconds)
  const [timeLeft, setTimeLeft] = useState(299);

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, submitted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionChange = (qId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qId]: option });
    setUnansweredQuestions(unansweredQuestions.filter(id => id !== qId));
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const unanswered = questions.filter(q => !selectedAnswers[q.id]).map(q => q.id);
    
    if (unanswered.length > 0) {
      setUnansweredQuestions(unanswered);
      setShowMissingPopup(true);
      return;
    }

    if (!agreed) {
      setShowError(true);
      setShowMissingPopup(true);
      return;
    }

    // Show submit popup
    setShowSubmitPopup(true);
  };

  const handleMissingContinue = () => {
    setShowMissingPopup(false);
    // Show submit popup even with missing answers
    setShowSubmitPopup(true);
  };

  const confirmSubmit = () => {
    setShowSubmitPopup(false);
    setShowLoader(true);
    
    // Show loader for 2 seconds then redirect
    setTimeout(() => {
      let correct = 0;
      questions.forEach((q) => {
        if (selectedAnswers[q.id] === q.answer) {
          correct++;
        }
      });
      setScore(correct);
      setSubmitted(true);
      setShowLoader(false);
      
      // Redirect to quiz answer page after submission
      navigate('/quiz-answer');
    }, 2000);
  };

  const handleBack = () => {
    // Check if there are any unanswered questions
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < questions.length) {
      setShowLeavePopup(true);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="quiz-page-wrapper">
      <AfterNavbar />
      
      <div className="quiz-header">
        <button className="back-btn" onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        
        <div className="quiz-title-section">
          <h1>Quiz 1:Data Structure & Algorithms</h1>
          <p>Assignment 1: 30 Min</p>
        </div>
        
        <div className="quiz-dates">
          <p><strong>Created Date:</strong> Dec 10, 12:30AM</p>
          <p><strong>Due</strong> Dec 22, 11:30AM</p>
        </div>
      </div>

      <div className="quiz-container">
        {/* Timer */}
        <div className="quiz-timer">
          <span className={timeLeft < 60 ? "timer-warning" : ""}>{formatTime(timeLeft)}</span>
        </div>

        {/* Questions */}
        {questions.map((q, index) => (
          <div key={q.id} className={`quiz-question ${unansweredQuestions.includes(q.id) ? 'unanswered' : ''}`}>
            <div className="question-header">
              <p className="question-text">{index + 1}. {q.question}</p>
              <span className="point-badge">1 Point</span>
            </div>

            <div className="options-list">
              {q.options.map((opt) => (
                <label key={opt} className={`quiz-option ${selectedAnswers[q.id] === opt ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt}
                    onChange={() => handleOptionChange(q.id, opt)}
                    disabled={submitted}
                    checked={selectedAnswers[q.id] === opt}
                  />
                  <span className="radio-custom"></span>
                  <span className="option-text">{opt}</span>
                </label>
              ))}
            </div>

            {unansweredQuestions.includes(q.id) && (
              <p className="error-text">You haven't answered this question</p>
            )}

            {submitted && (
              <p className={selectedAnswers[q.id] === q.answer ? "correct-answer" : "wrong-answer"}>
                {selectedAnswers[q.id] === q.answer ? "✅ Correct!" : `❌ Correct Answer: ${q.answer}`}
              </p>
            )}
          </div>
        ))}

        {/* Agreement Checkbox */}
        {!submitted && (
          <div className="agreement-section">
            <label className="agreement-checkbox">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  setShowError(false);
                }}
              />
              <span className="checkbox-custom"></span>
              <span className="agreement-text">
                I, <strong>Muhammed Fadil</strong>, acknowledge that submitting work that is not my own may lead to permanent failure of this course or the deactivation of my Learnpro account.
              </span>
            </label>
            
            {showError && (
              <p className="checkbox-error">You must select the checkbox in order to submit the assignment</p>
            )}
          </div>
        )}

        {/* Submit Button */}
        {!submitted && (
          <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        )}

        {/* Score Display */}
        {score !== null && (
          <div className="score-display">
            <p>You scored <strong>{score}</strong> out of {questions.length}</p>
          </div>
        )}
      </div>

      {/* Submit Popup */}
      {showSubmitPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "16px",
        }}>
          <SubmitPopup 
            onContinue={confirmSubmit}
            onCancel={() => setShowSubmitPopup(false)}
          />
        </div>
      )}

      {/* Missing Details Popup */}
      {showMissingPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "16px",
        }}>
          <MissingDetails 
            onContinue={handleMissingContinue}
            onCancel={() => setShowMissingPopup(false)}
          />
        </div>
      )}

      {/* Loader Popup */}
      {showLoader && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "16px",
        }}>
          <Loaderpopup />
        </div>
      )}

      {/* Leave Continue Popup */}
      {showLeavePopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "16px",
        }}>
          <LeaveContinue 
            onContinue={() => {
              setShowLeavePopup(false);
              navigate(-1);
            }}
            onCancel={() => setShowLeavePopup(false)}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default QuizPage;

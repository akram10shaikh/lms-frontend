import React, { useState } from "react";
import "./QuizPage.css";
import questions from "./utils/QuizPage.json"; // Adjust path as needed

const QuizPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (qId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qId]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correct++;
      }
    });
    setScore(correct);
    setSubmitted(true); // ✅ To show correct answers after submit
  };

  return (
    <div className="quiz-container">
      <h2>Quiz: Introduction to Web Development</h2>

      {questions.map((q) => (
        <div key={q.id} className="quiz-question">
          <p><strong>{q.id}. {q.question}</strong></p>

          {q.options.map((opt) => (
            <label key={opt} className="quiz-option">
              <input
                type="radio"
                name={`question-${q.id}`}
                value={opt}
                onChange={() => handleOptionChange(q.id, opt)}
                disabled={submitted} // ❌ disable input after submit
                checked={selectedAnswers[q.id] === opt}
              />
              {opt}
            </label>
          ))}

          {/* ✅ Show correct answer after submission */}
          {submitted && (
            <p className="correct-answer">
              ✅ Correct Answer: <strong>{q.answer}</strong>
            </p>
          )}
        </div>
      ))}

      {!submitted && (
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      )}

      {score !== null && (
        <p className="score-display">
          You scored <strong>{score}</strong> out of {questions.length}
        </p>
      )}
    </div>
  );
};

export default QuizPage;

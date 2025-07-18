import React, { useState } from "react";
import "./AssignmentPage.css";

const AssignmentPage = () => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const question = `
  Describe the key differences between HTML, CSS, and JavaScript.
  Provide examples where each is used in a web page.
  `;

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Answer Submitted:", answer);
    // Optionally send answer to backend here
  };

  return (
    <div className="assignment-container">
      <div className="assignment-box question-box">
        <h2>Assignment Question</h2>
        <p>{question}</p>
      </div>

      <div className="assignment-box answer-box">
        <h2>Your Answer</h2>
        <textarea
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        {submitted && <p className="confirmation">✅ Your answer has been submitted.</p>}
      </div>
    </div>
  );
};

export default AssignmentPage;


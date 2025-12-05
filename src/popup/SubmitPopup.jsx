import React from 'react';
import './SubmitPopup.css';

const SubmitPopup = ({ onContinue, onCancel }) => (
  <div className="submit-card">
    <h2>Ready to Submit?</h2>
    <div className="submit-actions">
      <button className="submit-btn primary" onClick={onContinue}>Continue</button>
      <button className="submit-btn secondary" onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

export default SubmitPopup;

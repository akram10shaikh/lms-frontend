import React from 'react';
import './SubmitLarge.css';

const SubmitLarge = ({ onContinue, onCancel }) => (
  <div className="submit-large">
    <h2>Ready To Submit?</h2>
    <div className="submit-large-actions">
      <button className="submit-btn primary" onClick={onContinue}>Continue</button>
      <button className="submit-btn secondary" onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

export default SubmitLarge;

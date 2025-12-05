import React from 'react';
import './LeaveContinue.css';

const LeaveContinue = ({ onContinue, onCancel }) => (
  <div className="leave-popup">
    <h2>Are You Sure Want To Leave?</h2>
    <p>You haven't completed this assignment yet. Are you sure you want to leave without submitting it?</p>
    <div className="leave-actions">
      <button className="leave-btn primary" onClick={onContinue}>Continue</button>
      <button className="leave-btn secondary" onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

export default LeaveContinue;

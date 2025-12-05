import React from 'react';
import './LeavePopuplarge.css';

const LeavePopuplarge = ({ onContinue, onCancel }) => (
  <div className="leave-popup-large">
    <h2>Are You Sure Want To Leave?</h2>
    <p>You haven't completed this assignment yet. Are you sure you want to leave without submitting it?</p>
    <div className="leave-actions-large">
      <button className="leave-btn large primary" onClick={onContinue}>Continue</button>
      <button className="leave-btn large secondary" onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

export default LeavePopuplarge;

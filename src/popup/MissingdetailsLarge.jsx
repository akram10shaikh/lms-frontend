import React from 'react';
import './MissingdetailsLarge.css';

const MissingdetailsLarge = ({ onContinue, onCancel }) => (
  <div className="missing-details-large">
    <h2>Missing Or Invalid Answers</h2>
    <div className="missing-details-large-message">
      <span className="warning-badge">!</span>
      <p>
        We Detected Some Incomplete Or Invalid Answers. Do You Still Want To Submit This Assessment?
      </p>
    </div>
    <div className="missing-details-large-actions">
      <button className="details-btn primary" onClick={onContinue}>Continue</button>
      <button className="details-btn secondary" onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

export default MissingdetailsLarge;

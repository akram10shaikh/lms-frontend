import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import './MissingDetails.css';

const MissingDetails = ({ onContinue, onCancel }) => (
  <div className="missing-card">
    <div className="missing-heading">
      <h2>Missing Or Invalid Answers</h2>
    </div>
    <div className="missing-body">
      <FontAwesomeIcon icon={faCircleExclamation} className="missing-icon" />
      <p>
        We detected some incomplete or invalid answers. Do you still want to submit this assessment?
      </p>
    </div>
    <div className="missing-actions">
      <button className="missing-btn primary" onClick={onContinue}>Continue</button>
      <button className="missing-btn secondary" onClick={onCancel}>Cancel</button>
    </div>
  </div>
);
export default MissingDetails;

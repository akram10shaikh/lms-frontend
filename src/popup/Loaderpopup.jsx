import React from 'react';
import './Loaderpopup.css';

const Loaderpopup = () => (
  <div className="loader-popup">
    <div className="loader-ring" aria-hidden="true" />
    <h2>Evaluating Your Submission...</h2>
    <p>Hang On! This Won't Take Long.</p>
  </div>
);

export default Loaderpopup;

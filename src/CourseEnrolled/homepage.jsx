import React from 'react';

const HomePage = () => {
  // Inline styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const cardTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333',
  };

  const progressBarContainerStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    marginBottom: '15px',
    overflow: 'hidden',
  };

  const progressBarStyle = {
    height: '100%',
    backgroundColor: '#4285f4',
    borderRadius: '4px',
    width: '20%',
  };

  const textStyle = {
    marginBottom: '10px',
    color: '#666',
  };

  const buttonStyle = {
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const taskNameStyle = {
    color: '#4285f4',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const taskDeadlineStyle = {
    color: '#666',
    fontSize: '0.9rem',
  };

  const classTimingStyle = {
    marginBottom: '15px',
    color: '#666',
  };

  const classNoteStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Continue Learning</h2>
      <div style={cardsContainerStyle}>
        {/* Course Progress Card */}
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Python Development for beginners</h3>
          <div style={progressBarContainerStyle}>
            <div style={progressBarStyle}></div>
          </div>
          <p style={textStyle}>Course : 20% completed</p>
          <p style={textStyle}>4 hours remaining</p>
          <p style={textStyle}>
            Next Module about to unlock : <strong>Module 3 (Functions)</strong>
          </p>
          <button style={buttonStyle}>Resume</button>
        </div>

        {/* Pending Quizzes and Assignments Card */}
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Pending Quiz and Assignments</h3>
          <div>
            <p style={taskNameStyle}>
              Quiz: <strong>Introduction to web development</strong>
            </p>
            <p style={taskDeadlineStyle}>Deadline : May 10 | 12:59 PM</p>
          </div>
          <div>
            <p style={taskNameStyle}>
              Assignment: <strong>Functions Implementation</strong>
            </p>
            <p style={taskDeadlineStyle}>Deadline : June 15 | 12:59 PM</p>
          </div>
        </div>

        {/* Live Classes Card */}
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Live classes details</h3>
          <p style={classTimingStyle}>Timing: 10:00 AM - 4:00 PM</p>
          <button style={buttonStyle}>Join Class!</button>
          <p style={classNoteStyle}>
            Note: Please join the classes 5 minutes prior in time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import './LearnPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLink, faKey, faFileAlt, faMagnifyingGlass, faPlay, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from './image/logo.png';
import avatar from './image/avatar.png';

const LearningDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="learning-container">
      <header className="learning-header">
        <div className="logo-container">
          <span className="logo-icon"><img src={logo} alt='logo'></img></span>
          <h1>LearnPro</h1>
        </div>
        <div className='search-container'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
            <input className="search-bar"  placeholder="What do you like to learn ?" />
        </div>
        <div className="header-buttons">
          <button className="header-btns">My Learnings</button>
          <button className="header-btn">Announcements</button>
          <div className="profile-wrapper" onClick={() => setShowDropdown(!showDropdown)}>
      <img src={avatar} alt="Profile" className="profile-image" />
      <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
      {showDropdown && (
        <div className="dropdown-menu">
          <p>My Profile</p>
          <p>Settings</p>
          <p>Logout</p>
        </div>
      )}
    </div>
        </div>
      </header>

  <main>
        <h2 className="title">My Learning</h2>
        <div className="tabs">
          <button className="tab active">In Progress</button>
          <button className="tab">Completed</button>
        </div>

        {/* Python Section */}
<div className="course-card-wrapper">
  <div className="course-header final-layout">

    <div className="course-left">
      <h3>Python Development for beginners</h3>
      <p>Course : 20% completed</p>
      <div className="progress-bar">
        <div className="progress python"></div>
      </div>
    </div>

    <div className="course-right">
      <div className="course-box-content">
        <h4>Python Development for beginners</h4>
      <p className="video-info">
        <FontAwesomeIcon icon={faPlay} /> Video 1.5 (15 minutes)
      </p>
      </div>
        <button className='res-btn'>Resume</button>
    </div>

    <span className="more-options">•••</span>
  </div>

  <div className="batch-section">
    <h4 className="batch-title">Batch Details</h4>
    <div className="batch-details">
      <div className="batch-item">
        <FontAwesomeIcon icon={faClock} />
        <div>
          <a href="#">Meeting timing</a>
          <p>10:30 AM - 3:00 PM</p>
        </div>
      </div>
      <div className="batch-item">
        <FontAwesomeIcon icon={faLink} />
        <div>
          <a href="#">Meeting Link</a>
          <p>https://meet.google.com/abc-de</p>
        </div>
      </div>
      <div className="batch-item">
        <FontAwesomeIcon icon={faKey} />
        <div>
          <a href="#">Meeting Password</a>
          <p>923 9146</p>
        </div>
      </div>
      <div className="meeting-box">
        <p className="meeting-status">Meeting already started</p>
        <button className="join-btn">Join Now !</button>
      </div>
    </div>

    <div className="quiz-section row-section">
      <div className="left-content">
        <FontAwesomeIcon icon={faFileAlt} />
        <div>
          <a href="#">Module Quiz: Introduction to Python development</a>
          <p>Graded Quiz</p>
        </div>
      </div>
      <div className="right-content">
        <p className="due-text">
          Due by <span className="due-date">April 19</span>,<br />
          11:59 PM IST.
        </p>
        <button className="test-btn">Proceed to Test</button>
      </div>
    </div>

    <div className="assignment-section row-section">
      <div className="left-content">
        <FontAwesomeIcon icon={faFileAlt} />
        <div>
          <a href="#">Submit your assignment</a>
          <p>Graded Assignment</p>
        </div>
      </div>
      <div className="right-content">
        <p className="due-text">
          Due by <span className="due-date">April 19</span>,<br />
          11:59 PM IST.
        </p>
        <button className="submit-btn">Submit Now</button>
      </div>
    </div>
  </div>
</div>

     

        {/* Web Section */}
 <div className="course-card-wrapper">
  <div className="course-header final-layout">

    <div className="course-left">
      <h3>Web Development for beginners</h3>
      <p>Course : 20% completed</p>
      <div className="progress-bar">
        <div className="progress python"></div>
      </div>
    </div>

    <div className="course-right">
      <div className="course-box-content">
        <h4>Web Development for beginners</h4>
      <p className="video-info">
        <FontAwesomeIcon icon={faPlay} /> Video 1.5 (15 minutes)
      </p>
      </div>
        <button className='res-btn'>Resume</button>
    </div>

    <span className="more-options">•••</span>
  </div>

  <div className="batch-section">
    <h4 className="batch-title">Batch Details</h4>
    <div className="batch-details">
      <div className="batch-item">
        <FontAwesomeIcon icon={faClock} />
        <div>
          <a href="#">Meeting timing</a>
          <p>10:30 AM - 3:00 PM</p>
        </div>
      </div>
      <div className="batch-item">
        <FontAwesomeIcon icon={faLink} />
        <div>
          <a href="#">Meeting Link</a>
          <p>https://meet.google.com/abc-de</p>
        </div>
      </div>
      <div className="batch-item">
        <FontAwesomeIcon icon={faKey} />
        <div>
          <a href="#">Meeting Password</a>
          <p>923 9146</p>
        </div>
      </div>
      <div className="meeting-box">
        <p className="meeting-status">Meeting already started</p>
        <button className="join-btn disabled">Join Now !</button>
      </div>
    </div>

    <div className="quiz-section row-section">
      <div className="left-content">
        <FontAwesomeIcon icon={faFileAlt} />
        <div>
          <a href="#">Module Quiz: Introduction to Web development</a>
          <p>Graded Quiz</p>
        </div>
      </div>
      <div className="right-content">
        <p className="due-text">
          Due by <span className="due-date">April 19</span>,<br />
          11:59 PM IST.
        </p>
        <button className="test-btn">Proceed to Test</button>
      </div>
    </div>

    <div className="assignment-section row-section">
      <div className="left-content">
        <FontAwesomeIcon icon={faFileAlt} />
        <div>
          <a href="#">Submit your assignment</a>
          <p>Graded Assignment</p>
        </div>
      </div>
      <div className="right-content">
        <p className="due-text">
          Due by <span className="due-date">April 19</span>,<br />
          11:59 PM IST.
        </p>
        <button className="submit-btn">Submit Now</button>
      </div>
    </div>
  </div>
</div>

    </main>

      <footer className="footer">
  <div className="footer-columns">
    <div className="footer-section">
      <h5>About</h5>
      <p>What We Offer</p>
      <p>Leadership</p>
      <p>Careers</p>
    </div>
    <div className="footer-section">
      <h5>Terms</h5>
      <p>Privacy</p>
      <p>Help Center</p>
      <p>Contact</p>
    </div>
    <div className="footer-section">
  <h5>Follow Us</h5>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
  <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
</div>

  </div>
  <div className="footer-store">
  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
    <img
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="Download on the App Store"
    />
  </a>
  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Get it on Google Play"
    />
  </a>
</div>
</footer>


    </div>
  );
};

export default LearningDashboard;

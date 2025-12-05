import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronDown, faChevronUp, faChevronRight, faCalendar, faLink, faKey, faFileAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import AfterNavbar from '../components/AfterLoginNavbar';
import Footer from '../HomePage/footer';
import './NextVideoScreen.css';

const NextVideoScreen = () => {
  const navigate = useNavigate();
  // Course Content expansion state
  const [contentExpanded, setContentExpanded] = useState({
    basics: false,
    manual: false,
    htmlcss: true, // default expanded per design
    javascript: false
  });

  const toggleContent = (key) => {
    setContentExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="next-video-container">
      <AfterNavbar />
      <div className="next-video-main" style={{ paddingTop: '72px' }}>
        {/* Sidebar */}
        <div className="course-sidebar">
          <div className="course-header">
            <h2>Web Development Bootcamp</h2>
            <Link to="/course-overview" className="overview-link">Overview</Link>
          </div>

          <div className="sidebar-section">
            <h4>Course Material</h4>
            <div className="module-list">
              <div className="module-item">
                <span className="module-number">1</span>
                <span>Module 1</span>
              </div>
              <div className="module-item">
                <span className="module-number">2</span>
                <span>Module 2</span>
              </div>
              <div className="module-item">
                <span className="module-number">3</span>
                <span>Module 3</span>
              </div>
              <div className="module-item">
                <span className="module-number">4</span>
                <span>Module 4</span>
              </div>
              <div className="module-item">
                <span className="module-number">5</span>
                <span>Module 5</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h4>Grades</h4>
          </div>

          <div className="sidebar-section" onClick={() => navigate('/notifications')} style={{ cursor: 'pointer' }}>
            <h4>Notifications</h4>
          </div>

          <div className="sidebar-section" onClick={() => navigate('/chatwindow')} style={{ cursor: 'pointer' }}>
            <h4>Chat with Trainer</h4>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Batch Details Card */}
          <div className="batch-details-card">
            <h3>Batch Details</h3>
            <div className="batch-content">
              <div className="batch-items">
                <div className="batch-item">
                  <FontAwesomeIcon icon={faCalendar} className="batch-icon" />
                  <div className="batch-info">
                    <span className="batch-label">Meeting timing</span>
                    <p className="batch-value">10:30 AM - 3:00 PM</p>
                  </div>
                </div>
                <div className="batch-item">
                  <FontAwesomeIcon icon={faLink} className="batch-icon" />
                  <div className="batch-info">
                    <span className="batch-label">Meeting Link</span>
                    <p className="batch-value">https://meet.google.com/abc-de</p>
                  </div>
                </div>
                <div className="batch-item">
                  <FontAwesomeIcon icon={faKey} className="batch-icon" />
                  <div className="batch-info">
                    <span className="batch-label">Meeting Password</span>
                    <p className="batch-value">923 9146</p>
                  </div>
                </div>
              </div>
              <div className="meeting-status">
                <span className="status-text">Meeting already started</span>
                <Link to="/learnpage/modulepage" className="join-btn">Join Now !</Link>
              </div>
            </div>
          </div>

          {/* Continue Learning Section */}
          <div className="continue-learning-section">
            <h3>Continue from where you left behind</h3>
            <div className="lesson-container">
              <div className="lesson-content">
                <h4>What is Web development in detail ?</h4>
                <div className="lesson-details">
                  <FontAwesomeIcon icon={faPlay} className="play-icon" />
                  <span className="video-info">Video 1.1 - What are forms in function ?</span>
                </div>
                <p className="lesson-description">
                  This video covers about the origin and future of web development
                </p>
                <Link to="/recorded-class-active" className="continue-btn">Continue</Link>
              </div>
              <div className="course-progress-card">
                <div className="progress-content">
                  <h4>Web Development Bootcamp course</h4>
                  <p>Course - 60% completed</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className="assignments-section">
            <h3>Pending Assignments and Quizes</h3>
            
            <div className="assignment-item">
              <div className="assignment-left">
                <FontAwesomeIcon icon={faFileAlt} className="assignment-icon" />
                <div className="assignment-info">
                  <h4>Module Quiz: Introduction to web development</h4>
                  <p>Graded Quiz - Due by April 19, 11:59 PM IST</p>
                </div>
              </div>
              <button className="proceed-btn">Proceed to Test</button>
            </div>

            <div className="assignment-item">
              <div className="assignment-left">
                <FontAwesomeIcon icon={faFileAlt} className="assignment-icon" />
                <div className="assignment-info">
                  <h4>Submit your assignment</h4>
                  <p>Graded Assignment - Due by April 19, 11:59 PM IST</p>
                </div>
              </div>
              <button className="submit-assignment-btn">Submit here</button>
            </div>
          </div>

          {/* Notifications */}
          <div className="notifications-section">
            <h3>Notifications for you</h3>
            
            <div className="notification-item">
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
              <div className="notification-content">
                <h4>Update your profile picture</h4>
                <p>Profile photo missing - please within 2 days to stay on track</p>
                <span className="notification-time">15 mins ago</span>
              </div>
            </div>

            <div className="notification-item">
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
              <div className="notification-content">
                <h4>Update your profile picture</h4>
                <p>Profile photo missing - please within 2 days to stay on track</p>
                <span className="notification-time">15 mins ago</span>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="description-section">
            <h3>Description</h3>
            <p>
              The Advanced Front-End Programming course prepares students, critical thinking, creativity, and analytical skills and 
              emphasizes them to effectively tackle complex challenges in web development. <Link to="#">View More...</Link>
            </p>
          </div>

          {/* Course Content */}
          <div className="course-content-section">
            <h3>Course Content</h3>
            <div className="content-modules">
              {/* Basics and Foundations */}
              <div className="module-section">
                <div
                  className="module-header"
                  onClick={() => toggleContent('basics')}
                >
                  <span className="module-title">Basics and Foundations</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`chevron-icon ${contentExpanded.basics ? 'expanded' : ''}`}
                  />
                </div>
                {contentExpanded.basics && (
                  <div className="module-content">
                    <p className="module-description">Foundation topics placeholder.</p>
                  </div>
                )}
              </div>

              {/* Manual Testing */}
              <div className="module-section">
                <div
                  className="module-header"
                  onClick={() => toggleContent('manual')}
                >
                  <span className="module-title">Manual Testing</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`chevron-icon ${contentExpanded.manual ? 'expanded' : ''}`}
                  />
                </div>
                {contentExpanded.manual && (
                  <div className="module-content">
                    <p className="module-description">Manual testing overview placeholder.</p>
                  </div>
                )}
              </div>

              {/* HTML & CSS */}
              <div className="module-section">
                <div
                  className="module-header"
                  onClick={() => toggleContent('htmlcss')}
                >
                  <span className="module-title html-css-title">HTML & CSS</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`chevron-icon ${contentExpanded.htmlcss ? 'expanded' : ''}`}
                  />
                </div>
                {contentExpanded.htmlcss && (
                  <div className="module-content">
                    <p className="module-description">
                      HTML structures web content like headings, text, and images, while CSS styles it with layout, colors, and fonts—together enabling clean, responsive website design.
                    </p>
                  </div>
                )}
              </div>

              {/* JavaScript Fundamentals */}
              <div className="module-section">
                <div
                  className="module-header"
                  onClick={() => toggleContent('javascript')}
                >
                  <span className="module-title">JavaScript Fundamentals</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`chevron-icon ${contentExpanded.javascript ? 'expanded' : ''}`}
                  />
                </div>
                {contentExpanded.javascript && (
                  <div className="module-content">
                    <p className="module-description">JavaScript core concepts placeholder.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NextVideoScreen;
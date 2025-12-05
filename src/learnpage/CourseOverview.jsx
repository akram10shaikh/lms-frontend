import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronDown, faChevronUp, faCheck, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import AfterNavbar from '../components/AfterLoginNavbar';
import Footer from '../HomePage/footer';
import './CourseOverview.css';

const CourseOverview = () => {
  const [expandedModules, setExpandedModules] = useState({ 1: true });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showUpNext, setShowUpNext] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);

  const toggleModule = (moduleNumber) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleNumber]: !prev[moduleNumber]
    }));
  };

  const toggleVideo = () => {
    if (!isVideoCompleted) {
      setIsVideoPlaying(!isVideoPlaying);
      if (!isVideoPlaying) {
        // Simulate video playing and completion
        simulateVideoProgress();
      }
    }
  };

  const simulateVideoProgress = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2; // Increase progress by 2% every 100ms for demo
      setVideoProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsVideoPlaying(false);
        setIsVideoCompleted(true);
        setShowUpNext(true); // Show "Up Next" when video completes
      }
    }, 100);
  };

  const startNextVideo = () => {
    setShowUpNext(false);
    setIsVideoCompleted(false);
    setVideoProgress(0);
    setIsVideoPlaying(true);
    // Navigate to next video screen
    window.location.href = '/next-video-screen';
  };

  const restartCurrentVideo = () => {
    setIsVideoCompleted(false);
    setVideoProgress(0);
    setShowUpNext(false);
    setIsVideoPlaying(false);
  };

  return (
    <div className="course-overview-container">
      <AfterNavbar />
      <main className="course-main" style={{ paddingTop: '72px' }}>
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-container">
          <div className="breadcrumb">
            <Link to="/learnpage" className="breadcrumb-link">Web development bootcamp</Link>
            <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-separator" />
            <Link to="#" className="breadcrumb-link">Best Practice Principles</Link>
            <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Video 1.1</span>
          </div>
          <div className="breadcrumb-navigation">
            <button className="nav-btn">
              <FontAwesomeIcon icon={faChevronLeft} />
              Previous
            </button>
            <button className="nav-btn next">
              Next
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div className="course-content-wrapper">
          {/* Left Sidebar - Course Content */}
          <div className="course-sidebar">
            <h3 className="sidebar-title">Course Content</h3>
            
            {/* Module 1 */}
            <div className="module-section">
              <div 
                className="module-header"
                onClick={() => toggleModule(1)}
              >
                <FontAwesomeIcon icon={expandedModules[1] ? faChevronDown : faChevronRight} />
                <span>Module 1</span>
              </div>
              
              {expandedModules[1] && (
                <div className="module-content">
                  <div className="module-subsection">
                    <div className="subsection-header">
                      <FontAwesomeIcon icon={expandedModules[1] ? faChevronDown : faChevronRight} />
                      <span>Recorded Sessions</span>
                    </div>
                    <div className="video-list">
                      <div className="video-item">
                        <FontAwesomeIcon icon={faPlay} className="video-icon" />
                        <div className="video-details">
                          <span className="video-title">Video 1.1 : What are forms in function ?</span>
                          <span className="video-duration">5 min</span>
                        </div>
                      </div>
                      <div className="video-item">
                        <FontAwesomeIcon icon={faPlay} className="video-icon" />
                        <div className="video-details">
                          <span className="video-title">Video 1.2 : What are forms in function ?</span>
                          <span className="video-duration">5 min</span>
                        </div>
                      </div>
                      <div className="video-item">
                        <FontAwesomeIcon icon={faPlay} className="video-icon" />
                        <div className="video-details">
                          <span className="video-title">Video 1.3 : What are forms in function ?</span>
                          <span className="video-duration">5 min</span>
                        </div>
                      </div>
                      <div className="video-item">
                        <FontAwesomeIcon icon={faPlay} className="video-icon" />
                        <div className="video-details">
                          <span className="video-title">Video 1.4 : What are forms in function ?</span>
                          <span className="video-duration">5 min</span>
                        </div>
                      </div>
                      <div className="video-item">
                        <FontAwesomeIcon icon={faPlay} className="video-icon" />
                        <div className="video-details">
                          <span className="video-title">Video 1.5 : What are forms in function ?</span>
                          <span className="video-duration">5 min</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="module-subsection">
                    <div className="subsection-header">
                      <FontAwesomeIcon icon={faChevronDown} />
                      <span>Live Sessions</span>
                    </div>
                  </div>

                  <div className="module-subsection">
                    <div className="subsection-header">
                      <FontAwesomeIcon icon={faChevronDown} />
                      <span>Assignments</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Module 2 */}
            <div className="module-section">
              <div 
                className="module-header"
                onClick={() => toggleModule(2)}
              >
                <FontAwesomeIcon icon={expandedModules[2] ? faChevronDown : faChevronRight} />
                <span>Module 2</span>
              </div>
            </div>

            {/* Module 3 */}
            <div className="module-section">
              <div 
                className="module-header"
                onClick={() => toggleModule(3)}
              >
                <FontAwesomeIcon icon={expandedModules[3] ? faChevronDown : faChevronRight} />
                <span>Module 3</span>
              </div>
            </div>

            {/* Module 4 */}
            <div className="module-section">
              <div 
                className="module-header"
                onClick={() => toggleModule(4)}
              >
                <FontAwesomeIcon icon={expandedModules[4] ? faChevronDown : faChevronRight} />
                <span>Module 4</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="main-content">
            {/* Video Player */}
            <div className="video-player-container">
              <div className="video-player">
                <div className="video-placeholder" onClick={toggleVideo}>
                  {/* Video overlay content */}
                  {showUpNext && isVideoCompleted && (
                    <div className="video-overlay">
                      <div className="video-status">
                        <div className="completion-icon">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="up-next-section">
                        <div className="up-next-label">Up Next</div>
                        <div className="next-video-title">How to integrate backend with design</div>
                        <div className="next-video-info">
                          <span className="video-number">8 min</span>
                          <div className="auto-play">
                            <span>Autoplay Disabled</span>
                          </div>
                        </div>
                        <button className="start-btn" onClick={startNextVideo}>START</button>
                      </div>
                    </div>
                  )}
                  {!showUpNext && !isVideoPlaying && !isVideoCompleted && (
                    <FontAwesomeIcon icon={faPlay} className="play-button" />
                  )}
                  {isVideoPlaying && (
                    <div className="video-playing-state">
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                </div>
                <div className="video-controls">
                  <button className="control-btn play-btn" onClick={toggleVideo}>
                    <FontAwesomeIcon icon={isVideoPlaying ? faPlay : faPlay} />
                  </button>
                  <button className="control-btn volume-btn">🔊</button>
                  <button className="control-btn replay-btn" onClick={restartCurrentVideo}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                    </svg>
                  </button>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${videoProgress}%` }}></div>
                  </div>
                  <span className="time-display">
                    {isVideoCompleted ? '5:28 / 5:28' : `${Math.floor((videoProgress / 100) * 328)}s / 5:28`}
                  </span>
                  <button className="control-btn replay-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 5V1L6 6l5.99 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                    </svg>
                  </button>
                  <button className="control-btn settings-btn">⚙️</button>
                  <button className="control-btn fullscreen-btn">⛶</button>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="course-description">
              <h2 className="course-title">Form Design using functions</h2>
              <div className="course-text">
                <p>
                  In this video, we'll dive into designing forms with HTML, CSS, and JavaScript, using functions to enhance user 
                  interactions. You'll learn how to structure your form with HTML, use CSS for a sleek, user-friendly 
                  interface, and use JavaScript functions for dynamic behavior like validation, form submission, and real-time updates.
                </p>
                <p>
                  We'll cover best practices for form handling, and show you how to implement smooth transitions and 
                  visual feedback. By the end, you'll be able to create functional forms that are both functional and aesthetically 
                  pleasing.
                </p>
                <p>
                  In addition to the basics, we'll explore best practices for building accessible forms that work seamlessly across 
                  devices and browsers. You'll learn how to create responsive designs that adapt to various screen sizes using CSS, as 
                  well as how to ensure your form is fully functional with JavaScript for a smooth experience. Whether you're building 
                  simple contact forms or complex registration processes, this video will equip you with the skills to create forms that 
                  not only look great but also deliver top-notch user experience and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseOverview;
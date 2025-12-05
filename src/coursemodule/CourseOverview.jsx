import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatPage from './components/ChatPage'; 
import NotificationPage from './components/NotificationPage';
import './CourseOverview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLink, faKey, faFileAlt, faMagnifyingGlass, faPlay, faChevronDown, faClipboard,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from './image/logo.png';
import avatar from './image/avatar.png';
import { faLinkedin, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
   const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); 
  const [showMore, setShowMore] = useState(false);
  const [activeHeader, setActiveHeader] = useState('my-learnings');
   const navigate = useNavigate();

  const handleModule1Click = () => {
    navigate('/module1');
  };

  const handleTestClick = () => {
    navigate('/quiz');
  };

  const handleAssignmentClick = () => {
    navigate('/assignment')
  };

  const goToNotifications = () => {
  navigate("/notification");
};

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleModules = () => {
    setIsExpanded(!isExpanded);
  };
  
  const toggleMore = () => {
    setShowMore(!showMore);
  };
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [activeTab, setActiveTab] = useState('course');


  return (

    <div className="dashboard-container">
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
          <button
            className={`header-btns ${activeHeader === 'my-learnings' ? 'active' : ''}`}
            onClick={() => setActiveHeader('my-learnings')}
          >
            My Learnings
          </button>
          <button
            className={`header-btn ${activeHeader === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveHeader('announcements')}
          >
            Announcements
          </button>
          <div className="profile-wrapper" onClick={() => setShowDropdown(!showDropdown)}>
      <img src={avatar} alt="Profile" className="profile-image" />
      <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
      {showDropdown && (
        <div className="dropdown-menu">
    <p>My Profile</p>
    <p>Settings</p>
    <p>Logout</p>
    <p onClick={() => {
      setShowSharePopup(true);
      setShowDropdown(false); 
    }}>
      Share
    </p>
  </div>
      )}
    </div>
        </div>
      </header>

      {showSharePopup && (
        <div className="share-overlay" onClick={() => setShowSharePopup(false)}>
          <div className="share-popup" onClick={(e) => e.stopPropagation()}>
            <h3>Share this page</h3>
            <p>Show your friends what they can learn on LearnPro</p>
      
            <div className="share-icons">
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://learnpro.com/courses/web-development" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:?subject=Check%20this%20course&body=https://learnpro.com/courses/web-development">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <span>Email</span>
              </a>
              <a href="https://wa.me/?text=https://learnpro.com/courses/web-development" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                <span>WhatsApp</span>
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://learnpro.com/courses/web-development" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com/share?url=https://learnpro.com/courses/web-development" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="icon" />
                <span>X</span>
              </a>
            </div>
      
            <div className="copy-section">
              <input type="text" value="https://learnpro.com/courses/web-development" readOnly />
              <button onClick={() => {
                navigator.clipboard.writeText('https://learnpro.com/courses/web-development');
                setShowSharePopup(false); // Auto close on copy
              }}>
                COPY
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-body">
        <div className="sidebar">
      <h3 className="sidebar-title">Web Development Bootcamp</h3>

      <ul className="sidebar-list">
        <li
  className={`sidebar-link ${activeTab === 'course' ? 'active' : ''}`}
  onClick={() => setActiveTab('course')}
>
  Overview
</li>

        <li className="sidebar-link dropdown" onClick={toggleModules}>
          <span>Course Material</span>
          <span className="arrow">{isExpanded ? '▲' : '▼'}</span>
        </li>

        {isExpanded && (
          <ul className="module-list">
            <li onClick={handleModule1Click} style={{ cursor: 'pointer' }}>
        <span className="dot" /> Module 1
      </li>
            <li><span className="dot" /> Module 2</li>
            <li><span className="dot" /> Module 3</li>
            <li><span className="dot" /> Module 4</li>
            <li><span className="dot" /> Module 5</li>
          </ul>
        )}

        <li className="sidebar-link">Grades</li>
        <li
  className={`sidebar-link ${activeTab === 'notification' ? 'active' : ''}`}
  onClick={() => setActiveTab('notification')}
>
  Notification
</li>
        
<li
  className={`sidebar-link ${activeTab === 'chat' ? 'active' : ''}`}
  onClick={() => navigate('/chatwindow')}
  style={{ cursor: 'pointer' }}
>
  Chat with Trainer
</li>

      </ul>
    </div>

        <main className="content">

          {activeTab === 'course' && (
  <>
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
    </div>

<div className="course-wrapper">
  <h2 className="section-title">Continue from where you left behind</h2>

  <div className="course-card">
    <div className="course-left">
      <div className="video-card">
        <div className="video-header">
          <h3 className="video-title">What is Web development in detail ?</h3>
          <button className="resume-btn">Resume</button>
        </div>

        <div className="video-meta">
          <FontAwesomeIcon icon={faPlay} className="video-icon" />
          <span>Video 1.2 (15 minutes)</span>
        </div>

        <p className="video-description">
          This video covers about the origin and<br/> usage of web development.
        </p>
      </div>
    </div>

    <div className="course-right">
      <h3>Web Development Bootcamp course</h3>
      <p>Course : 60% completed</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: '60%' }}></div>
      </div>
    </div>
  </div>
</div>

          <div className="pending-wrapper">
      <h2 className="pending-title">Pending Assignments and Quizzes</h2>

      {/* Quiz card */}
      <div className="task-card">
      <div className="task-left">
        <FontAwesomeIcon icon={faFileAlt} className="task-icon" />
        <div>
          <p className="task-heading">Module Quiz: Introduction to web development</p>
          <p className="task-sub">
            <strong>Graded Quiz</strong> - Due by April 19, 11:59 PM IST.
          </p>
        </div>
      </div>
      <button className="task-btn" onClick={handleTestClick}>Proceed to Test</button>
    </div>

      {/* Assignment card */}
      <div className="task-card">
      <div className="task-left">
        <FontAwesomeIcon icon={faClipboard} className="task-icon" />
        <div>
          <p className="task-heading">Submit your assignment</p>
          <p className="task-sub">
            <strong>Graded Assignment</strong> - Due by April 19, 11:59 PM IST.
          </p>
        </div>
      </div>
      <button className="task-btn" onClick={handleAssignmentClick}>
        Submit Now
      </button>
    </div>
    </div>

      {/* Notifications */}
      <h2 className="section-title">Notifications for you</h2>
      <div className="notification-box">
        <div className="notification-row">
          <div>
            <p className="notification-title">Update your profile picture</p>
            <p className="notification-desc">
              Profile photo missing – upload within 2 days to stay on track
            </p>
          </div>
          <span className="notification-time">10 mins ago</span>
        </div>

        <div className="notification-row">
          <div>
            <p className="notification-title">Update your profile picture</p>
            <p className="notification-desc">
              Profile photo missing – upload within 2 days to stay on track
            </p>
          </div>
          <span className="notification-time">10 mins ago</span>
        </div>
      </div>

      {/* Description */}
      <div className="course-description">
      <h2 className="section-title">Description</h2>
      <p className="description-text">
        The Advanced Front-End Programming course sharpens students’ critical thinking,
        creativity, and analytical skills and empowers them to effectively tackle complex
        challenges in web development.
        {showMore && (
          <>
            {" "}
            It covers advanced HTML, CSS, JavaScript, and modern frameworks like React, enabling students
            to build dynamic, responsive, and user-centric web applications. This course is ideal for learners
            looking to enhance their front-end skills and build a strong portfolio.
          </>
        )}
        <span className="view-more" onClick={toggleMore}>
          {showMore ? " View Less" : " View More....."}
        </span>
      </p>
    </div>

      {/* Course Content */}
      <div>
      <h2 className="section-title">Course Content</h2>
      <div className="accordion">
        {[
          {
            title: 'Basics and Foundations',
            content:
              'Introduces core software concepts and logical thinking essentials.',
          },
          {
            title: 'Manual Testing',
            content:
              'Learn how to test software manually to detect bugs and errors.',
          },
          {
            title: 'HTML & CSS',
            content:
              'HTML structures web content like headings, text, and images, while CSS styles it with layout, colors, and fonts—together enabling clean, responsive website design.',
          },
          {
            title: 'JavaScript Fundamentals',
            content:
              'Understand core JavaScript concepts like variables and functions.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-header">
              <span>{item.title}</span>
              <span className="accordion-arrow">
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </div>
            {activeIndex === index && item.content && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>

  </>
)}

{activeTab === 'chat' && <ChatPage />}
{activeTab === 'notification' && <NotificationPage />}

              
<footer className="footer">
  <div className="footer-info">
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
  </div>
</footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
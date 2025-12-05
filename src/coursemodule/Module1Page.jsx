import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Module1Page.css';
import Footer from '../HomePage/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faMagnifyingGlass,
  faPlay,
  faChevronDown,
  faClipboard,
  faBookOpen,
  faFileAlt,
  faVideo,
  faBook,
  faCheck,
  faVideoCamera,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from './image/logo.png';
import avatar from './image/avatar.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (cardId, e) => {
    e.stopPropagation();
    if (cardId === 'card1') {
      navigate('/live-class');
    } else {
      setOpenCardId(openCardId === cardId ? null : cardId);
    }
  };


  const toggleModules = () => {
    setIsExpanded(!isExpanded);
  };

  const [showSharePopup, setShowSharePopup] = useState(false);


  return (
    <div className="dashboard-container">
      <header className="learning-header">
        <div className="logo-container">
          <span className="logo-icon"><img src={logo} alt='logo' /></span>
          <h1>LearnPro</h1>
        </div>
        <div className='search-container'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
          <input className="search-bar" placeholder="What do you like to learn ?" />
        </div>
        <div className="header-buttons">
          <button className="header-btns" onClick={() => window.location.href = "/learnpage"}>
            My Learnings
          </button>
          <button className="header-btn">Announcements</button>
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
        {/* Sidebar */}
        <div className="sidebar">
          <h3 className="sidebar-title">Web Development Bootcamp</h3>
          <ul className="sidebar-list">
            <li className="sidebar-link active">Overview</li>

            <li className="sidebar-link dropdown" onClick={toggleModules}>
              <span>Course Material</span>
              <span className="arrow">{isExpanded ? '▲' : '▼'}</span>
            </li>

            {isExpanded && (
              <ul className="module-list">
                <li onClick={() => window.location.href = "/module1"}>
                  <span className="dot" /> Module 1
                </li>
                <li><span className="dot" /> Module 2</li>
                <li><span className="dot" /> Module 3</li>
                <li><span className="dot" /> Module 4</li>
                <li><span className="dot" /> Module 5</li>
              </ul>
            )}

            <li className="sidebar-link">Grades</li>
            <li className="sidebar-link" onClick={() => navigate('/notifications')} style={{ cursor: 'pointer' }}>Notifications</li>
            <li className="sidebar-link" onClick={() => navigate('/chatwindow')} style={{ cursor: 'pointer' }}>Chat with Trainer</li>
          </ul>
        </div>

        {/* Main section */}
        <main className="course-main">
          <div className="card">
  <div className="card-header" onClick={(e) => toggleCard('card1', e)}>
    <div className="card-header-content">
      <div className="card-title-row">
        <FontAwesomeIcon icon={faClock} className="card-icon" />
        <h4 className="card-title">Introduction to Web development and Fundamentals</h4>
      </div>
      <p className="card-subtitle">Live Classes</p>
    </div>
    <FontAwesomeIcon icon={faChevronDown} className={`card-arrow ${openCardId === 'card1' ? 'rotated' : ''}`} />
  </div>

  {openCardId === 'card1' && (
    <div className="card-body">
      <p className="card-description">
        Build real-world projects from scratch as you master the fundamentals of HTML, CSS, JavaScript, and dive into modern frameworks — all through interactive, instructor-led sessions.
      </p>

      <div className="card-meta">
        <span>
          <FontAwesomeIcon icon={faClock} /> <strong className='time'>10+ hours</strong> - video content left
        </span>
        <span>
          <FontAwesomeIcon icon={faBookOpen} /> <strong className='time'>1.2 hours</strong> of Readings left
        </span>
      </div>

      <div className="card-section">
        <h5>Video Content</h5>
        <p>
          All at your own pace with easy-to-follow video content, designed to ensure you understand each step clearly, while helping you master the material effectively.
        </p>
        <ul>
          <li>
  <FontAwesomeIcon icon={faVideo} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web development</a>
    <span>Video - 2 mins <em>(Approximately)</em></span>
  </div>
</li>
<li>
  <FontAwesomeIcon icon={faBookOpen} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web development fundamentals</a>
    <span>Reading - 10 mins <em>(Approximately)</em></span>
  </div>
</li>
<li>
  <FontAwesomeIcon icon={faVideo} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web Development</a>
    <span>Video - 2 mins <em>(Approximately)</em></span>
  </div>
</li>
<li>
  <FontAwesomeIcon icon={faBookOpen} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web Development fundamentals</a>
    <span>Reading - 10 mins <em>(Approximately)</em></span>
  </div>
</li>
<li>
  <FontAwesomeIcon icon={faVideo} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web Development</a>
    <span>Video - 2 mins <em>(Approximately)</em></span>
  </div>
</li>

        </ul>
      </div>

      <div className="card-section">
        <h5>Additional Information</h5>
        <p>
          All at your own pace with easy-to-follow reading material, providing clear explanations, examples, and key insights to help you grasp the concepts and apply them confidently.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFileAlt} className="li-icon"/> 
            <div className="li-text">
            <a href="#">Introduction to Web Development</a>
            <span>
              Video - 2 mins <em>(Approximately)</em>
            </span>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faBookOpen} className="li-icon" /> 
            <div className="li-text">
            <a href="#">Introduction to Web development fundamentals</a>{' '}
            <span>
              Reading - 10 mins <em>(Approximately)</em>
            </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )}
</div>

          

{/* section 2 */}

          <div className="card">
  <div className="card-header" onClick={(e) => toggleCard('card2', e)}>
    <div className="card-header-content">
      <div className="card-title-row">
        <FontAwesomeIcon icon={faPlay} className="card-icon" />
        <h4 className="card-title">Introduction to Web development and Fundamentals</h4>
      </div>
      <p className="card-subtitle">Recorded Classes</p>
    </div>
    <FontAwesomeIcon icon={faChevronDown} className={`card-arrow ${openCardId === 'card1' ? 'rotated' : ''}`} />
  </div>

  {openCardId === 'card2' && (
    <div className="card-body">
      <p className="card-description">
        Master HTML, CSS, Javascript, and modern frameworks by building real-world projects from scratch - with on - demand, step - by - step recorded lessons you can access anytime.
      </p>

      <div className="card-meta">
        <span>
          <FontAwesomeIcon icon={faClock} /> <strong className='time'>10+ hours</strong> - video content left
        </span>
        <span>
          <FontAwesomeIcon icon={faBookOpen} /> <strong className='time'>1.2 hours</strong> of Readings left
        </span>
        <span>
          <FontAwesomeIcon icon={faBook}/><strong className='time'>3 assessment</strong> left with graded feature
        </span>
      </div>

      <div className="card-section">
        <h5>Video Content</h5>
        <p>
          All at your own pace with easy-to-follow video content, designed to ensure you understand each step clearly, while helping you master the material effectively.
        </p>
        <ul>
          <li>
  <FontAwesomeIcon icon={faCheck} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web development</a>
    <span>Video - 2 mins <em>(Approximately)</em></span>
  </div>
</li>
<li>
  <FontAwesomeIcon icon={faCheck} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web development fundamentals</a>
    <span>Reading - 10 mins <em>(Approximately)</em></span>
  </div>
</li>
<li>
  <FontAwesomeIcon icon={faVideo} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web Development</a>
    <span>Video - 2 mins <em>(Approximately)</em></span>
  </div>
  <button className='sec2'>Resume</button>
</li>
<li>
  <FontAwesomeIcon icon={faBookOpen} className="li-icon" />
  <div className="li-text">
    <a href="#">Introduction to Web Development fundamentals</a>
    <span>Reading - 10 mins <em>(Approximately)</em></span>
  </div>
</li>
   </ul>
      </div>

      <div className="card-section">
        <h5>Additional Information</h5>
        <p>
          All at your own pace with easy-to-follow reading material, providing clear explanations, examples, and key insights to help you grasp the concepts and apply them confidently.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faVideoCamera} className="li-icon"/> 
            <div className="li-text">
            <a href="#">Introduction to Web Development</a>
            <span>
              Video - 2 mins <em>(Approximately)</em>
            </span>
            </div>
            <button className='sec2'>Resume</button>
          </li>
          <li>
            <FontAwesomeIcon icon={faBookOpen} className="li-icon" /> 
            <div className="li-text">
            <a href="#">Introduction to Web development fundamentals</a>{' '}
            <span>
              Reading - 10 mins <em>(Approximately)</em>
            </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )}
</div>
  
  {/* section 3 */}

    <div className="card">
  <div className="card-header" onClick={(e) => toggleCard('card3', e)}>
    <div className="card-header-content">
      <div className="card-title-row">
        <FontAwesomeIcon icon={faClipboard} className="card-icon" />
        <h4 className="card-title">Introduction to Web development and Fundamentals</h4>
      </div>
      <p className="card-subtitle">Assignments</p>
    </div>
    <FontAwesomeIcon icon={faChevronDown} className={`card-arrow ${openCardId === 'card1' ? 'rotated' : ''}`} />
  </div>

  {openCardId === 'card3' && (
    <div className="card-body">
      <p className="card-description">
        Apply what you've learned by working on real-world and projects designedd to strengthen your understanding of HTML, CSS, Javascript, and modern frameworks.
      </p>

      <div className="card-meta">
        <span>
          <FontAwesomeIcon icon={faBook}/><strong className='time'>5+ assessment</strong> with on spot grades and Feedbacks
        </span>
      </div>

      <table className="assignment-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Due Date</th>
            <th>Weight</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr key={i}>
              <td className='table' style={{marginTop:'25px'}}>
                <FontAwesomeIcon icon={faFileAlt} className="li-icon" />
                Module Quiz: Introduction to Python Development<br/> <span>Graded Quiz</span>
              </td>
              <td>April 25</td>
              <td>15%</td>
              <td>--</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

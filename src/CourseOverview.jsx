import React, { useState } from 'react';
import './CourseOverview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLink, faKey, faFileAlt, faMagnifyingGlass, faPlay, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from './image/logo.png';
import avatar from './image/avatar.png';

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
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

      <div className="dashboard-body">
        <aside className="sidebar">
          <h3>Web Development<br/> Bootcamp</h3>
          <nav>
            <p className='over'>Overview</p>
            <p>Course Material</p>
            <ul>
              <li>Module 1</li>
              <li>Module 2</li>
              <li>Module 3</li>
              <li>Module 4</li>
              <li>Module 5</li>
            </ul>
            <p>Grades</p>
            <p>Notifications</p>
            <p>Chat with Trainer</p>
          </nav>
        </aside>

        <main className="content">
          <div className='batch'>
            <h4 className="batch-title">Batch Details</h4>
            <section className="batch-detail">
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
            </section>
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

          <section className="assignments">
          <h2 className="section-title">Pending Assignments and Quizes</h2>
            <div className="assignment-card">
                  <FontAwesomeIcon icon={faFileAlt} />
              <p className='quiz'><strong>Module Quiz: Introduction to web development</strong></p>
              <p><strong>Graded Quiz</strong> - Due by April 19, 11:59 PM IST.</p>
              <button className="btn-blue">Proceed to Test</button>
            </div>
            <div className="assignment-card">
                  <FontAwesomeIcon icon={faFileAlt} />
              <p className='quiz'><strong>Submit your assignment</strong></p>
              <p><strong>Graded Assignment</strong> - Due by April 19, 11:59 PM IST.</p>
              <button className="btn-blue">Submit Now!</button>
            </div>
          </section>

          <section className="notifications">
            <p><strong>Update your profile picture</strong></p>
            <p>Profile photo missing - upload within 2 days to stay on track</p>
            <span>10 mins ago</span>
          </section>

          <section className="description">
            <p>The Advanced Front-End Programming course sharpens students' critical thinking, creativity, and analytical skills empowering them to effectively tackle complex challenges in web development. <a href="#">View More...</a></p>
          </section>

          <section className="course-content">
            <details>
              <summary>Basics and Foundations</summary>
            </details>
            <details>
              <summary>Manual Testing</summary>
            </details>
            <details open>
              <summary>HTML & CSS</summary>
              <p>HTML structures web content like headings, text, and images, while CSS styles it with layout, colors, and fonts—together enabling clean, responsive website design.</p>
            </details>
            <details>
              <summary>JavaScript Fundamentals</summary>
            </details>
          </section>

          <footer className="dashboard-footer">
            <div>
              <p>About</p>
              <p>What We Offer</p>
              <p>Leadership</p>
              <p>Careers</p>
            </div>
            <div>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Help Center</p>
              <p>Contact</p>
            </div>
            <div>
              <p>Follow Us</p>
              <p>Facebook | Twitter | LinkedIn | YouTube</p>
              <img src="/appstore.png" alt="App Store" />
              <img src="/playstore.png" alt="Play Store" />
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

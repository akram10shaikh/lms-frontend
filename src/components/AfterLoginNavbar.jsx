import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import avatar from '../learnpage/image/avatar.png';
import './AfterLoginNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const AfterNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prev) => !prev);
  };

  const normalizedPath = location.pathname.toLowerCase();
  const learningsPaths = [
    '/learnpage',
    '/learnpage/modulepage',
    '/course-overview',
    '/course-overview/web',
    '/course-overview/python',
    '/next-video-screen',
    '/quiz1',
    '/quiz',
    '/assignment',
  ];
  const isLearningsActive = learningsPaths.some((path) =>
    normalizedPath === path || normalizedPath.startsWith(`${path}/`)
  );
  const isAnnouncementsActive = normalizedPath === '/announcements';

  return (
    <nav className="after-nav">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="LearnPro" className="logo-image" />
          <span className="logo-text">LearnPro</span>
        </Link>
      </div>

      <div className="nav-center">
        <div className="search-field">
          <input
            type="text"
            placeholder="What do you like to learn ?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" className="filter-btn" aria-label="Filters">
            <FontAwesomeIcon icon={faSliders} />
          </button>
        </div>
      </div>

      <div className="nav-right">
        <Link
          to="/LearnPage"
          className={`nav-btn ${isLearningsActive ? 'primary' : 'outline'}`}
        >
          My Learnings
        </Link>
        <Link
          to="/announcements"
          className={`nav-btn ${isAnnouncementsActive ? 'primary' : 'outline'}`}
        >
          Announcements
        </Link>

        <div className="profile-wrapper" onClick={toggleProfileDropdown}>
          <img src={avatar} alt="Profile" className="profile-pic" />
          <FontAwesomeIcon icon={faChevronDown} className="profile-chevron" />
          {profileDropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/myProfile" className="dropdown-link">Profile</Link>
              <Link to="/settings" className="dropdown-link">Settings</Link>
              <Link to="/login" className="dropdown-link">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AfterNavbar;

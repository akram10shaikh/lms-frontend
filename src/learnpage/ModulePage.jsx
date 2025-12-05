import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faPlay, faBook, faClipboardList, faVideo, faBookOpen, faFileAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AfterNavbar from '../components/AfterLoginNavbar';
import Footer from '../HomePage/footer';
import './ModulePage.css';

// Custom SVG icons matching screenshot style
const LiveIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="resource-svg">
    {/* Outer circle */}
    <circle cx="20" cy="20" r="14" stroke="#000" strokeWidth="2" />
    {/* Lightning bolt */}
    <path d="M19 11l-4 9h5l-3 9 9-13h-6l2-5" fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    {/* Sparkle top-right */}
    <path d="M28 8l2 1.5 2-1.5-1.5 2 1.5 2-2-1.5-2 1.5 1.5-2-1.5-2Z" fill="#000" />
  </svg>
);

const RecordedIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="resource-svg">
    {/* Main rectangle */}
    <rect x="8" y="12" width="20" height="16" rx="2" stroke="#000" strokeWidth="2" />
    {/* Play triangle */}
    <path d="M15 17l6 3-6 3v-6Z" fill="#000" />
    {/* Skip forward bars */}
    <rect x="30" y="16" width="2" height="8" fill="#000" />
    <rect x="33" y="16" width="2" height="8" fill="#000" />
  </svg>
);

const AssignmentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="resource-svg">
    <rect x="10" y="10" width="20" height="24" rx="3" stroke="#111" strokeWidth="2" />
    <path d="M16 16h8M16 20h8M16 24h5" stroke="#111" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 10v4h-4v-4" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const resourceCards = [
  { id: 'live', Icon: LiveIcon, title: 'Introduction to Web development and Fundamentals', subtitle: 'Live Classes' },
  { id: 'recorded', Icon: RecordedIcon, title: 'Introduction to Web development and Fundamentals', subtitle: 'Recorded Classes' },
  { id: 'assignments', Icon: AssignmentIcon, title: 'Introduction to Web development and Fundamentals', subtitle: 'Assignments' }
];

const ModulePage = () => {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const videoContent = [
    { title: 'Introduction to Web development', duration: 'Video - 2 mins', type: 'video', completed: true },
    { title: 'Introduction to Web development fundamentals', duration: 'Reading - 10 mins', type: 'reading', completed: true },
    { title: 'Introduction to Web development', duration: 'Video - 2 mins', type: 'video', completed: false },
    { title: 'Introduction to Web development fundamentals', duration: 'Reading - 10 mins', type: 'reading', completed: false },
    { title: 'Introduction to Web development', duration: 'Video - 2 mins', type: 'video', completed: false }
  ];

  const additionalInfo = [
    { title: 'Introduction to Web development', duration: 'Video - 2 mins', type: 'video', completed: false },
    { title: 'Introduction to Web development fundamentals', duration: 'Reading - 10 mins', type: 'reading', completed: false }
  ];

  const assignmentItems = [
    { title: 'Module Quiz: Introduction to Python development', subtitle: 'Graded Quiz', dueDate: 'April 25', weight: '15%', grade: '--' },
    { title: 'Module Quiz: Introduction to Python development', subtitle: 'Graded Quiz', dueDate: 'April 25', weight: '15%', grade: '--' },
    { title: 'Module Quiz: Introduction to Python development', subtitle: 'Graded Quiz', dueDate: 'April 25', weight: '15%', grade: '--' },
    { title: 'Module Quiz: Introduction to Python development', subtitle: 'Graded Quiz', dueDate: 'April 25', weight: '15%', grade: '--' },
    { title: 'Module Quiz: Introduction to Python development', subtitle: 'Graded Quiz', dueDate: 'April 25', weight: '15%', grade: '--' }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return faVideo;
      case 'reading': return faBookOpen;
      default: return faFileAlt;
    }
  };

  const getIcon = (type, completed) => {
    if (completed) return faCheckCircle;
    return getTypeIcon(type);
  };

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="module-page-container">
      <AfterNavbar />
      <div className="module-page-main" style={{ paddingTop: '72px' }}>
        {/* Sidebar */}
        <div className="course-sidebar">
          <div className="course-header">
            <h2>Web Development Bootcamp</h2>
            <Link to="/course-overview" className="overview-link">Overview</Link>
          </div>
          <div className="sidebar-section">
            <h4>Course Material</h4>
            <div className="module-list">
              {[1,2,3,4,5].map(n => (
                <Link key={n} to="/module1" className="module-item-link">
                  <div className="module-item">
                    <span className="module-number">{n}</span>
                    <span>Module {n}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="sidebar-section"><h4>Grades</h4></div>
          <div className="sidebar-section" onClick={() => navigate('/notifications')} style={{ cursor: 'pointer' }}><h4>Notifications</h4></div>
          <div className="sidebar-section" onClick={() => navigate('/chat')} style={{ cursor: 'pointer' }}><h4>Chat with Trainer</h4></div>
        </div>

        {/* Main Content */}
        <div className="module-page-content">
          {/* Cards View */}
          <div className="resource-cards-wrapper">
            {resourceCards.map((card) => (
              <div key={card.id}>
                <div 
                  className="resource-card"
                  onClick={() => handleCardClick(card.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="resource-icon-box">
                    <card.Icon />
                  </div>
                  <div className="resource-text">
                    <h4>{card.title}</h4>
                    <span className="resource-subtitle">{card.subtitle}</span>
                  </div>
                  <FontAwesomeIcon icon={expandedCard === card.id ? faChevronDown : faChevronRight} className="resource-arrow" />
                </div>

                {/* Expanded Recorded Classes Content */}
                {card.id === 'recorded' && expandedCard === 'recorded' && (
                  <div className="expanded-content">
                    <div className="expanded-inner">
                      <div className="description-box">
                        <p className="section-description">
                          Master HTML, CSS, Javascript, and modern frameworks by building real-world projects from scratch - with on-demand, step-by-step recorded lessons you can access anytime.
                        </p>
                        <div className="content-stats">
                        <div className="stat-item">
                          <FontAwesomeIcon icon={faPlay} className="stat-icon" />
                          <span><span className="stat-value">10+ hours</span> - video content left</span>
                        </div>
                        <div className="stat-item">
                          <FontAwesomeIcon icon={faBook} className="stat-icon" />
                          <span><span className="stat-value">1.2 hours</span> of Readings left</span>
                        </div>
                        <div className="stat-item">
                          <FontAwesomeIcon icon={faClipboardList} className="stat-icon" />
                          <span><span className="stat-value">3 assessment</span> left with graded feature.</span>
                        </div>
                        </div>
                      </div>

                      <div className="video-section">
                        <h5 className="section-title">Video Content</h5>
                        <p className="section-description">
                          All at your own pace with easy-to-follow video content, designed to ensure you understand each step clearly, while helping you master the material effectively.
                        </p>
                        <ul className="content-list">
                          {videoContent.map((item, index) => (
                            <li key={index} className={`content-item ${item.completed ? 'completed' : ''}`}>
                              <FontAwesomeIcon icon={getIcon(item.type, item.completed)} className={`content-icon ${item.completed ? 'check-icon' : ''}`} />
                              <div className="content-text">
                                <a href="#" className="content-link">{item.title}</a>
                                <span className="content-meta">{item.duration} <em>(Approximately)</em></span>
                              </div>
                              {!item.completed && item.type === 'video' && (
                                <button className="resume-btn">Resume</button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="additional-section">
                        <h5 className="section-title">Additional Information</h5>
                        <p className="section-description">
                          All at your own pace with easy-to-follow reading material, providing clear explanations, examples, and key insights to help you grasp the concepts and apply them confidently.
                        </p>
                        <ul className="content-list">
                          {additionalInfo.map((item, index) => (
                            <li key={index} className={`content-item ${item.completed ? 'completed' : ''}`}>
                              <FontAwesomeIcon icon={getTypeIcon(item.type)} className="content-icon" />
                              <div className="content-text">
                                <a href="#" className="content-link">{item.title}</a>
                                <span className="content-meta">{item.duration}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expanded Live Classes Content */}
                {card.id === 'live' && expandedCard === 'live' && (
                  <div className="expanded-content">
                    <div className="expanded-inner">
                      <div className="description-box">
                        <p className="section-description">
                          Build real-world projects from scratch as you master the fundamentals of HTML, CSS, JavaScript, and dive into modern frameworks — all through interactive, instructor-led sessions.
                        </p>
                        <div className="content-stats-inline">
                          <div className="stat-item">
                            <FontAwesomeIcon icon={faPlay} className="stat-icon" />
                            <span><span className="stat-value">10+ hours</span> - video content left</span>
                          </div>
                          <div className="stat-item">
                            <FontAwesomeIcon icon={faBook} className="stat-icon" />
                            <span><span className="stat-value">1.2 hours</span> of Readings left</span>
                          </div>
                        </div>
                      </div>

                      <div className="video-section">
                        <h5 className="section-title">Video Content</h5>
                        <p className="section-description">
                          All at your own pace with easy-to-follow video content, designed to ensure you understand each step clearly, while helping you master the material effectively.
                        </p>
                        <ul className="content-list">
                          {videoContent.map((item, index) => (
                            <li key={index} className={`content-item ${item.completed ? 'completed' : ''}`}>
                              <FontAwesomeIcon icon={getTypeIcon(item.type)} className="content-icon" />
                              <div className="content-text">
                                <a href="#" className="content-link">{item.title}</a>
                                <span className="content-meta">{item.duration}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="additional-section">
                        <h5 className="section-title">Additional Information</h5>
                        <p className="section-description">
                          All at your own pace with easy-to-follow reading material, providing clear explanations, examples, and key insights to help you grasp the concepts and apply them confidently.
                        </p>
                        <ul className="content-list">
                          {additionalInfo.map((item, index) => (
                            <li key={index} className={`content-item ${item.completed ? 'completed' : ''}`}>
                              <FontAwesomeIcon icon={getIcon(item.type, item.completed)} className={`content-icon ${item.completed ? 'check-icon' : ''}`} />
                              <div className="content-text">
                                <a href="#" className="content-link">{item.title}</a>
                                <span className="content-meta">{item.duration}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {card.id === 'assignments' && expandedCard === 'assignments' && (
                  <div className="expanded-content">
                    <div className="expanded-inner">
                      <div className="description-box">
                        <p className="section-description">
                          Apply what you've learned by working on real-world tasks and projects designed to strengthen your understanding of HTML, CSS, JavaScript, and modern frameworks.
                        </p>
                        <div className="content-stats-inline">
                          <div className="stat-item">
                            <FontAwesomeIcon icon={faClipboardList} className="stat-icon" />
                            <span><span className="stat-value">5+ assessment</span> with on spot grades and Feedbacks</span>
                          </div>
                        </div>
                      </div>
                      <div className="assignment-table-wrapper">
                        <div className="assignment-table-head">
                          <span>Item</span>
                          <span>Due Date</span>
                          <span>Weight</span>
                          <span>Grade</span>
                        </div>
                        {assignmentItems.map((item, index) => (
                          <div key={index} className="assignment-table-row">
                            <div className="assignment-item">
                              <FontAwesomeIcon icon={faClipboardList} className="table-icon" />
                              <div>
                                <p className="assignment-title">{item.title}</p>
                                <span className="assignment-subtitle">{item.subtitle}</span>
                              </div>
                            </div>
                            <span>{item.dueDate}</span>
                            <span>{item.weight}</span>
                            <span>{item.grade}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModulePage;

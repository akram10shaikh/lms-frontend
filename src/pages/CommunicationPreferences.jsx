import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AfterNavbar from '../components/AfterLoginNavbar';
import Footer from '../HomePage/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCalendar, faBars, faTrophy, faShoppingCart, faQuestionCircle, faCreditCard, faHeart, faBell, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const CommunicationPreferences = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('communication');
  
  // Toggle states for notifications
  const [optOutAll, setOptOutAll] = useState(false);
  const [personalizedCourse, setPersonalizedCourse] = useState(true);
  const [promotions, setPromotions] = useState(true);
  const [surveys, setSurveys] = useState(true);

  useEffect(() => {
    if (location.state?.activeItem) {
      setActiveItem(location.state.activeItem);
    }
  }, [location.state]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarItems = [
    { id: 'account', label: 'Account', icon: faUser, path: '/settings' },
    { id: 'communication', label: 'Communication Preferences', icon: faEnvelope, path: '/communication-preferences' },
    { id: 'calendar', label: 'Calendar Sync', icon: faCalendar, path: '/calendar-sync' },
    { id: 'accomplishments', label: 'My Accomplishments', icon: faTrophy, path: '/my-accomplishments' },
    { id: 'purchases', label: 'My Purchases', icon: faShoppingCart, path: '/my-purchases' },
    { id: 'payment', label: 'Payment', icon: faCreditCard, path: '/payment' },
    { id: 'thankInstructor', label: 'Thank Instructor', icon: faHeart, path: '/thank-instructor/1' },
    { id: 'accountNotifications', label: 'Account & Notifications', icon: faBell, path: '/account-notifications' },
    { id: 'ticketRequest', label: 'Ticket Request', icon: faTicketAlt, path: '/ticket-request' },
    { id: 'help', label: 'Help Center', icon: faQuestionCircle, path: '/help-center' },
  ];

  const handleSaveDetails = () => {
    const preferences = {
      optOutAll,
      personalizedCourse,
      promotions,
      surveys,
    };
    localStorage.setItem('communicationPreferences', JSON.stringify(preferences));
    alert('Preferences saved successfully!');
  };

  // Load preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('communicationPreferences');
    if (saved) {
      const prefs = JSON.parse(saved);
      setOptOutAll(prefs.optOutAll || false);
      setPersonalizedCourse(prefs.personalizedCourse ?? true);
      setPromotions(prefs.promotions ?? true);
      setSurveys(prefs.surveys ?? true);
    }
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <AfterNavbar />
      
      <div style={{
        ...styles.mainContainer,
        flexDirection: isMobile ? 'column' : 'row',
      }}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            style={styles.mobileMenuBtn} 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
            {sidebarOpen ? 'Hide Menu' : 'Show Menu'}
          </button>
        )}

        {/* Sidebar */}
        <aside style={{
          ...styles.sidebar,
          display: isMobile ? (sidebarOpen ? 'block' : 'none') : 'block',
          width: isMobile ? '100%' : '240px',
          borderRight: isMobile ? 'none' : '1px solid #e5e7eb',
          borderBottom: isMobile ? '1px solid #e5e7eb' : 'none',
          padding: isMobile ? '16px 0' : '32px 0',
        }}>
          <h2 style={{
            ...styles.sidebarTitle,
            fontSize: isMobile ? '18px' : '20px',
            margin: isMobile ? '0 0 16px' : '0 0 24px',
          }}>Settings</h2>
          
          <nav style={styles.sidebarNav}>
            {sidebarItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
              <Link
                key={item.id}
                to={item.path}
                style={{
                  ...styles.sidebarItem,
                  ...(isActive ? styles.sidebarItemActive : {}),
                  textDecoration: 'none',
                }}
                onClick={() => setActiveItem(item.id)}
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  style={{
                    ...styles.sidebarIcon,
                    color: isActive ? '#3b82f6' : '#6b7280',
                  }}
                />
                <span style={{
                  ...styles.sidebarLabel,
                  color: isActive ? '#3b82f6' : '#374151',
                  fontWeight: isActive ? '600' : '400',
                }}>
                  {item.label}
                </span>
              </Link>
            )})}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{
          ...styles.content,
          padding: isMobile ? '24px 16px' : '40px 60px',
          flex: 1,
        }}>
          <h1 style={styles.pageTitle}>Communication Preferences</h1>

          {/* Email Notifications Card */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Email notifications</h3>
            
            <label style={styles.optOutRow}>
              <input
                type="radio"
                checked={optOutAll}
                onChange={() => setOptOutAll(true)}
                style={styles.radioInput}
              />
              <div style={styles.optOutText}>
                <span style={styles.optOutLabel}>Opt-out of all LearnPro emails (Optional)</span>
                <span style={styles.optOutDescription}>Disable all notifications from LearnPro</span>
              </div>
            </label>
          </div>

          {/* All Communication Settings in One Card */}
          <div style={styles.card}>
            {/* Communication from LearnPro */}
            <h3 style={styles.sectionTitle}>Communication from LearnPro</h3>

            <div style={styles.toggleRow}>
              <span style={styles.toggleLabel}>Personalized course recommendations</span>
              <label style={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={personalizedCourse}
                  onChange={() => setPersonalizedCourse(!personalizedCourse)}
                  style={styles.toggleInput}
                />
                <span style={{
                  ...styles.toggleSlider,
                  background: personalizedCourse ? '#3b82f6' : '#d1d5db',
                }}>
                  <span style={{
                    ...styles.toggleKnob,
                    transform: personalizedCourse ? 'translateX(20px)' : 'translateX(0)',
                  }}></span>
                </span>
              </label>
            </div>

            <div style={styles.toggleRow}>
              <span style={styles.toggleLabel}>Notifications about promotions, new courses and programs, and special events</span>
              <label style={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={promotions}
                  onChange={() => setPromotions(!promotions)}
                  style={styles.toggleInput}
                />
                <span style={{
                  ...styles.toggleSlider,
                  background: promotions ? '#3b82f6' : '#d1d5db',
                }}>
                  <span style={{
                    ...styles.toggleKnob,
                    transform: promotions ? 'translateX(20px)' : 'translateX(0)',
                  }}></span>
                </span>
              </label>
            </div>

            <div style={{...styles.toggleRow, borderBottom: 'none', marginBottom: '24px'}}>
              <span style={styles.toggleLabel}>Surveys and invitations to help us improve LearnPro content and your experience</span>
              <label style={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={surveys}
                  onChange={() => setSurveys(!surveys)}
                  style={styles.toggleInput}
                />
                <span style={{
                  ...styles.toggleSlider,
                  background: surveys ? '#3b82f6' : '#d1d5db',
                }}>
                  <span style={{
                    ...styles.toggleKnob,
                    transform: surveys ? 'translateX(20px)' : 'translateX(0)',
                  }}></span>
                </span>
              </label>
            </div>

            {/* Communication about courses */}
            <h3 style={styles.sectionTitle}>Communication about courses you are enrolled in</h3>
            <p style={styles.sectionDescription}>
              Each course may send three types of emails. Announcements are sent from your course instructor, and may include special events, new materials, and learning or job resources exclusively offered to those enrolled in the course. Reminders are related to your course progress, such as deadline reminders. Discussion Forums notifies you of replies on one of your threads, likes/dislikes or any other communication directed towards you. You can choose whether or not you want to subscribe to each of these types of emails for each course.
            </p>
          </div>

          {/* Save Button */}
          <button style={styles.saveButton} onClick={handleSaveDetails}>
            Save details
          </button>
        </main>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
  },
  mainContainer: {
    display: 'flex',
    marginTop: '72px',
    minHeight: 'calc(100vh - 72px - 200px)',
  },
  mobileMenuBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    background: 'white',
    border: 'none',
    borderBottom: '1px solid #e5e7eb',
    width: '100%',
    fontSize: '14px',
    fontWeight: '500',
    color: '#3b82f6',
    cursor: 'pointer',
  },
  sidebar: {
    width: '240px',
    background: 'white',
    borderRight: '1px solid #e5e7eb',
    padding: '32px 0',
    flexShrink: 0,
  },
  sidebarTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 24px',
    padding: '0 24px',
  },
  sidebarNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 24px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  sidebarItemActive: {
    background: '#eff6ff',
    borderLeft: '3px solid #3b82f6',
    paddingLeft: '21px',
  },
  sidebarIcon: {
    fontSize: '16px',
    width: '20px',
  },
  sidebarLabel: {
    fontSize: '14px',
  },
  content: {
    flex: 1,
    padding: '40px 60px',
  },
  pageTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 24px',
  },
  card: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    margin: '0 0 16px',
  },
  optOutRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    cursor: 'pointer',
  },
  radioInput: {
    width: '20px',
    height: '20px',
    marginTop: '2px',
    accentColor: '#3b82f6',
  },
  optOutText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  optOutLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
  },
  optOutDescription: {
    fontSize: '13px',
    color: '#6b7280',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    margin: '0 0 16px',
  },
  sectionDescription: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0,
  },
  toggleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    borderBottom: '1px solid #f3f4f6',
  },
  toggleLabel: {
    fontSize: '14px',
    color: '#374151',
    flex: 1,
    paddingRight: '16px',
  },
  toggleSwitch: {
    position: 'relative',
    display: 'inline-block',
    width: '44px',
    height: '24px',
    flexShrink: 0,
  },
  toggleInput: {
    opacity: 0,
    width: 0,
    height: 0,
    position: 'absolute',
  },
  toggleSlider: {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#d1d5db',
    transition: '0.3s',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    padding: '2px',
  },
  toggleKnob: {
    width: '20px',
    height: '20px',
    background: 'white',
    borderRadius: '50%',
    transition: '0.3s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  saveButton: {
    padding: '14px 32px',
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px',
  },
};

export default CommunicationPreferences;

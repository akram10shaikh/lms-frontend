import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AfterNavbar from '../components/AfterLoginNavbar';
import Footer from '../HomePage/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCalendar, faBars, faTrophy, faShoppingCart, faQuestionCircle, faCreditCard, faHeart, faBell, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

const CalendarSync = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  const [activeItem, setActiveItem] = useState('calendar');

  useEffect(() => {
    if (location.state?.activeItem) {
      setActiveItem(location.state.activeItem);
    }
  }, [location.state]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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

  const styles = {
    pageWrapper: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
    },
    mainContainer: {
      display: 'flex',
      marginTop: '72px',
      minHeight: 'calc(100vh - 72px)',
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
      maxWidth: '800px',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '32px',
      maxWidth: '600px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '8px',
    },
    cardDescription: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '24px',
    },
    divider: {
      height: '1px',
      backgroundColor: '#e5e7eb',
      margin: '24px 0',
    },
    toggleRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px',
    },
    toggleLabel: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#111',
    },
    toggleDescription: {
      fontSize: '13px',
      color: '#6b7280',
      marginTop: '4px',
      lineHeight: '1.5',
    },
    toggleSwitch: {
      position: 'relative',
      display: 'inline-block',
      width: '48px',
      height: '28px',
      flexShrink: 0,
    },
    toggleInput: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    toggleSlider: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '14px',
      transition: '0.3s',
    },
    toggleKnob: {
      position: 'absolute',
      content: '',
      height: '22px',
      width: '22px',
      left: '3px',
      bottom: '3px',
      backgroundColor: '#fff',
      borderRadius: '50%',
      transition: '0.3s',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    sectionTitle: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#111',
      marginBottom: '16px',
      marginTop: '24px',
    },
    calendarButtons: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    },
    calendarButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '14px 28px',
      border: '2px solid #3b82f6',
      borderRadius: '8px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: '500',
      color: '#3b82f6',
      transition: 'all 0.2s',
    },
    googleIcon: {
      width: '20px',
      height: '20px',
    },
    appleIcon: {
      width: '20px',
      height: '20px',
    },
    otherIcon: {
      color: '#6b7280',
      fontSize: '18px',
    },
    lastSynced: {
      fontSize: '13px',
      color: '#6b7280',
      marginTop: '24px',
    },
  };

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
        }}>
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>Calendar Sync</h1>
            <p style={styles.cardDescription}>Sync your course deadlines with your preferred calendar</p>
            
            <div style={styles.divider}></div>

            {/* Auto-sync Toggle */}
            <div style={styles.toggleRow}>
              <div>
                <span style={styles.toggleLabel}>Auto-sync</span>
                <p style={styles.toggleDescription}>
                  Automatically sync all the deadlines and other related items from all active courses to your calendar.
                </p>
              </div>
              <label style={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={autoSync}
                  onChange={() => setAutoSync(!autoSync)}
                  style={styles.toggleInput}
                />
                <span style={{
                  ...styles.toggleSlider,
                  background: autoSync ? '#3b82f6' : '#d1d5db',
                }}>
                  <span style={{
                    ...styles.toggleKnob,
                    transform: autoSync ? 'translateX(20px)' : 'translateX(0)',
                  }}></span>
                </span>
              </label>
            </div>

            {/* Add to Calendar Section */}
            <h3 style={styles.sectionTitle}>Add to my calendar:</h3>
            <div style={styles.calendarButtons}>
              <button style={styles.calendarButton}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" 
                  alt="Google Calendar" 
                  style={styles.googleIcon}
                />
                Google calendar
              </button>
              <button style={styles.calendarButton}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Apple_Calendar.svg" 
                  alt="Apple Calendar" 
                  style={styles.appleIcon}
                />
                Apple calendar
              </button>
              <button style={styles.calendarButton}>
                <FontAwesomeIcon icon={faCalendar} style={styles.otherIcon} />
                Other calendar
              </button>
            </div>

            {/* Last Synced */}
            <p style={styles.lastSynced}>Last synced: April 29, 2025</p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CalendarSync;

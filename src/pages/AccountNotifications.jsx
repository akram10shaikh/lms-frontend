import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEnvelope, faKey, faDesktop, faChevronRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../HomePage/footer';

const AccountNotifications = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const accountSettings = [
    'Set up your LearnPro account',
    'Change your Learnpro account settings',
    'Change your account language',
    'Update your profile name or verified name',
    'Delete your Learnpro account',
  ];

  const emailNotifications = [
    'Change email settings for the forums',
    'Check and update your email communication preferences',
  ];

  const loginIssues = [
    'Update your login settings',
    'Reset Your Learnpro password',
    'Troubleshooting login and account Issues',
    'Link or de-link your account with Google, Apple, or Facebook',
    'Troubleshooting login with single sign-on (SSO)',
  ];

  const usingLearnPro = [
    'Use the LearnPro mobile app',
    'Switch between learning program & other Learnpro courses',
    'Configure your LearnPro account with your for credit program',
    'Become a LearnPro beta tester',
    'LearnPro Mentors',
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#fff',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    logoIcon: {
      color: '#3b82f6',
      fontSize: '20px',
    },
    logoText: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#3b82f6',
    },
    searchContainer: {
      flex: 1,
      maxWidth: '500px',
      margin: '0 40px',
    },
    searchInput: {
      width: '100%',
      padding: '10px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: '24px',
      fontSize: '14px',
      outline: 'none',
      backgroundColor: '#f9fafb',
    },
    profileIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      overflow: 'hidden',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    content: {
      flex: 1,
      padding: isMobile ? '24px 16px' : '40px 80px',
      paddingTop: isMobile ? '100px' : '120px',
      maxWidth: '1000px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      padding: 0,
    },
    backIcon: {
      fontSize: '18px',
      color: '#374151',
    },
    backText: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#374151',
    },
    breadcrumb: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '24px',
      fontSize: '14px',
    },
    breadcrumbLink: {
      color: '#3b82f6',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    breadcrumbSeparator: {
      color: '#6b7280',
    },
    breadcrumbCurrent: {
      color: '#374151',
    },
    pageTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '8px',
    },
    pageSubtitle: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '32px',
    },
    sectionsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '40px',
    },
    section: {
      marginBottom: '32px',
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px',
    },
    sectionIcon: {
      fontSize: '20px',
      color: '#374151',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111',
    },
    linksList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      paddingLeft: '32px',
    },
    linkItem: {
      fontSize: '14px',
      color: '#3b82f6',
      textDecoration: 'none',
      cursor: 'pointer',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>✳</span>
          <span style={styles.logoText}>LearnPro</span>
        </div>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search about your query"
            style={styles.searchInput}
          />
        </div>
        <div style={styles.profileIcon}>
          <img
            src="https://ui-avatars.com/api/?name=User&background=e5e7eb&color=374151&size=40"
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.content}>
        {/* Back Button */}
        <button style={styles.backButton} onClick={() => navigate('/settings')}>
          <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          <span style={styles.backText}>Account & Notifications</span>
        </button>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link to="/help-center" style={styles.breadcrumbLink}>
            Learner Help Center
          </Link>
          <span style={styles.breadcrumbSeparator}>&gt;&gt;</span>
          <span style={styles.breadcrumbCurrent}>Account & notifications</span>
        </nav>

        {/* Page Title */}
        <h1 style={styles.pageTitle}>Account & notifications</h1>
        <p style={styles.pageSubtitle}>Account setting, login issues, and notification preferences</p>

        {/* Sections Grid */}
        <div style={styles.sectionsGrid}>
          {/* Account Settings */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <FontAwesomeIcon icon={faCog} style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>Account settings</h2>
            </div>
            <div style={styles.linksList}>
              <Link to="/setup-account" style={styles.linkItem}>
                Set up your LearnPro account
              </Link>
              {accountSettings.slice(1).map((item, index) => (
                <a key={index} href="#" style={styles.linkItem}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Email Notifications */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <FontAwesomeIcon icon={faEnvelope} style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>Email notifications</h2>
            </div>
            <div style={styles.linksList}>
              {emailNotifications.map((item, index) => (
                <a key={index} href="#" style={styles.linkItem}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Login Issues */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <FontAwesomeIcon icon={faKey} style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>Login issues</h2>
            </div>
            <div style={styles.linksList}>
              {loginIssues.map((item, index) => (
                <a key={index} href="#" style={styles.linkItem}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Using LearnPro */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <FontAwesomeIcon icon={faDesktop} style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>Using LearnPro</h2>
            </div>
            <div style={styles.linksList}>
              {usingLearnPro.map((item, index) => (
                <a key={index} href="#" style={styles.linkItem}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountNotifications;

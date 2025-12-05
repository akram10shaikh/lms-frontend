import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import Footer from '../HomePage/footer';

const SetupAccount = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      maxWidth: '900px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
    },
    breadcrumb: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '32px',
      fontSize: '14px',
      flexWrap: 'wrap',
    },
    breadcrumbLink: {
      color: '#3b82f6',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    breadcrumbSeparator: {
      color: '#6b7280',
    },
    breadcrumbCurrent: {
      color: '#374151',
    },
    pageTitle: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#111',
      marginBottom: '12px',
    },
    pageSubtitle: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '24px',
    },
    skipToSection: {
      marginBottom: '32px',
    },
    skipToLabel: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '12px',
    },
    skipButtons: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    },
    skipButtonActive: {
      padding: '10px 20px',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: '500',
      cursor: 'pointer',
    },
    skipButton: {
      padding: '10px 20px',
      backgroundColor: '#fff',
      color: '#374151',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: '500',
      cursor: 'pointer',
    },
    section: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '12px',
    },
    sectionSubtitle: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '20px',
    },
    stepsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '24px',
    },
    stepItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    },
    stepNumber: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '13px',
      fontWeight: '600',
      flexShrink: 0,
    },
    stepText: {
      fontSize: '14px',
      color: '#374151',
      lineHeight: '1.6',
      paddingTop: '4px',
    },
    stepTextBold: {
      fontWeight: '600',
    },
    socialButtons: {
      display: 'flex',
      gap: '16px',
      marginTop: '16px',
      flexWrap: 'wrap',
    },
    socialButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 32px',
      backgroundColor: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      fontSize: '14px',
      color: '#374151',
      cursor: 'pointer',
      fontWeight: '500',
    },
    infoBox: {
      backgroundColor: '#eff6ff',
      borderRadius: '8px',
      padding: '20px 24px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    },
    infoIcon: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: '700',
      flexShrink: 0,
    },
    infoText: {
      fontSize: '14px',
      color: '#374151',
      lineHeight: '1.6',
    },
    linkText: {
      color: '#3b82f6',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    emailSection: {
      marginBottom: '40px',
    },
    emailSubtitle: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '24px',
      lineHeight: '1.6',
    },
    confirmButton: {
      padding: '12px 24px',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      marginTop: '16px',
    },
    warningBox: {
      backgroundColor: '#fef3c7',
      borderRadius: '8px',
      padding: '20px 24px',
      marginTop: '24px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    },
    warningIcon: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#f59e0b',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: '700',
      flexShrink: 0,
    },
    warningText: {
      fontSize: '14px',
      color: '#374151',
      lineHeight: '1.6',
    },
    bottomNote: {
      fontSize: '14px',
      color: '#374151',
      lineHeight: '1.6',
      marginTop: '24px',
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
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link to="/help-center" style={styles.breadcrumbLink}>
            Learner Help Center
          </Link>
          <span style={styles.breadcrumbSeparator}>&gt;&gt;</span>
          <Link to="/account-notifications" style={styles.breadcrumbLink}>
            Account & notifications
          </Link>
          <span style={styles.breadcrumbSeparator}>&gt;&gt;</span>
          <span style={styles.breadcrumbCurrent}>Set up your LearnPro account</span>
        </nav>

        {/* Page Title */}
        <h1 style={styles.pageTitle}>Set up your LearnPro account</h1>
        <p style={styles.pageSubtitle}>To start taking classes on LearnPro, you'll need to set up an account.</p>

        {/* Skip To Section */}
        <div style={styles.skipToSection}>
          <p style={styles.skipToLabel}>Skip to :</p>
          <div style={styles.skipButtons}>
            <button style={styles.skipButtonActive}>Create an account</button>
            <button style={styles.skipButton}>Verify your email address</button>
          </div>
        </div>

        {/* Create an Account Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Create an account</h2>
          <p style={styles.sectionSubtitle}>To create a LearnPro account:</p>

          <div style={styles.stepsList}>
            <div style={styles.stepItem}>
              <span style={styles.stepNumber}>1</span>
              <span style={styles.stepText}>Go to LearnPro.com</span>
            </div>
            <div style={styles.stepItem}>
              <span style={styles.stepNumber}>2</span>
              <span style={styles.stepText}>
                At the top of the page, click <span style={styles.stepTextBold}>Sign up</span>
              </span>
            </div>
            <div style={styles.stepItem}>
              <span style={styles.stepNumber}>3</span>
              <span style={styles.stepText}>
                Choose whether you want to provide a name, email, and password or link your LearnPro account to your:
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div style={styles.socialButtons}>
            <button style={styles.socialButton}>
              <FontAwesomeIcon icon={faFacebookF} />
              Facebook
            </button>
            <button style={styles.socialButton}>
              <FontAwesomeIcon icon={faGoogle} />
              Google
            </button>
            <button style={styles.socialButton}>
              <FontAwesomeIcon icon={faApple} />
              Apple ID
            </button>
          </div>

          {/* Info Box */}
          <div style={styles.infoBox}>
            <span style={styles.infoIcon}>i</span>
            <p style={styles.infoText}>
              If you choose to Create a new LearnPro account with a name, email, and password, your password needs to be eight characters or longer
            </p>
          </div>

          <p style={styles.stepText}>
            Once you create your account, you can <span style={styles.linkText}>change your account settings</span> any time.
          </p>
        </div>

        {/* Verify Your Email Address Section */}
        <div style={styles.emailSection}>
          <h2 style={styles.sectionTitle}>Verify your email address</h2>
          <p style={styles.emailSubtitle}>
            You'll need to verify your email address in order to do certain things on the platform (such as resetting your password).
          </p>

          <div style={styles.stepsList}>
            <div style={styles.stepItem}>
              <span style={styles.stepNumber}>1</span>
              <span style={styles.stepText}>Open your email inbox.</span>
            </div>
            <div style={styles.stepItem}>
              <span style={styles.stepNumber}>2</span>
              <span style={styles.stepText}>
                Search for "LearnPro" and look for an email that says "Action Required" in the subject.
              </span>
            </div>
            <div style={styles.stepItem}>
              <span style={styles.stepNumber}>3</span>
              <span style={styles.stepText}>Open that email.</span>
            </div>
            <div style={styles.stepItem}>
              <span style={styles.stepNumber}>4</span>
              <span style={styles.stepText}>
                Click the <span style={styles.linkText}>Confirm email address</span> button
              </span>
            </div>
          </div>

          <button style={styles.confirmButton}>Confirm email address</button>

          {/* Warning Box */}
          <div style={styles.warningBox}>
            <span style={styles.warningIcon}>!</span>
            <p style={styles.warningText}>
              If the button isn't working, there is a link below it that you can copy and paste into your address bar. If the link is expired, you can go to your <span style={styles.linkText}>Settings</span> to send a new one
            </p>
          </div>

          <p style={styles.bottomNote}>
            If you can't find the email in your inbox, be sure to check your spa folder. Make sure you're looking at the inbox for the email address you used when you created your LearnPro account (you can check which email you used in your <span style={styles.linkText}>Settings</span>).
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SetupAccount;

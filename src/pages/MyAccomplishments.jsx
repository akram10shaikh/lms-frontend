import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from '../HomePage/footer';

const MyAccomplishments = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [thanksSent, setThanksSent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const accomplishments = [
    {
      id: 1,
      title: 'Foundations of user experience (ux) design',
      instructor: 'LearnPro Delta Crew',
      grade: '91.01%',
    },
    {
      id: 2,
      title: 'Foundations of user experience (ux) design',
      instructor: 'LearnPro Delta Crew',
      grade: '91.01%',
    },
    {
      id: 3,
      title: 'Foundations of user experience (ux) design',
      instructor: 'LearnPro Delta Crew',
      grade: '91.01%',
    },
  ];

  const handleSayThanks = (id) => {
    navigate(`/thank-instructor/${id}`);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: 1,
      padding: isMobile ? '24px 16px' : '40px 80px',
      paddingTop: isMobile ? '100px' : '120px',
      maxWidth: '1200px',
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
    pageTitle: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '16px',
    },
    verificationBanner: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '32px',
      flexWrap: 'wrap',
    },
    verifyBadge: {
      backgroundColor: '#3b82f6',
      color: '#fff',
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    verificationText: {
      fontSize: '13px',
      color: '#6b7280',
      lineHeight: '1.5',
    },
    accomplishmentCard: {
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '16px',
      backgroundColor: '#fff',
    },
    cardContent: {
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '16px' : '24px',
    },
    cardLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      flex: 1,
    },
    certificateBadge: {
      width: '80px',
      height: '65px',
      flexShrink: 0,
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    cardInfo: {
      flex: 1,
    },
    courseTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '6px',
    },
    instructorRow: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '4px',
    },
    instructorName: {
      color: '#6b7280',
    },
    gradeRow: {
      fontSize: '13px',
    },
    gradeLabel: {
      color: '#3b82f6',
    },
    gradeValue: {
      color: '#3b82f6',
    },
    cardActions: {
      display: 'flex',
      gap: '12px',
      flexShrink: 0,
    },
    shareButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 24px',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    linkedinButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 16px',
      backgroundColor: '#fff',
      color: '#374151',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    linkedinIcon: {
      color: '#0077b5',
      fontSize: '16px',
    },
    likedRow: {
      marginTop: '16px',
      fontSize: '14px',
      color: '#374151',
    },
    sayThanksLink: {
      color: '#3b82f6',
      textDecoration: 'underline',
      cursor: 'pointer',
      marginLeft: '4px',
    },
    thanksSentMessage: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '24px',
      fontSize: '14px',
      color: '#374151',
    },
    partyEmoji: {
      fontSize: '16px',
    },
    footer: {
      backgroundColor: '#fff',
      padding: '40px 80px',
      borderTop: '1px solid #e5e7eb',
      marginTop: 'auto',
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '40px' : '120px',
      flexWrap: 'wrap',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    footerTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '8px',
    },
    footerLink: {
      fontSize: '13px',
      color: '#6b7280',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    appButtonsColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    appButton: {
      backgroundColor: '#111',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: '6px',
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      border: 'none',
    },
    appButtonText: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    appButtonSmall: {
      fontSize: '8px',
      opacity: 0.8,
    },
    appButtonLarge: {
      fontSize: '12px',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.content}>
        {/* Back Button */}
        <button style={styles.backButton} onClick={() => navigate('/settings')}>
          <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
        </button>
        <h1 style={styles.pageTitle}>My accomplishment</h1>
        
        {/* Verification Banner */}
        <div style={styles.verificationBanner}>
          <span style={styles.verifyBadge}>verify my id</span>
          <span style={styles.verificationText}>
            Your name, Nihank Palayi, is verified. This is the name that will appear on your certificates. If you have questions or need help with your ID Verification, visit our
          </span>
        </div>

        {/* Accomplishment Cards */}
        {accomplishments.map((item, index) => (
          <div key={item.id}>
            <div style={styles.accomplishmentCard}>
              <div style={styles.cardContent}>
                <div style={styles.cardLeft}>
                  {/* Certificate Badge Icon - Clickable */}
                  <div 
                    style={styles.certificateBadge}
                    onClick={() => navigate(`/certificate/${item.id}`)}
                    title="View Certificate"
                  >
                    <svg viewBox="0 0 80 60" style={{width: '100%', height: '100%'}}>
                      {/* Certificate background */}
                      <rect x="5" y="5" width="70" height="45" rx="4" fill="#E8F4FD" stroke="#60A5FA" strokeWidth="2"/>
                      
                      {/* Certificate lines */}
                      <line x1="15" y1="15" x2="50" y2="15" stroke="#93C5FD" strokeWidth="2"/>
                      <line x1="15" y1="22" x2="55" y2="22" stroke="#93C5FD" strokeWidth="2"/>
                      <line x1="15" y1="29" x2="45" y2="29" stroke="#93C5FD" strokeWidth="2"/>
                      <line x1="15" y1="36" x2="40" y2="36" stroke="#93C5FD" strokeWidth="2"/>
                      
                      {/* Medal/Ribbon circle */}
                      <circle cx="60" cy="35" r="12" fill="white" stroke="#60A5FA" strokeWidth="2"/>
                      <circle cx="60" cy="35" r="6" fill="#60A5FA"/>
                      
                      {/* Ribbon tails */}
                      <path d="M54 45 L54 58 L57 54 L60 58 L60 45" fill="#F87171" stroke="#EF4444" strokeWidth="1"/>
                      <path d="M60 45 L60 58 L63 54 L66 58 L66 45" fill="#F87171" stroke="#EF4444" strokeWidth="1"/>
                    </svg>
                  </div>
                  
                  {/* Course Info */}
                  <div style={styles.cardInfo}>
                    <h3 
                      style={{...styles.courseTitle, cursor: 'pointer'}}
                      onClick={() => navigate(`/certificate/${item.id}`)}
                    >
                      {item.title}
                    </h3>
                    <p style={styles.instructorRow}>
                      by <span style={styles.instructorName}>{item.instructor}</span>
                    </p>
                    <p style={styles.gradeRow}>
                      <span style={styles.gradeLabel}>Grade Achieved :</span>
                      <span style={styles.gradeValue}>{item.grade}</span>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={styles.cardActions}>
                  <button style={styles.shareButton}>
                    <FontAwesomeIcon icon={faShare} />
                    Share
                  </button>
                  <button style={styles.linkedinButton}>
                    <FontAwesomeIcon icon={faLinkedin} style={styles.linkedinIcon} />
                    Add to LinkedIn
                  </button>
                </div>
              </div>
            </div>
            
            {/* Liked the course row */}
            <p style={styles.likedRow}>
              Liked the course? 
              <span 
                style={styles.sayThanksLink}
                onClick={() => handleSayThanks(item.id)}
              >
                Say thanks to your instructor !
              </span>
            </p>
          </div>
        ))}

        {/* Thanks Sent Message */}
        <div style={styles.thanksSentMessage}>
          <span style={styles.partyEmoji}>🎉</span>
          <span>Thanks! Your message was sent to the instructor</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyAccomplishments;

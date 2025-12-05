import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../HomePage/footer';

const TicketRequest = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ticketData = {
    ticketType: 'Content of Ticket Type',
    referenceNumber: '12345678',
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
      padding: isMobile ? '24px 16px' : '40px 60px',
      paddingTop: isMobile ? '100px' : '120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      alignSelf: 'flex-start',
      maxWidth: '600px',
      width: '100%',
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
    card: {
      width: '100%',
      maxWidth: '600px',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    cardHeader: {
      padding: '32px 40px',
      textAlign: 'center',
      borderBottom: '1px solid #e5e7eb',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '8px',
    },
    cardSubtitle: {
      fontSize: '14px',
      color: '#6b7280',
    },
    cardBody: {
      padding: '24px 40px',
      backgroundColor: '#f9fafb',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '20px',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #e5e7eb',
    },
    rowLast: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
    },
    label: {
      fontSize: '14px',
      color: '#374151',
      fontWeight: '500',
    },
    value: {
      fontSize: '14px',
      color: '#374151',
    },
    valueLink: {
      fontSize: '14px',
      color: '#3b82f6',
      textDecoration: 'none',
      cursor: 'pointer',
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
        <div style={styles.card}>
          {/* Card Header */}
          <div style={styles.cardHeader}>
            <h1 style={styles.cardTitle}>Your ticket request was created.</h1>
            <p style={styles.cardSubtitle}>We'll get back to you soon.</p>
          </div>

          {/* Card Body */}
          <div style={styles.cardBody}>
            <h2 style={styles.sectionTitle}>Ticket Request</h2>
            
            <div style={styles.row}>
              <span style={styles.label}>Ticket type</span>
              <span style={styles.value}>{ticketData.ticketType}</span>
            </div>
            
            <div style={styles.rowLast}>
              <span style={styles.label}>Reference Number</span>
              <a href="#" style={styles.valueLink}>{ticketData.referenceNumber}</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TicketRequest;

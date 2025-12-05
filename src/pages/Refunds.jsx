import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../HomePage/footer';

const Refunds = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const refunds = [
    {
      id: 1,
      title: 'Cisco ccna 200-310 the complete guide to getting certified',
      date: 'Jan 10, 2021',
      amount: '$360',
      refundedTo: 'credit card',
      type: 'Full refund',
      status: 'Succeeded',
    },
    {
      id: 2,
      title: 'Cyber Security the security',
      date: 'Mar 7, 2021',
      amount: '$650',
      refundedTo: 'credit card',
      type: 'Full refund',
      status: 'Succeeded',
    },
    {
      id: 3,
      title: 'Python fullstack development certified',
      date: 'May 10, 2021',
      amount: '$360',
      refundedTo: 'credit card',
      type: 'Full refund',
      status: 'Succeeded',
    },
    {
      id: 4,
      title: 'Machine learning',
      date: 'Dec 7, 2021',
      amount: '$650',
      refundedTo: 'credit card',
      type: 'Full refund',
      status: 'Succeeded',
    },
  ];

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
      paddingTop: isMobile ? '80px' : '120px',
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
    pageTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '24px',
    },
    tabsContainer: {
      display: 'flex',
      gap: '32px',
      borderBottom: '1px solid #e5e7eb',
      marginBottom: '24px',
    },
    tab: {
      padding: '12px 0',
      fontSize: '14px',
      color: '#6b7280',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      position: 'relative',
      textDecoration: 'none',
    },
    tabActive: {
      padding: '12px 0',
      fontSize: '14px',
      color: '#111',
      fontWeight: '500',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      position: 'relative',
      borderBottom: '2px solid #111',
      marginBottom: '-1px',
      textDecoration: 'none',
    },
    tableContainer: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      borderBottom: '1px solid #e5e7eb',
    },
    th: {
      padding: '16px 12px',
      fontSize: '13px',
      fontWeight: '500',
      color: '#374151',
      textAlign: 'left',
    },
    thCenter: {
      padding: '16px 12px',
      fontSize: '13px',
      fontWeight: '500',
      color: '#374151',
      textAlign: 'center',
    },
    tr: {
      borderBottom: '1px solid #e5e7eb',
    },
    td: {
      padding: '20px 12px',
      fontSize: '14px',
      color: '#374151',
      verticalAlign: 'middle',
    },
    tdCenter: {
      padding: '20px 12px',
      fontSize: '14px',
      color: '#374151',
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    courseCell: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      maxWidth: '280px',
    },
    checkIcon: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#22c55e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    checkIconInner: {
      color: '#fff',
      fontSize: '12px',
    },
    courseTitle: {
      fontSize: '14px',
      color: '#111',
      fontWeight: '400',
      lineHeight: '1.4',
    },
    statusBadge: {
      padding: '6px 16px',
      backgroundColor: '#dcfce7',
      color: '#22c55e',
      borderRadius: '4px',
      fontSize: '13px',
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
        <h1 style={styles.pageTitle}>Purchase History</h1>

        {/* Tabs */}
        <div style={styles.tabsContainer}>
          <Link to="/my-purchases" style={styles.tab}>
            Courses
          </Link>
          <button style={styles.tabActive}>
            Refunds
          </button>
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={{ ...styles.th, width: '30%' }}></th>
                <th style={styles.thCenter}>Date</th>
                <th style={styles.thCenter}>Amount</th>
                <th style={styles.thCenter}>Refunded to</th>
                <th style={styles.thCenter}>Type</th>
                <th style={styles.thCenter}>Status</th>
              </tr>
            </thead>
            <tbody>
              {refunds.map((refund) => (
                <tr key={refund.id} style={styles.tr}>
                  <td style={styles.td}>
                    <div style={styles.courseCell}>
                      <div style={styles.checkIcon}>
                        <FontAwesomeIcon icon={faCheck} style={styles.checkIconInner} />
                      </div>
                      <span style={styles.courseTitle}>{refund.title}</span>
                    </div>
                  </td>
                  <td style={styles.tdCenter}>{refund.date}</td>
                  <td style={styles.tdCenter}>{refund.amount}</td>
                  <td style={styles.tdCenter}>{refund.refundedTo}</td>
                  <td style={styles.tdCenter}>{refund.type}</td>
                  <td style={styles.tdCenter}>
                    <span style={styles.statusBadge}>{refund.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Refunds;

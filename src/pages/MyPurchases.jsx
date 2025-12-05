import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faShieldAlt } from '@fortawesome/free-brands-svg-icons';
import { faNetworkWired, faShieldVirus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../HomePage/footer';

const MyPurchases = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeTab, setActiveTab] = useState('courses');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const purchases = [
    {
      id: 1,
      title: 'Python network programming for network engineers',
      icon: 'python',
      iconBg: '#3b82f6',
      date: 'Jan 7, 2021',
      totalPrice: '$360',
      paymentType: 'credit card',
    },
    {
      id: 2,
      title: 'Cyber Security',
      icon: 'security',
      iconBg: '#3b82f6',
      date: 'mar 7, 2021',
      totalPrice: '$650',
      paymentType: 'credit card',
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
      gap: '16px',
    },
    courseIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    courseIconInner: {
      color: '#fff',
      fontSize: '18px',
    },
    courseTitle: {
      fontSize: '14px',
      color: '#111',
      fontWeight: '400',
    },
    linkBlue: {
      color: '#3b82f6',
      textDecoration: 'none',
      fontSize: '13px',
      cursor: 'pointer',
    },
    actionsCell: {
      display: 'flex',
      gap: '24px',
      justifyContent: 'flex-end',
    },
    footer: {
      backgroundColor: '#fff',
      padding: '40px 60px',
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

  const renderIcon = (iconType) => {
    if (iconType === 'python') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282c0 4.613 2.554 4.449 2.554 4.449h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.544a.809.809 0 110-1.618.809.809 0 010 1.618z"/>
          <path d="M14.415 12.308h-4.328s-2.432-.039-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.574 0 4.289-1.983 4.289-1.983l-.006-2.055h-4.363v-.617h6.097s2.927.332 2.927-4.282c0-4.613-2.554-4.449-2.554-4.449h-1.524v2.141s.083 2.554-2.513 2.554zm.056 5.544a.809.809 0 110 1.618.809.809 0 010-1.618z"/>
        </svg>
      );
    }
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    );
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
          <button style={styles.tabActive}>
            Courses
          </button>
          <Link to="/refunds" style={styles.tab}>
            Refunds
          </Link>
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={{ ...styles.th, width: '40%' }}></th>
                <th style={styles.thCenter}>Date</th>
                <th style={styles.thCenter}>Total price</th>
                <th style={styles.thCenter}>payment type</th>
                <th style={{ ...styles.th, width: '15%' }}></th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id} style={styles.tr}>
                  <td style={styles.td}>
                    <div style={styles.courseCell}>
                      <div style={{ ...styles.courseIcon, backgroundColor: purchase.iconBg }}>
                        {renderIcon(purchase.icon)}
                      </div>
                      <span style={styles.courseTitle}>{purchase.title}</span>
                    </div>
                  </td>
                  <td style={styles.tdCenter}>{purchase.date}</td>
                  <td style={styles.tdCenter}>{purchase.totalPrice}</td>
                  <td style={styles.tdCenter}>{purchase.paymentType}</td>
                  <td style={styles.td}>
                    <div style={styles.actionsCell}>
                      <a href="#" style={styles.linkBlue}>Invoice</a>
                      <a href="#" style={styles.linkBlue}>Receipt</a>
                    </div>
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

export default MyPurchases;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faChevronRight, 
  faUser, 
  faBell, 
  faCertificate, 
  faCheckCircle,
  faClipboardList,
  faHistory,
  faFileAlt,
  faVideo,
  faGraduationCap,
  faTicketAlt,
  faStar,
  faBookOpen,
  faCreditCard,
  faLayerGroup,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../HomePage/footer';

const HelpCenter = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const featuredArticles = [
    { title: 'LearnPro Free Trial', link: '#' },
    { title: 'Refund Policy', link: '#' },
    { title: 'New Features in LearnPro', link: '#' },
    { title: 'LearnPro Certificates of Completion', link: '#' },
    { title: 'Reset Progress on a Course or Exercise', link: '#' },
    { title: 'Updates to your Dashboard', link: '#' },
  ];

  const helpCategories = [
    { icon: faUser, title: 'Account & Notifications', color: '#3b82f6', path: '/account-notifications' },
    { icon: faCertificate, title: 'Certificate & Verification', color: '#3b82f6' },
    { icon: faClipboardList, title: 'Grades & Assignments', color: '#3b82f6' },
    { icon: faHistory, title: 'View Ticket History', color: '#3b82f6' },
    { icon: faFileAlt, title: 'LearnPro Policies', color: '#3b82f6' },
    { icon: faVideo, title: 'Video Library', color: '#3b82f6' },
    { icon: faGraduationCap, title: 'Degree & other programs', color: '#3b82f6' },
    { icon: faTicketAlt, title: 'Raise a ticket', color: '#3b82f6' },
    { icon: faStar, title: 'Specialization', color: '#3b82f6' },
    { icon: faBookOpen, title: 'Enrollment', color: '#3b82f6' },
    { icon: faLayerGroup, title: 'Course Content', color: '#3b82f6' },
    { icon: faCreditCard, title: 'Payment & Subscriptions', color: '#3b82f6' },
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
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    logo: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#3b82f6',
    },
    helpCenterText: {
      fontSize: '14px',
      color: '#6b7280',
      marginLeft: '8px',
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
    },
    content: {
      flex: 1,
      padding: isMobile ? '40px 20px' : '60px 80px',
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
    heroSection: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    heroTitle: {
      fontSize: isMobile ? '24px' : '32px',
      fontWeight: '700',
      color: '#111',
      marginBottom: '12px',
    },
    heroSubtitle: {
      fontSize: '15px',
      color: '#6b7280',
      marginBottom: '24px',
    },
    searchContainer: {
      position: 'relative',
      maxWidth: '500px',
      margin: '0 auto',
    },
    searchIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      fontSize: '16px',
    },
    searchInput: {
      width: '100%',
      padding: '14px 16px 14px 44px',
      fontSize: '14px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      outline: 'none',
      boxSizing: 'border-box',
    },
    featuredSection: {
      marginBottom: '48px',
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '32px',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '20px',
    },
    articlesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '12px 40px',
    },
    articleItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0',
      cursor: 'pointer',
    },
    articleTitle: {
      fontSize: '13px',
      color: '#374151',
    },
    articleArrow: {
      fontSize: '12px',
      color: '#9ca3af',
    },
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '16px',
    },
    categoryCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '20px 24px',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      backgroundColor: '#fff',
    },
    categoryIconWrapper: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      backgroundColor: '#eff6ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    categoryIcon: {
      fontSize: '18px',
      color: '#3b82f6',
    },
    categoryTitle: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#111',
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
      maxWidth: '1000px',
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
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <h1 style={styles.heroTitle}>Need help? We've got you covered.</h1>
          <p style={styles.heroSubtitle}>Browse topics or search for answer below.</p>
          
          {/* Search Bar */}
          <div style={styles.searchContainer}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for help"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>

        {/* Featured Articles */}
        <div style={styles.featuredSection}>
          <h2 style={styles.sectionTitle}>Featured Articles</h2>
          <div style={styles.articlesGrid}>
            {featuredArticles.map((article, index) => (
              <div key={index} style={styles.articleItem}>
                <span style={styles.articleTitle}>{article.title}</span>
                <FontAwesomeIcon icon={faChevronRight} style={styles.articleArrow} />
              </div>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div style={styles.categoriesGrid}>
          {helpCategories.map((category, index) => (
            <div 
              key={index} 
              style={styles.categoryCard}
              onClick={() => category.path && navigate(category.path)}
            >
              <div style={styles.categoryIconWrapper}>
                <FontAwesomeIcon icon={category.icon} style={styles.categoryIcon} />
              </div>
              <span style={styles.categoryTitle}>{category.title}</span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;

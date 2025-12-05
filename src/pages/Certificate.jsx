import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar, faCheck, faDownload } from '@fortawesome/free-solid-svg-icons';
import Footer from '../HomePage/footer';

const Certificate = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { id } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Certificate data (in real app, fetch based on id)
  const certificateData = {
    userName: 'John Adam',
    completionDate: 'April 21, 2025',
    grade: '100%',
    courseTitle: 'Web Development - The Ultimate Bootcamp for beginners',
    ratings: 4.7,
    reviewsCount: 395,
    studentsEnrolled: 1500,
    certificateDateRange: '15-01-2025 to 15-04-2025',
    supportEmail: 'support@learnpro.in',
    accomplishments: [
      'Coding Exercises & Quizzes',
      'Video Tutorials by Industry Pros',
      'Interactive Learning Community',
      'Course Certificate of Proficiency',
    ],
    skillsAcquired: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Java Script', icon: 'js' },
    ],
    additionalSkills: [
      'Responsive Web Design',
      'Front-End Tooling',
    ],
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
      paddingTop: isMobile ? '80px' : '100px',
      maxWidth: '1200px',
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
    },
    breadcrumbLink: {
      color: '#3b82f6',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    breadcrumbIcon: {
      color: '#9ca3af',
      fontSize: '12px',
    },
    breadcrumbCurrent: {
      color: '#374151',
    },
    mainSection: {
      display: 'flex',
      gap: '40px',
      flexDirection: isMobile ? 'column' : 'row',
    },
    leftColumn: {
      flex: 1,
    },
    rightColumn: {
      width: isMobile ? '100%' : '340px',
      flexShrink: 0,
    },
    completionCard: {
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px',
    },
    userSection: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      marginBottom: '16px',
    },
    userAvatar: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flexShrink: 0,
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    userInfo: {
      flex: 1,
    },
    completedBy: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '4px',
    },
    completionDate: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '8px',
    },
    gradeAchieved: {
      fontSize: '14px',
      color: '#111',
      fontWeight: '500',
    },
    gradeValue: {
      color: '#22c55e',
      fontWeight: '600',
    },
    verificationText: {
      fontSize: '13px',
      color: '#6b7280',
      lineHeight: '1.6',
      marginTop: '16px',
    },
    courseSection: {
      marginBottom: '32px',
    },
    courseTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '12px',
    },
    courseStats: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#6b7280',
    },
    stars: {
      display: 'flex',
      gap: '2px',
    },
    starIcon: {
      color: '#facc15',
      fontSize: '12px',
    },
    starEmpty: {
      color: '#e5e7eb',
      fontSize: '12px',
    },
    statsText: {
      color: '#6b7280',
    },
    accomplishmentsSection: {
      marginBottom: '24px',
    },
    sectionTitle: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '16px',
    },
    accomplishmentsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    accomplishmentItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '14px',
      color: '#374151',
    },
    checkIcon: {
      color: '#3b82f6',
      fontSize: '14px',
    },
    skillsSection: {
      display: 'flex',
      gap: '60px',
      flexWrap: 'wrap',
    },
    skillsColumn: {
      minWidth: '150px',
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      color: '#374151',
      marginBottom: '10px',
    },
    skillIcon: {
      width: '24px',
      height: '24px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: '700',
      color: '#fff',
    },
    htmlIcon: {
      backgroundColor: '#e34f26',
    },
    cssIcon: {
      backgroundColor: '#264de4',
    },
    jsIcon: {
      backgroundColor: '#f7df1e',
      color: '#000',
    },
    additionalSkillItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      color: '#374151',
      marginBottom: '10px',
    },
    codeIcon: {
      color: '#6b7280',
      fontSize: '16px',
    },
    certificateCard: {
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '32px',
      textAlign: 'center',
      backgroundColor: '#fff',
    },
    certificateLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      marginBottom: '20px',
    },
    logoIcon: {
      color: '#3b82f6',
      fontSize: '16px',
    },
    logoText: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#3b82f6',
    },
    certificateTitle: {
      fontSize: '11px',
      fontWeight: '600',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '20px',
    },
    certificateName: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#3b82f6',
      marginBottom: '20px',
    },
    certificateDescription: {
      fontSize: '12px',
      color: '#6b7280',
      lineHeight: '1.8',
      marginBottom: '24px',
      maxWidth: '280px',
      margin: '0 auto 24px',
    },
    certificateBadges: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '24px',
    },
    badge: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    verifiedBadge: {
      backgroundColor: '#3b82f6',
      color: '#fff',
    },
    signatureBadge: {
      backgroundColor: '#f3f4f6',
    },
    awardBadge: {
      backgroundColor: '#f3f4f6',
    },
    signatureIcon: {
      width: '24px',
      height: '24px',
    },
    supportEmail: {
      fontSize: '11px',
      color: '#9ca3af',
      marginBottom: '24px',
    },
    certificateButtons: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
    },
    shareButton: {
      padding: '12px 32px',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
    },
    downloadButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 24px',
      backgroundColor: '#fff',
      color: '#3b82f6',
      border: '1px solid #3b82f6',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
    },
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={i < fullStars ? styles.starIcon : styles.starEmpty}
        />
      );
    }
    return stars;
  };

  return (
    <div style={styles.container}>
      <main style={styles.content}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link to="/my-accomplishments" style={styles.breadcrumbLink}>
            Accomplishments
          </Link>
          <FontAwesomeIcon icon={faChevronRight} style={styles.breadcrumbIcon} />
          <span style={styles.breadcrumbCurrent}>Course Certificate</span>
        </nav>

        {/* Main Section */}
        <div style={styles.mainSection}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            {/* Completion Card */}
            <div style={styles.completionCard}>
              <div style={styles.userSection}>
                <div style={styles.userAvatar}>
                  <img
                    src="https://ui-avatars.com/api/?name=John+Adam&background=e5e7eb&color=374151&size=60"
                    alt="User"
                    style={styles.avatarImage}
                  />
                </div>
                <div style={styles.userInfo}>
                  <p style={styles.completedBy}>Completed by {certificateData.userName}</p>
                  <p style={styles.completionDate}>{certificateData.completionDate}</p>
                  <p style={styles.gradeAchieved}>
                    Grade Achieved: <span style={styles.gradeValue}>{certificateData.grade}</span>
                  </p>
                </div>
              </div>
              <p style={styles.verificationText}>
                {certificateData.userName} account is verified. LearnPro certifies their successful completion of {certificateData.courseTitle.split(' - ')[0]} - bootcamp
              </p>
            </div>

            {/* Course Section */}
            <div style={styles.courseSection}>
              <h2 style={styles.courseTitle}>{certificateData.courseTitle}</h2>
              <div style={styles.courseStats}>
                <div style={styles.stars}>{renderStars(certificateData.ratings)}</div>
                <span style={styles.statsText}>
                  {certificateData.ratings} ( {certificateData.reviewsCount} ratings) | {certificateData.studentsEnrolled} Students Enrolled
                </span>
              </div>
            </div>

            {/* Accomplishments & Skills */}
            <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
              {/* Accomplishments */}
              <div style={styles.accomplishmentsSection}>
                <h3 style={styles.sectionTitle}>Accomplishments</h3>
                <div style={styles.accomplishmentsList}>
                  {certificateData.accomplishments.map((item, index) => (
                    <div key={index} style={styles.accomplishmentItem}>
                      <FontAwesomeIcon icon={faCheck} style={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills You Acquired */}
              <div style={styles.skillsColumn}>
                <h3 style={styles.sectionTitle}>Skills You Acquired</h3>
                {certificateData.skillsAcquired.map((skill, index) => (
                  <div key={index} style={styles.skillItem}>
                    <div
                      style={{
                        ...styles.skillIcon,
                        ...(skill.icon === 'html' ? styles.htmlIcon : {}),
                        ...(skill.icon === 'css' ? styles.cssIcon : {}),
                        ...(skill.icon === 'js' ? styles.jsIcon : {}),
                      }}
                    >
                      {skill.icon.toUpperCase()}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Additional Skills */}
              <div style={styles.skillsColumn}>
                <h3 style={{ ...styles.sectionTitle, visibility: 'hidden' }}>Skills</h3>
                {certificateData.additionalSkills.map((skill, index) => (
                  <div key={index} style={styles.additionalSkillItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certificate */}
          <div style={styles.rightColumn}>
            <div style={styles.certificateCard}>
              {/* Logo */}
              <div style={styles.certificateLogo}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                </svg>
                <span style={styles.logoText}>LearnPro</span>
              </div>

              {/* Certificate Title */}
              <p style={styles.certificateTitle}>Certificate of Course Completion</p>

              {/* Name */}
              <h2 style={styles.certificateName}>{certificateData.userName}</h2>

              {/* Description */}
              <p style={styles.certificateDescription}>
                This certificate proudly recognizes for successfully completing the Web Development Course from {certificateData.certificateDateRange}. Your efforts have left a lasting impact, and we commend your commitment to excellence and professional growth.
              </p>

              {/* Badges */}
              <div style={styles.certificateBadges}>
                <div style={{ ...styles.badge, ...styles.verifiedBadge }}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div style={{ ...styles.badge, ...styles.signatureBadge }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5">
                    <path d="M3 17.5L9 11.5L13 15.5L21 7.5" />
                    <path d="M14 7.5H21V14.5" />
                  </svg>
                </div>
                <div style={{ ...styles.badge, ...styles.awardBadge }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.5 14L7 22L12 19L17 22L15.5 14" />
                  </svg>
                </div>
              </div>

              {/* Support Email */}
              <p style={styles.supportEmail}>
                For More Information Visit: {certificateData.supportEmail}
              </p>

              {/* Buttons */}
              <div style={styles.certificateButtons}>
                <button style={styles.shareButton}>Share Certificate</button>
                <button style={styles.downloadButton}>
                  <FontAwesomeIcon icon={faDownload} />
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Certificate;

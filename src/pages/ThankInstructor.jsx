import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faLink, faLinkSlash, faListUl, faListOl, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from '../HomePage/footer';

const ThankInstructor = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Course and instructor data
  const courseData = {
    title: 'Advanced Business Strategy',
    university: 'University of Virginia',
    instructors: [
      {
        id: 1,
        name: 'Michael Lenox',
        role: 'Senior Course Instructor',
        avatar: 'https://ui-avatars.com/api/?name=Michael+Lenox&background=1a1a2e&color=fff&size=50',
      },
      {
        id: 2,
        name: 'Jared Harris',
        role: 'Senior Research Instructor',
        avatar: 'https://ui-avatars.com/api/?name=Jared+Harris&background=f5f5f5&color=374151&size=50',
      },
    ],
  };

  const tips = [
    'Tell your instructors about yourself',
    'Why did you take the course? How has it helped you?',
    'What did you love about the course? Tell them!',
  ];

  const handleSubmit = () => {
    if (message.trim()) {
      alert('Thank you! Your message has been sent to the instructors.');
      navigate('/my-accomplishments');
    }
  };

  const handleCancel = () => {
    navigate('/my-accomplishments');
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
      padding: isMobile ? '24px 16px' : '60px 80px',
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
    pageTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '24px',
    },
    courseInfo: {
      marginBottom: '24px',
    },
    courseTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#3b82f6',
      display: 'inline',
    },
    universityText: {
      fontSize: '14px',
      color: '#6b7280',
      marginLeft: '8px',
    },
    instructorsSection: {
      display: 'flex',
      gap: '40px',
      marginBottom: '32px',
      flexWrap: 'wrap',
    },
    instructorCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    instructorAvatar: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    instructorInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    instructorNameRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    instructorName: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#111',
    },
    linkedinIcon: {
      color: '#0077b5',
      fontSize: '16px',
      cursor: 'pointer',
    },
    instructorRole: {
      fontSize: '13px',
      color: '#6b7280',
      marginTop: '2px',
    },
    tipsSection: {
      marginBottom: '24px',
    },
    tipsTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '12px',
    },
    tipsList: {
      listStyle: 'disc',
      paddingLeft: '20px',
      margin: 0,
    },
    tipItem: {
      fontSize: '14px',
      color: '#374151',
      marginBottom: '6px',
      lineHeight: '1.5',
    },
    textareaContainer: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '24px',
    },
    textarea: {
      width: '100%',
      minHeight: '250px',
      padding: '16px',
      border: 'none',
      outline: 'none',
      fontSize: '14px',
      color: '#374151',
      resize: 'vertical',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '12px 16px',
      borderTop: '1px solid #e5e7eb',
      backgroundColor: '#fafafa',
    },
    toolbarButton: {
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: '#374151',
      borderRadius: '4px',
      fontSize: '14px',
    },
    toolbarButtonHover: {
      backgroundColor: '#e5e7eb',
    },
    buttonsRow: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
    },
    submitButton: {
      padding: '14px 40px',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    cancelButton: {
      padding: '14px 40px',
      backgroundColor: '#e5e7eb',
      color: '#374151',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    supportText: {
      fontSize: '14px',
      color: '#374151',
    },
    supportLink: {
      color: '#3b82f6',
      textDecoration: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <main style={styles.content}>
        {/* Back Button */}
        <button style={styles.backButton} onClick={() => navigate('/settings')}>
          <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
        </button>
        {/* Page Title */}
        <h1 style={styles.pageTitle}>Write a note to your instrutors.</h1>

        {/* Course Info */}
        <div style={styles.courseInfo}>
          <span style={styles.courseTitle}>{courseData.title}</span>
          <span style={styles.universityText}>(From {courseData.university} )</span>
        </div>

        {/* Instructors */}
        <div style={styles.instructorsSection}>
          {courseData.instructors.map((instructor) => (
            <div key={instructor.id} style={styles.instructorCard}>
              <div style={styles.instructorAvatar}>
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  style={styles.avatarImage}
                />
              </div>
              <div style={styles.instructorInfo}>
                <div style={styles.instructorNameRow}>
                  <span style={styles.instructorName}>{instructor.name}</span>
                  <FontAwesomeIcon icon={faLinkedin} style={styles.linkedinIcon} />
                </div>
                <span style={styles.instructorRole}>{instructor.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div style={styles.tipsSection}>
          <p style={styles.tipsTitle}>Some tips:</p>
          <ul style={styles.tipsList}>
            {tips.map((tip, index) => (
              <li key={index} style={styles.tipItem}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Textarea with Toolbar */}
        <div style={styles.textareaContainer}>
          <textarea
            style={styles.textarea}
            placeholder="Say thanks to your instructor(s)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={styles.toolbar}>
            <button style={styles.toolbarButton} title="Bold">
              <FontAwesomeIcon icon={faBold} />
            </button>
            <button style={styles.toolbarButton} title="Italic">
              <FontAwesomeIcon icon={faItalic} />
            </button>
            <button style={styles.toolbarButton} title="Underline">
              <FontAwesomeIcon icon={faUnderline} />
            </button>
            <button style={styles.toolbarButton} title="Link">
              <FontAwesomeIcon icon={faLink} />
            </button>
            <button style={styles.toolbarButton} title="Unlink">
              <FontAwesomeIcon icon={faLinkSlash} />
            </button>
            <button style={styles.toolbarButton} title="Bullet List">
              <FontAwesomeIcon icon={faListUl} />
            </button>
            <button style={styles.toolbarButton} title="Numbered List">
              <FontAwesomeIcon icon={faListOl} />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonsRow}>
          <button style={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
          <button style={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
        </div>

        {/* Support Text */}
        <p style={styles.supportText}>
          Need help in solving a technical issue? Talk to our support team{' '}
          <Link to="/help-center" style={styles.supportLink}>here</Link> instead
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default ThankInstructor;

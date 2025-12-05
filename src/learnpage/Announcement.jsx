import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AfterNavbar from "../components/AfterLoginNavbar";
import Footer from "../HomePage/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faCalendarAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const announcements = [
  {
    id: 1,
    title: "Data Structure Lecture Cancellation",
    date: "January 15, 2025",
    instructor: "Instructor",
    content: `Hello Students,
The data structures and algorithms lectures for today has been cancelled, we will catch up next week, until then I request you to read the material I have posted.
Have a good week!`,
  },
  {
    id: 2,
    title: "Data Structure Lecture Cancellation",
    date: "January 15, 2025",
    instructor: "Instructor",
    content: `Hello Students,
The data structures and algorithms lectures for today has been cancelled, we will catch up next week, until then I request you to read the material I have posted.
Have a good week!`,
  },
  {
    id: 3,
    title: "Data Structure Lecture Cancellation",
    date: "January 15, 2025",
    instructor: "Instructor",
    content: `Hello Students,
The data structures and algorithms lectures for today has been cancelled, we will catch up next week, until then I request you to read the material I have posted.
Have a good week!`,
  },
];

const AnnouncementPage = () => {
  const navigate = useNavigate();
  const [courseExpanded, setCourseExpanded] = useState(false);

  const styles = {
    pageContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
    },
    mainWrapper: {
      display: "flex",
      flex: 1,
      paddingTop: "80px",
    },
    leftSidebar: {
      width: "250px",
      padding: "24px 20px",
      borderRight: "1px solid #e5e7eb",
      backgroundColor: "#fff",
    },
    courseTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "24px",
      lineHeight: "1.4",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 0",
      fontSize: "15px",
      color: "#374151",
      cursor: "pointer",
      borderBottom: "1px solid #f3f4f6",
    },
    mainContent: {
      flex: 1,
      padding: "24px 40px",
    },
    breadcrumb: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "24px",
      fontSize: "14px",
    },
    breadcrumbItem: {
      color: "#6b7280",
    },
    breadcrumbActive: {
      color: "#2563eb",
    },
    breadcrumbSeparator: {
      color: "#9ca3af",
    },
    announcementCard: {
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "24px",
      marginBottom: "20px",
      backgroundColor: "#fff",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "12px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
      margin: 0,
    },
    instructorBadge: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 12px",
      backgroundColor: "#f0fdf4",
      color: "#22c55e",
      borderRadius: "20px",
      fontSize: "13px",
      fontWeight: "500",
    },
    dateRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "16px",
      fontSize: "14px",
      color: "#6b7280",
    },
    dateIcon: {
      color: "#9ca3af",
    },
    cardContent: {
      fontSize: "14px",
      color: "#4b5563",
      lineHeight: "1.7",
      whiteSpace: "pre-line",
    },
    readMore: {
      display: "inline-block",
      marginTop: "16px",
      fontSize: "14px",
      color: "#2563eb",
      cursor: "pointer",
      textDecoration: "none",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <AfterNavbar />
      
      <div style={styles.mainWrapper}>
        {/* Left Sidebar */}
        <div style={styles.leftSidebar}>
          <h2 style={styles.courseTitle}>Web Development<br />Bootcamp</h2>
          
          <div 
            style={styles.menuItem}
            onClick={() => setCourseExpanded(!courseExpanded)}
          >
            <span>Course Material</span>
            <FontAwesomeIcon icon={courseExpanded ? faChevronUp : faChevronDown} style={{ fontSize: "12px" }} />
          </div>
          
          <div style={styles.menuItem}>
            <span>Grades</span>
          </div>
          
          <div 
            style={styles.menuItem}
            onClick={() => navigate('/notifications')}
          >
            <span>Notifications</span>
          </div>
          
          <div 
            style={styles.menuItem}
            onClick={() => navigate('/chatwindow')}
          >
            <span>Chat with Trainer</span>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Breadcrumb */}
          <div style={styles.breadcrumb}>
            <span style={styles.breadcrumbItem}>Home</span>
            <span style={styles.breadcrumbSeparator}>&gt;</span>
            <span style={styles.breadcrumbActive}>Announcements</span>
          </div>

          {/* Announcement Cards */}
          {announcements.map((announcement) => (
            <div key={announcement.id} style={styles.announcementCard}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{announcement.title}</h3>
                <div style={styles.instructorBadge}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "12px" }} />
                  <span>{announcement.instructor}</span>
                </div>
              </div>
              
              <div style={styles.dateRow}>
                <FontAwesomeIcon icon={faCalendarAlt} style={styles.dateIcon} />
                <span>{announcement.date}</span>
              </div>
              
              <div style={styles.cardContent}>
                {announcement.content}
              </div>
              
              <a href="#" style={styles.readMore}>Read More &gt;</a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnnouncementPage;

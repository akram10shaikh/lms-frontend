import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotificationPage.css';
import AfterNavbar from '../../components/AfterLoginNavbar';
import Footer from '../../HomePage/footer';

const notifications = [
  {
    id: 1,
    title: "Update your profile picture",
    description: "Profile photo missing - upload within 2 days to stay on track",
    time: "10 mins ago",
  },
  {
    id: 2,
    title: "Update your profile picture",
    description: "Profile photo missing - upload within 2 days to stay on track",
    time: "10 mins ago",
  },
  {
    id: 3,
    title: "Update your profile picture",
    description: "Profile photo missing - upload within 2 days to stay on track",
    time: "10 mins ago",
  },
  {
    id: 4,
    title: "Update your profile picture",
    description: "Profile photo missing - upload within 2 days to stay on track",
    time: "10 mins ago",
  },
  {
    id: 5,
    title: "Update your profile picture",
    description: "Profile photo missing - upload within 2 days to stay on track",
    time: "10 mins ago",
  },
];

const NotificationPage = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Notifications");

  const styles = {
    pageWrapper: {
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
    },
    mainContainer: {
      display: "flex",
      marginTop: "70px",
      minHeight: "calc(100vh - 70px)",
    },
    sidebar: {
      width: "260px",
      background: "white",
      borderRight: "1px solid #e5e7eb",
      padding: "24px 0",
      flexShrink: 0,
    },
    sidebarHeader: {
      padding: "0 20px 20px",
      borderBottom: "1px solid #e5e7eb",
    },
    sidebarTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#111827",
      margin: 0,
    },
    sidebarSubtitle: {
      fontSize: "14px",
      color: "#6b7280",
      margin: "4px 0 0",
    },
    sidebarSection: {
      padding: "16px 0",
      borderBottom: "1px solid #e5e7eb",
    },
    sidebarSectionHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#111827",
      cursor: "pointer",
    },
    sidebarMenuItem: {
      padding: "14px 20px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#111827",
      cursor: "pointer",
    },
    sidebarMenuItemActive: {
      padding: "14px 20px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#3b82f6",
      cursor: "pointer",
    },
    content: {
      flex: 1,
      padding: "24px 40px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#111827",
      margin: 0,
    },
    sortSelect: {
      padding: "8px 16px",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      fontSize: "14px",
      color: "#6b7280",
      background: "white",
      cursor: "pointer",
    },
    notificationCard: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "20px 24px",
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      marginBottom: "12px",
    },
    notificationTitle: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#111827",
      margin: "0 0 4px",
    },
    notificationDesc: {
      fontSize: "14px",
      color: "#6b7280",
      margin: 0,
    },
    notificationTime: {
      fontSize: "13px",
      color: "#3b82f6",
      whiteSpace: "nowrap",
    },
    loadMoreContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "24px",
    },
    loadMoreBtn: {
      background: "#3b82f6",
      color: "white",
      border: "none",
      padding: "12px 32px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.pageWrapper}>
      <AfterNavbar />

      <div style={styles.mainContainer}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarHeader}>
            <h2 style={styles.sidebarTitle}>Web Development</h2>
            <p style={styles.sidebarSubtitle}>Bootcamp</p>
          </div>

          <div style={styles.sidebarSection}>
            <div style={styles.sidebarSectionHeader}>
              <span>Course Material</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>

          <div 
            style={activeMenu === "Grades" ? styles.sidebarMenuItemActive : styles.sidebarMenuItem}
            onClick={() => setActiveMenu("Grades")}
          >
            <span>Grades</span>
          </div>

          <div 
            style={activeMenu === "Notifications" ? styles.sidebarMenuItemActive : styles.sidebarMenuItem}
            onClick={() => setActiveMenu("Notifications")}
          >
            <span>Notifications</span>
          </div>

          <div 
            style={activeMenu === "Chat" ? styles.sidebarMenuItemActive : styles.sidebarMenuItem}
            onClick={() => {
              setActiveMenu("Chat");
              navigate('/chatwindow');
            }}
          >
            <span>Chat with Trainer</span>
          </div>
        </aside>

        {/* Main Content */}
        <main style={styles.content}>
          <div style={styles.header}>
            <h1 style={styles.title}>Recent Notification</h1>
            <select style={styles.sortSelect}>
              <option>Sort By</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          {notifications.map((note) => (
            <div key={note.id} style={styles.notificationCard}>
              <div>
                <p style={styles.notificationTitle}>{note.title}</p>
                <p style={styles.notificationDesc}>{note.description}</p>
              </div>
              <span style={styles.notificationTime}>{note.time}</span>
            </div>
          ))}

          <div style={styles.loadMoreContainer}>
            <button style={styles.loadMoreBtn}>Load More</button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default NotificationPage;

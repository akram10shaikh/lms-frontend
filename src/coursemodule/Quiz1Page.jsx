import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz1Page.css";
import AfterNavbar from "../components/AfterLoginNavbar";
import Footer from "../HomePage/footer";

const Quiz1Page = () => {
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState("Module 1");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const modules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    pageWrapper: {
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
    },
    mainContainer: {
      display: "flex",
      marginTop: isMobile ? "60px" : "70px",
      minHeight: "calc(100vh - 70px)",
      flexDirection: isMobile ? "column" : "row",
    },
    mobileMenuBtn: {
      display: isMobile ? "flex" : "none",
      alignItems: "center",
      gap: "8px",
      padding: "12px 16px",
      background: "white",
      border: "none",
      borderBottom: "1px solid #e5e7eb",
      width: "100%",
      fontSize: "14px",
      fontWeight: "500",
      color: "#3b82f6",
      cursor: "pointer",
    },
    sidebar: {
      width: isMobile ? "100%" : "260px",
      background: "white",
      borderRight: isMobile ? "none" : "1px solid #e5e7eb",
      padding: isMobile ? "0" : "24px 0",
      flexShrink: 0,
      display: isMobile ? (sidebarOpen ? "block" : "none") : "block",
      position: isMobile ? "relative" : "static",
      borderBottom: isMobile ? "1px solid #e5e7eb" : "none",
    },
    sidebarHeader: {
      padding: isMobile ? "16px" : "0 20px 20px",
      borderBottom: "1px solid #e5e7eb",
    },
    sidebarTitle: {
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "600",
      color: "#111827",
      margin: 0,
    },
    sidebarSubtitle: {
      fontSize: isMobile ? "13px" : "14px",
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
      padding: isMobile ? "0 16px" : "0 20px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#111827",
      cursor: "pointer",
    },
    moduleList: {
      listStyle: "none",
      padding: 0,
      margin: "12px 0 0",
    },
    moduleItem: {
      display: "flex",
      alignItems: "center",
      gap: isSmallMobile ? "10px" : "14px",
      padding: isMobile ? "12px 16px 12px 20px" : "14px 20px 14px 24px",
      fontSize: isMobile ? "14px" : "15px",
      color: "#6b7280",
      cursor: "pointer",
      transition: "all 0.2s",
      position: "relative",
    },
    moduleItemActive: {
      color: "#111827",
      background: "#f0f5ff",
    },
    moduleIndicator: {
      width: isMobile ? "24px" : "28px",
      height: isMobile ? "24px" : "28px",
      borderRadius: "50%",
      background: "#e5e7eb",
      flexShrink: 0,
    },
    moduleIndicatorActive: {
      background: "#dbeafe",
    },
    activeBar: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "4px",
      background: "#3b82f6",
      borderRadius: "0 4px 4px 0",
    },
    sidebarMenuItem: {
      padding: isMobile ? "12px 16px" : "14px 20px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#111827",
      cursor: "pointer",
    },
    content: {
      flex: 1,
      padding: isSmallMobile ? "16px 12px" : isMobile ? "20px 16px" : "24px 40px",
    },
    breadcrumb: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: isSmallMobile ? "11px" : "13px",
      color: "#6b7280",
      marginBottom: "8px",
      flexWrap: "wrap",
    },
    breadcrumbActive: {
      color: "#3b82f6",
    },
    pageTitle: {
      fontSize: isSmallMobile ? "18px" : isMobile ? "20px" : "24px",
      fontWeight: "600",
      color: "#111827",
      margin: "0 0 20px",
    },
  };

  const quizData = [
    {
      id: 1,
      title: "HTML Algorithms",
      date: "Due: 29 Dec 2024",
      description: "Responsive design adapts websites to automatically adjust their layout and content based",
      typeOfTest: "Quiz",
      testCreatedOn: "Dec 22, 11:30AM +04",
      grade: "89%",
      gradeColor: "#10b981",
      note: "You Need At Least 74% To Pass. We Keep Your Highest Score.",
      status: null
    },
    {
      id: 2,
      title: "HTML Algorithms",
      date: "Due: 29 Dec 2024",
      description: "Responsive design adapts websites to automatically adjust their layout and content based",
      typeOfTest: "Assignments",
      testCreatedOn: "Dec 22, 11:30AM +04",
      grade: null,
      status: "Pending",
      statusColor: "#f97316"
    },
    {
      id: 3,
      title: "HTML Algorithms",
      date: "Due: 29 Dec 2024",
      description: "Responsive design adapts websites to automatically adjust their layout and content based",
      typeOfTest: "Assignments",
      testCreatedOn: "Dec 22, 11:30AM +04",
      grade: null,
      status: "Completed",
      statusColor: "#10b981"
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      <AfterNavbar />

      <div style={styles.mainContainer}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <button style={styles.mobileMenuBtn} onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
            {sidebarOpen ? "Hide Menu" : "Show Menu"}
          </button>
        )}

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

            <ul style={styles.moduleList}>
              {modules.map((module, index) => (
                <li 
                  key={index} 
                  style={{
                    ...styles.moduleItem,
                    ...(expandedModule === module ? styles.moduleItemActive : {})
                  }}
                  onClick={() => setExpandedModule(module)}
                >
                  {expandedModule === module && <div style={styles.activeBar}></div>}
                  <span style={{
                    ...styles.moduleIndicator,
                    ...(expandedModule === module ? styles.moduleIndicatorActive : {})
                  }}></span>
                  {module}
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.sidebarMenuItem}>
            <span>Grades</span>
          </div>

          <div style={{...styles.sidebarMenuItem, cursor: 'pointer'}} onClick={() => navigate('/notifications')}>
            <span>Notifications</span>
          </div>

          <div style={{...styles.sidebarMenuItem, cursor: 'pointer'}} onClick={() => navigate('/chatwindow')}>
            <span>Chat with Trainer</span>
          </div>
        </aside>

        {/* Main Content */}
        <main style={styles.content}>
          {/* Breadcrumb */}
          <div style={styles.breadcrumb}>
            <span>Web Development bootcamp</span>
            <span>&gt;</span>
            <span>Test</span>
            <span>&gt;</span>
            <span style={styles.breadcrumbActive}>HTML & CSS basics</span>
          </div>

          <h1 style={styles.pageTitle}>Data Structure & Algorithms</h1>

          {/* Quiz Cards */}
          <div className="quiz1-cards-container">
            {quizData.map((quiz) => (
              <div key={quiz.id} className="quiz1-card">
                <div className="quiz1-card-header">
                  <h3 className="quiz1-card-title">{quiz.title}</h3>
                  <svg className="expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>

                <span className="quiz1-date-badge">{quiz.date}</span>

                <p className="quiz1-card-description">{quiz.description}</p>

                <div className="quiz1-card-details">
                  <div className="detail-row">
                    <span className="detail-icon">📝</span>
                    <span className="detail-label">Type Of Test</span>
                    <span 
                      className="detail-value type-value" 
                      style={{ color: '#3b82f6', cursor: 'pointer' }}
                      onClick={() => {
                        if (quiz.typeOfTest === 'Quiz') {
                          navigate('/quiz');
                        } else if (quiz.typeOfTest === 'Assignments') {
                          navigate('/assignment');
                        }
                      }}
                    >
                      {quiz.typeOfTest}
                    </span>
                  </div>

                  <div className="detail-row">
                    <span className="detail-icon">📅</span>
                    <span className="detail-label">Test Created On</span>
                    <span className="detail-value">{quiz.testCreatedOn}</span>
                  </div>

                  {quiz.grade && (
                    <div className="detail-row">
                      <span className="detail-icon">📊</span>
                      <span className="detail-label">Your Grade</span>
                      <span className="detail-value grade-value" style={{ color: quiz.gradeColor }}>{quiz.grade}</span>
                    </div>
                  )}

                  {quiz.status && (
                    <div className="detail-row">
                      <span className="detail-icon">📋</span>
                      <span className="detail-label">Your Status</span>
                      <span className="detail-value status-value" style={{ color: quiz.statusColor }}>{quiz.status}</span>
                    </div>
                  )}
                </div>

                {quiz.note && (
                  <p className="quiz1-card-note">{quiz.note}</p>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz1Page;

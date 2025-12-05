import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AfterNavbar from "../../components/AfterLoginNavbar";
import Footer from "../../HomePage/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";

const conversations = [
  {
    id: 1,
    name: "Akash",
    message: "Thank you very much. I'm glad ...",
    time: "1 min ago",
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/050/820/039/small/happy-millennial-guy-talking-on-mobile-phone-and-smiling-beige-background-free-space-photo.jpg",
    online: true,
  },
  {
    id: 2,
    name: "Emery Korsgard",
    message: "Thanks!. You are very helpful...",
    time: "1 min ago",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    online: false,
  },
  {
    id: 3,
    name: "Nadia Lauren",
    message: "Okay. I know very well about it..",
    time: "1 min ago",
    avatar: "https://t4.ftcdn.net/jpg/03/17/72/03/360_F_317720355_sn87YEwDHHGMMYYmxiS3o3Hinkt1T3sB.jpg",
    online: false,
  },
  {
    id: 4,
    name: "Jason Statham",
    message: "Is there anything I can help? Just ...",
    time: "1 min ago",
    avatar: "https://media.istockphoto.com/id/1415209792/photo/photo-of-funny-young-brunet-guy-crossed-arms-wear-grey-shirt-isolated-on-green-color.jpg?s=612x612&w=0&k=20&c=xljqAasJXK5jfB8TZZX17dXhHjik_M0P_jFlrJYHd8U=",
    online: false,
  },
];

const ChatWindowPage = () => {
  const navigate = useNavigate();
  const [courseExpanded, setCourseExpanded] = useState(false);
  const [selectedUser, setSelectedUser] = useState(conversations[0]);
  const [messageText, setMessageText] = useState("");
  const [messageMap, setMessageMap] = useState({
    Akash: [
      {
        text: "Morning, Akash, I have question about My Task",
        sender: "me",
        time: "Today 11:52",
      },
      {
        text: "Yes sure, Any problem with your assignment?",
        sender: "other",
        time: "Today 11:53",
      },
    ],
    "Emery Korsgard": [
      {
        text: "Thanks!. You are very helpful...",
        sender: "me",
        time: "Today 10:45",
      },
    ],
    "Nadia Lauren": [
      {
        text: "Okay. I know very well about it..",
        sender: "other",
        time: "Today 7:31",
      },
    ],
    "Jason Statham": [
      {
        text: "Is there anything I can help? Just contact me.",
        sender: "other",
        time: "Today 10:31",
      },
    ],
  });

  const handleSendMessage = () => {
    if (messageText.trim() && selectedUser) {
      const newMsg = {
        text: messageText,
        sender: "me",
        time: `Today ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`,
      };
      setMessageMap((prev) => ({
        ...prev,
        [selectedUser.name]: [...(prev[selectedUser.name] || []), newMsg],
      }));
      setMessageText("");
    }
  };

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
    menuItemActive: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 0",
      fontSize: "15px",
      color: "#2563eb",
      cursor: "pointer",
      borderBottom: "1px solid #f3f4f6",
      fontWeight: "500",
    },
    chatContainer: {
      flex: 1,
      display: "flex",
      padding: "24px",
      gap: "0",
    },
    chatBox: {
      flex: 1,
      display: "flex",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "#fff",
      maxWidth: "1200px",
      minHeight: "600px",
      margin: "0 auto",
    },
    conversationsSidebar: {
      width: "320px",
      borderRight: "1px solid #e5e7eb",
      display: "flex",
      flexDirection: "column",
    },
    searchBox: {
      padding: "16px",
      borderBottom: "1px solid #e5e7eb",
    },
    searchInput: {
      width: "100%",
      padding: "10px 12px",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      fontSize: "14px",
      outline: "none",
      display: "flex",
      alignItems: "center",
    },
    searchWrapper: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "8px 12px",
      gap: "8px",
    },
    recentTitle: {
      padding: "12px 16px",
      fontSize: "13px",
      color: "#6b7280",
      fontWeight: "500",
    },
    conversationList: {
      flex: 1,
      overflowY: "auto",
    },
    conversationItem: {
      display: "flex",
      alignItems: "center",
      padding: "12px 16px",
      gap: "12px",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    conversationItemActive: {
      display: "flex",
      alignItems: "center",
      padding: "12px 16px",
      gap: "12px",
      cursor: "pointer",
      backgroundColor: "#f3f4f6",
    },
    avatar: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #e5e7eb",
    },
    avatarBlue: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #2563eb",
    },
    conversationInfo: {
      flex: 1,
      minWidth: 0,
    },
    conversationName: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "2px",
    },
    conversationMessage: {
      fontSize: "13px",
      color: "#6b7280",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    conversationTime: {
      fontSize: "11px",
      color: "#9ca3af",
      whiteSpace: "nowrap",
    },
    chatArea: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    chatHeader: {
      display: "flex",
      alignItems: "center",
      padding: "16px 20px",
      borderBottom: "1px solid #e5e7eb",
      gap: "12px",
    },
    headerAvatar: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    headerInfo: {
      flex: 1,
    },
    headerName: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#1f2937",
    },
    headerStatus: {
      fontSize: "13px",
      color: "#22c55e",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    messagesArea: {
      flex: 1,
      padding: "20px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      backgroundColor: "#fafafa",
    },
    dateDivider: {
      textAlign: "center",
      margin: "8px 0",
    },
    dateBadge: {
      display: "inline-block",
      padding: "6px 16px",
      backgroundColor: "#374151",
      color: "#fff",
      borderRadius: "20px",
      fontSize: "12px",
    },
    messageRow: {
      display: "flex",
      flexDirection: "column",
    },
    messageRowMe: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    messageRowOther: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    messageBubble: {
      maxWidth: "70%",
      padding: "12px 16px",
      borderRadius: "12px",
      fontSize: "14px",
      lineHeight: "1.5",
    },
    messageBubbleMe: {
      backgroundColor: "#2563eb",
      color: "#fff",
      borderBottomRightRadius: "4px",
    },
    messageBubbleOther: {
      backgroundColor: "#fff",
      color: "#1f2937",
      border: "1px solid #e5e7eb",
      borderBottomLeftRadius: "4px",
    },
    messageTime: {
      fontSize: "11px",
      color: "#9ca3af",
      marginTop: "4px",
    },
    inputArea: {
      padding: "16px 20px",
      borderTop: "1px solid #e5e7eb",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      backgroundColor: "#fff",
    },
    inputAvatar: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    messageInput: {
      flex: 1,
      padding: "12px 16px",
      border: "1px solid #e5e7eb",
      borderRadius: "24px",
      fontSize: "14px",
      outline: "none",
    },
    sendButton: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#2563eb",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    sendIcon: {
      color: "#fff",
      fontSize: "16px",
    },
  };

  const currentMessages = selectedUser ? messageMap[selectedUser.name] || [] : [];

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
          
          <div style={styles.menuItemActive}>
            <span>Chat with Trainer</span>
          </div>
        </div>

        {/* Chat Container */}
        <div style={styles.chatContainer}>
          <div style={styles.chatBox}>
            {/* Conversations Sidebar */}
            <div style={styles.conversationsSidebar}>
              <div style={styles.searchBox}>
                <div style={styles.searchWrapper}>
                  <span style={{ color: "#9ca3af", fontSize: "14px" }}>Search</span>
                  <span style={{ color: "#9ca3af", marginLeft: "auto" }}>Name</span>
                  <FontAwesomeIcon icon={faSearch} style={{ color: "#9ca3af", fontSize: "14px" }} />
                </div>
              </div>
              
              <div style={styles.recentTitle}>Recent conversations</div>
              
              <div style={styles.conversationList}>
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    style={selectedUser?.id === conv.id ? styles.conversationItemActive : styles.conversationItem}
                    onClick={() => setSelectedUser(conv)}
                  >
                    <img
                      src={conv.avatar}
                      alt={conv.name}
                      style={selectedUser?.id === conv.id ? styles.avatarBlue : styles.avatar}
                    />
                    <div style={styles.conversationInfo}>
                      <div style={styles.conversationName}>{conv.name}</div>
                      <div style={styles.conversationMessage}>{conv.message}</div>
                    </div>
                    <div style={styles.conversationTime}>{conv.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div style={styles.chatArea}>
              {selectedUser && (
                <>
                  <div style={styles.chatHeader}>
                    <img
                      src={selectedUser.avatar}
                      alt={selectedUser.name}
                      style={styles.headerAvatar}
                    />
                    <div style={styles.headerInfo}>
                      <div style={styles.headerName}>{selectedUser.name}</div>
                      <div style={styles.headerStatus}>
                        <span style={{ color: "#22c55e" }}>●</span> Online
                      </div>
                    </div>
                  </div>

                  <div style={styles.messagesArea}>
                    <div style={styles.dateDivider}>
                      <span style={styles.dateBadge}>Today</span>
                    </div>
                    
                    {currentMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        style={msg.sender === "me" ? styles.messageRowMe : styles.messageRowOther}
                      >
                        <div
                          style={{
                            ...styles.messageBubble,
                            ...(msg.sender === "me" ? styles.messageBubbleMe : styles.messageBubbleOther),
                          }}
                        >
                          {msg.text}
                        </div>
                        <div style={styles.messageTime}>{msg.time}</div>
                      </div>
                    ))}
                  </div>

                  <div style={styles.inputArea}>
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/050/820/039/small/happy-millennial-guy-talking-on-mobile-phone-and-smiling-beige-background-free-space-photo.jpg"
                      alt="You"
                      style={styles.inputAvatar}
                    />
                    <input
                      type="text"
                      placeholder="Send your message.."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      style={styles.messageInput}
                    />
                    <button style={styles.sendButton} onClick={handleSendMessage}>
                      <FontAwesomeIcon icon={faPaperPlane} style={styles.sendIcon} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatWindowPage;

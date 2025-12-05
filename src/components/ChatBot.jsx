import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faMinus, faTimes, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hii vishal !', type: 'bot' },
    { id: 2, text: "I'm learnpro Support Bot! 🤖", type: 'bot' },
    { id: 3, text: "I'm trained to help with your learning. I can answer questions or help troubleshoot issues on Coursera.", type: 'bot' },
    { id: 4, text: "Some of my responses may be AI-generated. You can verify the accuracy of my answers in our.", type: 'bot' },
    { id: 5, text: "What can I help you with? 😊", type: 'bot' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message, type: 'user' }]);
      setMessage('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: prev.length + 1, 
          text: "Thanks for your message! Our support team will get back to you soon.", 
          type: 'bot' 
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const styles = {
    // Chat Button (floating)
    chatButton: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
      zIndex: 1000,
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    chatButtonIcon: {
      fontSize: '24px',
    },
    // Chat Container
    chatContainer: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '320px',
      height: '500px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      overflow: 'hidden',
    },
    // Header
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e5e7eb',
    },
    headerTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111',
    },
    headerActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    headerButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#6b7280',
      fontSize: '14px',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Messages Container
    messagesContainer: {
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      backgroundColor: '#fff',
    },
    // Message Bubble
    messageBubble: {
      maxWidth: '85%',
      padding: '12px 16px',
      borderRadius: '12px',
      fontSize: '14px',
      lineHeight: '1.5',
    },
    botMessage: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      alignSelf: 'flex-start',
      borderBottomLeftRadius: '4px',
    },
    userMessage: {
      backgroundColor: '#3b82f6',
      color: '#fff',
      alignSelf: 'flex-end',
      borderBottomRightRadius: '4px',
    },
    // Input Container
    inputContainer: {
      padding: '16px 20px',
      borderTop: '1px solid #e5e7eb',
      backgroundColor: '#fff',
    },
    inputWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: '24px',
      backgroundColor: '#fff',
    },
    input: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: '14px',
      color: '#374151',
      backgroundColor: 'transparent',
    },
    sendButton: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      border: '2px solid #e5e7eb',
      backgroundColor: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s',
    },
    sendIcon: {
      width: '16px',
      height: '16px',
    },
  };

  if (!isOpen) {
    return (
      <button 
        style={styles.chatButton} 
        onClick={() => setIsOpen(true)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <FontAwesomeIcon icon={faCommentDots} style={styles.chatButtonIcon} />
      </button>
    );
  }

  return (
    <div style={styles.chatContainer}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.headerTitle}>Chats With Us</span>
        <div style={styles.headerActions}>
          <button style={styles.headerButton}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
          <button style={styles.headerButton} onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button style={styles.headerButton} onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div style={styles.messagesContainer}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              ...styles.messageBubble,
              ...(msg.type === 'bot' ? styles.botMessage : styles.userMessage),
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={styles.inputContainer}>
        <div style={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Ask Your Question Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            style={styles.input}
          />
          <button 
            style={styles.sendButton}
            onClick={handleSendMessage}
          >
            <svg 
              style={styles.sendIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#6b7280" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

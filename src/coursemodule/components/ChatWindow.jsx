import React from "react";
import MessageInput from "./MessageInput";

const ChatWindow = ({ selectedUser, messages, onSend }) => {
  if (!selectedUser) {
    return (
      <div className="chat-window no-user">
        <p>Please select a user to start chatting.</p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="avatar-large">
          {selectedUser.avatar?.startsWith("http") ? (
            <img src={selectedUser.avatar} alt={selectedUser.name} />
          ) : (
            <span>{selectedUser.avatar}</span>
          )}
        </div>
        <div className="chat-user-info">
          <h4>{selectedUser.name}</h4>
          <p>{selectedUser.online ? "● Online" : "Offline"}</p>
        </div>
      </div>

      <div className="chat-messages">
        <div className="date-divider">Today</div>
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            <div className="bubble">{msg.text}</div>
            <div className="time">{msg.time}</div>
          </div>
        ))}
      </div>

      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatWindow;

import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() !== "") {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={text}
        placeholder="Send your message..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend} className="send-button">
  <FontAwesomeIcon icon={faArrowRight} className="send-icon" />
</button>

    </div>
  );
};

export default MessageInput;

import React, { useState } from "react";
import Sidebar from "./SideBar";
import ChatWindow from "./ChatWindow";
import "./Chat.css";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const [messageMap, setMessageMap] = useState({
    Akash: [
      {
        text: "Morning Akash, I have question about My Task",
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
        text: "Good Morning, I have some error in my code. Can you help me reslove it?",
        sender: "me",
        time: "Today 10:30",
      },
      {
        text: "Yeah sure",
        sender: "other",
        time: "Today 10:31",
      },
      {
        text: "Thanks! You are very helpful...",
        sender: "me",
        time: "Today 10:45",
      },
    ],
    "Nadia Lauren": [
      {
        text: "Evening, What about the task? Do you have any doubts?",
        sender: "me",
        time: "Today 6:30",
      },
      {
        text: "Okay. I know very well about it..",
        sender: "other",
        time: "Today 7:31",
      },
    ],
    "Jason Statham": [
      {
        text: "Is there anything I can help? Just contact me if you need any help.",
        sender: "me",
        time: "Today 10:30",
      },
      {
        text: "Yeah sure",
        sender: "other",
        time: "Today 10:31",
      },
    ],
  });

  return (
    <div className="chat-page">
      <Sidebar setSelectedUser={setSelectedUser} />
      <ChatWindow
        selectedUser={selectedUser}
        messages={selectedUser ? messageMap[selectedUser.name] || [] : []}
        onSend={(text) => {
          if (!selectedUser) return;
          const newMsg = {
            text,
            sender: "me",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessageMap((prev) => ({
            ...prev,
            [selectedUser.name]: [...(prev[selectedUser.name] || []), newMsg],
          }));
        }}
      />
    </div>
  );
};

export default ChatPage;

import React from "react";

const conversations = [
  {
    id: 1,
    name: "Akash",
    message: "Thank you very much...",
    time: "1 min ago",
    img: "https://static.vecteezy.com/system/resources/thumbnails/050/820/039/small/happy-millennial-guy-talking-on-mobile-phone-and-smiling-beige-background-free-space-photo.jpg", // Image URL
  },
  {
    id: 2,
    name: "Emery Korsgard",
    message: "Thanks! You are very helpful...",
    time: "1 min ago",
    img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg", 
  },
  {
    id: 3,
    name: "Nadia Lauren",
    message: "Okay. I know very well...",
    time: "1 min ago",
    img: "https://t4.ftcdn.net/jpg/03/17/72/03/360_F_317720355_sn87YEwDHHGMMYYmxiS3o3Hinkt1T3sB.jpg",
  },
  {
    id: 4,
    name: "Jason Statham",
    message: "Is there anything I can help?",
    time: "1 min ago",
    img: "https://media.istockphoto.com/id/1415209792/photo/photo-of-funny-young-brunet-guy-crossed-arms-wear-grey-shirt-isolated-on-green-color.jpg?s=612x612&w=0&k=20&c=xljqAasJXK5jfB8TZZX17dXhHjik_M0P_jFlrJYHd8U=",
  },
];

const Sidebar = ({ setSelectedUser }) => {
  return (
    <div className="chat-sidebar">
      <input className="search-bar" type="text" placeholder="Search Name" />
      <div className="conversation-list">
        {conversations.map((c) => (
          <div
  key={c.id}
  className="conversation"
  onClick={() => setSelectedUser({
    name: c.name,
    message: c.message,
    avatar: c.img,
    time: c.time
  })}
>
  <div className="avatar">
    {c.img.startsWith("http") ? (
      <img src={c.img} alt={c.name} />
    ) : (
      <span>{c.img}</span>
    )}
  </div>

  <div className="conversation-info">
    <div className="name">{c.name}</div>
    <div className="message">{c.message}</div>
  </div>
  <div className="time">{c.time}</div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Sidebar;

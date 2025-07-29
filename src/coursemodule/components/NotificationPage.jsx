import React from 'react';
import './NotificationPage.css';

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
];

const NotificationPage = () => {
  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>Recent Notification</h2>
        <select className="sort-select">
          <option>Sort By</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {notifications.map((note) => (
        <div key={note.id} className="notification-card">
          <div className="notification-text">
            <p className="title">{note.title}</p>
            <p className="description">{note.description}</p>
          </div>
          <span className="time">{note.time}</span>
        </div>
      ))}

      <div className="load-more-container">
        <button className="load-more-btn">Load More</button>
      </div>
    </div>
  );
};

export default NotificationPage;

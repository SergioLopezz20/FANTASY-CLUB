import React, { useState, useEffect } from 'react';

function Notification({ message, timestamp }) {
  return (
    <div className="notification">
      <p>{message}</p>
      <small>{new Date(timestamp).toLocaleString()}</small>
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the server or database
    const fetchedNotifications = [
      { id: 1, message: 'Jornada has started!', timestamp: new Date().toISOString() },
      { id: 2, message: 'You have a new bid on your player.', timestamp: new Date().toISOString() },
    ];
    setNotifications(fetchedNotifications);
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <Notification message={notification.message} timestamp={notification.timestamp} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;

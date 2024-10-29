import React from 'react';

function Settings() {
  const handleLogout = () => {
    // Add logic to handle user logout
    console.log('User logged out');
  };

  return (
    <div>
      <h1>Settings</h1>
      <p>This is the Settings page of the Fantasy Club application.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Settings;

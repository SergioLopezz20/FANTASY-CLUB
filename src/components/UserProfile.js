import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    photo: '',
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <label>
          Photo:
          <input
            type="text"
            name="photo"
            value={user.photo}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <h2>Player Information</h2>
        <p>Photo: {user.photo}</p>
        <p>Name: {user.name}</p>
      </div>
    </div>
  );
}

export default UserProfile;

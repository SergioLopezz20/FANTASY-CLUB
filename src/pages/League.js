import React, { useState } from 'react';

function League() {
  const [leagueName, setLeagueName] = useState('');
  const [joinURL, setJoinURL] = useState('');

  const handleCreateLeague = () => {
    // Logic to create a league and generate a join URL
    const generatedURL = 'http://example.com/join/league123';
    setJoinURL(generatedURL);
    alert(`League created! Share this URL to invite others: ${generatedURL}`);
  };

  const handleJoinLeague = () => {
    // Logic to join a league using the provided URL
    if (joinURL) {
      alert(`Joined league using URL: ${joinURL}`);
    } else {
      alert('Please enter a valid URL.');
    }
  };

  return (
    <div>
      <h1>League</h1>
      <p>This is the League page of the Fantasy Club application.</p>
      <div>
        <h2>Create a League</h2>
        <input
          type="text"
          placeholder="Enter league name"
          value={leagueName}
          onChange={(e) => setLeagueName(e.target.value)}
        />
        <button onClick={handleCreateLeague}>Create League</button>
      </div>
      <div>
        <h2>Join a League</h2>
        <input
          type="text"
          placeholder="Enter join URL"
          value={joinURL}
          onChange={(e) => setJoinURL(e.target.value)}
        />
        <button onClick={handleJoinLeague}>Join League</button>
      </div>
    </div>
  );
}

export default League;

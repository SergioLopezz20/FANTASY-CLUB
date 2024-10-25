import React, { useState } from 'react';

function League() {
  const [leagueName, setLeagueName] = useState('');
  const [joinURL, setJoinURL] = useState('');
  const [leagues, setLeagues] = useState([]);
  const [user, setUser] = useState({ id: 1, name: 'User 1', balance: 1000, players: [] });

  const handleCreateLeague = () => {
    const generatedURL = `http://example.com/join/${leagueName}`;
    setJoinURL(generatedURL);
    setLeagues([...leagues, { name: leagueName, url: generatedURL, players: [] }]);
    alert(`League created! Share this URL to invite others: ${generatedURL}`);
  };

  const handleJoinLeague = () => {
    if (joinURL) {
      const league = leagues.find((league) => league.url === joinURL);
      if (league) {
        league.players.push(user);
        setLeagues([...leagues]);
        alert(`Joined league using URL: ${joinURL}`);
      } else {
        alert('Invalid URL.');
      }
    } else {
      alert('Please enter a valid URL.');
    }
  };

  const handleLeaveLeague = (leagueName) => {
    const league = leagues.find((league) => league.name === leagueName);
    if (league) {
      league.players = league.players.filter((player) => player.id !== user.id);
      setLeagues([...leagues]);
      setUser({ ...user, balance: 1000, players: [] });
      alert(`Left league: ${leagueName}`);
    } else {
      alert('League not found.');
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
      <div>
        <h2>Leave a League</h2>
        <input
          type="text"
          placeholder="Enter league name to leave"
          value={leagueName}
          onChange={(e) => setLeagueName(e.target.value)}
        />
        <button onClick={() => handleLeaveLeague(leagueName)}>Leave League</button>
      </div>
    </div>
  );
}

export default League;

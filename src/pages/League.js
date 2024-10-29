import React, { useState } from 'react';

function League() {
  const [leagueName, setLeagueName] = useState('');
  const [joinURL, setJoinURL] = useState('');
  const [leagues, setLeagues] = useState([]);
  const [user, setUser] = useState({ id: 1, name: 'User 1', balance: 1000, players: [] });
  const [jornada, setJornada] = useState({ start: '', end: '' });

  const handleCreateLeague = () => {
    const generatedURL = `http://example.com/join/${leagueName}`;
    setJoinURL(generatedURL);
    setLeagues([...leagues, { name: leagueName, url: generatedURL, players: [], jornada: { start: '', end: '' } }]);
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

  const handleStartJornada = () => {
    const league = leagues.find((league) => league.name === leagueName);
    if (league) {
      league.jornada.start = jornada.start;
      league.jornada.end = jornada.end;
      setLeagues([...leagues]);
      alert(`Jornada started for league: ${leagueName}`);
    } else {
      alert('League not found.');
    }
  };

  const handleEndJornada = () => {
    const league = leagues.find((league) => league.name === leagueName);
    if (league) {
      alert(`Jornada ended for league: ${leagueName}. Participants have 24 hours to fill out the questionnaire.`);
      // Notify participants to fill out the questionnaire
      // If a participant does not fill out the questionnaire, the league creator can either fill it out on their behalf or assign a score of 0
      // Update league standings and player statistics based on questionnaire responses
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
      <div>
        <h2>Start Jornada</h2>
        <input
          type="datetime-local"
          placeholder="Enter start date and time"
          value={jornada.start}
          onChange={(e) => setJornada({ ...jornada, start: e.target.value })}
        />
        <input
          type="datetime-local"
          placeholder="Enter end date and time"
          value={jornada.end}
          onChange={(e) => setJornada({ ...jornada, end: e.target.value })}
        />
        <button onClick={handleStartJornada}>Start Jornada</button>
      </div>
      <div>
        <h2>End Jornada</h2>
        <button onClick={handleEndJornada}>End Jornada</button>
      </div>
    </div>
  );
}

export default League;

import React from 'react';

function Home() {
  const leagues = [
    { name: 'League 1', url: 'http://example.com/join/league1' },
    { name: 'League 2', url: 'http://example.com/join/league2' },
    { name: 'League 3', url: 'http://example.com/join/league3' },
  ];

  return (
    <div>
      <h1>Welcome to Fantasy Club</h1>
      <p>This is the Home page of the Fantasy Club application.</p>
      <div>
        <h2>Your Leagues</h2>
        <ul>
          {leagues.map((league, index) => (
            <li key={index}>
              <a href={league.url}>{league.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

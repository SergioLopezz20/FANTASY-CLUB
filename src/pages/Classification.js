import React from 'react';

function Classification() {
  const teams = [
    { name: 'Team A', points: 10 },
    { name: 'Team B', points: 8 },
    { name: 'Team C', points: 6 },
    { name: 'Team D', points: 4 },
  ];

  const sortedTeams = teams.sort((a, b) => b.points - a.points);

  return (
    <div>
      <h1>Classification</h1>
      <p>This is the Classification page of the Fantasy Club application.</p>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classification;

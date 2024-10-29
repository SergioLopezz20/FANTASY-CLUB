import React, { useState } from 'react';

function Teams() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', photo: 'player1.jpg' },
    { id: 2, name: 'Player 2', photo: 'player2.jpg' },
    { id: 3, name: 'Player 3', photo: 'player3.jpg' },
    { id: 4, name: 'Player 4', photo: 'player4.jpg' },
  ]);

  const [lineup, setLineup] = useState([null, null, null, null]);

  const handleSelectPlayer = (index, player) => {
    const newLineup = [...lineup];
    newLineup[index] = player;
    setLineup(newLineup);
  };

  return (
    <div>
      <h1>Teams</h1>
      <p>This is the Teams page of the Fantasy Club application.</p>
      <div className="lineup">
        {lineup.map((player, index) => (
          <div key={index} className="lineup-slot" onClick={() => handleSelectPlayer(index, player)}>
            {player ? (
              <div>
                <img src={player.photo} alt={player.name} />
                <p>{player.name}</p>
              </div>
            ) : (
              <div className="empty-slot">Select Player</div>
            )}
          </div>
        ))}
      </div>
      <div className="players">
        {players.map((player) => (
          <div key={player.id} className="player" onClick={() => handleSelectPlayer(lineup.indexOf(null), player)}>
            <img src={player.photo} alt={player.name} />
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;

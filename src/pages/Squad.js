import React, { useState } from 'react';

function Squad() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', selected: false },
    { id: 2, name: 'Player 2', selected: false },
    { id: 3, name: 'Player 3', selected: false },
    { id: 4, name: 'Player 4', selected: false },
    { id: 5, name: 'Player 5', selected: false },
    { id: 6, name: 'Player 6', selected: false },
  ]);

  const handleSelectPlayer = (id) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, selected: !player.selected } : player
      )
    );
  };

  const selectedPlayers = players.filter((player) => player.selected);

  return (
    <div>
      <h1>Squad</h1>
      <p>This is the Squad page of the Fantasy Club application.</p>
      <div>
        <h2>Select 4 Players for the Match</h2>
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              <label>
                <input
                  type="checkbox"
                  checked={player.selected}
                  onChange={() => handleSelectPlayer(player.id)}
                  disabled={
                    !player.selected && selectedPlayers.length >= 4
                  }
                />
                {player.name}
              </label>
            </li>
          ))}
        </ul>
        {selectedPlayers.length === 4 && (
          <p>You have selected 4 players for the match.</p>
        )}
      </div>
    </div>
  );
}

export default Squad;

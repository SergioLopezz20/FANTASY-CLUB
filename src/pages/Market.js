import React, { useState } from 'react';

function Market() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', price: 100 },
    { id: 2, name: 'Player 2', price: 200 },
    { id: 3, name: 'Player 3', price: 300 },
    { id: 4, name: 'Player 4', price: 400 },
    { id: 5, name: 'Player 5', price: 500 },
  ]);

  const [balance, setBalance] = useState(1000);

  const handleBuyPlayer = (id) => {
    const player = players.find((player) => player.id === id);
    if (player && balance >= player.price) {
      setBalance(balance - player.price);
      alert(`You have acquired ${player.name} for ${player.price} units.`);
    } else {
      alert('Insufficient balance to acquire this player.');
    }
  };

  return (
    <div>
      <h1>Market</h1>
      <p>This is the Market page of the Fantasy Club application.</p>
      <div>
        <h2>Available Players</h2>
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              {player.name} - {player.price} units
              <button onClick={() => handleBuyPlayer(player.id)}>Buy</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Your Balance</h2>
        <p>{balance} units</p>
      </div>
    </div>
  );
}

export default Market;

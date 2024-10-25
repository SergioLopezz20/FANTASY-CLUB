import React, { useState } from 'react';

function Market() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', price: 100, bids: [] },
    { id: 2, name: 'Player 2', price: 200, bids: [] },
    { id: 3, name: 'Player 3', price: 300, bids: [] },
    { id: 4, name: 'Player 4', price: 400, bids: [] },
    { id: 5, name: 'Player 5', price: 500, bids: [] },
  ]);

  const [balance, setBalance] = useState(1000);
  const [bidAmount, setBidAmount] = useState(0);

  const handleBidPlayer = (id) => {
    const player = players.find((player) => player.id === id);
    if (player && balance >= bidAmount) {
      const newBid = { amount: bidAmount, timestamp: new Date().getTime() };
      player.bids.push(newBid);
      setPlayers([...players]);
      setBalance(balance - bidAmount);
      alert(`You have placed a bid of ${bidAmount} units for ${player.name}.`);
    } else {
      alert('Insufficient balance to place this bid.');
    }
  };

  const handleBuyPlayer = (id) => {
    const player = players.find((player) => player.id === id);
    if (player && player.bids.length > 0) {
      const highestBid = player.bids.reduce((max, bid) => (bid.amount > max.amount ? bid : max), player.bids[0]);
      const winningBid = player.bids.filter(bid => bid.amount === highestBid.amount).sort((a, b) => a.timestamp - b.timestamp)[0];
      setBalance(balance + highestBid.amount);
      alert(`You have acquired ${player.name} for ${highestBid.amount} units.`);
    } else {
      alert('No bids placed for this player.');
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
              <input
                type="number"
                placeholder="Enter bid amount"
                value={bidAmount}
                onChange={(e) => setBidAmount(Number(e.target.value))}
              />
              <button onClick={() => handleBidPlayer(player.id)}>Bid</button>
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

import React, { useEffect, useState } from 'react';

interface Game {
  title: string;
  competition: string;
  url: string;
}

const LiveSCores: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('https://www.scorebat.com/video-api/v3/')
      .then(res => res.json())
      .then(data => setGames(data.response.slice(0, 5)));
  }, []);

  return (
    <div className="card">
      <h2>Live Football Highlights</h2>
      {games.map((game, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <strong>{game.title}</strong>
          <p>{game.competition}</p>
          <a href={game.url} target="_blank" rel="noreferrer">Watch</a>
        </div>
      ))}
    </div>
  );
};

export default LiveSCores;
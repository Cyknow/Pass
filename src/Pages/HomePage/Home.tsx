import React from 'react';
import ExcRate from '../../Component/ExchangeRate/ExcRate';
import LiveSCores from '../../Component/FootballScores/LiveSCores';
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <h1>Welcome to My Portfolio</h1>
      <div className="flex-grid">
        <ExcRate />
        <LiveSCores />
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';

const ExcRate: React.FC = () => {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=NGN')
      .then(res => res.json())
      .then(data => setRate(data.rates.NGN));
  }, []);

  return (
    <div className="card">
      <h2>USD to NGN</h2>
      <p>Current Rate: {rate ? `₦${rate.toFixed(2)}` : 'Loading...'}</p>

    </div>
  );
};

export default ExcRate;

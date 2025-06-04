import React, { useState, useEffect } from 'react';
import './Landing.css';
import { motion } from 'framer-motion';

const Landing: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="container">
      <button className="button" onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      <h1 className="fade-in">Dr. Uchendu P. E. – Multidisciplinary Professional</h1>

      <div className="flex-grid">
        <motion.div
          className="card"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Full Stack Developer</h2>
          <p>Building scalable apps with React, Node.js, and secure crypto/Flutterwave payments.</p>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Medical Researcher</h2>
          <p>Bridging diagnostics with tech for better healthcare systems and smart lab tools.</p>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>CPA Marketer</h2>
          <p>Creating high-converting funnels, driving traffic, and automating revenue growth.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;


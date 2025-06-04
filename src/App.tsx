import React from 'react';
// import './Stylings/Style.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from "../src/Pages/HomePage/Home";
import Details from './Pages/ProjectPage/Details';
import GetUs from './Pages/ContactSection/GetUs';
import Story from './Pages/BlogPage/Story';
import Landing from './Pages/LandingPage/Landing';

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
        <Route path="/Project" element={<motion.div {...pageTransition}><Details /></motion.div>} />
        <Route path="/Blog" element={<motion.div {...pageTransition}><Story /></motion.div>} />
        <Route path="/Contact" element={<motion.div {...pageTransition}><GetUs /></motion.div>} />
        <Route path="/landing" element={<motion.div {...pageTransition}><Landing /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>          
          <Link to="/">Home</Link>
          <Link to="/project">Project</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/landing">Portfolio</Link>
        </nav>
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;

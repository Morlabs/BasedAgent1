import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FAQs from './pages/FAQs';
import BAAGToken from './pages/BAAGToken';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/baag-token">BAAG Token</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/baag-token" element={<BAAGToken />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

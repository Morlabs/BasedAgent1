import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <div className="navbar">
      <span className="hamburger">&#9776;</span>
      <div className="navbar-menu">
        <div className="dropdown">
          <Link to="#">About Based Agent</Link>
          <div className="dropdown-content">
            <Link to="/about">About</Link>
            <Link to="/baag-token">BAAG Token</Link>
            <Link to="/protection-fund">Protection Fund</Link>
            <a href="https://mor.org/MOR20" target="_blank" rel="noopener noreferrer">MOR20 Platform</a>
          </div>
        </div>
        <a href="https://github.com/Morlabs/BasedAgent/blob/main/Contribute/contribution_guidelines.md">Contribute</a>
        <div className="dropdown">
          <Link to="#">Resources</Link>
          <div className="dropdown-content">
            <Link to="/docs">Docs</Link>
            <Link to="/faqs">FAQs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

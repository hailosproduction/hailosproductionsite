import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1 className="logo text-pink-400 font-bold">Hāịlō</h1>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link to="/" className="nav-link glow-hover">Home</Link>
          <Link to="/about" className="nav-link glow-hover">About</Link>
          <Link to="/contact" className="nav-link glow-hover">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
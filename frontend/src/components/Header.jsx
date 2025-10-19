import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Music', path: '/music' },
    { name: 'Videos', path: '/videos' },
    { name: 'Artwork', path: '/artwork' },
    { name: 'Merchandise', path: '/merchandise' },
    { name: 'Charities', path: '/charities' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: 'rgba(17, 24, 39, 0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(236, 72, 153, 0.2)'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };

  const desktopNavStyle = {
    display: 'flex',
    gap: '32px'
  };

  const mobileMenuStyle = {
    display: 'none',
    padding: '8px',
    color: '#d1d5db',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
  };

  const mobileDropdownStyle = {
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    background: 'rgba(17, 24, 39, 0.95)',
    backdropFilter: 'blur(12px)',
    borderTop: '1px solid rgba(55, 65, 81, 1)',
    padding: '16px'
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={logoStyle}>
            Hāịlō
          </Link>

          {/* Desktop Navigation */}
          <div style={{ ...desktopNavStyle, '@media (max-width: 768px)': { display: 'none' } }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  padding: '8px 12px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  color: isActive(item.path) ? '#ec4899' : '#d1d5db',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = '#f9a8d4';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = '#d1d5db';
                  }
                }}
              >
                {item.name}
                {isActive(item.path) && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                    borderRadius: '2px'
                  }} />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              ...mobileMenuStyle,
              '@media (min-width: 769px)': { display: 'none' }
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={mobileDropdownStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    color: isActive(item.path) ? '#ec4899' : '#d1d5db',
                    background: isActive(item.path) ? 'rgba(236, 72, 153, 0.1)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.color = '#f9a8d4';
                      e.target.style.background = 'rgba(236, 72, 153, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.color = '#d1d5db';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const charities = [
    { id: 1, name: 'Autism Speaks', website: 'https://autismspeaks.org' },
    { id: 2, name: 'GLAAD', website: 'https://glaad.org' },
    { id: 3, name: 'Greenpeace', website: 'https://greenpeace.org' },
    { id: 4, name: 'Mental Health America', website: 'https://mhanational.org' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'SoundCloud', icon: '🎵', url: '#' }
  ];

  const footerStyle = {
    background: '#030712',
    borderTop: '1px solid rgba(55, 65, 81, 1)',
    color: 'white'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px'
  };

  const charityBannerStyle = {
    padding: '32px 0',
    textAlign: 'center',
    background: 'rgba(236, 72, 153, 0.05)',
    borderBottom: '1px solid rgba(55, 65, 81, 1)'
  };

  const heartStyle = {
    color: '#ec4899',
    fontSize: '1.25rem'
  };

  const charityLinksStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '16px'
  };

  const mainFooterStyle = {
    padding: '32px 0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px'
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '16px'
  };

  const socialStyle = {
    display: 'flex',
    gap: '16px',
    marginTop: '16px'
  };

  const copyrightStyle = {
    borderTop: '1px solid rgba(55, 65, 81, 1)',
    marginTop: '32px',
    paddingTop: '24px',
    textAlign: 'center'
  };

  return (
    <footer style={footerStyle}>
      {/* Charity Support Section */}
      <div style={charityBannerStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={heartStyle}>♥</span>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: 'white', margin: 0 }}>
              Supporting Important Causes
            </h3>
            <span style={heartStyle}>♥</span>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', maxWidth: '32rem', margin: '0 auto 24px auto' }}>
            Hāịlō proudly supports organizations working for autism awareness, LGBTQIA+ rights, environmental protection, and mental health advocacy.
          </p>
          
          {/* Quick Charity Links */}
          <div style={charityLinksStyle}>
            {charities.map((charity) => (
              <a
                key={charity.id}
                href={charity.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.875rem',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ec4899'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                {charity.name}
                <span style={{ fontSize: '0.75rem' }}>↗</span>
              </a>
            ))}
          </div>
          
          <Link
            to="/charities"
            style={{
              color: '#ec4899',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#f9a8d4'}
            onMouseLeave={(e) => e.target.style.color = '#ec4899'}
          >
            Learn more about supported organizations →
          </Link>
        </div>
      </div>

      <div style={mainFooterStyle}>
        <div style={containerStyle}>
          <div style={gridStyle}>
            {/* Brand & Social */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={logoStyle}>
                Hāịlō
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '16px' }}>
                Dark Melodies, Bright Advocacy
              </p>
              <div style={socialStyle}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    style={{
                      color: '#9ca3af',
                      fontSize: '1.25rem',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ec4899'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'white', fontWeight: '500', marginBottom: '16px' }}>Quick Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link 
                  to="/music" 
                  style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.875rem', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ec4899'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  Latest Music
                </Link>
                <Link 
                  to="/videos" 
                  style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.875rem', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ec4899'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  Music Videos
                </Link>
                <Link 
                  to="/merchandise" 
                  style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.875rem', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ec4899'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  Merchandise
                </Link>
                <Link 
                  to="/contact" 
                  style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.875rem', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ec4899'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  Contact & Collaborations
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'white', fontWeight: '500', marginBottom: '16px' }}>Get In Touch</h3>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                <p style={{ marginBottom: '8px' }}>For bookings & collaborations:</p>
                <a 
                  href="mailto:hello@hailo-music.com" 
                  style={{
                    color: '#ec4899',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f9a8d4'}
                  onMouseLeave={(e) => e.target.style.color = '#ec4899'}
                >
                  hello@hailo-music.com
                </a>
                <p style={{ marginTop: '16px', lineHeight: '1.5' }}>
                  Creating music with purpose,<br />
                  advocating through art.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={copyrightStyle}>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
              © 2024 Hāịlō. All rights reserved. | Made with passion for music and social change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

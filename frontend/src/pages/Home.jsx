import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const gradientTextStyle = {
    background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '50px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const borderButtonStyle = {
    border: '2px solid rgba(236, 72, 153, 0.5)',
    color: '#f9a8d4',
    padding: '16px 32px',
    borderRadius: '50px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '500',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const cardStyle = {
    background: 'rgba(17, 24, 39, 0.5)',
    border: '1px solid rgba(55, 65, 81, 1)',
    borderRadius: '12px',
    padding: '24px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: '#030712', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #030712 0%, #111827 50%, rgba(147, 51, 234, 0.2) 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 8rem)', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            ...gradientTextStyle
          }}>
            Hāịlō
          </h1>
          
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#d1d5db', 
            marginBottom: '16px',
            fontWeight: '300'
          }}>
            Dark Melodies, Bright Advocacy
          </p>
          
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#9ca3af', 
            marginBottom: '32px',
            maxWidth: '48rem',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}>
            Creating emotionally charged music that explores human depths while advocating for marginalized communities
          </p>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            justifyContent: 'center',
            marginBottom: '48px',
            alignItems: 'center'
          }}>
            <Link to="/music" style={buttonStyle}>
              ▶ Listen Now
            </Link>
            <Link to="/about" style={borderButtonStyle}>
              Learn More →
            </Link>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '16px',
            maxWidth: '32rem',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899' }}>12+</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Tracks Released</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>5</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Music Videos</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4' }}>8</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Live Shows</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>4</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Causes Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Music */}
      <section style={{ 
        padding: '64px 0', 
        background: 'rgba(3, 7, 18, 0.5)' 
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '16px' 
            }}>
              Latest <span style={{ color: '#ec4899' }}>Music</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>
              Explore the latest tracks and discover the sound of advocacy
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px',
            marginBottom: '32px'
          }}>
            {/* Music Card 1 */}
            <div style={cardStyle}>
              <div style={{ 
                aspectRatio: '1', 
                marginBottom: '16px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
                  alt="Whispers in the Void"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                Whispers in the Void
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '12px' }}>
                A haunting exploration of isolation and connection
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#ec4899', fontSize: '0.875rem' }}>SoundCloud</span>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>4:23</span>
              </div>
            </div>

            {/* Music Card 2 */}
            <div style={cardStyle}>
              <div style={{ 
                aspectRatio: '1', 
                marginBottom: '16px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop"
                  alt="Neon Dreams"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                Neon Dreams
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '12px' }}>
                Electronic meets emotion in this cyberpunk anthem
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#ec4899', fontSize: '0.875rem' }}>YouTube</span>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>3:47</span>
              </div>
            </div>

            {/* Music Card 3 */}
            <div style={cardStyle}>
              <div style={{ 
                aspectRatio: '1', 
                marginBottom: '16px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop"
                  alt="Breaking Barriers"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                Breaking Barriers
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '12px' }}>
                An empowering track about overcoming limitations
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#ec4899', fontSize: '0.875rem' }}>Spotify</span>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>5:12</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/music"
              style={{
                color: '#ec4899',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              View All Music →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

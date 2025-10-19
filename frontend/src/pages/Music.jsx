import React, { useState } from 'react';

const Music = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const musicTracks = [
    {
      id: 1,
      title: "Whispers in the Void",
      duration: "4:23",
      platform: "SoundCloud",
      url: "https://soundcloud.com/hailo/whispers-in-the-void",
      description: "A haunting exploration of isolation and connection",
      coverArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Neon Dreams",
      duration: "3:47",
      platform: "YouTube",
      url: "https://youtube.com/watch?v=neon-dreams",
      description: "Electronic meets emotion in this cyberpunk anthem",
      coverArt: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Breaking Barriers",
      duration: "5:12",
      platform: "Spotify",
      url: "https://open.spotify.com/track/breaking-barriers",
      description: "An empowering track about overcoming societal limitations",
      coverArt: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Digital Rebellion",
      duration: "4:56",
      platform: "SoundCloud",
      url: "https://soundcloud.com/hailo/digital-rebellion",
      description: "A call to action against digital conformity",
      coverArt: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Midnight Advocacy",
      duration: "6:02",
      platform: "Spotify",
      url: "https://open.spotify.com/track/midnight-advocacy",
      description: "Late-night reflections on social justice",
      coverArt: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Spectrum of Identity",
      duration: "4:34",
      platform: "YouTube",
      url: "https://youtube.com/watch?v=spectrum-identity",
      description: "Celebrating diversity and individual expression",
      coverArt: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      featured: true
    }
  ];

  const platforms = ['all', 'SoundCloud', 'YouTube', 'Spotify'];

  const filteredTracks = selectedPlatform === 'all' 
    ? musicTracks 
    : musicTracks.filter(track => track.platform === selectedPlatform);

  const featuredTracks = musicTracks.filter(track => track.featured);

  const pageStyle = {
    paddingTop: '64px',
    minHeight: '100vh',
    backgroundColor: '#030712',
    color: 'white'
  };

  const heroStyle = {
    padding: '64px 0',
    background: 'linear-gradient(135deg, #030712 0%, #111827 50%, rgba(147, 51, 234, 0.2) 100%)',
    textAlign: 'center'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px'
  };

  const gradientTextStyle = {
    background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const sectionStyle = {
    padding: '64px 0'
  };

  const sectionAltStyle = {
    padding: '64px 0',
    background: 'rgba(3, 7, 18, 0.5)'
  };

  const cardStyle = {
    background: 'rgba(17, 24, 39, 0.3)',
    border: '1px solid rgba(55, 65, 81, 1)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  };

  const filterStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(17, 24, 39, 0.5)',
    borderRadius: '8px',
    padding: '4px'
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: 'bold', 
            marginBottom: '24px' 
          }}>
            <span style={gradientTextStyle}>Music</span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#d1d5db',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            Dark melodies with purpose – every track tells a story of struggle, hope, and change
          </p>
        </div>
      </section>

      {/* Featured Tracks */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '32px', 
            textAlign: 'center' 
          }}>
            Featured <span style={{ color: '#ec4899' }}>Tracks</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px',
            marginBottom: '64px'
          }}>
            {featuredTracks.map((track) => (
              <div key={track.id} style={{ position: 'relative' }}>
                <div style={cardStyle}>
                  <div style={{ 
                    aspectRatio: '1', 
                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={track.coverArt} 
                      alt={track.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }} className="play-overlay">
                      <button style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: '#ec4899',
                        borderRadius: '50%',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}>
                        <span style={{ color: 'white', fontSize: '1.5rem', marginLeft: '4px' }}>▶</span>
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                      {track.title}
                    </h3>
                    <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '12px' }}>
                      {track.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: '#ec4899', fontSize: '0.875rem' }}>{track.platform}</span>
                      <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{track.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Tracks */}
      <section style={sectionAltStyle}>
        <div style={containerStyle}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontWeight: 'bold', 
              color: 'white',
              margin: 0
            }}>
              All <span style={{ color: '#ec4899' }}>Tracks</span>
            </h2>
            
            {/* Platform Filter */}
            <div style={filterStyle}>
              <span style={{ color: '#9ca3af', fontSize: '1rem', marginLeft: '8px' }}>🎵</span>
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedPlatform === platform ? '#ec4899' : 'transparent',
                    color: selectedPlatform === platform ? 'white' : '#9ca3af'
                  }}
                >
                  {platform === 'all' ? 'All Platforms' : platform}
                </button>
              ))}
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px' 
          }}>
            {filteredTracks.map((track) => (
              <div key={track.id} style={cardStyle}>
                <div style={{ display: 'flex', gap: '16px', padding: '24px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '8px', 
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
                    flexShrink: 0
                  }}>
                    <img 
                      src={track.coverArt} 
                      alt={track.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ 
                      color: 'white', 
                      fontWeight: '600', 
                      marginBottom: '4px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {track.title}
                    </h3>
                    <p style={{ 
                      color: '#9ca3af', 
                      fontSize: '0.875rem', 
                      marginBottom: '8px',
                      lineHeight: '1.4'
                    }}>
                      {track.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: '#ec4899', fontSize: '0.75rem' }}>{track.platform}</span>
                      <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>{track.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  padding: '0 24px 24px 24px' 
                }}>
                  <button style={{
                    flex: 1,
                    backgroundColor: '#ec4899',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.3s ease'
                  }}>
                    <span style={{ fontSize: '0.875rem' }}>▶</span>
                    Play
                  </button>
                  <a 
                    href={track.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#374151',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .play-overlay:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Music;

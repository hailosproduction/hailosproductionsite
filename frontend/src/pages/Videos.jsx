import React, { useState } from 'react';

const Videos = () => {
  const [selectedType, setSelectedType] = useState('all');

  const videos = [
    {
      id: 1,
      title: "Whispers in the Void - Official Music Video",
      type: "music-video",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=whispers-video",
      description: "Cinematic journey through emotional landscapes",
      duration: "4:23",
      featured: true
    },
    {
      id: 2,
      title: "Atmospheric Soundscapes - Sound Design Reel",
      type: "sound-design",
      thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=400&fit=crop",
      url: "https://vimeo.com/soundscapes-reel",
      description: "Commercial and film sound design portfolio",
      duration: "8:45",
      featured: false
    },
    {
      id: 3,
      title: "Pride Festival Live Performance",
      type: "live-performance",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=pride-live",
      description: "Live performance supporting LGBTQIA+ rights",
      duration: "25:30",
      featured: true
    },
    {
      id: 4,
      title: "Neon Dreams - Behind the Scenes",
      type: "music-video",
      thumbnail: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=neon-dreams-bts",
      description: "Creative process behind the cyberpunk visual narrative",
      duration: "6:12",
      featured: false
    },
    {
      id: 5,
      title: "Community Center Performance",
      type: "live-performance",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=community-performance",
      description: "Intimate acoustic set for local advocacy group",
      duration: "15:42",
      featured: false
    },
    {
      id: 6,
      title: "Breaking Barriers - Official Video",
      type: "music-video",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=breaking-barriers",
      description: "Powerful visuals exploring themes of liberation",
      duration: "5:12",
      featured: true
    }
  ];

  const videoTypes = ['all', 'music-video', 'sound-design', 'live-performance'];
  const typeLabels = {
    'all': 'All Videos',
    'music-video': 'Music Videos',
    'sound-design': 'Sound Design',
    'live-performance': 'Live Performances'
  };

  const categoryColors = {
    'music-video': { backgroundColor: 'rgba(236, 72, 153, 0.2)', color: '#ec4899' },
    'sound-design': { backgroundColor: 'rgba(139, 92, 246, 0.2)', color: '#8b5cf6' },
    'live-performance': { backgroundColor: 'rgba(6, 182, 212, 0.2)', color: '#06b6d4' }
  };

  const filteredVideos = selectedType === 'all' 
    ? videos 
    : videos.filter(video => video.type === selectedType);

  const featuredVideos = videos.filter(video => video.featured);

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
            <span style={gradientTextStyle}>Videos</span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#d1d5db',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            Visual storytelling through music videos, sound design reels, and live performances
          </p>
        </div>
      </section>

      {/* Featured Videos */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '32px', 
            textAlign: 'center' 
          }}>
            Featured <span style={{ color: '#ec4899' }}>Videos</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr', 
            gap: '32px',
            marginBottom: '64px'
          }}>
            {/* Large featured video */}
            {featuredVideos[0] && (
              <div style={{ position: 'relative' }}>
                <div style={{
                  aspectRatio: '16/9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
                  position: 'relative'
                }}>
                  <img 
                    src={featuredVideos[0].thumbnail} 
                    alt={featuredVideos[0].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <button style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'rgba(236, 72, 153, 0.9)',
                      borderRadius: '50%',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>
                      <span style={{ color: 'white', fontSize: '2rem', marginLeft: '4px' }}>▶</span>
                    </button>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: '600', 
                      color: 'white', 
                      marginBottom: '8px' 
                    }}>
                      {featuredVideos[0].title}
                    </h3>
                    <p style={{ color: '#e5e7eb', fontSize: '0.875rem', marginBottom: '8px' }}>
                      {featuredVideos[0].description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        ...categoryColors[featuredVideos[0].type],
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        {typeLabels[featuredVideos[0].type]}
                      </span>
                      <span style={{ color: '#e5e7eb', fontSize: '0.75rem' }}>
                        {featuredVideos[0].duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Smaller featured videos */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {featuredVideos.slice(1, 3).map((video) => (
                <div key={video.id} style={{
                  aspectRatio: '16/9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
                  position: 'relative'
                }}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <button style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'rgba(236, 72, 153, 0.9)',
                      borderRadius: '50%',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>
                      <span style={{ color: 'white', fontSize: '1rem', marginLeft: '2px' }}>▶</span>
                    </button>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px'
                  }}>
                    <span style={{
                      ...categoryColors[video.type],
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '0.625rem',
                      fontWeight: '500'
                    }}>
                      {typeLabels[video.type]}
                    </span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '0.625rem'
                    }}>
                      {video.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Videos */}
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
              All <span style={{ color: '#ec4899' }}>Videos</span>
            </h2>
            
            {/* Type Filter */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(17, 24, 39, 0.5)',
              borderRadius: '8px',
              padding: '4px'
            }}>
              <span style={{ color: '#9ca3af', fontSize: '1rem', marginLeft: '8px' }}>📹</span>
              {videoTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedType === type ? '#ec4899' : 'transparent',
                    color: selectedType === type ? 'white' : '#9ca3af'
                  }}
                >
                  {typeLabels[type]}
                </button>
              ))}
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '32px' 
          }}>
            {filteredVideos.map((video) => (
              <div key={video.id} style={{
                background: 'rgba(17, 24, 39, 0.3)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(55, 65, 81, 1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
                  position: 'relative'
                }}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }} className="play-overlay">
                    <button style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'rgba(236, 72, 153, 0.9)',
                      borderRadius: '50%',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>
                      <span style={{ color: 'white', fontSize: '1rem', marginLeft: '2px' }}>▶</span>
                    </button>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px'
                  }}>
                    <span style={{
                      ...categoryColors[video.type],
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {typeLabels[video.type]}
                    </span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem'
                    }}>
                      {video.duration}
                    </span>
                  </div>
                </div>
                
                <div style={{ padding: '24px' }}>
                  <h3 style={{ 
                    color: 'white', 
                    fontWeight: '600', 
                    marginBottom: '8px',
                    fontSize: '1.125rem'
                  }}>
                    {video.title}
                  </h3>
                  <p style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.875rem', 
                    marginBottom: '16px',
                    lineHeight: '1.5'
                  }}>
                    {video.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
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
                      <span>▶</span>
                      Watch
                    </button>
                    <a 
                      href={video.url}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .play-overlay:hover {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Videos;

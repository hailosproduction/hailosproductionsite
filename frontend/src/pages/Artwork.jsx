import React, { useState } from 'react';

const Artwork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const artworks = [
    {
      id: 1,
      title: "Digital Rebellion",
      medium: "Digital Art",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=600&fit=crop",
      description: "Abstract representation of breaking free from digital constraints",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Spectrum of Identity",
      medium: "Mixed Media",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop",
      description: "Celebrating the diversity of human identity and experience",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "Environmental Echoes",
      medium: "Photography & Digital Manipulation",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=600&fit=crop",
      description: "Nature's call for environmental consciousness",
      featured: false,
      year: "2024"
    },
    {
      id: 4,
      title: "Neon Dreamscape",
      medium: "Digital Art",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=500&h=600&fit=crop",
      description: "Cyberpunk visions of emotional connectivity",
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "Fragments of Hope",
      medium: "Collage & Digital",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=600&fit=crop",
      description: "Finding light within darkness and chaos",
      featured: false,
      year: "2023"
    },
    {
      id: 6,
      title: "Pride Spectrum",
      medium: "Digital Illustration",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=600&fit=crop",
      description: "Visual celebration of LGBTQIA+ identity and love",
      featured: false,
      year: "2023"
    },
    {
      id: 7,
      title: "Autism Awareness Abstract",
      medium: "Acrylic & Digital",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=600&fit=crop",
      description: "Understanding neurodiversity through visual metaphor",
      featured: false,
      year: "2023"
    },
    {
      id: 8,
      title: "Mental Health Mandala",
      medium: "Digital Art",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=600&fit=crop",
      description: "Meditative patterns promoting mental wellness",
      featured: false,
      year: "2024"
    }
  ];

  const featuredArtworks = artworks.filter(artwork => artwork.featured);

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
            <span style={gradientTextStyle}>Artwork</span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#d1d5db',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            Visual expressions of advocacy, identity, and emotional depth
          </p>
        </div>
      </section>

      {/* Featured Artwork */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '32px', 
            textAlign: 'center' 
          }}>
            Featured <span style={{ color: '#ec4899' }}>Pieces</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px',
            marginBottom: '64px'
          }}>
            {featuredArtworks.map((artwork) => (
              <div 
                key={artwork.id} 
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedImage(artwork)}
              >
                <div style={{
                  aspectRatio: '4/5',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
                  marginBottom: '16px',
                  position: 'relative'
                }}>
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease'
                  }} className="zoom-overlay">
                    <span style={{ 
                      color: 'white', 
                      fontSize: '2rem',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }} className="zoom-icon">🔍</span>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '4px' }}>
                  {artwork.title}
                </h3>
                <p style={{ color: '#ec4899', fontSize: '0.875rem', marginBottom: '8px' }}>
                  {artwork.medium} • {artwork.year}
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                  {artwork.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={sectionAltStyle}>
        <div style={containerStyle}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '32px', 
            textAlign: 'center' 
          }}>
            Gallery <span style={{ color: '#ec4899' }}>Collection</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px' 
          }}>
            {artworks.map((artwork) => (
              <div 
                key={artwork.id} 
                style={{
                  cursor: 'pointer',
                  background: 'rgba(17, 24, 39, 0.3)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(55, 65, 81, 1)',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setSelectedImage(artwork)}
              >
                <div style={{
                  aspectRatio: '1',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))'
                }}>
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="gallery-image"
                  />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ 
                    color: 'white', 
                    fontWeight: '600', 
                    marginBottom: '4px',
                    fontSize: '1rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {artwork.title}
                  </h3>
                  <p style={{ color: '#ec4899', fontSize: '0.75rem', marginBottom: '8px' }}>
                    {artwork.medium}
                  </p>
                  <p style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.75rem',
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {artwork.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{ maxWidth: '1024px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative' }}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                style={{ 
                  width: '100%', 
                  maxHeight: '80vh', 
                  objectFit: 'contain', 
                  borderRadius: '8px' 
                }}
              />
              <button 
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease'
                }}
              >
                ×
              </button>
            </div>
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                {selectedImage.title}
              </h3>
              <p style={{ color: '#ec4899', marginBottom: '8px' }}>
                {selectedImage.medium} • {selectedImage.year}
              </p>
              <p style={{ color: '#d1d5db', maxWidth: '32rem', margin: '0 auto' }}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .zoom-overlay:hover {
          background-color: rgba(0, 0, 0, 0.4) !important;
        }
        .zoom-overlay:hover .zoom-icon {
          opacity: 1 !important;
        }
        .gallery-image:hover {
          transform: scale(1.1) !important;
        }
      `}</style>
    </div>
  );
};

export default Artwork;

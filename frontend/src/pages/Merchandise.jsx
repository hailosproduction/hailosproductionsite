import React, { useState } from 'react';

const Merchandise = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [cart, setCart] = useState([]);

  const merchandise = [
    {
      id: 1,
      name: "Shadows & Light Tour Tee",
      type: "clothing",
      price: 25.00,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      description: "Soft cotton tee with tour artwork featuring the iconic album cover design",
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: true,
      inStock: true
    },
    {
      id: 2,
      name: "Handcrafted Pride Earrings",
      type: "jewelry",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
      description: "Unique rainbow-themed earrings supporting LGBTQIA+ causes, handmade with love",
      materials: ["Sterling Silver", "Colorful Resin"],
      featured: true,
      inStock: true
    },
    {
      id: 3,
      name: "Whispers in the Void - Digital Album",
      type: "digital",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      description: "High-quality digital download with bonus tracks and exclusive content",
      formats: ["MP3 320kbps", "FLAC", "WAV"],
      featured: true,
      inStock: true
    },
    {
      id: 4,
      name: "Advocacy Hoodie",
      type: "clothing",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      description: "Comfortable hoodie with embroidered advocacy messages and pink accent details",
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: false,
      inStock: true
    },
    {
      id: 5,
      name: "Spectrum Pendant Necklace",
      type: "jewelry",
      price: 32.00,
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=500&fit=crop",
      description: "Beautiful pendant representing the autism spectrum, handcrafted with care",
      materials: ["Sterling Silver", "Enamel Inlay"],
      featured: false,
      inStock: false
    },
    {
      id: 6,
      name: "Complete Discography Bundle",
      type: "digital",
      price: 35.00,
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop",
      description: "All released tracks plus exclusive remixes and acoustic versions",
      formats: ["MP3 320kbps", "FLAC", "WAV", "Bonus Content"],
      featured: false,
      inStock: true
    }
  ];

  const merchTypes = ['all', 'clothing', 'jewelry', 'digital'];
  const typeLabels = {
    'all': 'All Items',
    'clothing': 'Clothing',
    'jewelry': 'Jewelry',
    'digital': 'Digital'
  };

  const filteredMerch = selectedType === 'all' 
    ? merchandise 
    : merchandise.filter(item => item.type === selectedType);

  const featuredMerch = merchandise.filter(item => item.featured);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

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
            <span style={gradientTextStyle}>Merchandise</span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#d1d5db',
            maxWidth: '48rem',
            margin: '0 auto 16px auto'
          }}>
            Support the music and advocacy through meaningful merchandise
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#ec4899' }}>
            <span>♥</span>
            <span style={{ fontSize: '0.875rem' }}>Proceeds support charitable causes</span>
            <span>♥</span>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section style={{ padding: '64px 0' }}>
        <div style={containerStyle}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '32px', 
            textAlign: 'center' 
          }}>
            Featured <span style={{ color: '#ec4899' }}>Items</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px',
            marginBottom: '64px'
          }}>
            {featuredMerch.map((item) => (
              <div key={item.id} style={{
                background: 'rgba(17, 24, 39, 0.3)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(55, 65, 81, 1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  aspectRatio: '1',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
                  position: 'relative'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {!item.inStock && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{
                        backgroundColor: '#ef4444',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontWeight: '500'
                      }}>
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '16px', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                  
                  {item.sizes && (
                    <div style={{ marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Available sizes: </span>
                      <span style={{ fontSize: '0.75rem', color: '#ec4899' }}>{item.sizes.join(', ')}</span>
                    </div>
                  )}
                  
                  {item.materials && (
                    <div style={{ marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Materials: </span>
                      <span style={{ fontSize: '0.75rem', color: '#ec4899' }}>{item.materials.join(', ')}</span>
                    </div>
                  )}
                  
                  {item.formats && (
                    <div style={{ marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Formats: </span>
                      <span style={{ fontSize: '0.75rem', color: '#ec4899' }}>{item.formats.join(', ')}</span>
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899' }}>
                      ${item.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      style={{
                        backgroundColor: item.inStock ? '#ec4899' : '#6b7280',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: item.inStock ? 'pointer' : 'not-allowed',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      🛒 {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Items */}
      <section style={{ padding: '64px 0', background: 'rgba(3, 7, 18, 0.5)' }}>
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
              All <span style={{ color: '#ec4899' }}>Merchandise</span>
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
              <span style={{ color: '#9ca3af', fontSize: '1rem', marginLeft: '8px' }}>🛍️</span>
              {merchTypes.map((type) => (
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '24px' 
          }}>
            {filteredMerch.map((item) => (
              <div key={item.id} style={{
                background: 'rgba(17, 24, 39, 0.3)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(55, 65, 81, 1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'relative',
                  aspectRatio: '1',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {!item.inStock && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{
                        backgroundColor: '#ef4444',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>
                        Out of Stock
                      </span>
                    </div>
                  )}
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
                    {item.name}
                  </h3>
                  <p style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.75rem', 
                    marginBottom: '12px',
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {item.description}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ec4899' }}>
                      ${item.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      style={{
                        backgroundColor: item.inStock ? '#ec4899' : '#6b7280',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        border: 'none',
                        cursor: item.inStock ? 'pointer' : 'not-allowed',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      {item.inStock ? 'Add' : 'N/A'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart notification */}
      {cart.length > 0 && (
        <div style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          backgroundColor: '#ec4899',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          Cart: {cart.length} item{cart.length > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default Merchandise;

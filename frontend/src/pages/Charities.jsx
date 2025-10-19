import React from 'react';

const Charities = () => {
  const charities = [
    {
      id: 1,
      name: "Autism Speaks",
      cause: "Autism Support",
      description: "Promoting solutions across the spectrum and life span for the needs of people with autism and their families through advocacy and support.",
      website: "https://autismspeaks.org",
      logo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=200&fit=crop",
      featured: true,
      icon: "🧠",
      impact: "Supported over 2 million individuals",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "GLAAD",
      cause: "LGBTQIA+ Rights",
      description: "Working to accelerate acceptance for LGBTQ people through media representation and cultural change initiatives.",
      website: "https://glaad.org",
      logo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop",
      featured: true,
      icon: "♥",
      impact: "Advocating for 20+ million LGBTQ Americans",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 3,
      name: "Greenpeace",
      cause: "Environmental",
      description: "Global environmental organization campaigning for planet protection through peaceful protest and creative communication.",
      website: "https://greenpeace.org",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop",
      featured: true,
      icon: "🌍",
      impact: "Active in 50+ countries worldwide",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Mental Health America",
      cause: "Mental Health",
      description: "Leading community-based nonprofit dedicated to mental health advocacy, education, research, and service.",
      website: "https://mhanational.org",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
      featured: true,
      icon: "🧘",
      impact: "Helping millions access mental health resources",
      color: "from-indigo-500 to-purple-500"
    }
  ];

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

  const colorMap = {
    'from-blue-500 to-cyan-500': 'linear-gradient(45deg, #3b82f6, #06b6d4)',
    'from-pink-500 to-purple-500': 'linear-gradient(45deg, #ec4899, #8b5cf6)',
    'from-green-500 to-emerald-500': 'linear-gradient(45deg, #10b981, #059669)',
    'from-indigo-500 to-purple-500': 'linear-gradient(45deg, #6366f1, #8b5cf6)'
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{ color: '#ec4899', fontSize: '2.5rem' }}>♥</span>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              fontWeight: 'bold',
              margin: 0
            }}>
              <span style={gradientTextStyle}>Supported Causes</span>
            </h1>
            <span style={{ color: '#ec4899', fontSize: '2.5rem' }}>♥</span>
          </div>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#d1d5db',
            marginBottom: '24px',
            maxWidth: '48rem',
            margin: '0 auto 24px auto'
          }}>
            Music with purpose – supporting organizations that create real change
          </p>
          <div style={{
            background: 'rgba(17, 24, 39, 0.5)',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '32rem',
            margin: '0 auto'
          }}>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
              A portion of all music sales, merchandise proceeds, and concert ticket sales 
              goes directly to these incredible organizations. When you support Hāịlō's music, 
              you're also supporting causes that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Main Charities */}
      <section style={{ padding: '64px 0' }}>
        <div style={containerStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px' 
          }}>
            {charities.map((charity) => (
              <div key={charity.id} style={{
                background: 'rgba(17, 24, 39, 0.3)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(55, 65, 81, 1)',
                transition: 'all 0.3s ease',
                transform: 'scale(1)',
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(55, 65, 81, 1)';
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '24px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    background: colorMap[charity.color],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.75rem',
                    transition: 'transform 0.3s ease'
                  }} className="charity-icon">
                    {charity.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                      {charity.name}
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <span style={{
                        backgroundColor: 'rgba(236, 72, 153, 0.2)',
                        color: '#ec4899',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>
                        {charity.cause}
                      </span>
                      <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                        {charity.impact}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '24px' }}>
                  {charity.description}
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                    Learn more about their mission
                  </div>
                  <a 
                    href={charity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#ec4899',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      transform: 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#db2777';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ec4899';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Visit Website
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Support Works */}
      <section style={{ padding: '64px 0', background: 'rgba(3, 7, 18, 0.5)' }}>
        <div style={{ ...containerStyle, maxWidth: '1024px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              How Your Support <span style={{ color: '#ec4899' }}>Makes a Difference</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>
              Every purchase, stream, and share contributes to meaningful change
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '32px' 
          }}>
            <div style={{ textAlign: 'center', padding: '24px', background: 'rgba(17, 24, 39, 0.3)', borderRadius: '12px', border: '1px solid rgba(55, 65, 81, 1)' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(45deg, #ec4899, #f43f5e)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>25%</span>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>Music Sales</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                25% of all digital music sales and streaming revenue
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '24px', background: 'rgba(17, 24, 39, 0.3)', borderRadius: '12px', border: '1px solid rgba(55, 65, 81, 1)' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>15%</span>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>Merchandise</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                15% of merchandise profits support advocacy work
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '24px', background: 'rgba(17, 24, 39, 0.3)', borderRadius: '12px', border: '1px solid rgba(55, 65, 81, 1)' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>50%</span>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>Special Events</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                50% of charity concert proceeds go directly to causes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '64px 0' }}>
        <div style={{ ...containerStyle, maxWidth: '768px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
            Join the <span style={{ color: '#ec4899' }}>Movement</span>
          </h2>
          <p style={{ color: '#d1d5db', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '32px' }}>
            Your support for Hāịlō's music creates a ripple effect of positive change. 
            Together, we can amplify voices, support communities, and make a real difference 
            in the world through the power of music and advocacy.
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            alignItems: 'center'
          }}>
            <a 
              href="/music"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '50px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>♥</span>
              Support Through Music
            </a>
            <a 
              href="/merchandise"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '2px solid rgba(236, 72, 153, 0.5)',
                color: '#f9a8d4',
                padding: '16px 32px',
                borderRadius: '50px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: 'transparent',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
                e.target.style.borderColor = '#ec4899';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Shop for Change
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .charity-icon:hover {
          transform: scale(1.1) !important;
        }
      `}</style>
    </div>
  );
};

export default Charities;

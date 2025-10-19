import React from 'react';

const About = () => {
  const qualifications = [
    "Bachelor of Music Production - Sound Design Specialization",
    "Certified Audio Engineer (Pro Tools, Ableton Live)",
    "Mental Health First Aider - Community Support",
    "LGBTQIA+ Youth Advocate Certification"
  ];

  const goals = [
    "Release debut album 'Shadows & Light' by end of 2024",
    "Perform at Pride festivals worldwide to support LGBTQIA+ rights",
    "Collaborate with autism advocacy organizations through music therapy",
    "Raise awareness for environmental causes through sustainable touring",
    "Create safe spaces for trans and non-binary artists in the music industry"
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
    maxWidth: '1024px',
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
    padding: '24px',
    marginBottom: '24px'
  };

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '16px'
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
            About <span style={gradientTextStyle}>Hāịlō</span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#d1d5db',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            More than music – it's a movement for change
          </p>
        </div>
      </section>

      {/* Main Bio */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            <p style={{ color: '#d1d5db', marginBottom: '32px' }}>
              Hāịlō creates emotionally charged music that explores the depths of human experience while advocating for marginalized communities. Through haunting melodies and powerful lyrics, this artist bridges the gap between personal expression and social consciousness.
            </p>
            
            <p style={{ color: '#9ca3af', marginBottom: '32px' }}>
              Born from a desire to make music that matters, Hāịlō combines dark, atmospheric soundscapes with messages of hope and resilience. Each track is crafted not just to entertain, but to inspire change, foster understanding, and provide comfort to those who need it most.
            </p>

            <p style={{ color: '#9ca3af' }}>
              The artistic vision extends beyond traditional boundaries, encompassing music production, sound design, visual arts, and community advocacy. Every project serves a dual purpose: artistic expression and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section style={sectionAltStyle}>
        <div style={{ ...containerStyle, maxWidth: '1280px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ ...iconStyle, color: '#ec4899' }}>🎓</div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              Qualifications & Training
            </h2>
            <p style={{ color: '#9ca3af' }}>Professional background supporting the artistic mission</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            {qualifications.map((qualification, index) => (
              <div key={index} style={cardStyle}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    backgroundColor: '#ec4899', 
                    borderRadius: '50%', 
                    marginTop: '12px',
                    flexShrink: 0
                  }}></div>
                  <p style={{ color: '#d1d5db', margin: 0 }}>{qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section style={sectionStyle}>
        <div style={{ ...containerStyle, maxWidth: '1280px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ ...iconStyle, color: '#8b5cf6' }}>🎯</div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              Mission & Goals
            </h2>
            <p style={{ color: '#9ca3af' }}>Working towards a more inclusive and understanding world</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {goals.map((goal, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.3), rgba(55, 65, 81, 0.3))',
                borderRadius: '12px',
                border: '1px solid rgba(75, 85, 99, 1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>
                    {index + 1}
                  </span>
                </div>
                <p style={{ color: '#d1d5db', fontSize: '1.125rem', margin: 0 }}>{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={sectionAltStyle}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ ...iconStyle, color: '#ec4899' }}>♥</div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '32px' }}>
              Core Values
            </h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '32px' 
          }}>
            <div style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ec4899', marginBottom: '16px' }}>
                Authenticity
              </h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                Every piece of music comes from genuine experience and emotion, never manufactured or artificial.
              </p>
            </div>
            
            <div style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#8b5cf6', marginBottom: '16px' }}>
                Advocacy
              </h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                Using platform and voice to amplify marginalized communities and support meaningful causes.
              </p>
            </div>
            
            <div style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#06b6d4', marginBottom: '16px' }}>
                Connection
              </h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                Creating bridges between people through shared experiences and universal emotions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

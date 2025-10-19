import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, Briefcase, Heart, MapPin, Phone, Instagram, Twitter, Youtube, Music } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'fan-message'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const messageTypes = [
    { value: 'fan-message', label: 'Fan Message', icon: Heart },
    { value: 'collaboration', label: 'Collaboration Request', icon: Briefcase },
    { value: 'booking', label: 'Booking Inquiry', icon: Music },
    { value: 'general', label: 'General Inquiry', icon: MessageSquare }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        setIsSubmitted(true);
        
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            type: 'fan-message'
          });
        }, 3000);
      } else {
        console.error('Form submission failed');
        alert('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '64px 0', 
        background: 'linear-gradient(to bottom, rgb(3, 7, 18), rgb(17, 24, 39))'
      }}>
        <div style={{ 
          maxWidth: '896px', 
          margin: '0 auto', 
          padding: '0 16px', 
          textAlign: 'center' 
        }}>
          <h1 style={{ 
            fontSize: '3.75rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px'
          }}>
            <Mail size={48} style={{ color: '#ec4899' }} />
            Get In Touch
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#d1d5db', 
            lineHeight: '1.75', 
            maxWidth: '672px', 
            margin: '0 auto' 
          }}>
            Connect with Hāịlō for collaborations, fan messages, booking inquiries, 
            or to discuss advocacy opportunities. Every message is read and appreciated.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '48px' 
          }}>
            {/* Contact Form */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ 
                background: 'rgba(17, 24, 39, 0.5)', 
                borderRadius: '16px', 
                padding: '32px', 
                border: '1px solid rgb(31, 41, 55)' 
              }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
                  Send a Message
                </h2>
                
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(to right, #10b981, #059669)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px'
                    }}>
                      <Send style={{ color: 'white' }} size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: '#9ca3af' }}>
                      Thank you for reaching out. Hāịlō will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Message Type */}
                    <div>
                      <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '12px' }}>
                        Message Type
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                        {messageTypes.map((type) => {
                          const IconComponent = type.icon;
                          return (
                            <label 
                              key={type.value}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '16px',
                                borderRadius: '8px',
                                border: formData.type === type.value ? '1px solid #ec4899' : '1px solid rgb(55, 65, 81)',
                                background: formData.type === type.value ? 'rgba(236, 72, 153, 0.1)' : 'rgba(31, 41, 55, 0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                              }}
                              onMouseOver={(e) => {
                                if (formData.type !== type.value) {
                                  e.currentTarget.style.borderColor = 'rgb(75, 85, 99)';
                                }
                              }}
                              onMouseOut={(e) => {
                                if (formData.type !== type.value) {
                                  e.currentTarget.style.borderColor = 'rgb(55, 65, 81)';
                                }
                              }}
                            >
                              <input
                                type="radio"
                                name="type"
                                value={type.value}
                                checked={formData.type === type.value}
                                onChange={handleChange}
                                style={{ display: 'none' }}
                              />
                              <IconComponent 
                                style={{ color: formData.type === type.value ? '#f9a8d4' : '#9ca3af' }} 
                                size={20} 
                              />
                              <span style={{
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                color: formData.type === type.value ? 'white' : '#d1d5db'
                              }}>
                                {type.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name and Email */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px' }}>
                          Name
                        </label>
                        <div style={{ position: 'relative' }}>
                          <User style={{ 
                            position: 'absolute', 
                            left: '12px', 
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            color: '#9ca3af' 
                          }} size={20} />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            style={{
                              width: '100%',
                              paddingLeft: '40px',
                              paddingRight: '16px',
                              paddingTop: '12px',
                              paddingBottom: '12px',
                              background: 'rgb(31, 41, 55)',
                              border: '1px solid rgb(55, 65, 81)',
                              borderRadius: '8px',
                              color: 'white',
                              outline: 'none',
                              transition: 'border-color 0.3s'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#ec4899'}
                            onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px' }}>
                          Email
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Mail style={{ 
                            position: 'absolute', 
                            left: '12px', 
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            color: '#9ca3af' 
                          }} size={20} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            style={{
                              width: '100%',
                              paddingLeft: '40px',
                              paddingRight: '16px',
                              paddingTop: '12px',
                              paddingBottom: '12px',
                              background: 'rgb(31, 41, 55)',
                              border: '1px solid rgb(55, 65, 81)',
                              borderRadius: '8px',
                              color: 'white',
                              outline: 'none',
                              transition: 'border-color 0.3s'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#ec4899'}
                            onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px' }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgb(31, 41, 55)',
                          border: '1px solid rgb(55, 65, 81)',
                          borderRadius: '8px',
                          color: 'white',
                          outline: 'none',
                          transition: 'border-color 0.3s'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#ec4899'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px' }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Share your thoughts, ideas, or questions..."
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgb(31, 41, 55)',
                          border: '1px solid rgb(55, 65, 81)',
                          borderRadius: '8px',
                          color: 'white',
                          outline: 'none',
                          transition: 'border-color 0.3s',
                          resize: 'none'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#ec4899'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        background: 'linear-gradient(to right, #db2777, #9333ea)',
                        color: 'white',
                        padding: '16px 32px',
                        borderRadius: '9999px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(to right, #ec4899, #a855f7)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(to right, #db2777, #9333ea)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & Social */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Contact Details */}
              <div style={{ 
                background: 'rgba(17, 24, 39, 0.5)', 
                borderRadius: '16px', 
                padding: '24px', 
                border: '1px solid rgb(31, 41, 55)' 
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
                  Contact Information
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Mail style={{ color: '#ec4899', flexShrink: '0' }} size={20} />
                    <div>
                      <p style={{ color: 'white', fontWeight: '500' }}>Email</p>
                      <a 
                        href="mailto:hello@hailo-music.com" 
                        style={{ 
                          color: '#9ca3af', 
                          textDecoration: 'none',
                          transition: 'color 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#f9a8d4'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                      >
                        hello@hailo-music.com
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Phone style={{ color: '#ec4899', flexShrink: '0' }} size={20} />
                    <div>
                      <p style={{ color: 'white', fontWeight: '500' }}>Booking</p>
                      <p style={{ color: '#9ca3af' }}>Available via email</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MapPin style={{ color: '#ec4899', flexShrink: '0' }} size={20} />
                    <div>
                      <p style={{ color: 'white', fontWeight: '500' }}>Location</p>
                      <p style={{ color: '#9ca3af' }}>Worldwide (Remote/Touring)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div style={{ 
                background: 'rgba(17, 24, 39, 0.5)', 
                borderRadius: '16px', 
                padding: '24px', 
                border: '1px solid rgb(31, 41, 55)' 
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
                  Follow the Journey
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { name: 'Instagram', icon: Instagram, url: '#', handle: '@hailo_music' },
                    { name: 'Twitter', icon: Twitter, url: '#', handle: '@hailo_music' },
                    { name: 'YouTube', icon: Youtube, url: '#', handle: 'Hāịlō Official' },
                    { name: 'SoundCloud', icon: Music, url: '#', handle: 'hailo-music' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '8px',
                        transition: 'background 0.3s',
                        textDecoration: 'none'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <social.icon style={{ color: '#ec4899', transition: 'color 0.3s' }} size={20} />
                      <div>
                        <p style={{ color: 'white', fontWeight: '500' }}>{social.name}</p>
                        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div style={{ 
                background: 'linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))', 
                borderRadius: '16px', 
                padding: '24px', 
                border: '1px solid rgba(236, 72, 153, 0.2)' 
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
                  Response Time
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#d1d5db', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
                    <span>Fan messages: 24-48 hours</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', background: '#eab308', borderRadius: '50%' }}></div>
                    <span>Collaboration requests: 3-5 days</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%' }}></div>
                    <span>Booking inquiries: 1-2 days</span>
                  </div>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '16px' }}>
                  All messages are personally read and responded to by Hāịlō or their team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Focus */}
      <section style={{ padding: '64px 0', background: 'rgba(3, 7, 18, 0.5)' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '24px' 
          }}>
            Let's Create <span style={{ color: '#ec4899' }}>Together</span>
          </h2>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '1.125rem', 
            marginBottom: '32px', 
            lineHeight: '1.75' 
          }}>
            Hāịlō is always interested in collaborating with like-minded artists, advocates, and organizations 
            who share a passion for meaningful music and positive social impact.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Musical Collaborations',
                description: 'Features, remixes, and joint projects with artists who share similar values',
                icon: '🎵'
              },
              {
                title: 'Advocacy Partnerships',
                description: 'Working with organizations to amplify important causes through music',
                icon: '🤝'
              },
              {
                title: 'Creative Projects',
                description: 'Sound design, visual art collaborations, and multimedia experiences',
                icon: '🎨'
              }
            ].map((collab, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(17, 24, 39, 0.3)',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid rgb(31, 41, 55)',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgb(31, 41, 55)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{collab.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '12px' }}>
                  {collab.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{collab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

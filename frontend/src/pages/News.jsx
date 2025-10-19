import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Music, Heart, Mic, X } from 'lucide-react';
import { newsArticles } from '../mockData';

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All News', icon: Calendar },
    { id: 'music', name: 'Music Releases', icon: Music },
    { id: 'advocacy', name: 'Advocacy Work', icon: Heart },
    { id: 'behind-scenes', name: 'Behind the Scenes', icon: Mic }
  ];

  const getCategoryFromTitle = (title) => {
    if (title.toLowerCase().includes('single') || title.toLowerCase().includes('music')) return 'music';
    if (title.toLowerCase().includes('partner') || title.toLowerCase().includes('organization')) return 'advocacy';
    if (title.toLowerCase().includes('behind') || title.toLowerCase().includes('process')) return 'behind-scenes';
    return 'music';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
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
            <Calendar size={48} style={{ color: '#ec4899' }} />
            News & Updates
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#d1d5db', 
            lineHeight: '1.75', 
            maxWidth: '672px', 
            margin: '0 auto' 
          }}>
            Stay connected with Hāịlō's musical journey, advocacy work, and behind-the-scenes insights 
            into the creative process and social impact initiatives.
          </p>
        </div>
      </section>

      {/* Latest Article Featured */}
      {newsArticles.length > 0 && (
        <section style={{ padding: '64px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
            <div style={{ 
              background: 'linear-gradient(to right, rgb(17, 24, 39), rgb(31, 41, 55))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0'
            }}>
              <div style={{ 
                position: 'relative', 
                aspectRatio: '16/9',
                overflow: 'hidden' 
              }}>
                <img 
                  src={newsArticles[0].image} 
                  alt={newsArticles[0].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: '#db2777',
                  color: 'white',
                  fontSize: '0.875rem',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontWeight: '500'
                }}>
                  Latest News
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  fontSize: '0.875rem',
                  padding: '4px 12px',
                  borderRadius: '9999px'
                }}>
                  {timeAgo(newsArticles[0].date)}
                </div>
              </div>
              
              <div style={{ 
                padding: '32px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
              }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#f9a8d4',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      background: 'rgba(236, 72, 153, 0.1)',
                      padding: '4px 12px',
                      borderRadius: '9999px'
                    }}>
                      <Music size={14} />
                      Music Release
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '0.875rem' }}>
                      <Calendar size={14} />
                      {formatDate(newsArticles[0].date)}
                    </div>
                  </div>
                </div>
                <h2 style={{ 
                  fontSize: '2.25rem', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '16px' 
                }}>
                  {newsArticles[0].title}
                </h2>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '1.125rem', 
                  marginBottom: '24px', 
                  lineHeight: '1.75' 
                }}>
                  {newsArticles[0].excerpt}
                </p>
                <button 
                  onClick={() => setSelectedArticle(newsArticles[0])}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(to right, #db2777, #9333ea)',
                    color: 'white',
                    padding: '12px 32px',
                    borderRadius: '9999px',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    alignSelf: 'flex-start'
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
                  Read Full Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section style={{ padding: '64px 0', background: 'rgba(3, 7, 18, 0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '16px' 
            }}>
              Recent <span style={{ color: '#ec4899' }}>Articles</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>
              Keep up with the latest updates from Hāịlō's musical and advocacy journey
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '32px' 
          }}>
            {newsArticles.map((article) => {
              const category = getCategoryFromTitle(article.title);
              const categoryInfo = categories.find(cat => cat.id === category) || categories[0];
              const IconComponent = categoryInfo.icon;
              
              return (
                <article 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  style={{
                    background: 'rgba(17, 24, 39, 0.5)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgb(31, 41, 55)',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    transform: 'scale(1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(31, 41, 55)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{ 
                    position: 'relative', 
                    aspectRatio: '16/9',
                    overflow: 'hidden' 
                  }}>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      fontSize: '0.75rem',
                      padding: '4px 8px',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <IconComponent size={12} />
                      {categoryInfo.name}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      fontSize: '0.75rem',
                      padding: '4px 8px',
                      borderRadius: '9999px'
                    }}>
                      {timeAgo(article.date)}
                    </div>
                  </div>
                  
                  <div style={{ padding: '24px' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      color: '#9ca3af', 
                      fontSize: '0.875rem', 
                      marginBottom: '12px' 
                    }}>
                      <Calendar size={14} />
                      {formatDate(article.date)}
                    </div>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '600', 
                      color: 'white', 
                      marginBottom: '12px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {article.title}
                    </h3>
                    <p style={{ 
                      color: '#9ca3af', 
                      fontSize: '0.875rem', 
                      marginBottom: '16px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {article.excerpt}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between' 
                    }}>
                      <span style={{ color: '#f9a8d4', fontSize: '0.875rem', fontWeight: '500' }}>
                        {categoryInfo.name}
                      </span>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '4px', 
                        color: '#9ca3af', 
                        fontSize: '0.875rem' 
                      }}>
                        <Clock size={12} />
                        <span>3 min read</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <div style={{ 
            background: 'linear-gradient(to right, rgb(17, 24, 39), rgb(31, 41, 55))',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid rgba(236, 72, 153, 0.2)'
          }}>
            <Calendar size={48} style={{ color: '#ec4899', margin: '0 auto 16px' }} />
            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '16px' 
            }}>
              Stay <span style={{ color: '#ec4899' }}>Updated</span>
            </h2>
            <p style={{ 
              color: '#d1d5db', 
              fontSize: '1.125rem', 
              marginBottom: '24px', 
              lineHeight: '1.75' 
            }}>
              Get the latest news about music releases, advocacy initiatives, and exclusive behind-the-scenes content 
              delivered straight to your inbox.
            </p>
            <form style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px', 
              maxWidth: '448px', 
              margin: '0 auto' 
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: '1',
                  padding: '12px 16px',
                  background: 'rgb(31, 41, 55)',
                  border: '1px solid rgb(55, 65, 81)',
                  borderRadius: '9999px',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#ec4899'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
              />
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(to right, #db2777, #9333ea)',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '9999px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
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
                Subscribe
              </button>
            </form>
            <p style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '16px' }}>
              No spam, unsubscribe at any time. Privacy policy respected.
            </p>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: '0', 
            zIndex: '50', 
            background: 'rgba(0, 0, 0, 0.9)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '16px', 
            overflowY: 'auto' 
          }} 
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            style={{ 
              position: 'relative', 
              maxWidth: '896px', 
              width: '100%', 
              background: 'rgb(17, 24, 39)', 
              borderRadius: '12px', 
              border: '1px solid rgb(31, 41, 55)', 
              margin: '32px 0' 
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: '10',
                color: '#9ca3af',
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '8px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
            >
              <X size={24} />
            </button>
            
            <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#f9a8d4',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  background: 'rgba(236, 72, 153, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '9999px'
                }}>
                  <Music size={14} />
                  Music Release
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '0.875rem' }}>
                  <Calendar size={14} />
                  {formatDate(selectedArticle.date)}
                </div>
              </div>
              
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
                {selectedArticle.title}
              </h2>
              <div>
                <p style={{ color: '#d1d5db', fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '24px' }}>
                  {selectedArticle.excerpt}
                </p>
                <div style={{ color: '#d1d5db', lineHeight: '1.75' }}>
                  <p style={{ marginBottom: '16px' }}>
                    This latest release from Hāịlō represents a significant evolution in their artistic journey, 
                    blending the signature dark atmospheric sound with more vibrant electronic elements that 
                    reflect their advocacy for social change and personal empowerment.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    The track explores themes of digital connection in an increasingly isolated world, 
                    questioning how technology both unites and divides us. Through haunting vocals and 
                    pulsing synths, the song creates a sonic landscape that mirrors the neon-lit dreams 
                    of a generation caught between virtual and physical reality.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Recording took place over several months, with Hāịlō collaborating with producers 
                    who share their commitment to both musical excellence and social consciousness. 
                    The result is a track that doesn't just entertain, but challenges listeners to 
                    examine their own relationship with technology and human connection.
                  </p>
                  <p>
                    This release coincides with Hāịlō's expanded advocacy work, with proceeds from 
                    streaming and downloads supporting organizations focused on digital literacy 
                    and mental health support for young people navigating online spaces.
                  </p>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '32px', 
                paddingTop: '24px', 
                borderTop: '1px solid rgb(31, 41, 55)' 
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                    Share this article to support advocacy work
                  </div>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    style={{
                      color: '#f9a8d4',
                      fontWeight: '500',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fbcfe8'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#f9a8d4'}
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;

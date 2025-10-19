import React, { useState, useEffect } from 'react';
import { Settings, Music, Video, Palette, ShoppingBag, Heart, Newspaper, Mail, Plus, Edit, Trash2, Save, User, X } from 'lucide-react';
import VideoManager from '../components/VideoManager';
import MerchManager from '../components/MerchManager';
import CharityManager from '../components/CharityManager';
import NewsManager from '../components/NewsManager';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loading, setLoading] = useState(false);

  const [stats, setStats] = useState({
    tracks: 0,
    videos: 0,
    artwork: 0,
    merchandise: 0,
    messages: 0
  });

  const [artistInfo, setArtistInfo] = useState({
    name: '',
    tagline: '',
    bio: '',
    qualifications: [],
    goals: []
  });

  const [musicTracks, setMusicTracks] = useState([]);
  const [videos, setVideos] = useState([]);
  const [merchandise, setMerchandise] = useState([]);
  const [charities, setCharities] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const [artistResponse, musicResponse, videosResponse, merchResponse, charitiesResponse, newsResponse] = await Promise.all([
        fetch(`${BACKEND_URL}/api/artist-info`),
        fetch(`${BACKEND_URL}/api/music`),
        fetch(`${BACKEND_URL}/api/videos`),
        fetch(`${BACKEND_URL}/api/merchandise`),
        fetch(`${BACKEND_URL}/api/charities`),
        fetch(`${BACKEND_URL}/api/news`)
      ]);

      if (artistResponse.ok) {
        const artistData = await artistResponse.json();
        setArtistInfo(artistData || {});
      }

      if (musicResponse.ok) {
        const musicData = await musicResponse.json();
        setMusicTracks(musicData || []);
        setStats(prev => ({ ...prev, tracks: musicData?.length || 0 }));
      }

      if (videosResponse.ok) {
        const videosData = await videosResponse.json();
        setVideos(videosData || []);
        setStats(prev => ({ ...prev, videos: videosData?.length || 0 }));
      }

      if (merchResponse.ok) {
        const merchData = await merchResponse.json();
        setMerchandise(merchData || []);
        setStats(prev => ({ ...prev, merchandise: merchData?.length || 0 }));
      }

      if (charitiesResponse.ok) {
        const charitiesData = await charitiesResponse.json();
        setCharities(charitiesData || []);
      }

      if (newsResponse.ok) {
        const newsData = await newsResponse.json();
        setNewsArticles(newsData || []);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateArtistInfo = async (updatedInfo) => {
    try {
      setLoading(true);
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/artist-info`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedInfo)
      });
      
      if (response.ok) {
        setArtistInfo(updatedInfo);
        alert('Artist info updated successfully');
      } else {
        alert('Failed to update artist info');
      }
    } catch (error) {
      alert('Error updating: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Video handlers
  const handleAddVideo = async (videoData) => {
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/videos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(videoData)
      });
      
      if (response.ok) {
        const newVideo = await response.json();
        setVideos([...videos, newVideo]);
        setStats(prev => ({ ...prev, videos: prev.videos + 1 }));
        alert('Video added successfully');
      } else {
        alert('Failed to add video');
      }
    } catch (error) {
      alert('Error adding video: ' + error.message);
    }
  };

  const handleDeleteVideo = async (id) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;
    
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/videos/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setVideos(videos.filter(v => v.id !== id));
        setStats(prev => ({ ...prev, videos: prev.videos - 1 }));
        alert('Video deleted successfully');
      } else {
        alert('Failed to delete video');
      }
    } catch (error) {
      alert('Error deleting video: ' + error.message);
    }
  };

  // Merchandise handlers
  const handleAddMerch = async (merchData) => {
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/merchandise`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(merchData)
      });
      
      if (response.ok) {
        const newMerch = await response.json();
        setMerchandise([...merchandise, newMerch]);
        setStats(prev => ({ ...prev, merchandise: prev.merchandise + 1 }));
        alert('Merchandise added successfully');
      } else {
        alert('Failed to add merchandise');
      }
    } catch (error) {
      alert('Error adding merchandise: ' + error.message);
    }
  };

  const handleDeleteMerch = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/merchandise/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setMerchandise(merchandise.filter(m => m.id !== id));
        setStats(prev => ({ ...prev, merchandise: prev.merchandise - 1 }));
        alert('Merchandise deleted successfully');
      } else {
        alert('Failed to delete merchandise');
      }
    } catch (error) {
      alert('Error deleting merchandise: ' + error.message);
    }
  };

  // Charity handlers
  const handleAddCharity = async (charityData) => {
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/charities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(charityData)
      });
      
      if (response.ok) {
        const newCharity = await response.json();
        setCharities([...charities, newCharity]);
        alert('Charity added successfully');
      } else {
        alert('Failed to add charity');
      }
    } catch (error) {
      alert('Error adding charity: ' + error.message);
    }
  };

  const handleDeleteCharity = async (id) => {
    if (!window.confirm('Are you sure you want to delete this charity?')) return;
    
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/charities/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setCharities(charities.filter(c => c.id !== id));
        alert('Charity deleted successfully');
      } else {
        alert('Failed to delete charity');
      }
    } catch (error) {
      alert('Error deleting charity: ' + error.message);
    }
  };

  // News handlers
  const handleAddNews = async (newsData) => {
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsData)
      });
      
      if (response.ok) {
        const newNews = await response.json();
        setNewsArticles([...newsArticles, newNews]);
        alert('News article added successfully');
      } else {
        alert('Failed to add news');
      }
    } catch (error) {
      alert('Error adding news: ' + error.message);
    }
  };

  const handleDeleteNews = async (id) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;
    
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/admin/news/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setNewsArticles(newsArticles.filter(n => n.id !== id));
        alert('News article deleted successfully');
      } else {
        alert('Failed to delete news');
      }
    } catch (error) {
      alert('Error deleting news: ' + error.message);
    }
  };

  if (loading && activeSection === 'dashboard') {
    return (
      <div style={{ minHeight: '100vh', paddingTop: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgb(3, 7, 18)' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" style={{ width: '48px', height: '48px', margin: '0 auto 16px' }}></div>
          <p style={{ color: '#d1d5db' }}>Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '64px', background: 'rgb(3, 7, 18)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
            Admin Dashboard
          </h1>
          <p style={{ color: '#9ca3af' }}>
            Manage your music career website content
          </p>
        </div>

        {/* Tabs */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '8px',
            background: 'rgb(17, 24, 39)',
            padding: '8px',
            borderRadius: '8px'
          }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Settings },
              { id: 'artist', label: 'Artist Info', icon: User },
              { id: 'music', label: 'Music', icon: Music },
              { id: 'videos', label: 'Videos', icon: Video },
              { id: 'merchandise', label: 'Merch', icon: ShoppingBag },
              { id: 'charities', label: 'Charities', icon: Heart },
              { id: 'news', label: 'News', icon: Newspaper }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    background: activeSection === tab.id ? 'rgb(31, 41, 55)' : 'transparent',
                    color: activeSection === tab.id ? 'white' : '#9ca3af',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    if (activeSection !== tab.id) {
                      e.currentTarget.style.background = 'rgba(31, 41, 55, 0.5)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== tab.id) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <IconComponent size={16} />
                  <span style={{ display: window.innerWidth < 640 ? 'none' : 'inline' }}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeSection === 'dashboard' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {[
                { label: 'Music Tracks', count: stats.tracks, icon: Music, color: '#ec4899' },
                { label: 'Videos', count: stats.videos, icon: Video, color: '#a855f7' },
                { label: 'Merchandise', count: stats.merchandise, icon: ShoppingBag, color: '#10b981' },
                { label: 'Charities', count: charities.length, icon: Heart, color: '#f97316' },
                { label: 'News Articles', count: newsArticles.length, icon: Newspaper, color: '#06b6d4' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} style={{ 
                    background: 'rgb(17, 24, 39)', 
                    borderRadius: '12px', 
                    padding: '24px',
                    border: '1px solid rgb(31, 41, 55)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ 
                        padding: '8px', 
                        background: `${stat.color}33`, 
                        borderRadius: '8px' 
                      }}>
                        <IconComponent style={{ color: stat.color }} size={24} />
                      </div>
                      <div>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{stat.count}</p>
                        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ 
              background: 'rgb(17, 24, 39)', 
              borderRadius: '12px', 
              padding: '24px',
              border: '1px solid rgb(31, 41, 55)'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Quick Actions</h2>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '16px' }}>Common tasks to manage your website content</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {[
                  { label: 'Add Video', section: 'videos', icon: Plus, color: '#9333ea' },
                  { label: 'Add Merchandise', section: 'merchandise', icon: Plus, color: '#10b981' },
                  { label: 'Add Charity', section: 'charities', icon: Plus, color: '#ea580c' },
                  { label: 'Write Article', section: 'news', icon: Plus, color: '#0891b2' }
                ].map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(action.section)}
                    style={{
                      background: action.color,
                      color: 'white',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = '0.9';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <action.icon size={16} />
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Artist Info Tab */}
        {activeSection === 'artist' && (
          <div style={{ 
            background: 'rgb(17, 24, 39)', 
            borderRadius: '12px', 
            padding: '24px',
            border: '1px solid rgb(31, 41, 55)'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Artist Information</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '24px' }}>Update your bio, qualifications, and goals</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px' }}>Artist Name</label>
                <input
                  value={artistInfo.name || ''}
                  onChange={(e) => setArtistInfo({...artistInfo, name: e.target.value})}
                  placeholder="Your artist name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgb(31, 41, 55)',
                    border: '1px solid rgb(55, 65, 81)',
                    borderRadius: '8px',
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px' }}>Tagline</label>
                <input
                  value={artistInfo.tagline || ''}
                  onChange={(e) => setArtistInfo({...artistInfo, tagline: e.target.value})}
                  placeholder="Your tagline"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgb(31, 41, 55)',
                    border: '1px solid rgb(55, 65, 81)',
                    borderRadius: '8px',
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px' }}>Bio</label>
                <textarea
                  value={artistInfo.bio || ''}
                  onChange={(e) => setArtistInfo({...artistInfo, bio: e.target.value})}
                  placeholder="Tell your story..."
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgb(31, 41, 55)',
                    border: '1px solid rgb(55, 65, 81)',
                    borderRadius: '8px',
                    color: 'white',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                onClick={() => handleUpdateArtistInfo(artistInfo)}
                disabled={loading}
                style={{
                  background: 'linear-gradient(to right, #db2777, #9333ea)',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s',
                  opacity: loading ? 0.5 : 1
                }}
                onMouseOver={(e) => {
                  if (!loading) e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Music Tab */}
        {activeSection === 'music' && (
          <div style={{ 
            background: 'rgb(17, 24, 39)', 
            borderRadius: '12px', 
            padding: '24px',
            border: '1px solid rgb(31, 41, 55)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>Music Tracks</h2>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Manage your music collection</p>
              </div>
              <button 
                onClick={() => setShowAddForm(!showAddForm)}
                style={{
                  background: '#db2777',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#ec4899'}
                onMouseOut={(e) => e.currentTarget.style.background = '#db2777'}
              >
                <Plus size={16} />
                Add Track
              </button>
            </div>
            
            {showAddForm && (
              <div style={{ 
                marginBottom: '24px', 
                padding: '16px', 
                background: 'rgb(31, 41, 55)', 
                borderRadius: '8px', 
                border: '1px solid rgb(55, 65, 81)' 
              }}>
                <h3 style={{ color: 'white', fontWeight: '500', marginBottom: '16px' }}>Add New Track</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Form implementation would go here...</p>
              </div>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {musicTracks.map((track, index) => (
                <div key={track.id || index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '16px', 
                  background: 'rgb(31, 41, 55)', 
                  borderRadius: '8px', 
                  border: '1px solid rgb(55, 65, 81)' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {track.cover_art && (
                      <img 
                        src={track.cover_art} 
                        alt={track.title}
                        style={{ width: '48px', height: '48px', borderRadius: '6px', objectFit: 'cover' }}
                      />
                    )}
                    <div>
                      <h4 style={{ color: 'white', fontWeight: '500' }}>{track.title}</h4>
                      <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                        {track.platform} • {track.duration}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {track.featured && (
                      <span style={{ 
                        background: '#db2777', 
                        color: 'white', 
                        fontSize: '0.75rem', 
                        padding: '4px 12px', 
                        borderRadius: '9999px',
                        fontWeight: '500'
                      }}>Featured</span>
                    )}
                    <button style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      color: '#9ca3af', 
                      cursor: 'pointer',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Edit size={16} />
                    </button>
                    <button style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      color: '#9ca3af', 
                      cursor: 'pointer',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeSection === 'videos' && (
          <VideoManager
            videos={videos}
            onAdd={handleAddVideo}
            onDelete={handleDeleteVideo}
          />
        )}

        {/* Merchandise Tab */}
        {activeSection === 'merchandise' && (
          <MerchManager
            merchandise={merchandise}
            onAdd={handleAddMerch}
            onDelete={handleDeleteMerch}
          />
        )}

        {/* Charities Tab */}
        {activeSection === 'charities' && (
          <CharityManager
            charities={charities}
            onAdd={handleAddCharity}
            onDelete={handleDeleteCharity}
          />
        )}

        {/* News Tab */}
        {activeSection === 'news' && (
          <NewsManager
            newsArticles={newsArticles}
            onAdd={handleAddNews}
            onDelete={handleDeleteNews}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;

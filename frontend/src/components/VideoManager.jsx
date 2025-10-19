import React, { useState } from 'react';
import { Plus, X, Save, Trash2, Video as VideoIcon } from 'lucide-react';

const VideoManager = ({ videos, onAdd, onDelete }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [videoForm, setVideoForm] = useState({
    title: '',
    description: '',
    youtube_url: '',
    thumbnail: '',
    duration: '',
    category: 'music-video'
  });

  const handleSubmit = () => {
    if (!videoForm.title || !videoForm.youtube_url) {
      alert('Please fill in required fields (Title and YouTube URL)');
      return;
    }
    onAdd(videoForm);
    setVideoForm({ title: '', description: '', youtube_url: '', thumbnail: '', duration: '', category: 'music-video' });
    setShowAddForm(false);
  };

  return (
    <div style={{ 
      background: 'rgb(17, 24, 39)', 
      borderRadius: '12px', 
      padding: '24px',
      border: '1px solid rgb(31, 41, 55)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>Videos & Sound Design</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Manage your video content</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          style={{
            background: '#9333ea',
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
          onMouseOver={(e) => e.currentTarget.style.background = '#a855f7'}
          onMouseOut={(e) => e.currentTarget.style.background = '#9333ea'}
        >
          {showAddForm ? <X size={16} /> : <Plus size={16} />}
          {showAddForm ? 'Cancel' : 'Add Video'}
        </button>
      </div>
      
      {showAddForm && (
        <div style={{ 
          marginBottom: '24px', 
          padding: '24px', 
          background: 'rgb(31, 41, 55)', 
          borderRadius: '8px', 
          border: '1px solid rgb(55, 65, 81)' 
        }}>
          <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '1.125rem' }}>Add New Video</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Video Title *</label>
              <input
                value={videoForm.title}
                onChange={(e) => setVideoForm({...videoForm, title: e.target.value})}
                placeholder="e.g., Neon Dreams - Official Music Video"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgb(17, 24, 39)',
                  border: '1px solid rgb(55, 65, 81)',
                  borderRadius: '6px',
                  color: 'white',
                  outline: 'none',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Description</label>
              <textarea
                value={videoForm.description}
                onChange={(e) => setVideoForm({...videoForm, description: e.target.value})}
                placeholder="Brief description of the video..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgb(17, 24, 39)',
                  border: '1px solid rgb(55, 65, 81)',
                  borderRadius: '6px',
                  color: 'white',
                  outline: 'none',
                  resize: 'vertical',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>YouTube URL *</label>
                <input
                  value={videoForm.youtube_url}
                  onChange={(e) => setVideoForm({...videoForm, youtube_url: e.target.value})}
                  placeholder="https://youtube.com/watch?v=..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgb(17, 24, 39)',
                    border: '1px solid rgb(55, 65, 81)',
                    borderRadius: '6px',
                    color: 'white',
                    outline: 'none',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Thumbnail URL</label>
                <input
                  value={videoForm.thumbnail}
                  onChange={(e) => setVideoForm({...videoForm, thumbnail: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgb(17, 24, 39)',
                    border: '1px solid rgb(55, 65, 81)',
                    borderRadius: '6px',
                    color: 'white',
                    outline: 'none',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Duration</label>
                <input
                  value={videoForm.duration}
                  onChange={(e) => setVideoForm({...videoForm, duration: e.target.value})}
                  placeholder="e.g., 3:45"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgb(17, 24, 39)',
                    border: '1px solid rgb(55, 65, 81)',
                    borderRadius: '6px',
                    color: 'white',
                    outline: 'none',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Category</label>
                <select
                  value={videoForm.category}
                  onChange={(e) => setVideoForm({...videoForm, category: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgb(17, 24, 39)',
                    border: '1px solid rgb(55, 65, 81)',
                    borderRadius: '6px',
                    color: 'white',
                    outline: 'none',
                    fontSize: '0.875rem'
                  }}
                >
                  <option value="music-video">Music Video</option>
                  <option value="sound-design">Sound Design</option>
                  <option value="behind-scenes">Behind the Scenes</option>
                  <option value="live-performance">Live Performance</option>
                </select>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              style={{
                background: 'linear-gradient(to right, #9333ea, #7c3aed)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s',
                alignSelf: 'flex-start'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Save size={16} />
              Save Video
            </button>
          </div>
        </div>
      )}
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {videos.length === 0 ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: '40px 0' }}>
            No videos yet. Click "Add Video" to get started.
          </p>
        ) : (
          videos.map((video, index) => (
            <div key={video.id || index} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              padding: '16px', 
              background: 'rgb(31, 41, 55)', 
              borderRadius: '8px', 
              border: '1px solid rgb(55, 65, 81)',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '200px' }}>
                {video.thumbnail && (
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    style={{ width: '80px', height: '60px', borderRadius: '6px', objectFit: 'cover' }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: 'white', fontWeight: '500', marginBottom: '4px' }}>{video.title}</h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                    {video.category} {video.duration && `• ${video.duration}`}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button 
                  onClick={() => onDelete(video.id)}
                  style={{ 
                    background: 'transparent', 
                    border: '1px solid #ef4444', 
                    color: '#ef4444', 
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#ef4444';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#ef4444';
                  }}
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoManager;

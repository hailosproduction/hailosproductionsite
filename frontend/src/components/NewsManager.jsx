import React, { useState } from 'react';
import { Plus, X, Save, Trash2, Newspaper } from 'lucide-react';

const NewsManager = ({ newsArticles, onAdd, onDelete }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newsForm, setNewsForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'music-release',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = () => {
    if (!newsForm.title || !newsForm.excerpt) {
      alert('Please fill in required fields (Title and Excerpt)');
      return;
    }
    onAdd(newsForm);
    setNewsForm({ title: '', excerpt: '', content: '', image: '', category: 'music-release', date: new Date().toISOString().split('T')[0] });
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
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>News & Articles</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Write and manage your blog posts and updates</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          style={{
            background: '#0891b2',
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
          onMouseOver={(e) => e.currentTarget.style.background = '#0e7490'}
          onMouseOut={(e) => e.currentTarget.style.background = '#0891b2'}
        >
          {showAddForm ? <X size={16} /> : <Plus size={16} />}
          {showAddForm ? 'Cancel' : 'Write Article'}
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
          <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '1.125rem' }}>Write New Article</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Article Title *</label>
              <input
                value={newsForm.title}
                onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                placeholder="e.g., New Single 'Neon Dreams' Drops This Friday"
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
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Excerpt/Summary *</label>
              <textarea
                value={newsForm.excerpt}
                onChange={(e) => setNewsForm({...newsForm, excerpt: e.target.value})}
                placeholder="Brief summary that appears on the news page..."
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

            <div>
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Full Content</label>
              <textarea
                value={newsForm.content}
                onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                placeholder="Full article content..."
                rows={8}
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

            <div>
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Featured Image URL</label>
              <input
                value={newsForm.image}
                onChange={(e) => setNewsForm({...newsForm, image: e.target.value})}
                placeholder="https://example.com/article-image.jpg"
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Category</label>
                <select
                  value={newsForm.category}
                  onChange={(e) => setNewsForm({...newsForm, category: e.target.value})}
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
                  <option value="music-release">Music Release</option>
                  <option value="advocacy">Advocacy Work</option>
                  <option value="behind-scenes">Behind the Scenes</option>
                  <option value="announcement">Announcement</option>
                  <option value="event">Event</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Publish Date</label>
                <input
                  type="date"
                  value={newsForm.date}
                  onChange={(e) => setNewsForm({...newsForm, date: e.target.value})}
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

            <button 
              onClick={handleSubmit}
              style={{
                background: 'linear-gradient(to right, #0891b2, #0e7490)',
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
              Publish Article
            </button>
          </div>
        </div>
      )}
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {newsArticles.length === 0 ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: '40px 0' }}>
            No articles yet. Click "Write Article" to get started.
          </p>
        ) : (
          newsArticles.map((article, index) => (
            <div key={article.id || index} style={{ 
              display: 'flex',
              gap: '16px',
              padding: '16px', 
              background: 'rgb(31, 41, 55)', 
              borderRadius: '8px', 
              border: '1px solid rgb(55, 65, 81)',
              flexWrap: 'wrap'
            }}>
              {article.image && (
                <div style={{ width: '140px', height: '100px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    background: '#0891b2', 
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    marginRight: '8px'
                  }}>
                    {article.category}
                  </span>
                  <span style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '8px', fontSize: '1.125rem' }}>{article.title}</h4>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.5' }}>
                  {article.excerpt}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <button 
                  onClick={() => onDelete(article.id)}
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

export default NewsManager;

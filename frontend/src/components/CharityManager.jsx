import React, { useState } from 'react';
import { Plus, X, Save, Trash2, Heart } from 'lucide-react';

const CharityManager = ({ charities, onAdd, onDelete }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [charityForm, setCharityForm] = useState({
    name: '',
    description: '',
    cause: '',
    website: '',
    logo: '',
    impact: ''
  });

  const handleSubmit = () => {
    if (!charityForm.name || !charityForm.cause) {
      alert('Please fill in required fields (Name and Cause)');
      return;
    }
    onAdd(charityForm);
    setCharityForm({ name: '', description: '', cause: '', website: '', logo: '', impact: '' });
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
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>Supported Charities</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Manage advocacy organizations and causes</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          style={{
            background: '#f97316',
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
          onMouseOver={(e) => e.currentTarget.style.background = '#ea580c'}
          onMouseOut={(e) => e.currentTarget.style.background = '#f97316'}
        >
          {showAddForm ? <X size={16} /> : <Plus size={16} />}
          {showAddForm ? 'Cancel' : 'Add Charity'}
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
          <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '1.125rem' }}>Add New Charity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Organization Name *</label>
                <input
                  value={charityForm.name}
                  onChange={(e) => setCharityForm({...charityForm, name: e.target.value})}
                  placeholder="e.g., Autism Speaks"
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
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Cause/Focus *</label>
                <input
                  value={charityForm.cause}
                  onChange={(e) => setCharityForm({...charityForm, cause: e.target.value})}
                  placeholder="e.g., Autism Awareness"
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

            <div>
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Description</label>
              <textarea
                value={charityForm.description}
                onChange={(e) => setCharityForm({...charityForm, description: e.target.value})}
                placeholder="Brief description of the organization..."
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
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Website URL</label>
                <input
                  value={charityForm.website}
                  onChange={(e) => setCharityForm({...charityForm, website: e.target.value})}
                  placeholder="https://charity-website.org"
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
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Logo URL</label>
                <input
                  value={charityForm.logo}
                  onChange={(e) => setCharityForm({...charityForm, logo: e.target.value})}
                  placeholder="https://example.com/logo.png"
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

            <div>
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Impact Statement</label>
              <textarea
                value={charityForm.impact}
                onChange={(e) => setCharityForm({...charityForm, impact: e.target.value})}
                placeholder="How your support helps this cause..."
                rows={2}
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

            <button 
              onClick={handleSubmit}
              style={{
                background: 'linear-gradient(to right, #f97316, #ea580c)',
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
              Save Charity
            </button>
          </div>
        </div>
      )}
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {charities.length === 0 ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: '40px 0', gridColumn: '1 / -1' }}>
            No charities yet. Click "Add Charity" to get started.
          </p>
        ) : (
          charities.map((charity, index) => (
            <div key={charity.id || index} style={{ 
              background: 'rgb(31, 41, 55)', 
              borderRadius: '8px', 
              border: '1px solid rgb(55, 65, 81)',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '12px' }}>
                {charity.logo && (
                  <img 
                    src={charity.logo} 
                    alt={charity.name}
                    style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '4px', fontSize: '1.125rem' }}>{charity.name}</h4>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    background: '#f97316', 
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    display: 'inline-block'
                  }}>
                    {charity.cause}
                  </span>
                </div>
              </div>
              
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '12px', lineHeight: '1.5' }}>
                {charity.description}
              </p>
              
              {charity.impact && (
                <div style={{ 
                  padding: '12px', 
                  background: 'rgba(249, 115, 22, 0.1)', 
                  borderLeft: '3px solid #f97316',
                  marginBottom: '12px',
                  borderRadius: '4px'
                }}>
                  <p style={{ color: '#fed7aa', fontSize: '0.8125rem', lineHeight: '1.5' }}>
                    💡 {charity.impact}
                  </p>
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                {charity.website && (
                  <a 
                    href={charity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#f97316',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      flex: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Visit Website →
                  </a>
                )}
                <button 
                  onClick={() => onDelete(charity.id)}
                  style={{ 
                    background: 'transparent', 
                    border: '1px solid #ef4444', 
                    color: '#ef4444', 
                    cursor: 'pointer',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
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
                  <Trash2 size={12} />
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

export default CharityManager;

import React, { useState } from 'react';
import { Plus, X, Save, Trash2, ShoppingBag } from 'lucide-react';

const MerchManager = ({ merchandise, onAdd, onDelete }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [merchForm, setMerchForm] = useState({
    name: '',
    description: '',
    price: '',
    type: 'clothing',
    image: '',
    sizes: '',
    materials: '',
    stock: ''
  });

  const handleSubmit = () => {
    if (!merchForm.name || !merchForm.price) {
      alert('Please fill in required fields (Name and Price)');
      return;
    }
    
    const formattedData = {
      ...merchForm,
      price: parseFloat(merchForm.price),
      sizes: merchForm.sizes ? merchForm.sizes.split(',').map(s => s.trim()) : [],
      materials: merchForm.materials ? merchForm.materials.split(',').map(m => m.trim()) : [],
      stock: merchForm.stock ? parseInt(merchForm.stock) : 0
    };
    
    onAdd(formattedData);
    setMerchForm({ name: '', description: '', price: '', type: 'clothing', image: '', sizes: '', materials: '', stock: '' });
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
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>Merchandise</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Manage your products and inventory</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          style={{
            background: '#10b981',
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
          onMouseOver={(e) => e.currentTarget.style.background = '#059669'}
          onMouseOut={(e) => e.currentTarget.style.background = '#10b981'}
        >
          {showAddForm ? <X size={16} /> : <Plus size={16} />}
          {showAddForm ? 'Cancel' : 'Add Product'}
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
          <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '1.125rem' }}>Add New Product</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Product Name *</label>
                <input
                  value={merchForm.name}
                  onChange={(e) => setMerchForm({...merchForm, name: e.target.value})}
                  placeholder="e.g., Hāịlō Dark Dreams T-Shirt"
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
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Price (USD) *</label>
                <input
                  type="number"
                  value={merchForm.price}
                  onChange={(e) => setMerchForm({...merchForm, price: e.target.value})}
                  placeholder="29.99"
                  step="0.01"
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
                value={merchForm.description}
                onChange={(e) => setMerchForm({...merchForm, description: e.target.value})}
                placeholder="Product description..."
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Type</label>
                <select
                  value={merchForm.type}
                  onChange={(e) => setMerchForm({...merchForm, type: e.target.value})}
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
                  <option value="clothing">Clothing</option>
                  <option value="jewelry">Jewelry</option>
                  <option value="digital">Digital Downloads</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Stock Quantity</label>
                <input
                  type="number"
                  value={merchForm.stock}
                  onChange={(e) => setMerchForm({...merchForm, stock: e.target.value})}
                  placeholder="50"
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
              <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Image URL</label>
              <input
                value={merchForm.image}
                onChange={(e) => setMerchForm({...merchForm, image: e.target.value})}
                placeholder="https://example.com/product-image.jpg"
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Sizes (comma separated)</label>
                <input
                  value={merchForm.sizes}
                  onChange={(e) => setMerchForm({...merchForm, sizes: e.target.value})}
                  placeholder="S, M, L, XL"
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
                <label style={{ display: 'block', color: 'white', fontWeight: '500', marginBottom: '8px', fontSize: '0.875rem' }}>Materials (comma separated)</label>
                <input
                  value={merchForm.materials}
                  onChange={(e) => setMerchForm({...merchForm, materials: e.target.value})}
                  placeholder="Cotton, Polyester"
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
                background: 'linear-gradient(to right, #10b981, #059669)',
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
              Save Product
            </button>
          </div>
        </div>
      )}
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {merchandise.length === 0 ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: '40px 0', gridColumn: '1 / -1' }}>
            No products yet. Click "Add Product" to get started.
          </p>
        ) : (
          merchandise.map((item, index) => (
            <div key={item.id || index} style={{ 
              background: 'rgb(31, 41, 55)', 
              borderRadius: '8px', 
              border: '1px solid rgb(55, 65, 81)',
              overflow: 'hidden'
            }}>
              {item.image && (
                <div style={{ aspectRatio: '1', overflow: 'hidden', background: 'rgb(17, 24, 39)' }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div style={{ padding: '16px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    background: '#10b981', 
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    {item.type}
                  </span>
                </div>
                <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '8px', fontSize: '1rem' }}>{item.name}</h4>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '12px', lineHeight: '1.4' }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.25rem' }}>${item.price}</span>
                  <button 
                    onClick={() => onDelete(item.id)}
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MerchManager;

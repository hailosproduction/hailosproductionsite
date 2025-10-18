import React, { useState } from 'react';
import { ShoppingCart, Filter, ExternalLink, Heart } from 'lucide-react';

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

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Merchandise</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Support the music and advocacy through meaningful merchandise
          </p>
          <div className="flex items-center justify-center gap-2 text-pink-400">
            <Heart size={16} />
            <span className="text-sm">Proceeds support charitable causes</span>
            <Heart size={16} />
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured <span className="text-pink-500">Items</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredMerch.map((item) => (
              <div key={item.id} className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  {item.sizes && (
                    <div className="mb-3">
                      <span className="text-xs text-gray-500">Available sizes: </span>
                      <span className="text-xs text-pink-400">{item.sizes.join(', ')}</span>
                    </div>
                  )}
                  
                  {item.materials && (
                    <div className="mb-3">
                      <span className="text-xs text-gray-500">Materials: </span>
                      <span className="text-xs text-pink-400">{item.materials.join(', ')}</span>
                    </div>
                  )}
                  
                  {item.formats && (
                    <div className="mb-3">
                      <span className="text-xs text-gray-500">Formats: </span>
                      <span className="text-xs text-pink-400">{item.formats.join(', ')}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-400">
                      ${item.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                    >
                      <ShoppingCart size={16} />
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Items */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">
              All <span className="text-pink-500">Merchandise</span>
            </h2>
            
            {/* Type Filter */}
            <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1">
              <Filter className="text-gray-400 ml-2" size={16} />
              {merchTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-pink-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {typeLabels[type]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMerch.map((item) => (
              <div key={item.id} className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300 group">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1 line-clamp-1">{item.name}</h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-pink-400">
                      ${item.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-300"
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
        <div className="fixed bottom-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Cart: {cart.length} item{cart.length > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default Merchandise;

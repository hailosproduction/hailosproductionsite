import React, { useState } from 'react';
import { ZoomIn, ExternalLink } from 'lucide-react';

const Artwork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const artworks = [
    {
      id: 1,
      title: "Digital Rebellion",
      medium: "Digital Art",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=600&fit=crop",
      description: "Abstract representation of breaking free from digital constraints",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Spectrum of Identity",
      medium: "Mixed Media",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop",
      description: "Celebrating the diversity of human identity and experience",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "Environmental Echoes",
      medium: "Photography & Digital Manipulation",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=600&fit=crop",
      description: "Nature's call for environmental consciousness",
      featured: false,
      year: "2024"
    },
    {
      id: 4,
      title: "Neon Dreamscape",
      medium: "Digital Art",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=500&h=600&fit=crop",
      description: "Cyberpunk visions of emotional connectivity",
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "Fragments of Hope",
      medium: "Collage & Digital",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=600&fit=crop",
      description: "Finding light within darkness and chaos",
      featured: false,
      year: "2023"
    },
    {
      id: 6,
      title: "Pride Spectrum",
      medium: "Digital Illustration",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=600&fit=crop",
      description: "Visual celebration of LGBTQIA+ identity and love",
      featured: false,
      year: "2023"
    },
    {
      id: 7,
      title: "Autism Awareness Abstract",
      medium: "Acrylic & Digital",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=600&fit=crop",
      description: "Understanding neurodiversity through visual metaphor",
      featured: false,
      year: "2023"
    },
    {
      id: 8,
      title: "Mental Health Mandala",
      medium: "Digital Art",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=600&fit=crop",
      description: "Meditative patterns promoting mental wellness",
      featured: false,
      year: "2024"
    }
  ];

  const featuredArtworks = artworks.filter(artwork => artwork.featured);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Artwork</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Visual expressions of advocacy, identity, and emotional depth
          </p>
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured <span className="text-pink-500">Pieces</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredArtworks.map((artwork) => (
              <div key={artwork.id} className="group cursor-pointer" onClick={() => setSelectedImage(artwork)}>
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 mb-4">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{artwork.title}</h3>
                <p className="text-pink-400 text-sm mb-2">{artwork.medium} • {artwork.year}</p>
                <p className="text-gray-400 text-sm">{artwork.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Gallery <span className="text-pink-500">Collection</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artworks.map((artwork) => (
              <div 
                key={artwork.id} 
                className="group cursor-pointer bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
                onClick={() => setSelectedImage(artwork)}
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1 line-clamp-1">{artwork.title}</h3>
                  <p className="text-pink-400 text-xs mb-2">{artwork.medium}</p>
                  <p className="text-gray-400 text-xs line-clamp-2">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                ×
              </button>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-pink-400 mb-2">{selectedImage.medium} • {selectedImage.year}</p>
              <p className="text-gray-300 max-w-2xl mx-auto">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artwork;

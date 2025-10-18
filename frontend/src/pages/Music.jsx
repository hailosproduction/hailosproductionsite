import React, { useState } from 'react';
import { Play, ExternalLink, Filter } from 'lucide-react';

const Music = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const musicTracks = [
    {
      id: 1,
      title: "Whispers in the Void",
      duration: "4:23",
      platform: "SoundCloud",
      url: "https://soundcloud.com/hailo/whispers-in-the-void",
      description: "A haunting exploration of isolation and connection",
      coverArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Neon Dreams",
      duration: "3:47",
      platform: "YouTube",
      url: "https://youtube.com/watch?v=neon-dreams",
      description: "Electronic meets emotion in this cyberpunk anthem",
      coverArt: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Breaking Barriers",
      duration: "5:12",
      platform: "Spotify",
      url: "https://open.spotify.com/track/breaking-barriers",
      description: "An empowering track about overcoming societal limitations",
      coverArt: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Digital Rebellion",
      duration: "4:56",
      platform: "SoundCloud",
      url: "https://soundcloud.com/hailo/digital-rebellion",
      description: "A call to action against digital conformity",
      coverArt: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Midnight Advocacy",
      duration: "6:02",
      platform: "Spotify",
      url: "https://open.spotify.com/track/midnight-advocacy",
      description: "Late-night reflections on social justice",
      coverArt: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Spectrum of Identity",
      duration: "4:34",
      platform: "YouTube",
      url: "https://youtube.com/watch?v=spectrum-identity",
      description: "Celebrating diversity and individual expression",
      coverArt: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      featured: true
    }
  ];

  const platforms = ['all', 'SoundCloud', 'YouTube', 'Spotify'];

  const filteredTracks = selectedPlatform === 'all' 
    ? musicTracks 
    : musicTracks.filter(track => track.platform === selectedPlatform);

  const featuredTracks = musicTracks.filter(track => track.featured);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Music</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Dark melodies with purpose – every track tells a story of struggle, hope, and change
          </p>
        </div>
      </section>

      {/* Featured Tracks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured <span className="text-pink-500">Tracks</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredTracks.map((track) => (
              <div key={track.id} className="group relative">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img 
                    src={track.coverArt} 
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-400 transition-colors duration-300">
                      <Play className="text-white ml-1" size={24} />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{track.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{track.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-400 text-sm">{track.platform}</span>
                  <span className="text-gray-500 text-sm">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Tracks */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">
              All <span className="text-pink-500">Tracks</span>
            </h2>
            
            {/* Platform Filter */}
            <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1">
              <Filter className="text-gray-400 ml-2" size={16} />
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedPlatform === platform
                      ? 'bg-pink-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {platform === 'all' ? 'All Platforms' : platform}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTracks.map((track) => (
              <div key={track.id} className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 group">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                    <img 
                      src={track.coverArt} 
                      alt={track.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold mb-1 truncate">{track.title}</h3>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">{track.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-pink-400 text-xs">{track.platform}</span>
                      <span className="text-gray-500 text-xs">{track.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                    <Play size={14} />
                    Play
                  </button>
                  <a 
                    href={track.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;

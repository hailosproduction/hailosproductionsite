import React, { useState } from 'react';
import { Play, ExternalLink, Filter } from 'lucide-react';

const Videos = () => {
  const [selectedType, setSelectedType] = useState('all');

  const videos = [
    {
      id: 1,
      title: "Whispers in the Void - Official Music Video",
      type: "music-video",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=whispers-video",
      description: "Cinematic journey through emotional landscapes",
      duration: "4:23",
      featured: true
    },
    {
      id: 2,
      title: "Atmospheric Soundscapes - Sound Design Reel",
      type: "sound-design",
      thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=400&fit=crop",
      url: "https://vimeo.com/soundscapes-reel",
      description: "Commercial and film sound design portfolio",
      duration: "8:45",
      featured: false
    },
    {
      id: 3,
      title: "Pride Festival Live Performance",
      type: "live-performance",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=pride-live",
      description: "Live performance supporting LGBTQIA+ rights",
      duration: "25:30",
      featured: true
    },
    {
      id: 4,
      title: "Neon Dreams - Behind the Scenes",
      type: "music-video",
      thumbnail: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=neon-dreams-bts",
      description: "Creative process behind the cyberpunk visual narrative",
      duration: "6:12",
      featured: false
    },
    {
      id: 5,
      title: "Community Center Performance",
      type: "live-performance",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=community-performance",
      description: "Intimate acoustic set for local advocacy group",
      duration: "15:42",
      featured: false
    },
    {
      id: 6,
      title: "Breaking Barriers - Official Video",
      type: "music-video",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
      url: "https://youtube.com/watch?v=breaking-barriers",
      description: "Powerful visuals exploring themes of liberation",
      duration: "5:12",
      featured: true
    }
  ];

  const videoTypes = ['all', 'music-video', 'sound-design', 'live-performance'];
  const typeLabels = {
    'all': 'All Videos',
    'music-video': 'Music Videos',
    'sound-design': 'Sound Design',
    'live-performance': 'Live Performances'
  };

  const filteredVideos = selectedType === 'all' 
    ? videos 
    : videos.filter(video => video.type === selectedType);

  const featuredVideos = videos.filter(video => video.featured);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Videos</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Visual storytelling through music videos, sound design reels, and live performances
          </p>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured <span className="text-pink-500">Videos</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredVideos.map((video, index) => (
              <div key={video.id} className={`group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-pink-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 group-hover:scale-110">
                      <Play className="text-white ml-1" size={24} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className={`font-semibold text-white mb-2 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {video.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-2">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-pink-500/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                        {typeLabels[video.type]}
                      </span>
                      <span className="text-gray-200 text-xs">{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Videos */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">
              All <span className="text-pink-500">Videos</span>
            </h2>
            
            {/* Type Filter */}
            <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1">
              <Filter className="text-gray-400 ml-2" size={16} />
              {videoTypes.map((type) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-12 h-12 bg-pink-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500">
                      <Play className="text-white ml-1" size={16} />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                      {typeLabels[video.type]}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                      {video.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-white font-semibold mb-2 line-clamp-1">{video.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{video.description}</p>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                      <Play size={14} />
                      Watch
                    </button>
                    <a 
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;

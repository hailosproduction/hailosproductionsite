import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Music, Video, Palette, ShoppingBag } from 'lucide-react';

const Home = () => {
  const [loading, setLoading] = useState(false);

  // Mock data for now
  const artistInfo = {
    name: "Hāịlō",
    tagline: "Dark Melodies, Bright Advocacy",
    bio: "Creating emotionally charged music that explores human depths while advocating for marginalized communities"
  };

  const musicTracks = [
    {
      id: 1,
      title: "Whispers in the Void",
      duration: "4:23",
      platform: "SoundCloud",
      description: "A haunting exploration of isolation and connection",
      coverArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Neon Dreams",
      duration: "3:47",
      platform: "YouTube",
      description: "Electronic meets emotion in this cyberpunk anthem",
      coverArt: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Breaking Barriers",
      duration: "5:12",
      platform: "Spotify",
      description: "An empowering track about overcoming limitations",
      coverArt: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop"
    }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "New Single 'Neon Dreams' Drops This Friday",
      excerpt: "Latest track explores the intersection of technology and human emotion",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=300&fit=crop",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Partnering with Local LGBTQIA+ Organizations",
      excerpt: "Exciting collaboration announced to support transgender youth",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=300&fit=crop",
      date: "Dec 10, 2024"
    },
    {
      id: 3,
      title: "Behind the Scenes: Sound Design Process",
      excerpt: "Deep dive into the creative process behind atmospheric soundscapes",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=300&fit=crop",
      date: "Dec 5, 2024"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Hāịlō
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            {artistInfo.tagline}
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {artistInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/music"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play size={20} />
              Listen Now
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-pink-500/50 text-pink-300 px-8 py-4 rounded-full font-medium hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">12+</div>
              <div className="text-sm text-gray-400">Tracks Released</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">5</div>
              <div className="text-sm text-gray-400">Music Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">8</div>
              <div className="text-sm text-gray-400">Live Shows</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-sm text-gray-400">Causes Supported</div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
      </section>

      {/* Featured Music */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest <span className="text-pink-500">Music</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore the latest tracks and discover the sound of advocacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {musicTracks.slice(0, 3).map((track) => (
              <div 
                key={track.id} 
                className="group bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img 
                    src={track.coverArt} 
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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

          <div className="text-center">
            <Link
              to="/music"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300"
            >
              View All Music
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Music', 
                icon: Music, 
                path: '/music', 
                description: 'Latest tracks & albums',
                color: 'from-pink-500 to-rose-500'
              },
              { 
                title: 'Videos', 
                icon: Video, 
                path: '/videos', 
                description: 'Music videos & sound design',
                color: 'from-purple-500 to-indigo-500'
              },
              { 
                title: 'Artwork', 
                icon: Palette, 
                path: '/artwork', 
                description: 'Visual art & designs',
                color: 'from-cyan-500 to-blue-500'
              },
              { 
                title: 'Merch', 
                icon: ShoppingBag, 
                path: '/merchandise', 
                description: 'T-shirts, jewelry & downloads',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest <span className="text-pink-500">News</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Stay updated on music releases and advocacy initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {newsArticles.slice(0, 3).map((article) => (
              <article 
                key={article.id} 
                className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-pink-400 text-sm mb-2">{article.date}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300"
            >
              Read All News
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Hāịlō
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Dark Melodies, Bright Advocacy
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating emotionally charged music that explores human depths while advocating for marginalized communities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/music"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ▶ Listen Now
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-pink-500/50 text-pink-300 px-8 py-4 rounded-full font-medium hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Learn More →
            </Link>
          </div>

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
            <div className="group bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" 
                  alt="Whispers in the Void"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Whispers in the Void</h3>
              <p className="text-gray-400 text-sm mb-3">A haunting exploration of isolation and connection</p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 text-sm">SoundCloud</span>
                <span className="text-gray-500 text-sm">4:23</span>
              </div>
            </div>

            <div className="group bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop" 
                  alt="Neon Dreams"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Neon Dreams</h3>
              <p className="text-gray-400 text-sm mb-3">Electronic meets emotion in this cyberpunk anthem</p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 text-sm">YouTube</span>
                <span className="text-gray-500 text-sm">3:47</span>
              </div>
            </div>

            <div className="group bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop" 
                  alt="Breaking Barriers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Breaking Barriers</h3>
              <p className="text-gray-400 text-sm mb-3">An empowering track about overcoming limitations</p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 text-sm">Spotify</span>
                <span className="text-gray-500 text-sm">5:12</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/music"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300"
            >
              View All Music →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

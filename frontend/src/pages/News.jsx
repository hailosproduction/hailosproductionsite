import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: "New Single 'Neon Dreams' Drops This Friday",
      excerpt: "Hāịlō's latest track explores the intersection of technology and human emotion in an increasingly digital world.",
      content: "This latest release from Hāịlō represents a significant evolution in their artistic journey, blending the signature dark atmospheric sound with more vibrant electronic elements...",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=300&fit=crop",
      category: "music",
      date: "2024-12-15",
      featured: true,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Partnering with Local LGBTQIA+ Organizations",
      excerpt: "Exciting collaboration announced to support transgender youth through music therapy and community programs.",
      content: "Hāịlō is proud to announce a groundbreaking partnership with several local LGBTQIA+ organizations to create safe spaces and support systems...",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=300&fit=crop",
      category: "advocacy",
      date: "2024-12-10",
      featured: true,
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Behind the Scenes: Sound Design Process",
      excerpt: "Take a deep dive into the creative process behind the atmospheric soundscapes that define Hāịlō's unique sound.",
      content: "Creating the haunting, atmospheric soundscapes that define Hāịlō's music is both an art and a science...",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=300&fit=crop",
      category: "behind-scenes",
      date: "2024-12-05",
      featured: false,
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Upcoming Pride Festival Performance",
      excerpt: "Hāịlō announces headlining performance at the annual Pride Festival, with all proceeds supporting local LGBTQIA+ youth.",
      content: "Music has always been a powerful tool for social change, and Hāịlō is excited to use this platform to support the LGBTQIA+ community...",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=300&fit=crop",
      category: "advocacy",
      date: "2024-11-28",
      featured: false,
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Mental Health Awareness Month Initiative",
      excerpt: "Special fundraising campaign launched to support mental health resources in underserved communities.",
      content: "Throughout Mental Health Awareness Month, Hāịlō is partnering with Mental Health America to raise awareness and funds...",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop",
      category: "advocacy",
      date: "2024-11-20",
      featured: false,
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "New Music Video: 'Breaking Barriers' Released",
      excerpt: "The powerful visual narrative for 'Breaking Barriers' showcases themes of liberation and personal growth.",
      content: "The music video for 'Breaking Barriers' is a visual metaphor for overcoming societal limitations and personal struggles...",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=300&fit=crop",
      category: "music",
      date: "2024-11-15",
      featured: false,
      readTime: "3 min read"
    }
  ];

  const categories = ['all', 'music', 'advocacy', 'behind-scenes'];
  const categoryLabels = {
    'all': 'All News',
    'music': 'Music Releases',
    'advocacy': 'Advocacy',
    'behind-scenes': 'Behind the Scenes'
  };

  const categoryColors = {
    'music': 'bg-pink-500/20 text-pink-400',
    'advocacy': 'bg-purple-500/20 text-purple-400',
    'behind-scenes': 'bg-cyan-500/20 text-cyan-400'
  };

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticles = newsArticles.filter(article => article.featured);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">News</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stay updated on music releases, advocacy initiatives, and behind-the-scenes insights
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured <span className="text-pink-500">Stories</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className={`group cursor-pointer ${index === 0 ? 'lg:row-span-2' : ''}`}>
                <div className="bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300 h-full">
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-video' : 'aspect-[16/10]'}`}>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                        {categoryLabels[article.category]}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className={`font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                        {article.title}
                      </h3>
                      {index === 0 && (
                        <p className="text-gray-200 text-sm mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-300">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(article.date)}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  {index !== 0 && (
                    <div className="p-6">
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {formatDate(article.date)}
                        </span>
                        <span className="text-pink-400 text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all duration-300">
                          Read More
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">
              All <span className="text-pink-500">Articles</span>
            </h2>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1">
              <Tag className="text-gray-400 ml-2" size={16} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-pink-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="group cursor-pointer bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                      {categoryLabels[article.category]}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(article.date)}
                    </span>
                    <span className="text-pink-400 text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all duration-300">
                      Read More
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

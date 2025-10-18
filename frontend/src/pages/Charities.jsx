import React from 'react';
import { ExternalLink, Heart, Users, Globe, Brain } from 'lucide-react';

const Charities = () => {
  const charities = [
    {
      id: 1,
      name: "Autism Speaks",
      cause: "Autism Support",
      description: "Promoting solutions across the spectrum and life span for the needs of people with autism and their families through advocacy and support.",
      website: "https://autismspeaks.org",
      logo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=200&fit=crop",
      featured: true,
      icon: Brain,
      impact: "Supported over 2 million individuals",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "GLAAD",
      cause: "LGBTQIA+ Rights",
      description: "Working to accelerate acceptance for LGBTQ people through media representation and cultural change initiatives.",
      website: "https://glaad.org",
      logo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop",
      featured: true,
      icon: Heart,
      impact: "Advocating for 20+ million LGBTQ Americans",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 3,
      name: "Greenpeace",
      cause: "Environmental",
      description: "Global environmental organization campaigning for planet protection through peaceful protest and creative communication.",
      website: "https://greenpeace.org",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop",
      featured: true,
      icon: Globe,
      impact: "Active in 50+ countries worldwide",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Mental Health America",
      cause: "Mental Health",
      description: "Leading community-based nonprofit dedicated to mental health advocacy, education, research, and service.",
      website: "https://mhanational.org",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
      featured: true,
      icon: Users,
      impact: "Helping millions access mental health resources",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-pink-500" size={40} />
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Supported Causes</span>
            </h1>
            <Heart className="text-pink-500" size={40} />
          </div>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Music with purpose – supporting organizations that create real change
          </p>
          <div className="bg-gray-900/50 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 leading-relaxed">
              A portion of all music sales, merchandise proceeds, and concert ticket sales 
              goes directly to these incredible organizations. When you support Hāịlō's music, 
              you're also supporting causes that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Main Charities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {charities.map((charity) => {
              const IconComponent = charity.icon;
              return (
                <div key={charity.id} className="group bg-gray-900/30 rounded-2xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${charity.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2">{charity.name}</h2>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
                          {charity.cause}
                        </span>
                        <span className="text-gray-400 text-sm">{charity.impact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {charity.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Learn more about their mission
                    </div>
                    <a 
                      href={charity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Visit Website
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Support Works */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How Your Support <span className="text-pink-500">Makes a Difference</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Every purchase, stream, and share contributes to meaningful change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">25%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Music Sales</h3>
              <p className="text-gray-400 text-sm">
                25% of all digital music sales and streaming revenue
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">15%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Merchandise</h3>
              <p className="text-gray-400 text-sm">
                15% of merchandise profits support advocacy work
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">50%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Special Events</h3>
              <p className="text-gray-400 text-sm">
                50% of charity concert proceeds go directly to causes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the <span className="text-pink-500">Movement</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Your support for Hāịlō's music creates a ripple effect of positive change. 
            Together, we can amplify voices, support communities, and make a real difference 
            in the world through the power of music and advocacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/music"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              <Heart size={20} />
              Support Through Music
            </a>
            <a 
              href="/merchandise"
              className="inline-flex items-center gap-2 border border-pink-500/50 text-pink-300 px-8 py-4 rounded-full font-medium hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Shop for Change
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Charities;

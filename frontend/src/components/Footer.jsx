import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ExternalLink, Music, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const charities = [
    { id: 1, name: 'Autism Speaks', website: 'https://autismspeaks.org' },
    { id: 2, name: 'GLAAD', website: 'https://glaad.org' },
    { id: 3, name: 'Greenpeace', website: 'https://greenpeace.org' },
    { id: 4, name: 'Mental Health America', website: 'https://mhanational.org' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'SoundCloud', icon: Music, url: '#' }
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Charity Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-pink-500" size={20} />
            <h3 className="text-lg font-medium text-white">Supporting Important Causes</h3>
            <Heart className="text-pink-500" size={20} />
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
            Hāịlō proudly supports organizations working for autism awareness, LGBTQIA+ rights, environmental protection, and mental health advocacy.
          </p>
          
          {/* Quick Charity Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {charities.slice(0, 4).map((charity) => (
              <a
                key={charity.id}
                href={charity.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                {charity.name}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
          
          <Link
            to="/charities"
            className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors duration-300"
          >
            Learn more about supported organizations →
          </Link>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Social */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Hāịlō
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                Dark Melodies, Bright Advocacy
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/music" className="block text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">
                  Latest Music
                </Link>
                <Link to="/videos" className="block text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">
                  Music Videos
                </Link>
                <Link to="/merchandise" className="block text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">
                  Merchandise
                </Link>
                <Link to="/contact" className="block text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">
                  Contact & Collaborations
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-medium mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>For bookings & collaborations:</p>
                <a 
                  href="mailto:hello@hailo-music.com" 
                  className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                >
                  hello@hailo-music.com
                </a>
                <p className="mt-4">
                  Creating music with purpose,<br />
                  advocating through art.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Hāịlō. All rights reserved. | Made with passion for music and social change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

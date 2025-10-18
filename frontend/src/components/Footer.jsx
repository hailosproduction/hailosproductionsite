import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-pink-500/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-500 mb-4">Hāịlō</h3>
            <p className="text-gray-400">Dark Melodies, Bright Advocacy</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/music" className="block text-gray-400 hover:text-pink-500">Music</Link>
              <Link to="/videos" className="block text-gray-400 hover:text-pink-500">Videos</Link>
              <Link to="/artwork" className="block text-gray-400 hover:text-pink-500">Artwork</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <Link to="/charities" className="block text-gray-400 hover:text-pink-500">Charities</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-pink-500">Contact</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Hāịlō. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-900 border-b border-pink-500/20 p-4">
        <h1 className="text-2xl font-bold text-pink-500 text-center">Hāịlō</h1>
        <p className="text-center text-gray-300">Dark Melodies, Bright Advocacy</p>
      </header>
      
      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Welcome to Hāịlō</h2>
        <p className="text-lg text-gray-300 mb-8">
          Emotionally charged music exploring human experience while advocating for marginalized communities.
        </p>
        <div className="space-x-4">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700">
            Listen Now
          </button>
          <button className="border border-pink-500 text-pink-500 px-8 py-3 rounded-lg hover:bg-pink-500 hover:text-white">
            Learn More
          </button>
        </div>
      </main>
      
      <footer className="bg-gray-900 border-t border-pink-500/20 mt-auto p-4 text-center text-gray-400">
        <p>&copy; 2024 Hāịlō. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

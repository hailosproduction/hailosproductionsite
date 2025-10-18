import React from 'react';

const Music = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Music</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Whispers in the Void</h3>
            <p className="text-gray-400 mb-4">A haunting exploration of isolation</p>
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;

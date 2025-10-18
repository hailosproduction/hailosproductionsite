import React from 'react';

const Artwork = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Artwork</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Digital Rebellion</h3>
            <p className="text-gray-400">Abstract digital art</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artwork;

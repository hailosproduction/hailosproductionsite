import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Hāịlō
          </h1>
          <p className="text-2xl text-pink-500 mb-8">
            Dark Melodies, Bright Advocacy
          </p>
          <div className="space-x-4">
            <button className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors">
              Listen Now
            </button>
            <button className="border border-pink-500 text-pink-500 px-8 py-3 rounded-lg hover:bg-pink-500 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

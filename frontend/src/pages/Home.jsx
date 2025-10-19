import React from 'react';

const Home = () => {
  return (
    <div className="pt-16">
      <div style={{backgroundColor: '#ec4899', color: 'white', padding: '20px', textAlign: 'center'}}>
        <h1 style={{fontSize: '4rem', fontWeight: 'bold'}}>TEST: This should be PINK</h1>
        <p>If this text is on a pink background, CSS is working</p>
      </div>
      
      <div className="bg-pink-500 text-white p-8 text-center">
        <h2 className="text-4xl font-bold">TEST: This should also be PINK</h2>
        <p>If this text is on a pink background, Tailwind is working</p>
      </div>
      
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hāịlō
          </h1>
          <p className="text-xl text-gray-300 mt-4">Dark Melodies, Bright Advocacy</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

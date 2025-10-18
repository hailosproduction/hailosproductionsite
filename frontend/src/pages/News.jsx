import React from 'react';

const News = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">News</h1>
        <div className="space-y-8">
          <article className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">New Single Released</h2>
            <p className="text-gray-400">Check out the latest track...</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default News;

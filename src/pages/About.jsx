import React from 'react';
import '../styles.css';

export default function About(){
  return (
    <section className="page-banner" style={{ backgroundImage: "url('/images/about-banner.jpg')" }}>
      <div className="banner-content fade-page">
        <h2 className="text-4xl font-bold">About Hāịlō</h2>
        <p className="mt-4 max-w-2xl">Creating emotionally charged music that explores human depths while amplifying marginalized voices.</p>
      </div>
    </section>
  );
}

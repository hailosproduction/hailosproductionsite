import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import '../styles.css';

export default function Home(){
  return (
    <main className="hero-hero">
      <ParticlesBackground />
      <div className="hero-content fade-page">
        <h1 className="hero-title">Dark Melodies, Bright Advocacy</h1>
        <p className="hero-sub">Creating emotionally charged music that explores human depths while supporting marginalized communities.</p>
        <a href="/music" className="btn-cta glow-hover">Listen Now</a>
      </div>
    </main>
  );
}

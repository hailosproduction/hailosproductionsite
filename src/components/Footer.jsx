import React from 'react';
import '../styles.css';

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-white/5 bg-black/20">
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Hāịlō</div>
        <div className="flex gap-4">
          <a className="glow-hover" href="#" aria-label="Spotify">Spotify</a>
          <a className="glow-hover" href="#" aria-label="YouTube">YouTube</a>
          <a className="glow-hover" href="#" aria-label="Instagram">Instagram</a>
          <a className="glow-hover" href="#" aria-label="X">X</a>
        </div>
      </div>
    </footer>
  );
}

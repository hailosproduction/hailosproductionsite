import React from 'react';
import '../styles.css';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>About</h4>
          <p className="text-sm">Hāịlō — dark emotional music supporting marginalized communities.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="text-sm">
            <li><a className="glow-hover" href="/music">Music</a></li>
            <li><a className="glow-hover" href="/videos">Videos</a></li>
            <li><a className="glow-hover" href="/about">About</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <div className="flex gap-3">
            <a className="glow-hover" href="#" aria-label="Spotify">Spotify</a>
            <a className="glow-hover" href="#" aria-label="YouTube">YouTube</a>
            <a className="glow-hover" href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

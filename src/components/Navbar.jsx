
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 p-4 flex justify-between items-center z-50">
      <h1 className="text-pink-500 font-bold text-2xl">Hāịlō</h1>
      <button
        className="text-white focus:outline-none z-50"
        onClick={() => setOpen(!open)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-white mb-1 ${open ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>
      <ul
        className={`fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-90 transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 flex flex-col items-center justify-center space-y-6 text-xl`}
      >
        <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-pink-400 hover:shadow-[0_0_10px_#ec4899] transition-all">Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)} className="hover:text-pink-400 hover:shadow-[0_0_10px_#ec4899] transition-all">About</Link></li>
        <li><Link to="/music" onClick={() => setOpen(false)} className="hover:text-pink-400 hover:shadow-[0_0_10px_#ec4899] transition-all">Music</Link></li>
        <li><Link to="/videos" onClick={() => setOpen(false)} className="hover:text-pink-400 hover:shadow-[0_0_10px_#ec4899] transition-all">Videos</Link></li>
        <li><Link to="/artwork" onClick={() => setOpen(false)} className="hover:text-pink-400 hover:shadow-[0_0_10px_#ec4899] transition-all">Artwork</Link></li>
        <li><Link to="/merch" onClick={() => setOpen(false)} className="hover:text-pink-400 hover:shadow-[0_0_10px_#ec4899] transition-all">Merch</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)} className="hover:text-pink-400 hover:shadow-[0_0_10px_#ec4899] transition-all">Contact</Link></li>
      </ul>
    </nav>
  );
}

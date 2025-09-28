import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar-fixed">
      <div className="nav-inner">
        <div className="logo">Hāịlō</div>
        <nav className="hidden md:block">
          <Link to='/' className='nav-link glow-hover mx-3'>Home</Link>
          <Link to='/music' className='nav-link glow-hover mx-3'>Music</Link>
          <Link to='/videos' className='nav-link glow-hover mx-3'>Videos</Link>
          <Link to='/about' className='nav-link glow-hover mx-3'>About</Link>
          <Link to='/charities' className='nav-link glow-hover mx-3'>Charities</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0" width="28" height="2" fill="white"></rect>
            <rect y="9" width="28" height="2" fill="white" opacity={open?0.0:1.0}></rect>
            <rect y="18" width="28" height="2" fill="white"></rect>
          </svg>
        </button>
        <div className={`slide-menu ${open? 'show': ''}`}>
          <div className="slide-links">
            <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
            <Link to="/music" onClick={()=>setOpen(false)}>Music</Link>
            <Link to="/videos" onClick={()=>setOpen(false)}>Videos</Link>
            <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
            <Link to="/charities" onClick={()=>setOpen(false)}>Charities</Link>
            <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

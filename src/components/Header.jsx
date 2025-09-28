import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-black/70 backdrop-blur sticky top-0 z-30">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to='/' className="text-2xl font-bold tracking-wide">Hāịlō</Link>
        <nav className="space-x-4 text-sm">
          <Link to='/music' className="hover:underline">Music</Link>
          <Link to='/videos' className="hover:underline">Videos</Link>
          <Link to='/sound-design' className="hover:underline">Sound Design</Link>
          <Link to='/merch' className="hover:underline">Merch</Link>
          <Link to='/charities' className="hover:underline">Charities</Link>
          <Link to='/about' className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  )
}

import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Menu, X } from 'lucide-react';

const Header = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const location = useLocation();

const navItems = [

{ name: 'Home', path: '/' },

{ name: 'About', path: '/about' },

{ name: 'Music', path: '/music' },

{ name: 'Videos', path: '/videos' },

{ name: 'Artwork', path: '/artwork' },

{ name: 'Merchandise', path: '/merchandise' },

{ name: 'Charities', path: '/charities' },

{ name: 'News', path: '/news' },

{ name: 'Contact', path: '/contact' }

];

const isActive = (path) => location.pathname === path;

return (

<header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-pink-500/20">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex justify-between items-center h-16">

{/* Logo */}

<Link

to="/"

className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-500 transition-all duration-300"

>

Hāịlō

</Link>

{/* Desktop Navigation */}

<nav className="hidden md:flex space-x-8">

{navItems.map((item) => (

<Link

key={item.name}

to={item.path}

className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${

isActive(item.path)

? 'text-pink-400'

: 'text-gray-300 hover:text-pink-300'

}`}

>

{item.name}

{isActive(item.path) && (

<div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />

)}

</Link>

))}

</nav>

{/* Mobile Menu Button */}

<button

onClick={() => setIsMenuOpen(!isMenuOpen)}

className="md:hidden p-2 text-gray-300 hover:text-pink-300 transition-colors duration-300"

aria-label="Toggle menu"

>

{isMenuOpen ? <X size={24} /> : <Menu size={24} />}

</button>

</div>

{/* Mobile Navigation */}

{isMenuOpen && (

<div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-pink-500/20">

<nav className="px-4 py-4 space-y-2">

{navItems.map((item) => (

<Link

key={item.name}

to={item.path}

onClick={() => setIsMenuOpen(false)}

className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${

isActive(item.path)

? 'text-pink-400 bg-pink-500/10'

: 'text-gray-300 hover:text-pink-300 hover:bg-pink-500/5'

}`}

>

{item.name}

</Link>

))}

</nav>

</div>

)}

</div>

</header>

);

};

export default Header;

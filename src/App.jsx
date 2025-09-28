import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Music from './pages/Music'
import Videos from './pages/Videos'
import SoundDesign from './pages/SoundDesign'
import Merch from './pages/Merch'
import Charities from './pages/Charities'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-deep text-white">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/sound-design' element={<SoundDesign/>} />
        <Route path='/merch' element={<Merch/>} />
        <Route path='/charities' element={<Charities/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </div>
  )
}

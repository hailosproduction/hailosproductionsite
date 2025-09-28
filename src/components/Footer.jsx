import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const charities = [
    {id:'autism', name:'Autism Support Org', url:'#'},
    {id:'trans', name:'Trans Rights Org', url:'#'},
    {id:'lgbtqia', name:'LGBTQIA+ Support', url:'#'},
    {id:'environment', name:'Environmental Org', url:'#'},
    {id:'mental-health', name:'Mental Health Support', url:'#'},
  ]
  return (
    <footer className="bg-black text-white mt-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold">Hāịlō</h4>
          <p className="text-sm">Dark, emotional music. Raising awareness for causes.</p>
        </div>
        <div>
          <h4 className="font-bold">Charities</h4>
          <ul className="text-sm">
            {charities.map(c=> <li key={c.id}><a href={c.url} className='underline'>{c.name}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Connect</h4>
          <p className="text-sm">Links: SoundCloud · YouTube · Bandcamp</p>
        </div>
      </div>
      <div className="text-center text-xs bg-white/5 p-3">© {new Date().getFullYear()} Hāịlō</div>
    </footer>
  )
}

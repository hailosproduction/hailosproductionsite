import React from 'react'
export default function Charities(){
  const items = [
    {id:'autism', title:'Autism Support Org', desc:'Support for autistic people.'},
    {id:'trans', title:'Trans Rights Org', desc:'Support trans rights.'},
    {id:'lgbtqia', title:'LGBTQIA+ Support', desc:'Support and resources.'},
    {id:'environment', title:'Environmental Org', desc:'Environmental action.'},
    {id:'mental-health', title:'Mental Health Support', desc:'Mental health resources.'},
  ]
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold">Charities & Organisations</h2>
      <p className="mt-2">I support the following organisations.</p>
      <div className="mt-6 grid gap-4">
        {items.map(i=> (
          <article key={i.id} className="bg-white/5 p-4 rounded">
            <h4 className="font-semibold">{i.title}</h4>
            <p className="mt-2 text-sm">{i.desc} <a href='#' className='underline'>Visit site</a></p>
          </article>
        ))}
      </div>
    </main>
  )
}

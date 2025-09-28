import React from 'react'

export default function Home(){
  return (
    <main className="max-w-5xl mx-auto p-6">
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">Hāịlō</h1>
          <p className="mt-4 prose prose-invert">Dark, emotional electronic music blending cinematic textures and intimate songwriting. I raise awareness for autism, trans rights, LGBTQIA+, environment, and mental health.</p>
          <div className="mt-6 space-x-3">
            <a href="/music" className="inline-block px-4 py-2 rounded-2xl border border-white/20">Listen</a>
            <a href="/merch" className="inline-block px-4 py-2 rounded-2xl bg-hailoPink text-black font-semibold">Merch</a>
          </div>
        </div>
        <div className="p-6 rounded-lg bg-white/3">
          <div className="h-64 bg-white/5 rounded-md flex items-center justify-center">Artwork placeholder</div>
        </div>
      </section>
    </main>
  )
}

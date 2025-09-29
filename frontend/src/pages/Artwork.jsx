1|import React, { useState } from 'react';
2|import { Palette, Maximize2, X } from 'lucide-react';
3|import { artwork } from '../mockData';
4|
5|const Artwork = () => {
6|  const [selectedArtwork, setSelectedArtwork] = useState(null);
7|  const [lightboxOpen, setLightboxOpen] = useState(false);
8|
9|  const openLightbox = (art) => {
10|    setSelectedArtwork(art);
11|    setLightboxOpen(true);
12|  };
13|
14|  const closeLightbox = () => {
15|    setLightboxOpen(false);
16|    setSelectedArtwork(null);
17|  };
18|
19|  return (
20|    <div className="pt-16 min-h-screen">
21|      {/* Hero Section */}
22|      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
23|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
24|          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
25|            <Palette className="inline-block mr-4 text-pink-500" size={48} />
26|            Visual Artwork
27|          </h1>
28|          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
29|            Explore Hāịlō's visual art collection—where digital rebellion meets spectrum identity, 
30|            creating powerful imagery that complements the musical journey and advocacy work.
31|          </p>
32|        </div>
33|      </section>
34|
35|      {/* Featured Artwork */}
36|      <section className="py-16">
37|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
38|          {artwork.length > 0 && (
39|            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-pink-500/20 mb-16">
40|              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
41|                <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
42|                  <img 
43|                    src={artwork[0].image} 
44|                    alt={artwork[0].title}
45|                    className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
46|                    onClick={() => openLightbox(artwork[0])}
47|                  />
48|                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
49|                    <div className="absolute bottom-4 right-4">
50|                      <button 
51|                        onClick={() => openLightbox(artwork[0])}
52|                        className="bg-pink-600 hover:bg-pink-500 text-white p-2 rounded-full"
53|                      >
54|                        <Maximize2 size={20} />
55|                      </button>
56|                    </div>
57|                  </div>
58|                  <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
59|                    Featured
60|                  </div>
61|                </div>
62|                
63|                <div className="p-8 flex flex-col justify-center">
64|                  <div className="mb-4">
65|                    <span className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium bg-pink-500/10 px-3 py-1 rounded-full mb-4">
66|                      <Palette size={14} />
67|                      {artwork[0].medium}
68|                    </span>
69|                  </div>
70|                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
71|                    {artwork[0].title}
72|                  </h2>
73|                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
74|                    {artwork[0].description}
75|                  </p>
76|                  <div className="flex gap-4">
77|                    <button 
78|                      onClick={() => openLightbox(artwork[0])}
79|                      className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
80|                    >
81|                      View Full Size
82|                    </button>
83|                  </div>
84|                </div>
85|              </div>
86|            </div>
87|          )}
88|        </div>
89|      </section>
90|
91|      {/* Artwork Gallery Grid */}
92|      <section className="py-16 bg-gray-950/50">
93|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
94|          <div className="text-center mb-12">
95|            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
96|              Art Gallery
97|            </h2>
98|            <p className="text-gray-400 text-lg">
99|              A collection of visual expressions exploring identity, rebellion, and environmental consciousness
100|            </p>
101|          </div>
102|
103|          {/* Masonry-style grid */}
104|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
105|            {artwork.map((art, index) => (
106|              <div 
107|                key={art.id}
108|                className={`group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 ${
109|                  index % 3 === 1 ? 'md:mt-8' : ''
110|                } ${index % 2 === 1 ? 'lg:mt-12' : ''}`}
111|              >
112|                <div className="relative aspect-[4/5] overflow-hidden">
113|                  <img 
114|                    src={art.image} 
115|                    alt={art.title}
116|                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
117|                    onClick={() => openLightbox(art)}
118|                  />
119|                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
120|                    <div className="absolute bottom-4 right-4">
121|                      <button 
122|                        onClick={() => openLightbox(art)}
123|                        className="bg-pink-600 hover:bg-pink-500 text-white p-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"
124|                      >
125|                        <Maximize2 size={16} />
126|                      </button>
127|                    </div>
128|                  </div>
129|                  {/* Medium badge */}
130|                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
131|                    {art.medium}
132|                  </div>
133|                </div>
134|                
135|                <div className="p-6">
136|                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
137|                    {art.title}
138|                  </h3>
139|                  <p className="text-pink-400 text-sm font-medium mb-3">{art.medium}</p>
140|                  <p className="text-gray-400 text-sm">{art.description}</p>
141|                </div>
142|              </div>
143|            ))}
144|          </div>
145|
146|          {/* More artwork placeholder */}
147|          <div className="text-center mt-16">
148|            <div className="inline-flex items-center gap-2 text-gray-500 text-lg">
149|              <Palette size={20} />
150|              <span>More artwork coming soon...</span>
151|            </div>
152|          </div>
153|        </div>
154|      </section>
155|
156|      {/* Art Philosophy */}
157|      <section className="py-16">
158|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
159|          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
160|            Artistic <span className="text-pink-500">Philosophy</span>
161|          </h2>
162|          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
163|            <p>
164|              Art, like music, serves as a bridge between the seen and unseen, the spoken and unspoken. 
165|              Each piece in this collection reflects Hāịlō's commitment to visual storytelling that challenges 
166|              perceptions and advocates for social change.
167|            </p>
168|            <p>
169|              From digital rebellions against conformity to celebrations of identity diversity, 
170|              these artworks complement the musical journey, creating a complete sensory experience 
171|              that invites viewers to question, feel, and ultimately, act.
172|            </p>
173|          </div>
174|          
175|          <div className="mt-8 p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20">
176|            <blockquote className="text-pink-300 text-xl font-medium italic">
177|              "Every brushstroke, every pixel, every color choice is an act of rebellion against a world 
178|              that tries to silence the marginalized. Art is activism made visible."
179|            </blockquote>
180|            <cite className="block mt-4 text-gray-400">— Hāịlō</cite>
181|          </div>
182|        </div>
183|      </section>
184|
185|      {/* Lightbox Modal */}
186|      {lightboxOpen && selectedArtwork && (
187|        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
188|          <div className="relative max-w-4xl max-h-full">
189|            <button 
190|              onClick={closeLightbox}
191|              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors duration-300"
192|            >
193|              <X size={32} />
194|            </button>
195|            <img 
196|              src={selectedArtwork.image} 
197|              alt={selectedArtwork.title}
198|              className="max-w-full max-h-[80vh] object-contain rounded-lg"
199|              onClick={(e) => e.stopPropagation()}
200|            />
201|            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
202|              <h3 className="text-2xl font-bold text-white mb-2">{selectedArtwork.title}</h3>
203|              <p className="text-pink-400 text-sm font-medium mb-2">{selectedArtwork.medium}</p>
204|              <p className="text-gray-300">{selectedArtwork.description}</p>
205|            </div>
206|          </div>
207|        </div>
208|      )}
209|    </div>
210|  );
211|};
212|
213|export default Artwork;

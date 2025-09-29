1|import React, { useState } from 'react';
2|import { Play, ExternalLink, Video, Music, Mic } from 'lucide-react';
3|import { videos } from '../mockData';
4|
5|const Videos = () => {
6|  const [selectedCategory, setSelectedCategory] = useState('all');
7|
8|  const categories = [
9|    { id: 'all', name: 'All Videos', icon: Video },
10|    { id: 'music-video', name: 'Music Videos', icon: Music },
11|    { id: 'sound-design', name: 'Sound Design', icon: Mic },
12|    { id: 'live-performance', name: 'Live Performances', icon: Play }
13|  ];
14|
15|  const filteredVideos = selectedCategory === 'all' 
16|    ? videos 
17|    : videos.filter(video => video.type === selectedCategory);
18|
19|  return (
20|    <div className="pt-16 min-h-screen">
21|      {/* Hero Section */}
22|      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
23|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
24|          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
25|            <Video className="inline-block mr-4 text-pink-500" size={48} />
26|            Videos & Sound Design
27|          </h1>
28|          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
29|            Explore Hāịlō's visual storytelling through music videos, sound design work, 
30|            and live performance footage that brings the music to life.
31|          </p>
32|        </div>
33|      </section>
34|
35|      {/* Category Filter */}
36|      <section className="py-8 bg-gray-950/50">
37|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
38|          <div className="flex flex-wrap justify-center gap-3 mb-8">
39|            {categories.map((category) => {
40|              const IconComponent = category.icon;
41|              return (
42|                <button
43|                  key={category.id}
44|                  onClick={() => setSelectedCategory(category.id)}
45|                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
46|                    selectedCategory === category.id
47|                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
48|                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
49|                  }`}
50|                >
51|                  <IconComponent size={16} />
52|                  {category.name}
53|                </button>
54|              );
55|            })}
56|          </div>
57|        </div>
58|      </section>
59|
60|      {/* Featured Video */}
61|      {filteredVideos.length > 0 && (
62|        <section className="py-16">
63|          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
64|            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-pink-500/20">
65|              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
66|                <div className="relative aspect-video lg:aspect-square">
67|                  <img 
68|                    src={filteredVideos[0].thumbnail} 
69|                    alt={filteredVideos[0].title}
70|                    className="w-full h-full object-cover"
71|                  />
72|                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
73|                    <button className="bg-pink-600 hover:bg-pink-500 text-white p-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl">
74|                      <Play size={32} />
75|                    </button>
76|                  </div>
77|                  <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
78|                    Featured
79|                  </div>
80|                </div>
81|                
82|                <div className="p-8 flex flex-col justify-center">
83|                  <div className="mb-4">
84|                    <span className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium bg-pink-500/10 px-3 py-1 rounded-full mb-4">
85|                      <Video size={14} />
86|                      {categories.find(cat => cat.id === filteredVideos[0].type)?.name || 'Video'}
87|                    </span>
88|                  </div>
89|                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
90|                    {filteredVideos[0].title}
91|                  </h2>
92|                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
93|                    {filteredVideos[0].description}
94|                  </p>
95|                  <div className="flex gap-4">
96|                    <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
97|                      Watch Now
98|                    </button>
99|                    <a 
100|                      href={filteredVideos[0].url}
101|                      className="inline-flex items-center gap-2 border border-pink-500/50 text-pink-300 px-6 py-3 rounded-full font-medium hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300"
102|                    >
103|                      External Link
104|                      <ExternalLink size={16} />
105|                    </a>
106|                  </div>
107|                </div>
108|              </div>
109|            </div>
110|          </div>
111|        </section>
112|      )}
113|
114|      {/* Video Grid */}
115|      <section className="py-16 bg-gray-950/50">
116|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
117|          <div className="text-center mb-12">
118|            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
119|              Video Collection
120|            </h2>
121|            <p className="text-gray-400 text-lg">
122|              {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''} in this category
123|            </p>
124|          </div>
125|
126|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
127|            {filteredVideos.map((video) => (
128|              <div 
129|                key={video.id}
130|                className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
131|              >
132|                <div className="relative aspect-video overflow-hidden">
133|                  <img 
134|                    src={video.thumbnail} 
135|                    alt={video.title}
136|                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
137|                  />
138|                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
139|                    <button className="bg-pink-600 hover:bg-pink-500 text-white p-4 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
140|                      <Play size={24} />
141|                    </button>
142|                  </div>
143|                  {/* Type badge */}
144|                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
145|                    {categories.find(cat => cat.id === video.type)?.name || 'Video'}
146|                  </div>
147|                </div>
148|                
149|                <div className="p-6">
150|                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300 line-clamp-2">
151|                    {video.title}
152|                  </h3>
153|                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{video.description}</p>
154|                  <div className="flex items-center justify-between">
155|                    <span className="text-pink-400 text-sm font-medium">
156|                      {categories.find(cat => cat.id === video.type)?.name}
157|                    </span>
158|                    <a 
159|                      href={video.url} 
160|                      className="inline-flex items-center gap-1 text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300"
161|                    >
162|                      Watch
163|                      <ExternalLink size={14} />
164|                    </a>
165|                  </div>
166|                </div>
167|              </div>
168|            ))}
169|          </div>
170|        </div>
171|      </section>
172|
173|      {/* Sound Design Showcase */}
174|      <section className="py-16">
175|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
176|          <div className="text-center mb-12">
177|            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
178|              Sound Design <span className="text-pink-500">Portfolio</span>
179|            </h2>
180|            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
181|              Professional sound design work for films, commercials, and interactive media, 
182|              showcasing expertise in creating atmospheric and emotional soundscapes.
183|            </p>
184|          </div>
185|
186|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
187|            {[
188|              {
189|                title: 'Atmospheric Soundscapes',
190|                description: 'Creating immersive environments through layered audio design',
191|                tools: ['Pro Tools', 'Ableton Live', 'Logic Pro'],
192|                color: 'from-purple-500 to-indigo-500'
193|              },
194|              {
195|                title: 'Interactive Audio',
196|                description: 'Dynamic soundscapes for games and interactive experiences',
197|                tools: ['Wwise', 'FMOD', 'Unity Audio'],
198|                color: 'from-cyan-500 to-blue-500'
199|              },
200|              {
201|                title: 'Film & Commercial',
202|                description: 'Professional audio post-production and sound effects',
203|                tools: ['Pro Tools', 'Reaper', 'Adobe Audition'],
204|                color: 'from-green-500 to-emerald-500'
205|              }
206|            ].map((service, index) => (
207|              <div 
208|                key={index}
209|                className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
210|              >
211|                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
212|                  <Mic className="text-white" size={24} />
213|                </div>
214|                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
215|                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
216|                <div className="flex flex-wrap gap-2">
217|                  {service.tools.map((tool, toolIndex) => (
218|                    <span 
219|                      key={toolIndex}
220|                      className="text-xs bg-pink-500/10 text-pink-400 px-2 py-1 rounded-full"
221|                    >
222|                      {tool}
223|                    </span>
224|                  ))}
225|                </div>
226|              </div>
227|            ))}
228|          </div>
229|        </div>
230|      </section>
231|    </div>
232|  );
233|};
234|
235|export default Videos;

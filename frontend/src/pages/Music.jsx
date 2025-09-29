1|import React, { useState, useEffect } from 'react';
2|import { Play, ExternalLink, Music2, Clock, Calendar } from 'lucide-react';
3|import apiService from '../utils/api';
4|
5|const Music = () => {
6|  const [selectedTrack, setSelectedTrack] = useState(null);
7|  const [musicTracks, setMusicTracks] = useState([]);
8|  const [loading, setLoading] = useState(true);
9|
10|  const platforms = ['All', 'SoundCloud', 'YouTube', 'Spotify'];
11|  const [selectedPlatform, setSelectedPlatform] = useState('All');
12|
13|  useEffect(() => {
14|    const fetchMusic = async () => {
15|      try {
16|        const response = await apiService.getMusic(selectedPlatform);
17|        setMusicTracks(response.data);
18|      } catch (error) {
19|        console.error('Error fetching music:', error);
20|      } finally {
21|        setLoading(false);
22|      }
23|    };
24|
25|    fetchMusic();
26|  }, [selectedPlatform]);
27|
28|  if (loading) {
29|    return (
30|      <div className="pt-16 min-h-screen flex items-center justify-center">
31|        <div className="text-center">
32|          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
33|          <p className="text-gray-300">Loading music...</p>
34|        </div>
35|      </div>
36|    );
37|  }
38|
39|  const filteredTracks = musicTracks;
40|
41|  return (
42|    <div className="pt-16 min-h-screen">
43|      {/* Hero Section */}
44|      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
45|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
46|          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
47|            <Music2 className="inline-block mr-4 text-pink-500" size={48} />
48|            Music
49|          </h1>
50|          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
51|            Explore Hāịlō's discography of emotionally charged tracks that blend dark atmospheres 
52|            with messages of hope, advocacy, and social change.
53|          </p>
54|        </div>
55|      </section>
56|
57|      {/* Platform Filter */}
58|      <section className="py-8 bg-gray-950/50">
59|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
60|          <div className="flex flex-wrap justify-center gap-3 mb-8">
61|            {platforms.map((platform) => (
62|              <button
63|                key={platform}
64|                onClick={() => setSelectedPlatform(platform)}
65|                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
66|                  selectedPlatform === platform
67|                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
68|                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
69|                }`}
70|              >
71|                {platform}
72|              </button>
73|            ))}
74|          </div>
75|        </div>
76|      </section>
77|
78|      {/* Featured Track */}
79|      {filteredTracks.length > 0 && (
80|        <section className="py-16">
81|          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
82|            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-pink-500/20">
83|              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
84|                <div>
85|                  <div className="mb-4">
86|                    <span className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium bg-pink-500/10 px-3 py-1 rounded-full">
87|                      <Play size={14} />
88|                      Featured Track
89|                    </span>
90|                  </div>
91|                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
92|                    {filteredTracks[0].title}
93|                  </h2>
94|                  <p className="text-gray-300 text-lg mb-6">
95|                    {filteredTracks[0].description}
96|                  </p>
97|                  <div className="flex items-center gap-6 mb-6">
98|                    <div className="flex items-center gap-2 text-gray-400">
99|                      <Clock size={16} />
100|                      <span>{filteredTracks[0].duration}</span>
101|                    </div>
102|                    <div className="flex items-center gap-2 text-gray-400">
103|                      <Music2 size={16} />
104|                      <span>{filteredTracks[0].platform}</span>
105|                    </div>
106|                  </div>
107|                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
108|                    <Play size={20} />
109|                    Play Now
110|                  </button>
111|                </div>
112|                <div className="relative">
113|                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-2">
114|                    <img 
115|                      src={filteredTracks[0].coverArt} 
116|                      alt={filteredTracks[0].title}
117|                      className="w-full h-full object-cover rounded-lg"
118|                    />
119|                  </div>
120|                </div>
121|              </div>
122|            </div>
123|          </div>
124|        </section>
125|      )}
126|
127|      {/* Music Grid */}
128|      <section className="py-16 bg-gray-950/50">
129|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
130|          <div className="text-center mb-12">
131|            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
132|              All Tracks
133|            </h2>
134|            <p className="text-gray-400 text-lg">
135|              {filteredTracks.length} track{filteredTracks.length !== 1 ? 's' : ''} available
136|            </p>
137|          </div>
138|
139|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
140|            {filteredTracks.map((track) => (
141|              <div 
142|                key={track.id}
143|                className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
144|              >
145|                <div className="relative aspect-square overflow-hidden">
146|                  <img 
147|                    src={track.coverArt} 
148|                    alt={track.title}
149|                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
150|                  />
151|                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
152|                    <button 
153|                      onClick={() => setSelectedTrack(track)}
154|                      className="bg-pink-600 hover:bg-pink-500 text-white p-4 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"
155|                    >
156|                      <Play size={24} />
157|                    </button>
158|                  </div>
159|                  {/* Platform badge */}
160|                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
161|                    {track.platform}
162|                  </div>
163|                </div>
164|                
165|                <div className="p-6">
166|                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
167|                    {track.title}
168|                  </h3>
169|                  <p className="text-gray-400 text-sm mb-4">{track.description}</p>
170|                  <div className="flex items-center justify-between">
171|                    <span className="text-pink-400 text-sm font-medium">{track.duration}</span>
172|                    <a 
173|                      href={track.url} 
174|                      className="inline-flex items-center gap-1 text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300"
175|                    >
176|                      Listen
177|                      <ExternalLink size={14} />
178|                    </a>
179|                  </div>
180|                </div>
181|              </div>
182|            ))}
183|          </div>
184|        </div>
185|      </section>
186|
187|      {/* Streaming Platforms */}
188|      <section className="py-16">
189|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
190|          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
191|            Available on All <span className="text-pink-500">Platforms</span>
192|          </h2>
193|          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
194|            Stream Hāịlō's music wherever you listen. Find all tracks on your favorite platforms.
195|          </p>
196|          
197|          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
198|            {[
199|              { name: 'Spotify', url: '#', color: 'bg-green-600' },
200|              { name: 'YouTube', url: '#', color: 'bg-red-600' },
201|              { name: 'SoundCloud', url: '#', color: 'bg-orange-600' },
202|              { name: 'Apple Music', url: '#', color: 'bg-gray-800' }
203|            ].map((platform) => (
204|              <a
205|                key={platform.name}
206|                href={platform.url}
207|                className={`${platform.color} text-white p-6 rounded-xl font-medium hover:opacity-90 transition-opacity duration-300 transform hover:scale-105`}
208|              >
209|                {platform.name}
210|              </a>
211|            ))}
212|          </div>
213|        </div>
214|      </section>
215|    </div>
216|  );
217|};
218|
219|export default Music;

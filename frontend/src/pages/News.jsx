1|import React, { useState } from 'react';
2|import { Calendar, Clock, ArrowRight, Music, Heart, Mic } from 'lucide-react';
3|import { newsArticles } from '../mockData';
4|
5|const News = () => {
6|  const [selectedArticle, setSelectedArticle] = useState(null);
7|
8|  const categories = [
9|    { id: 'all', name: 'All News', icon: Calendar },
10|    { id: 'music', name: 'Music Releases', icon: Music },
11|    { id: 'advocacy', name: 'Advocacy Work', icon: Heart },
12|    { id: 'behind-scenes', name: 'Behind the Scenes', icon: Mic }
13|  ];
14|
15|  const getCategoryFromTitle = (title) => {
16|    if (title.toLowerCase().includes('single') || title.toLowerCase().includes('music')) return 'music';
17|    if (title.toLowerCase().includes('partner') || title.toLowerCase().includes('organization')) return 'advocacy';
18|    if (title.toLowerCase().includes('behind') || title.toLowerCase().includes('process')) return 'behind-scenes';
19|    return 'music';
20|  };
21|
22|  const formatDate = (dateString) => {
23|    const date = new Date(dateString);
24|    return date.toLocaleDateString('en-US', { 
25|      year: 'numeric', 
26|      month: 'long', 
27|      day: 'numeric' 
28|    });
29|  };
30|
31|  const timeAgo = (dateString) => {
32|    const date = new Date(dateString);
33|    const now = new Date();
34|    const diffTime = Math.abs(now - date);
35|    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
36|    
37|    if (diffDays === 1) return '1 day ago';
38|    if (diffDays < 7) return `${diffDays} days ago`;
39|    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
40|    return `${Math.ceil(diffDays / 30)} months ago`;
41|  };
42|
43|  return (
44|    <div className="pt-16 min-h-screen">
45|      {/* Hero Section */}
46|      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
47|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
48|          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
49|            <Calendar className="inline-block mr-4 text-pink-500" size={48} />
50|            News & Updates
51|          </h1>
52|          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
53|            Stay connected with Hāịlō's musical journey, advocacy work, and behind-the-scenes insights 
54|            into the creative process and social impact initiatives.
55|          </p>
56|        </div>
57|      </section>
58|
59|      {/* Latest Article Featured */}
60|      {newsArticles.length > 0 && (
61|        <section className="py-16">
62|          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
63|            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-pink-500/20">
64|              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
65|                <div className="relative aspect-video lg:aspect-square overflow-hidden">
66|                  <img 
67|                    src={newsArticles[0].image} 
68|                    alt={newsArticles[0].title}
69|                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
70|                  />
71|                  <div className="absolute top-4 left-4 bg-pink-600 text-white text-sm px-3 py-1 rounded-full font-medium">
72|                    Latest News
73|                  </div>
74|                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
75|                    {timeAgo(newsArticles[0].date)}
76|                  </div>
77|                </div>
78|                
79|                <div className="p-8 flex flex-col justify-center">
80|                  <div className="mb-4">
81|                    <div className="flex items-center gap-4 mb-4">
82|                      <span className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium bg-pink-500/10 px-3 py-1 rounded-full">
83|                        <Music size={14} />
84|                        Music Release
85|                      </span>
86|                      <div className="flex items-center gap-2 text-gray-400 text-sm">
87|                        <Calendar size={14} />
88|                        {formatDate(newsArticles[0].date)}
89|                      </div>
90|                    </div>
91|                  </div>
92|                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
93|                    {newsArticles[0].title}
94|                  </h2>
95|                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
96|                    {newsArticles[0].excerpt}
97|                  </p>
98|                  <button 
99|                    onClick={() => setSelectedArticle(newsArticles[0])}
100|                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 self-start"
101|                  >
102|                    Read Full Article
103|                    <ArrowRight size={16} />
104|                  </button>
105|                </div>
106|              </div>
107|            </div>
108|          </div>
109|        </section>
110|      )}
111|
112|      {/* All Articles Grid */}
113|      <section className="py-16 bg-gray-950/50">
114|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
115|          <div className="text-center mb-12">
116|            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
117|              Recent <span className="text-pink-500">Articles</span>
118|            </h2>
119|            <p className="text-gray-400 text-lg">
120|              Keep up with the latest updates from Hāịlō's musical and advocacy journey
121|            </p>
122|          </div>
123|
124|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
125|            {newsArticles.map((article) => {
126|              const category = getCategoryFromTitle(article.title);
127|              const categoryInfo = categories.find(cat => cat.id === category) || categories[0];
128|              const IconComponent = categoryInfo.icon;
129|              
130|              return (
131|                <article 
132|                  key={article.id}
133|                  className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
134|                  onClick={() => setSelectedArticle(article)}
135|                >
136|                  <div className="relative aspect-video overflow-hidden">
137|                    <img 
138|                      src={article.image} 
139|                      alt={article.title}
140|                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
141|                    />
142|                    <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
143|                      <IconComponent size={12} />
144|                      {categoryInfo.name}
145|                    </div>
146|                    <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
147|                      {timeAgo(article.date)}
148|                    </div>
149|                  </div>
150|                  
151|                  <div className="p-6">
152|                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
153|                      <Calendar size={14} />
154|                      {formatDate(article.date)}
155|                    </div>
156|                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300 line-clamp-2">
157|                      {article.title}
158|                    </h3>
159|                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
160|                    <div className="flex items-center justify-between">
161|                      <span className="text-pink-400 text-sm font-medium">
162|                        {categoryInfo.name}
163|                      </span>
164|                      <div className="flex items-center gap-1 text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">
165|                        <Clock size={12} />
166|                        <span>3 min read</span>
167|                      </div>
168|                    </div>
169|                  </div>
170|                </article>
171|              );
172|            })}
173|          </div>
174|        </div>
175|      </section>
176|
177|      {/* Newsletter Signup */}
178|      <section className="py-16">
179|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
180|          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-pink-500/20">
181|            <Calendar className="mx-auto text-pink-500 mb-4" size={48} />
182|            <h2 className="text-3xl font-bold text-white mb-4">
183|              Stay <span className="text-pink-500">Updated</span>
184|            </h2>
185|            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
186|              Get the latest news about music releases, advocacy initiatives, and exclusive behind-the-scenes content 
187|              delivered straight to your inbox.
188|            </p>
189|            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
190|              <input
191|                type="email"
192|                placeholder="Enter your email"
193|                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
194|              />
195|              <button
196|                type="submit"
197|                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
198|              >
199|                Subscribe
200|              </button>
201|            </form>
202|            <p className="text-gray-500 text-xs mt-4">
203|              No spam, unsubscribe at any time. Privacy policy respected.
204|            </p>
205|          </div>
206|        </div>
207|      </section>
208|
209|      {/* Article Modal */}
210|      {selectedArticle && (
211|        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedArticle(null)}>
212|          <div className="relative max-w-4xl w-full bg-gray-900 rounded-xl border border-gray-800 my-8" onClick={(e) => e.stopPropagation()}>
213|            <button 
214|              onClick={() => setSelectedArticle(null)}
215|              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-black/50 p-2 rounded-full transition-colors duration-300"
216|            >
217|              ✕
218|            </button>
219|            
220|            <div className="aspect-video overflow-hidden rounded-t-xl">
221|              <img 
222|                src={selectedArticle.image} 
223|                alt={selectedArticle.title}
224|                className="w-full h-full object-cover"
225|              />
226|            </div>
227|            
228|            <div className="p-8">
229|              <div className="flex items-center gap-4 mb-4">
230|                <span className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium bg-pink-500/10 px-3 py-1 rounded-full">
231|                  <Music size={14} />
232|                  Music Release
233|                </span>
234|                <div className="flex items-center gap-2 text-gray-400 text-sm">
235|                  <Calendar size={14} />
236|                  {formatDate(selectedArticle.date)}
237|                </div>
238|              </div>
239|              
240|              <h2 className="text-3xl font-bold text-white mb-6">{selectedArticle.title}</h2>
241|              <div className="prose prose-invert prose-pink max-w-none">
242|                <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedArticle.excerpt}</p>
243|                <div className="text-gray-300 leading-relaxed space-y-4">
244|                  <p>
245|                    This latest release from Hāịlō represents a significant evolution in their artistic journey, 
246|                    blending the signature dark atmospheric sound with more vibrant electronic elements that 
247|                    reflect their advocacy for social change and personal empowerment.
248|                  </p>
249|                  <p>
250|                    The track explores themes of digital connection in an increasingly isolated world, 
251|                    questioning how technology both unites and divides us. Through haunting vocals and 
252|                    pulsing synths, the song creates a sonic landscape that mirrors the neon-lit dreams 
253|                    of a generation caught between virtual and physical reality.
254|                  </p>
255|                  <p>
256|                    Recording took place over several months, with Hāịlō collaborating with producers 
257|                    who share their commitment to both musical excellence and social consciousness. 
258|                    The result is a track that doesn't just entertain, but challenges listeners to 
259|                    examine their own relationship with technology and human connection.
260|                  </p>
261|                  <p>
262|                    This release coincides with Hāịlō's expanded advocacy work, with proceeds from 
263|                    streaming and downloads supporting organizations focused on digital literacy 
264|                    and mental health support for young people navigating online spaces.
265|                  </p>
266|                </div>
267|              </div>
268|              
269|              <div className="mt-8 pt-6 border-t border-gray-800">
270|                <div className="flex items-center justify-between">
271|                  <div className="text-gray-400 text-sm">
272|                    Share this article to support advocacy work
273|                  </div>
274|                  <button 
275|                    onClick={() => setSelectedArticle(null)}
276|                    className="text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300"
277|                  >
278|                    Close Article
279|                  </button>
280|                </div>
281|              </div>
282|            </div>
283|          </div>
284|        </div>
285|      )}
286|    </div>
287|  );
288|};
289|
290|export default News;

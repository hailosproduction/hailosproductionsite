1|import React, { useState } from 'react';
2|import { ShoppingBag, Star, ShoppingCart, Filter } from 'lucide-react';
3|import { merchandise } from '../mockData';
4|
5|const Merchandise = () => {
6|  const [selectedCategory, setSelectedCategory] = useState('all');
7|  const [cart, setCart] = useState([]);
8|
9|  const categories = [
10|    { id: 'all', name: 'All Items' },
11|    { id: 'clothing', name: 'Clothing' },
12|    { id: 'jewelry', name: 'Jewelry' },
13|    { id: 'digital', name: 'Digital Downloads' }
14|  ];
15|
16|  const filteredMerch = selectedCategory === 'all' 
17|    ? merchandise 
18|    : merchandise.filter(item => item.type === selectedCategory);
19|
20|  const addToCart = (item) => {
21|    setCart(prev => [...prev, item]);
22|    // Show success feedback (could add toast notification here)
23|    console.log(`Added ${item.name} to cart`);
24|  };
25|
26|  return (
27|    <div className="pt-16 min-h-screen">
28|      {/* Hero Section */}
29|      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
30|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
31|          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
32|            <ShoppingBag className="inline-block mr-4 text-pink-500" size={48} />
33|            Merchandise
34|          </h1>
35|          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
36|            Support Hāịlō's music and advocacy through exclusive merchandise. From handcrafted jewelry 
37|            to digital downloads, every purchase helps fund meaningful causes and artistic expression.
38|          </p>
39|        </div>
40|      </section>
41|
42|      {/* Category Filter & Cart */}
43|      <section className="py-8 bg-gray-950/50 sticky top-16 z-40">
44|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
45|          <div className="flex flex-wrap justify-between items-center gap-4">
46|            <div className="flex flex-wrap gap-3">
47|              <div className="flex items-center gap-2 text-gray-400">
48|                <Filter size={16} />
49|                <span className="text-sm">Filter:</span>
50|              </div>
51|              {categories.map((category) => (
52|                <button
53|                  key={category.id}
54|                  onClick={() => setSelectedCategory(category.id)}
55|                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
56|                    selectedCategory === category.id
57|                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
58|                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
59|                  }`}
60|                >
61|                  {category.name}
62|                </button>
63|              ))}
64|            </div>
65|            
66|            {/* Cart indicator */}
67|            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
68|              <ShoppingCart size={16} className="text-pink-400" />
69|              <span className="text-white text-sm">{cart.length} items</span>
70|            </div>
71|          </div>
72|        </div>
73|      </section>
74|
75|      {/* Featured Product */}
76|      {filteredMerch.length > 0 && (
77|        <section className="py-16">
78|          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
79|            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-pink-500/20">
80|              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
81|                <div className="relative aspect-square overflow-hidden">
82|                  <img 
83|                    src={filteredMerch[0].image} 
84|                    alt={filteredMerch[0].name}
85|                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
86|                  />
87|                  <div className="absolute top-4 left-4 bg-pink-600 text-white text-sm px-3 py-1 rounded-full font-medium">
88|                    Featured
89|                  </div>
90|                  <div className="absolute top-4 right-4 bg-black/70 text-white text-lg font-bold px-3 py-1 rounded-full">
91|                    ${filteredMerch[0].price}
92|                  </div>
93|                </div>
94|                
95|                <div className="p-8 flex flex-col justify-center">
96|                  <div className="mb-4">
97|                    <span className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium bg-pink-500/10 px-3 py-1 rounded-full mb-4">
98|                      <Star size={14} />
99|                      {categories.find(cat => cat.id === filteredMerch[0].type)?.name}
100|                    </span>
101|                  </div>
102|                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
103|                    {filteredMerch[0].name}
104|                  </h2>
105|                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
106|                    {filteredMerch[0].description}
107|                  </p>
108|                  
109|                  {/* Product details */}
110|                  <div className="mb-6 space-y-2">
111|                    {filteredMerch[0].sizes && (
112|                      <div className="flex items-center gap-2">
113|                        <span className="text-gray-400 text-sm">Sizes:</span>
114|                        <div className="flex gap-2">
115|                          {filteredMerch[0].sizes.map(size => (
116|                            <span key={size} className="text-xs bg-gray-700 text-white px-2 py-1 rounded">
117|                              {size}
118|                            </span>
119|                          ))}
120|                        </div>
121|                      </div>
122|                    )}
123|                    {filteredMerch[0].materials && (
124|                      <div className="flex items-center gap-2">
125|                        <span className="text-gray-400 text-sm">Materials:</span>
126|                        <span className="text-white text-sm">{filteredMerch[0].materials.join(', ')}</span>
127|                      </div>
128|                    )}
129|                    {filteredMerch[0].formats && (
130|                      <div className="flex items-center gap-2">
131|                        <span className="text-gray-400 text-sm">Formats:</span>
132|                        <span className="text-white text-sm">{filteredMerch[0].formats.join(', ')}</span>
133|                      </div>
134|                    )}
135|                  </div>
136|
137|                  <div className="flex gap-4">
138|                    <button 
139|                      onClick={() => addToCart(filteredMerch[0])}
140|                      className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
141|                    >
142|                      Add to Cart - ${filteredMerch[0].price}
143|                    </button>
144|                  </div>
145|                </div>
146|              </div>
147|            </div>
148|          </div>
149|        </section>
150|      )}
151|
152|      {/* Products Grid */}
153|      <section className="py-16 bg-gray-950/50">
154|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
155|          <div className="text-center mb-12">
156|            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
157|              All Products
158|            </h2>
159|            <p className="text-gray-400 text-lg">
160|              {filteredMerch.length} item{filteredMerch.length !== 1 ? 's' : ''} available
161|            </p>
162|          </div>
163|
164|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
165|            {filteredMerch.map((item) => (
166|              <div 
167|                key={item.id}
168|                className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
169|              >
170|                <div className="relative aspect-square overflow-hidden">
171|                  <img 
172|                    src={item.image} 
173|                    alt={item.name}
174|                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
175|                  />
176|                  <div className="absolute top-3 right-3 bg-pink-600 text-white text-sm font-bold px-2 py-1 rounded-full">
177|                    ${item.price}
178|                  </div>
179|                  {/* Type badge */}
180|                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
181|                    {categories.find(cat => cat.id === item.type)?.name}
182|                  </div>
183|                </div>
184|                
185|                <div className="p-6">
186|                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
187|                    {item.name}
188|                  </h3>
189|                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
190|                  
191|                  {/* Product-specific details */}
192|                  {item.sizes && (
193|                    <div className="mb-3">
194|                      <div className="flex flex-wrap gap-1">
195|                        {item.sizes.slice(0, 3).map(size => (
196|                          <span key={size} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
197|                            {size}
198|                          </span>
199|                        ))}
200|                        {item.sizes.length > 3 && (
201|                          <span className="text-xs text-gray-500">+{item.sizes.length - 3} more</span>
202|                        )}
203|                      </div>
204|                    </div>
205|                  )}
206|                  
207|                  {item.materials && (
208|                    <div className="mb-3">
209|                      <p className="text-xs text-gray-400">{item.materials.join(', ')}</p>
210|                    </div>
211|                  )}
212|
213|                  <div className="flex items-center justify-between">
214|                    <span className="text-pink-400 text-lg font-bold">${item.price}</span>
215|                    <button 
216|                      onClick={() => addToCart(item)}
217|                      className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
218|                    >
219|                      Add to Cart
220|                    </button>
221|                  </div>
222|                </div>
223|              </div>
224|            ))}
225|          </div>
226|        </div>
227|      </section>
228|
229|      {/* Impact Statement */}
230|      <section className="py-16">
231|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
232|          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
233|            Shop with <span className="text-pink-500">Purpose</span>
234|          </h2>
235|          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20 p-8">
236|            <p className="text-gray-300 text-lg leading-relaxed mb-6">
237|              Every purchase from Hāịlō's merchandise collection directly supports advocacy work for 
238|              autism awareness, LGBTQIA+ rights, environmental protection, and mental health initiatives. 
239|              When you buy from us, you're not just getting quality products—you're joining a movement for positive change.
240|            </p>
241|            
242|            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
243|              <div className="text-center">
244|                <div className="text-2xl mb-2">🧠</div>
245|                <h3 className="text-white font-medium mb-1">Autism Support</h3>
246|                <p className="text-gray-400 text-sm">Funding awareness programs</p>
247|              </div>
248|              <div className="text-center">
249|                <div className="text-2xl mb-2">🏳️‍🌈</div>
250|                <h3 className="text-white font-medium mb-1">LGBTQIA+ Rights</h3>
251|                <p className="text-gray-400 text-sm">Supporting equality initiatives</p>
252|              </div>
253|              <div className="text-center">
254|                <div className="text-2xl mb-2">🌱</div>
255|                <h3 className="text-white font-medium mb-1">Environmental Action</h3>
256|                <p className="text-gray-400 text-sm">Protecting our planet</p>
257|              </div>
258|            </div>
259|          </div>
260|        </div>
261|      </section>
262|    </div>
263|  );
264|};
265|
266|export default Merchandise;

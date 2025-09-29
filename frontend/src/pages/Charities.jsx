1|import React from 'react';
2|import { Heart, ExternalLink, Users, Globe, Brain, Rainbow } from 'lucide-react';
3|import { charities } from '../mockData';
4|
5|const Charities = () => {
6|  const causeIcons = {
7|    'Autism Support': Brain,
8|    'LGBTQIA+ Rights': Rainbow,
9|    'Environmental': Globe,
10|    'Mental Health': Heart
11|  };
12|
13|  return (
14|    <div className="pt-16 min-h-screen">
15|      {/* Hero Section */}
16|      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
17|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
18|          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
19|            <Heart className="inline-block mr-4 text-pink-500" size={48} />
20|            Supporting Important Causes
21|          </h1>
22|          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
23|            Music has the power to create change. Through partnerships and advocacy, 
24|            Hāịlō works to amplify the voices of organizations making a real difference 
25|            in autism awareness, LGBTQIA+ rights, environmental protection, and mental health support.
26|          </p>
27|        </div>
28|      </section>
29|
30|      {/* Mission Statement */}
31|      <section className="py-16">
32|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
33|          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20 p-8 text-center">
34|            <Users className="mx-auto text-pink-500 mb-4" size={48} />
35|            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
36|              Art as <span className="text-pink-500">Activism</span>
37|            </h2>
38|            <p className="text-gray-300 text-lg leading-relaxed">
39|              Every song, every performance, every piece of merchandise sold contributes to a larger mission: 
40|              creating a more inclusive, sustainable, and compassionate world. These organizations represent 
41|              the causes closest to Hāịlō's heart and artistic vision.
42|            </p>
43|          </div>
44|        </div>
45|      </section>
46|
47|      {/* Supported Organizations */}
48|      <section className="py-16 bg-gray-950/50">
49|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
50|          <div className="text-center mb-12">
51|            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
52|              Supported <span className="text-pink-500">Organizations</span>
53|            </h2>
54|            <p className="text-gray-400 text-lg">
55|              Learn about the incredible work these organizations are doing to make the world better
56|            </p>
57|          </div>
58|
59|          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
60|            {charities.map((charity) => {
61|              const IconComponent = causeIcons[charity.cause] || Heart;
62|              return (
63|                <div 
64|                  key={charity.id}
65|                  className="group bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 overflow-hidden"
66|                >
67|                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
68|                    {/* Logo/Image */}
69|                    <div className="relative aspect-square sm:aspect-auto overflow-hidden">
70|                      <img 
71|                        src={charity.logo} 
72|                        alt={`${charity.name} logo`}
73|                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
74|                      />
75|                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
76|                    </div>
77|                    
78|                    {/* Content */}
79|                    <div className="sm:col-span-2 p-6 flex flex-col justify-center">
80|                      <div className="flex items-center gap-3 mb-3">
81|                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
82|                          <IconComponent className="text-white" size={20} />
83|                        </div>
84|                        <div>
85|                          <h3 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
86|                            {charity.name}
87|                          </h3>
88|                          <span className="text-pink-400 text-sm font-medium">{charity.cause}</span>
89|                        </div>
90|                      </div>
91|                      
92|                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
93|                        {charity.description}
94|                      </p>
95|                      
96|                      <a 
97|                        href={charity.website}
98|                        target="_blank"
99|                        rel="noopener noreferrer"
100|                        className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300 text-sm"
101|                      >
102|                        Learn More & Support
103|                        <ExternalLink size={14} />
104|                      </a>
105|                    </div>
106|                  </div>
107|                </div>
108|              );
109|            })}
110|          </div>
111|        </div>
112|      </section>
113|
114|      {/* How to Help */}
115|      <section className="py-16">
116|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
117|          <div className="text-center mb-12">
118|            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
119|              How You Can <span className="text-pink-500">Help</span>
120|            </h2>
121|            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
122|              There are many ways to support these important causes and join the movement for positive change
123|            </p>
124|          </div>
125|
126|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
127|            {[
128|              {
129|                icon: '🎵',
130|                title: 'Share the Music',
131|                description: 'Spread awareness by sharing Hāịlō\'s music and message with your networks',
132|                color: 'from-pink-500 to-rose-500'
133|              },
134|              {
135|                icon: '🛍️',
136|                title: 'Buy Merchandise',
137|                description: 'Purchase from the merch store - profits directly support these organizations',
138|                color: 'from-purple-500 to-indigo-500'
139|              },
140|              {
141|                icon: '🤝',
142|                title: 'Volunteer',
143|                description: 'Get directly involved by volunteering with these amazing organizations',
144|                color: 'from-cyan-500 to-blue-500'
145|              },
146|              {
147|                icon: '💛',
148|                title: 'Donate Directly',
149|                description: 'Visit their websites to make direct donations and learn about their needs',
150|                color: 'from-green-500 to-emerald-500'
151|              }
152|            ].map((action, index) => (
153|              <div 
154|                key={index}
155|                className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
156|              >
157|                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center text-2xl`}>
158|                  {action.icon}
159|                </div>
160|                <h3 className="text-xl font-semibold text-white mb-3">{action.title}</h3>
161|                <p className="text-gray-400 text-sm">{action.description}</p>
162|              </div>
163|            ))}
164|          </div>
165|        </div>
166|      </section>
167|
168|      {/* Impact Stories */}
169|      <section className="py-16 bg-gray-950/50">
170|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
171|          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
172|            Making a <span className="text-pink-500">Difference</span>
173|          </h2>
174|          
175|          <div className="space-y-8">
176|            {[
177|              {
178|                quote: "Through music and advocacy, we've helped raise awareness for autism acceptance and supported families in finding resources and community.",
179|                cause: "Autism Advocacy",
180|                impact: "Connected 200+ families with support services"
181|              },
182|              {
183|                quote: "Our LGBTQIA+ advocacy work has created safe spaces at music venues and festivals, ensuring everyone can enjoy live music without fear.",
184|                cause: "LGBTQIA+ Rights",
185|                impact: "5 venues now certified as safe spaces"
186|              },
187|              {
188|                quote: "Environmental consciousness in touring and merchandise has reduced our carbon footprint while raising awareness among fans.",
189|                cause: "Environmental Protection",
190|                impact: "30% reduction in tour emissions"
191|              }
192|            ].map((story, index) => (
193|              <div 
194|                key={index}
195|                className="bg-gray-900/30 rounded-xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
196|              >
197|                <blockquote className="text-gray-300 text-lg italic mb-4 leading-relaxed">
198|                  "{story.quote}"
199|                </blockquote>
200|                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
201|                  <cite className="text-pink-400 font-medium">{story.cause}</cite>
202|                  <span className="text-green-400 text-sm font-medium bg-green-500/10 px-3 py-1 rounded-full">
203|                    {story.impact}
204|                  </span>
205|                </div>
206|              </div>
207|            ))}
208|          </div>
209|        </div>
210|      </section>
211|
212|      {/* Call to Action */}
213|      <section className="py-16">
214|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
215|          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-pink-500/20">
216|            <Heart className="mx-auto text-pink-500 mb-4" size={48} />
217|            <h2 className="text-3xl font-bold text-white mb-4">
218|              Join the <span className="text-pink-500">Movement</span>
219|            </h2>
220|            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
221|              Together, we can create a world that celebrates diversity, protects our environment, 
222|              and supports those who need it most. Every action, no matter how small, creates ripples of change.
223|            </p>
224|            <div className="flex flex-col sm:flex-row gap-4 justify-center">
225|              <a
226|                href="/contact"
227|                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
228|              >
229|                Get Involved
230|                <Heart size={16} />
231|              </a>
232|              <a
233|                href="/merchandise"
234|                className="inline-flex items-center gap-2 border border-pink-500/50 text-pink-300 px-8 py-3 rounded-full font-medium hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300"
235|              >
236|                Shop for a Cause
237|                <ExternalLink size={16} />
238|              </a>
239|            </div>
240|          </div>
241|        </div>
242|      </section>
243|    </div>
244|  );
245|};
246|
247|export default Charities;

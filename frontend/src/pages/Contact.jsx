1|import React, { useState } from 'react';
2|import { Mail, Send, User, MessageSquare, Briefcase, Heart, MapPin, Phone, Instagram, Twitter, Youtube, Music } from 'lucide-react';
3|
4|const Contact = () => {
5|  const [formData, setFormData] = useState({
6|    name: '',
7|    email: '',
8|    subject: '',
9|    message: '',
10|    type: 'fan-message'
11|  });
12|  const [isSubmitted, setIsSubmitted] = useState(false);
13|
14|  const messageTypes = [
15|    { value: 'fan-message', label: 'Fan Message', icon: Heart },
16|    { value: 'collaboration', label: 'Collaboration Request', icon: Briefcase },
17|    { value: 'booking', label: 'Booking Inquiry', icon: Music },
18|    { value: 'general', label: 'General Inquiry', icon: MessageSquare }
19|  ];
20|
21|  const handleChange = (e) => {
22|    setFormData({
23|      ...formData,
24|      [e.target.name]: e.target.value
25|    });
26|  };
27|
28|  const handleSubmit = async (e) => {
29|    e.preventDefault();
30|    
31|    try {
32|      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
33|      const response = await fetch(`${BACKEND_URL}/api/contact`, {
34|        method: 'POST',
35|        headers: {
36|          'Content-Type': 'application/json',
37|        },
38|        body: JSON.stringify(formData)
39|      });
40|      
41|      if (response.ok) {
42|        console.log('Form submitted successfully:', formData);
43|        setIsSubmitted(true);
44|        
45|        // Reset form after 3 seconds
46|        setTimeout(() => {
47|          setIsSubmitted(false);
48|          setFormData({
49|            name: '',
50|            email: '',
51|            subject: '',
52|            message: '',
53|            type: 'fan-message'
54|          });
55|        }, 3000);
56|      } else {
57|        console.error('Form submission failed');
58|        alert('There was an error submitting your message. Please try again.');
59|      }
60|    } catch (error) {
61|      console.error('Error submitting form:', error);
62|      alert('There was an error submitting your message. Please try again.');
63|    }
64|  };
65|
66|  return (
67|    <div className="pt-16 min-h-screen">
68|      {/* Hero Section */}
69|      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
70|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
71|          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
72|            <Mail className="inline-block mr-4 text-pink-500" size={48} />
73|            Get In Touch
74|          </h1>
75|          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
76|            Connect with Hāịlō for collaborations, fan messages, booking inquiries, 
77|            or to discuss advocacy opportunities. Every message is read and appreciated.
78|          </p>
79|        </div>
80|      </section>
81|
82|      {/* Contact Form & Info */}
83|      <section className="py-16">
84|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
85|          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
86|            {/* Contact Form */}
87|            <div className="lg:col-span-2">
88|              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
89|                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
90|                
91|                {isSubmitted ? (
92|                  <div className="text-center py-12">
93|                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
94|                      <Send className="text-white" size={24} />
95|                    </div>
96|                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
97|                    <p className="text-gray-400">
98|                      Thank you for reaching out. Hāịlō will get back to you soon.
99|                    </p>
100|                  </div>
101|                ) : (
102|                  <form onSubmit={handleSubmit} className="space-y-6">
103|                    {/* Message Type */}
104|                    <div>
105|                      <label className="block text-white font-medium mb-3">Message Type</label>
106|                      <div className="grid grid-cols-2 gap-3">
107|                        {messageTypes.map((type) => {
108|                          const IconComponent = type.icon;
109|                          return (
110|                            <label 
111|                              key={type.value}
112|                              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
113|                                formData.type === type.value
114|                                  ? 'border-pink-500 bg-pink-500/10'
115|                                  : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
116|                              }`}
117|                            >
118|                              <input
119|                                type="radio"
120|                                name="type"
121|                                value={type.value}
122|                                checked={formData.type === type.value}
123|                                onChange={handleChange}
124|                                className="sr-only"
125|                              />
126|                              <IconComponent 
127|                                className={`${formData.type === type.value ? 'text-pink-400' : 'text-gray-400'}`} 
128|                                size={20} 
129|                              />
130|                              <span className={`text-sm font-medium ${formData.type === type.value ? 'text-white' : 'text-gray-300'}`}>
131|                                {type.label}
132|                              </span>
133|                            </label>
134|                          );
135|                        })}
136|                      </div>
137|                    </div>
138|
139|                    {/* Name and Email */}
140|                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
141|                      <div>
142|                        <label className="block text-white font-medium mb-2">Name</label>
143|                        <div className="relative">
144|                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
145|                          <input
146|                            type="text"
147|                            name="name"
148|                            value={formData.name}
149|                            onChange={handleChange}
150|                            required
151|                            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
152|                            placeholder="Your name"
153|                          />
154|                        </div>
155|                      </div>
156|                      <div>
157|                        <label className="block text-white font-medium mb-2">Email</label>
158|                        <div className="relative">
159|                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
160|                          <input
161|                            type="email"
162|                            name="email"
163|                            value={formData.email}
164|                            onChange={handleChange}
165|                            required
166|                            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
167|                            placeholder="your@email.com"
168|                          />
169|                        </div>
170|                      </div>
171|                    </div>
172|
173|                    {/* Subject */}
174|                    <div>
175|                      <label className="block text-white font-medium mb-2">Subject</label>
176|                      <input
177|                        type="text"
178|                        name="subject"
179|                        value={formData.subject}
180|                        onChange={handleChange}
181|                        required
182|                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
183|                        placeholder="What's this about?"
184|                      />
185|                    </div>
186|
187|                    {/* Message */}
188|                    <div>
189|                      <label className="block text-white font-medium mb-2">Message</label>
190|                      <textarea
191|                        name="message"
192|                        value={formData.message}
193|                        onChange={handleChange}
194|                        required
195|                        rows={6}
196|                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300 resize-none"
197|                        placeholder="Share your thoughts, ideas, or questions..."
198|                      ></textarea>
199|                    </div>
200|
201|                    {/* Submit Button */}
202|                    <button
203|                      type="submit"
204|                      className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
205|                    >
206|                      <Send size={20} />
207|                      Send Message
208|                    </button>
209|                  </form>
210|                )}
211|              </div>
212|            </div>
213|
214|            {/* Contact Info & Social */}
215|            <div className="space-y-8">
216|              {/* Contact Details */}
217|              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
218|                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
219|                <div className="space-y-4">
220|                  <div className="flex items-center gap-3">
221|                    <Mail className="text-pink-500 flex-shrink-0" size={20} />
222|                    <div>
223|                      <p className="text-white font-medium">Email</p>
224|                      <a 
225|                        href="mailto:hello@hailo-music.com" 
226|                        className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
227|                      >
228|                        hello@hailo-music.com
229|                      </a>
230|                    </div>
231|                  </div>
232|                  <div className="flex items-center gap-3">
233|                    <Phone className="text-pink-500 flex-shrink-0" size={20} />
234|                    <div>
235|                      <p className="text-white font-medium">Booking</p>
236|                      <p className="text-gray-400">Available via email</p>
237|                    </div>
238|                  </div>
239|                  <div className="flex items-center gap-3">
240|                    <MapPin className="text-pink-500 flex-shrink-0" size={20} />
241|                    <div>
242|                      <p className="text-white font-medium">Location</p>
243|                      <p className="text-gray-400">Worldwide (Remote/Touring)</p>
244|                    </div>
245|                  </div>
246|                </div>
247|              </div>
248|
249|              {/* Social Media */}
250|              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
251|                <h3 className="text-xl font-bold text-white mb-6">Follow the Journey</h3>
252|                <div className="space-y-3">
253|                  {[
254|                    { name: 'Instagram', icon: Instagram, url: '#', handle: '@hailo_music' },
255|                    { name: 'Twitter', icon: Twitter, url: '#', handle: '@hailo_music' },
256|                    { name: 'YouTube', icon: Youtube, url: '#', handle: 'Hāịlō Official' },
257|                    { name: 'SoundCloud', icon: Music, url: '#', handle: 'hailo-music' }
258|                  ].map((social) => (
259|                    <a
260|                      key={social.name}
261|                      href={social.url}
262|                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-500/10 transition-colors duration-300 group"
263|                    >
264|                      <social.icon className="text-pink-500 group-hover:text-pink-400 transition-colors duration-300" size={20} />
265|                      <div>
266|                        <p className="text-white font-medium">{social.name}</p>
267|                        <p className="text-gray-400 text-sm">{social.handle}</p>
268|                      </div>
269|                    </a>
270|                  ))}
271|                </div>
272|              </div>
273|
274|              {/* Response Time */}
275|              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-6 border border-pink-500/20">
276|                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
277|                <div className="space-y-3 text-gray-300 text-sm">
278|                  <div className="flex items-center gap-2">
279|                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
280|                    <span>Fan messages: 24-48 hours</span>
281|                  </div>
282|                  <div className="flex items-center gap-2">
283|                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
284|                    <span>Collaboration requests: 3-5 days</span>
285|                  </div>
286|                  <div className="flex items-center gap-2">
287|                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
288|                    <span>Booking inquiries: 1-2 days</span>
289|                  </div>
290|                </div>
291|                <p className="text-gray-400 text-xs mt-4">
292|                  All messages are personally read and responded to by Hāịlō or their team.
293|                </p>
294|              </div>
295|            </div>
296|          </div>
297|        </div>
298|      </section>
299|
300|      {/* Collaboration Focus */}
301|      <section className="py-16 bg-gray-950/50">
302|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
303|          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
304|            Let's Create <span className="text-pink-500">Together</span>
305|          </h2>
306|          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
307|            Hāịlō is always interested in collaborating with like-minded artists, advocates, and organizations 
308|            who share a passion for meaningful music and positive social impact.
309|          </p>
310|
311|          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
312|            {[
313|              {
314|                title: 'Musical Collaborations',
315|                description: 'Features, remixes, and joint projects with artists who share similar values',
316|                icon: '🎵'
317|              },
318|              {
319|                title: 'Advocacy Partnerships',
320|                description: 'Working with organizations to amplify important causes through music',
321|                icon: '🤝'
322|              },
323|              {
324|                title: 'Creative Projects',
325|                description: 'Sound design, visual art collaborations, and multimedia experiences',
326|                icon: '🎨'
327|              }
328|            ].map((collab, index) => (
329|              <div 
330|                key={index}
331|                className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
332|              >
333|                <div className="text-3xl mb-4">{collab.icon}</div>
334|                <h3 className="text-xl font-semibold text-white mb-3">{collab.title}</h3>
335|                <p className="text-gray-400 text-sm">{collab.description}</p>
336|              </div>
337|            ))}
338|          </div>
339|        </div>
340|      </section>
341|    </div>
342|  );
343|};
344|
345|export default Contact;

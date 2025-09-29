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

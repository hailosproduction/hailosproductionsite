1|"""
2|Data seeder to populate the database with initial content
3|Run this script to seed the database with Hāịlō's content
4|"""
5|import asyncio
6|import sys
7|import os
8|from pathlib import Path
9|from dotenv import load_dotenv
10|
11|sys.path.append('/app/backend')
12|
13|# Load environment variables
14|ROOT_DIR = Path(__file__).parent
15|load_dotenv(ROOT_DIR / '.env')
16|
17|from database import db
18|from models import *
19|
20|async def seed_database():
21|    """Seed the database with initial content"""
22|    await db.connect()
23|    print("🌱 Starting database seeding...")
24|
25|    # Seed Artist Info
26|    artist_info = ArtistInfoUpdate(
27|        name="Hāịlō",
28|        tagline="Dark Melodies, Bright Advocacy",
29|        bio="Hāịlō creates emotionally charged music that explores the depths of human experience while advocating for marginalized communities. Through haunting melodies and powerful lyrics, this artist bridges the gap between personal expression and social consciousness.",
30|        qualifications=[
31|            "Bachelor of Music Production - Sound Design Specialization",
32|            "Certified Audio Engineer (Pro Tools, Ableton Live)",
33|            "Mental Health First Aider - Community Support",
34|            "LGBTQIA+ Youth Advocate Certification"
35|        ],
36|        goals=[
37|            "Release debut album 'Shadows & Light' by end of 2024",
38|            "Perform at Pride festivals worldwide to support LGBTQIA+ rights",
39|            "Collaborate with autism advocacy organizations through music therapy",
40|            "Raise awareness for environmental causes through sustainable touring",
41|            "Create safe spaces for trans and non-binary artists in the music industry"
42|        ]
43|    )
44|    await db.update_artist_info(artist_info)
45|    print("✅ Artist info seeded")
46|
47|    # Seed Music Tracks
48|    music_tracks = [
49|        MusicTrackCreate(
50|            title="Whispers in the Void",
51|            duration="4:23",
52|            platform="SoundCloud",
53|            url="https://soundcloud.com/hailo/whispers-in-the-void",
54|            description="A haunting exploration of isolation and connection",
55|            cover_art="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
56|            featured=True
57|        ),
58|        MusicTrackCreate(
59|            title="Neon Dreams",
60|            duration="3:47",
61|            platform="YouTube",
62|            url="https://youtube.com/watch?v=neon-dreams",
63|            description="Electronic meets emotion in this cyberpunk anthem",
64|            cover_art="https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop"
65|        ),
66|        MusicTrackCreate(
67|            title="Breaking Barriers",
68|            duration="5:12",
69|            platform="Spotify",
70|            url="https://open.spotify.com/track/breaking-barriers",
71|            description="An empowering track about overcoming societal limitations",
72|            cover_art="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop"
73|        )
74|    ]
75|    
76|    for track in music_tracks:
77|        await db.create_music_track(track)
78|    print("✅ Music tracks seeded")
79|
80|    # Seed Videos
81|    videos = [
82|        VideoCreate(
83|            title="Whispers in the Void - Official Music Video",
84|            type="music-video",
85|            thumbnail="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
86|            url="https://youtube.com/watch?v=whispers-video",
87|            description="Cinematic journey through emotional landscapes",
88|            featured=True
89|        ),
90|        VideoCreate(
91|            title="Atmospheric Soundscapes - Sound Design Reel",
92|            type="sound-design",
93|            thumbnail="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=400&fit=crop",
94|            url="https://vimeo.com/soundscapes-reel",
95|            description="Commercial and film sound design portfolio"
96|        ),
97|        VideoCreate(
98|            title="Pride Festival Live Performance",
99|            type="live-performance",
100|            thumbnail="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
101|            url="https://youtube.com/watch?v=pride-live",
102|            description="Live performance supporting LGBTQIA+ rights"
103|        )
104|    ]
105|    
106|    for video in videos:
107|        await db.create_video(video)
108|    print("✅ Videos seeded")
109|
110|    # Seed Artwork
111|    artworks = [
112|        ArtworkCreate(
113|            title="Digital Rebellion",
114|            medium="Digital Art",
115|            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=600&fit=crop",
116|            description="Abstract representation of breaking free from digital constraints",
117|            featured=True
118|        ),
119|        ArtworkCreate(
120|            title="Spectrum of Identity",
121|            medium="Mixed Media",
122|            image="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop",
123|            description="Celebrating the diversity of human identity and experience"
124|        ),
125|        ArtworkCreate(
126|            title="Environmental Echoes",
127|            medium="Photography & Digital Manipulation",
128|            image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=600&fit=crop",
129|            description="Nature's call for environmental consciousness"
130|        )
131|    ]
132|    
133|    for artwork in artworks:
134|        await db.create_artwork(artwork)
135|    print("✅ Artwork seeded")
136|
137|    # Seed Merchandise
138|    merchandise_items = [
139|        MerchandiseCreate(
140|            name="Shadows & Light Tour Tee",
141|            type="clothing",
142|            price=25.00,
143|            image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
144|            description="Soft cotton tee with tour artwork",
145|            sizes=["S", "M", "L", "XL", "XXL"],
146|            featured=True
147|        ),
148|        MerchandiseCreate(
149|            name="Handcrafted Pride Earrings",
150|            type="jewelry",
151|            price=18.00,
152|            image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
153|            description="Unique rainbow-themed earrings supporting LGBTQIA+ causes",
154|            materials=["Sterling Silver", "Colorful Resin"]
155|        ),
156|        MerchandiseCreate(
157|            name="Whispers in the Void - Digital Album",
158|            type="digital",
159|            price=12.00,
160|            image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
161|            description="High-quality digital download with bonus tracks",
162|            formats=["MP3 320kbps", "FLAC", "WAV"]
163|        )
164|    ]
165|    
166|    for item in merchandise_items:
167|        await db.create_merchandise(item)
168|    print("✅ Merchandise seeded")
169|
170|    # Seed Charities
171|    charities = [
172|        CharityCreate(
173|            name="Autism Speaks",
174|            cause="Autism Support",
175|            description="Promoting solutions across the spectrum and life span for the needs of people with autism",
176|            website="https://autismspeaks.org",
177|            logo="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=200&fit=crop",
178|            featured=True
179|        ),
180|        CharityCreate(
181|            name="GLAAD",
182|            cause="LGBTQIA+ Rights",
183|            description="Working to accelerate acceptance for LGBTQ people through media representation",
184|            website="https://glaad.org",
185|            logo="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop"
186|        ),
187|        CharityCreate(
188|            name="Greenpeace",
189|            cause="Environmental",
190|            description="Global environmental organization campaigning for planet protection",
191|            website="https://greenpeace.org",
192|            logo="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop"
193|        ),
194|        CharityCreate(
195|            name="Mental Health America",
196|            cause="Mental Health",
197|            description="Leading community-based nonprofit dedicated to mental health advocacy",
198|            website="https://mhanational.org",
199|            logo="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop"
200|        )
201|    ]
202|    
203|    for charity in charities:
204|        await db.create_charity(charity)
205|    print("✅ Charities seeded")
206|
207|    # Seed News Articles
208|    news_articles = [
209|        NewsArticleCreate(
210|            title="New Single 'Neon Dreams' Drops This Friday",
211|            excerpt="Hāịlō's latest track explores the intersection of technology and human emotion...",
212|            content="""
213|            This latest release from Hāịlō represents a significant evolution in their artistic journey, 
214|            blending the signature dark atmospheric sound with more vibrant electronic elements that 
215|            reflect their advocacy for social change and personal empowerment.
216|
217|            The track explores themes of digital connection in an increasingly isolated world, 
218|            questioning how technology both unites and divides us. Through haunting vocals and 
219|            pulsing synths, the song creates a sonic landscape that mirrors the neon-lit dreams 
220|            of a generation caught between virtual and physical reality.
221|
222|            Recording took place over several months, with Hāịlō collaborating with producers 
223|            who share their commitment to both musical excellence and social consciousness. 
224|            The result is a track that doesn't just entertain, but challenges listeners to 
225|            examine their own relationship with technology and human connection.
226|
227|            This release coincides with Hāịlō's expanded advocacy work, with proceeds from 
228|            streaming and downloads supporting organizations focused on digital literacy 
229|            and mental health support for young people navigating online spaces.
230|            """,
231|            image="https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=300&fit=crop",
232|            category="music",
233|            published=True,
234|            featured=True
235|        ),
236|        NewsArticleCreate(
237|            title="Partnering with Local LGBTQIA+ Organizations",
238|            excerpt="Exciting collaboration announced to support transgender youth through music...",
239|            content="""
240|            Hāịlō is proud to announce a groundbreaking partnership with several local LGBTQIA+ 
241|            organizations to create safe spaces and support systems for transgender and non-binary 
242|            youth in the music industry.
243|
244|            This initiative includes mentorship programs, scholarship opportunities for music education, 
245|            and the creation of inclusive venues where all identities can be celebrated and protected.
246|
247|            The partnership will also fund emergency support services for LGBTQIA+ youth experiencing 
248|            housing insecurity or family rejection, providing both immediate assistance and long-term 
249|            resources for stability and growth.
250|
251|            Through music workshops, performance opportunities, and community building events, 
252|            this collaboration aims to amplify marginalized voices and create lasting change 
253|            in both the local community and the broader music industry.
254|            """,
255|            image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=300&fit=crop",
256|            category="advocacy",
257|            published=True
258|        ),
259|        NewsArticleCreate(
260|            title="Behind the Scenes: Sound Design Process",
261|            excerpt="Take a deep dive into the creative process behind atmospheric soundscapes...",
262|            content="""
263|            Creating the haunting, atmospheric soundscapes that define Hāịlō's music is both 
264|            an art and a science. This behind-the-scenes look explores the tools, techniques, 
265|            and creative philosophy that shape every track.
266|
267|            The process begins with field recordings - capturing everything from urban 
268|            environments to natural spaces, seeking sounds that carry emotional weight 
269|            and narrative potential. These raw recordings become the foundation for 
270|            larger compositions.
271|
272|            Using a combination of analog synthesizers, digital audio workstations, and 
273|            unconventional instruments, each track is built layer by layer, with careful 
274|            attention to how sounds interact and create emotional resonance.
275|
276|            The goal is never just to create pleasant sounds, but to craft sonic experiences 
277|            that challenge listeners, evoke empathy, and support the advocacy messages 
278|            woven throughout the music.
279|            """,
280|            image="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=300&fit=crop",
281|            category="behind-scenes",
282|            published=True
283|        )
284|    ]
285|    
286|    for article in news_articles:
287|        await db.create_news_article(article)
288|    print("✅ News articles seeded")
289|
290|    # Seed Site Settings
291|    settings = SiteSettingsUpdate(
292|        site_name="Hāịlō",
293|        tagline="Dark Melodies, Bright Advocacy",
294|        contact_email="hello@hailo-music.com",
295|        social_links=SocialLinks(
296|            instagram="https://instagram.com/hailo_music",
297|            twitter="https://twitter.com/hailo_music",
298|            youtube="https://youtube.com/c/hailoofficial",
299|            soundcloud="https://soundcloud.com/hailo"
300|        )
301|    )
302|    await db.update_site_settings(settings)
303|    print("✅ Site settings seeded")
304|
305|    await db.close()
306|    print("🎉 Database seeding completed successfully!")
307|
308|if __name__ == "__main__":
309|    asyncio.run(seed_database())

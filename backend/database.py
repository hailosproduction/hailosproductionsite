1|from motor.motor_asyncio import AsyncIOMotorClient
2|from models import *
3|import os
4|from typing import List, Optional
5|from bson import ObjectId
6|import logging
7|
8|logger = logging.getLogger(__name__)
9|
10|class Database:
11|    def __init__(self):
12|        self.client = None
13|        self.db = None
14|
15|    async def connect(self):
16|        """Connect to MongoDB"""
17|        try:
18|            mongo_url = os.environ['MONGO_URL']
19|            self.client = AsyncIOMotorClient(mongo_url)
20|            self.db = self.client[os.environ['DB_NAME']]
21|            logger.info("Connected to MongoDB successfully")
22|        except Exception as e:
23|            logger.error(f"Failed to connect to MongoDB: {e}")
24|            raise
25|
26|    async def close(self):
27|        """Close MongoDB connection"""
28|        if self.client:
29|            self.client.close()
30|            logger.info("MongoDB connection closed")
31|
32|    # Artist Info Operations
33|    async def get_artist_info(self) -> Optional[ArtistInfo]:
34|        """Get artist information"""
35|        doc = await self.db.artist_info.find_one()
36|        return ArtistInfo(**doc) if doc else None
37|
38|    async def update_artist_info(self, artist_data: ArtistInfoUpdate) -> ArtistInfo:
39|        """Update or create artist information"""
40|        update_data = {k: v for k, v in artist_data.dict().items() if v is not None}
41|        update_data['updated_at'] = datetime.utcnow()
42|        
43|        existing = await self.db.artist_info.find_one()
44|        if existing:
45|            await self.db.artist_info.update_one(
46|                {"_id": existing["_id"]}, 
47|                {"$set": update_data}
48|            )
49|            updated_doc = await self.db.artist_info.find_one({"_id": existing["_id"]})
50|        else:
51|            # Create new artist info
52|            new_artist = ArtistInfo(**update_data)
53|            await self.db.artist_info.insert_one(new_artist.dict(by_alias=True))
54|            updated_doc = await self.db.artist_info.find_one({"_id": new_artist.id})
55|        
56|        return ArtistInfo(**updated_doc)
57|
58|    # Music Track Operations
59|    async def get_music_tracks(self, platform: Optional[str] = None) -> List[MusicTrack]:
60|        """Get music tracks with optional platform filter"""
61|        query = {}
62|        if platform and platform.lower() != 'all':
63|            query['platform'] = platform
64|        
65|        cursor = self.db.music_tracks.find(query).sort("created_at", -1)
66|        tracks = await cursor.to_list(length=None)
67|        return [MusicTrack(**track) for track in tracks]
68|
69|    async def create_music_track(self, track_data: MusicTrackCreate) -> MusicTrack:
70|        """Create a new music track"""
71|        track = MusicTrack(**track_data.dict())
72|        await self.db.music_tracks.insert_one(track.dict(by_alias=True))
73|        return track
74|
75|    async def update_music_track(self, track_id: str, track_data: MusicTrackUpdate) -> Optional[MusicTrack]:
76|        """Update a music track"""
77|        update_data = {k: v for k, v in track_data.dict().items() if v is not None}
78|        update_data['updated_at'] = datetime.utcnow()
79|        
80|        result = await self.db.music_tracks.update_one(
81|            {"_id": ObjectId(track_id)}, 
82|            {"$set": update_data}
83|        )
84|        
85|        if result.modified_count:
86|            updated_doc = await self.db.music_tracks.find_one({"_id": ObjectId(track_id)})
87|            return MusicTrack(**updated_doc)
88|        return None
89|
90|    async def delete_music_track(self, track_id: str) -> bool:
91|        """Delete a music track"""
92|        result = await self.db.music_tracks.delete_one({"_id": ObjectId(track_id)})
93|        return result.deleted_count > 0
94|
95|    # Video Operations
96|    async def get_videos(self, video_type: Optional[str] = None) -> List[Video]:
97|        """Get videos with optional type filter"""
98|        query = {}
99|        if video_type and video_type.lower() != 'all':
100|            query['type'] = video_type
101|        
102|        cursor = self.db.videos.find(query).sort("created_at", -1)
103|        videos = await cursor.to_list(length=None)
104|        return [Video(**video) for video in videos]
105|
106|    async def create_video(self, video_data: VideoCreate) -> Video:
107|        """Create a new video"""
108|        video = Video(**video_data.dict())
109|        await self.db.videos.insert_one(video.dict(by_alias=True))
110|        return video
111|
112|    async def update_video(self, video_id: str, video_data: VideoUpdate) -> Optional[Video]:
113|        """Update a video"""
114|        update_data = {k: v for k, v in video_data.dict().items() if v is not None}
115|        update_data['updated_at'] = datetime.utcnow()
116|        
117|        result = await self.db.videos.update_one(
118|            {"_id": ObjectId(video_id)}, 
119|            {"$set": update_data}
120|        )
121|        
122|        if result.modified_count:
123|            updated_doc = await self.db.videos.find_one({"_id": ObjectId(video_id)})
124|            return Video(**updated_doc)
125|        return None
126|
127|    async def delete_video(self, video_id: str) -> bool:
128|        """Delete a video"""
129|        result = await self.db.videos.delete_one({"_id": ObjectId(video_id)})
130|        return result.deleted_count > 0
131|
132|    # Artwork Operations
133|    async def get_artwork(self) -> List[Artwork]:
134|        """Get all artwork"""
135|        cursor = self.db.artwork.find().sort("created_at", -1)
136|        artwork_docs = await cursor.to_list(length=None)
137|        return [Artwork(**artwork) for artwork in artwork_docs]
138|
139|    async def create_artwork(self, artwork_data: ArtworkCreate) -> Artwork:
140|        """Create new artwork"""
141|        artwork = Artwork(**artwork_data.dict())
142|        await self.db.artwork.insert_one(artwork.dict(by_alias=True))
143|        return artwork
144|
145|    async def update_artwork(self, artwork_id: str, artwork_data: ArtworkUpdate) -> Optional[Artwork]:
146|        """Update artwork"""
147|        update_data = {k: v for k, v in artwork_data.dict().items() if v is not None}
148|        update_data['updated_at'] = datetime.utcnow()
149|        
150|        result = await self.db.artwork.update_one(
151|            {"_id": ObjectId(artwork_id)}, 
152|            {"$set": update_data}
153|        )
154|        
155|        if result.modified_count:
156|            updated_doc = await self.db.artwork.find_one({"_id": ObjectId(artwork_id)})
157|            return Artwork(**updated_doc)
158|        return None
159|
160|    async def delete_artwork(self, artwork_id: str) -> bool:
161|        """Delete artwork"""
162|        result = await self.db.artwork.delete_one({"_id": ObjectId(artwork_id)})
163|        return result.deleted_count > 0
164|
165|    # Merchandise Operations
166|    async def get_merchandise(self, merch_type: Optional[str] = None) -> List[Merchandise]:
167|        """Get merchandise with optional type filter"""
168|        query = {}
169|        if merch_type and merch_type.lower() != 'all':
170|            query['type'] = merch_type
171|        
172|        cursor = self.db.merchandise.find(query).sort("created_at", -1)
173|        merch_docs = await cursor.to_list(length=None)
174|        return [Merchandise(**merch) for merch in merch_docs]
175|
176|    async def create_merchandise(self, merch_data: MerchandiseCreate) -> Merchandise:
177|        """Create new merchandise"""
178|        merch = Merchandise(**merch_data.dict())
179|        await self.db.merchandise.insert_one(merch.dict(by_alias=True))
180|        return merch
181|
182|    async def update_merchandise(self, merch_id: str, merch_data: MerchandiseUpdate) -> Optional[Merchandise]:
183|        """Update merchandise"""
184|        update_data = {k: v for k, v in merch_data.dict().items() if v is not None}
185|        update_data['updated_at'] = datetime.utcnow()
186|        
187|        result = await self.db.merchandise.update_one(
188|            {"_id": ObjectId(merch_id)}, 
189|            {"$set": update_data}
190|        )
191|        
192|        if result.modified_count:
193|            updated_doc = await self.db.merchandise.find_one({"_id": ObjectId(merch_id)})
194|            return Merchandise(**updated_doc)
195|        return None
196|
197|    async def delete_merchandise(self, merch_id: str) -> bool:
198|        """Delete merchandise"""
199|        result = await self.db.merchandise.delete_one({"_id": ObjectId(merch_id)})
200|        return result.deleted_count > 0
201|
202|    # Charity Operations
203|    async def get_charities(self) -> List[Charity]:
204|        """Get all charities"""
205|        cursor = self.db.charities.find().sort("created_at", -1)
206|        charity_docs = await cursor.to_list(length=None)
207|        return [Charity(**charity) for charity in charity_docs]
208|
209|    async def create_charity(self, charity_data: CharityCreate) -> Charity:
210|        """Create new charity"""
211|        charity = Charity(**charity_data.dict())
212|        await self.db.charities.insert_one(charity.dict(by_alias=True))
213|        return charity
214|
215|    async def update_charity(self, charity_id: str, charity_data: CharityUpdate) -> Optional[Charity]:
216|        """Update charity"""
217|        update_data = {k: v for k, v in charity_data.dict().items() if v is not None}
218|        update_data['updated_at'] = datetime.utcnow()
219|        
220|        result = await self.db.charities.update_one(
221|            {"_id": ObjectId(charity_id)}, 
222|            {"$set": update_data}
223|        )
224|        
225|        if result.modified_count:
226|            updated_doc = await self.db.charities.find_one({"_id": ObjectId(charity_id)})
227|            return Charity(**updated_doc)
228|        return None
229|
230|    async def delete_charity(self, charity_id: str) -> bool:
231|        """Delete charity"""
232|        result = await self.db.charities.delete_one({"_id": ObjectId(charity_id)})
233|        return result.deleted_count > 0
234|
235|    # News Article Operations
236|    async def get_news_articles(self, published_only: bool = True) -> List[NewsArticle]:
237|        """Get news articles"""
238|        query = {"published": True} if published_only else {}
239|        cursor = self.db.news_articles.find(query).sort("created_at", -1)
240|        article_docs = await cursor.to_list(length=None)
241|        return [NewsArticle(**article) for article in article_docs]
242|
243|    async def create_news_article(self, article_data: NewsArticleCreate) -> NewsArticle:
244|        """Create new news article"""
245|        article = NewsArticle(**article_data.dict())
246|        await self.db.news_articles.insert_one(article.dict(by_alias=True))
247|        return article
248|
249|    async def update_news_article(self, article_id: str, article_data: NewsArticleUpdate) -> Optional[NewsArticle]:
250|        """Update news article"""
251|        update_data = {k: v for k, v in article_data.dict().items() if v is not None}
252|        update_data['updated_at'] = datetime.utcnow()
253|        
254|        result = await self.db.news_articles.update_one(
255|            {"_id": ObjectId(article_id)}, 
256|            {"$set": update_data}
257|        )
258|        
259|        if result.modified_count:
260|            updated_doc = await self.db.news_articles.find_one({"_id": ObjectId(article_id)})
261|            return NewsArticle(**updated_doc)
262|        return None
263|
264|    async def delete_news_article(self, article_id: str) -> bool:
265|        """Delete news article"""
266|        result = await self.db.news_articles.delete_one({"_id": ObjectId(article_id)})
267|        return result.deleted_count > 0
268|
269|    # Contact Message Operations
270|    async def get_contact_messages(self) -> List[ContactMessage]:
271|        """Get all contact messages"""
272|        cursor = self.db.contact_messages.find().sort("created_at", -1)
273|        message_docs = await cursor.to_list(length=None)
274|        return [ContactMessage(**message) for message in message_docs]
275|
276|    async def create_contact_message(self, message_data: ContactMessageCreate) -> ContactMessage:
277|        """Create new contact message"""
278|        message = ContactMessage(**message_data.dict())
279|        await self.db.contact_messages.insert_one(message.dict(by_alias=True))
280|        return message
281|
282|    async def update_contact_message(self, message_id: str, read: bool = None, replied: bool = None) -> Optional[ContactMessage]:
283|        """Update contact message status"""
284|        update_data = {}
285|        if read is not None:
286|            update_data['read'] = read
287|        if replied is not None:
288|            update_data['replied'] = replied
289|        
290|        if update_data:
291|            result = await self.db.contact_messages.update_one(
292|                {"_id": ObjectId(message_id)}, 
293|                {"$set": update_data}
294|            )
295|            
296|            if result.modified_count:
297|                updated_doc = await self.db.contact_messages.find_one({"_id": ObjectId(message_id)})
298|                return ContactMessage(**updated_doc)
299|        return None
300|
301|    async def delete_contact_message(self, message_id: str) -> bool:
302|        """Delete contact message"""
303|        result = await self.db.contact_messages.delete_one({"_id": ObjectId(message_id)})
304|        return result.deleted_count > 0
305|
306|    # Site Settings Operations
307|    async def get_site_settings(self) -> SiteSettings:
308|        """Get site settings"""
309|        doc = await self.db.site_settings.find_one()
310|        if doc:
311|            return SiteSettings(**doc)
312|        else:
313|            # Create default settings
314|            default_settings = SiteSettings()
315|            await self.db.site_settings.insert_one(default_settings.dict(by_alias=True))
316|            return default_settings
317|
318|    async def update_site_settings(self, settings_data: SiteSettingsUpdate) -> SiteSettings:
319|        """Update site settings"""
320|        update_data = {k: v for k, v in settings_data.dict().items() if v is not None}
321|        update_data['updated_at'] = datetime.utcnow()
322|        
323|        existing = await self.db.site_settings.find_one()
324|        if existing:
325|            await self.db.site_settings.update_one(
326|                {"_id": existing["_id"]}, 
327|                {"$set": update_data}
328|            )
329|            updated_doc = await self.db.site_settings.find_one({"_id": existing["_id"]})
330|        else:
331|            # Create new settings
332|            new_settings = SiteSettings(**update_data)
333|            await self.db.site_settings.insert_one(new_settings.dict(by_alias=True))
334|            updated_doc = await self.db.site_settings.find_one({"_id": new_settings.id})
335|        
336|        return SiteSettings(**updated_doc)
337|
338|# Global database instance
339|db = Database()

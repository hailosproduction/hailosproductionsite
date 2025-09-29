1|from fastapi import FastAPI, APIRouter, HTTPException, File, UploadFile
2|from fastapi.staticfiles import StaticFiles
3|from dotenv import load_dotenv
4|from starlette.middleware.cors import CORSMiddleware
5|import os
6|import logging
7|from pathlib import Path
8|from typing import List, Optional
9|import aiofiles
10|import uuid
11|from models import *
12|from database import db
13|
14|ROOT_DIR = Path(__file__).parent
15|load_dotenv(ROOT_DIR / '.env')
16|
17|# Create the main app
18|app = FastAPI(title="Hāįlō Music Website API", version="1.0.0")
19|
20|# Create routers
21|api_router = APIRouter(prefix="/api")
22|admin_router = APIRouter(prefix="/api/admin")
23|
24|# Create uploads directory
25|uploads_dir = ROOT_DIR / "uploads"
26|uploads_dir.mkdir(exist_ok=True)
27|
28|# Serve uploaded files
29|app.mount("/uploads", StaticFiles(directory=str(uploads_dir)), name="uploads")
30|
31|# ============================================================================
32|# PUBLIC API ENDPOINTS (for frontend)
33|# ============================================================================
34|
35|@api_router.get("/")
36|async def root():
37|    return {"message": "Hāịlō Music Website API", "version": "1.0.0"}
38|
39|@api_router.get("/artist-info", response_model=Optional[ArtistInfo])
40|async def get_artist_info():
41|    """Get artist information"""
42|    return await db.get_artist_info()
43|
44|@api_router.get("/music", response_model=List[MusicTrack])
45|async def get_music_tracks(platform: Optional[str] = None):
46|    """Get music tracks with optional platform filter"""
47|    return await db.get_music_tracks(platform)
48|
49|@api_router.get("/videos", response_model=List[Video])
50|async def get_videos(type: Optional[str] = None):
51|    """Get videos with optional type filter"""
52|    return await db.get_videos(type)
53|
54|@api_router.get("/artwork", response_model=List[Artwork])
55|async def get_artwork():
56|    """Get all artwork"""
57|    return await db.get_artwork()
58|
59|@api_router.get("/merchandise", response_model=List[Merchandise])
60|async def get_merchandise(type: Optional[str] = None):
61|    """Get merchandise with optional type filter"""
62|    return await db.get_merchandise(type)
63|
64|@api_router.get("/charities", response_model=List[Charity])
65|async def get_charities():
66|    """Get all supported charities"""
67|    return await db.get_charities()
68|
69|@api_router.get("/news", response_model=List[NewsArticle])
70|async def get_news_articles():
71|    """Get all published news articles"""
72|    return await db.get_news_articles(published_only=True)
73|
74|@api_router.post("/contact", response_model=ContactMessage)
75|async def submit_contact_form(message_data: ContactMessageCreate):
76|    """Submit contact form"""
77|    return await db.create_contact_message(message_data)
78|
79|@api_router.get("/settings", response_model=SiteSettings)
80|async def get_site_settings():
81|    """Get site settings"""
82|    return await db.get_site_settings()
83|
84|# ============================================================================
85|# ADMIN API ENDPOINTS (for content management)
86|# ============================================================================
87|
88|# Artist Info Management
89|@admin_router.put("/artist-info", response_model=ArtistInfo)
90|async def update_artist_info(artist_data: ArtistInfoUpdate):
91|    """Update artist information"""
92|    return await db.update_artist_info(artist_data)
93|
94|# Music Track Management
95|@admin_router.get("/music", response_model=List[MusicTrack])
96|async def admin_get_music_tracks():
97|    """Get all music tracks (admin view)"""
98|    return await db.get_music_tracks()
99|
100|@admin_router.post("/music", response_model=MusicTrack)
### **File: `backend/server.py` (Continued - lines 100-200)**
Action: file_editor view /app/backend/server.py
Observation: /app/backend/server.py:
100|@admin_router.post("/music", response_model=MusicTrack)
101|async def create_music_track(track_data: MusicTrackCreate):
102|    """Create new music track"""
103|    return await db.create_music_track(track_data)
104|
105|@admin_router.put("/music/{track_id}", response_model=MusicTrack)
106|async def update_music_track(track_id: str, track_data: MusicTrackUpdate):
107|    """Update music track"""
108|    track = await db.update_music_track(track_id, track_data)
109|    if not track:
110|        raise HTTPException(status_code=404, detail="Track not found")
111|    return track
112|
113|@admin_router.delete("/music/{track_id}")
114|async def delete_music_track(track_id: str):
115|    """Delete music track"""
116|    success = await db.delete_music_track(track_id)
117|    if not success:
118|        raise HTTPException(status_code=404, detail="Track not found")
119|    return {"message": "Track deleted successfully"}
120|
121|# Video Management
122|@admin_router.get("/videos", response_model=List[Video])
123|async def admin_get_videos():
124|    """Get all videos (admin view)"""
125|    return await db.get_videos()
126|
127|@admin_router.post("/videos", response_model=Video)
128|async def create_video(video_data: VideoCreate):
129|    """Create new video"""
130|    return await db.create_video(video_data)
131|
132|@admin_router.put("/videos/{video_id}", response_model=Video)
133|async def update_video(video_id: str, video_data: VideoUpdate):
134|    """Update video"""
135|    video = await db.update_video(video_id, video_data)
136|    if not video:
137|        raise HTTPException(status_code=404, detail="Video not found")
138|    return video
139|
140|@admin_router.delete("/videos/{video_id}")
141|async def delete_video(video_id: str):
142|    """Delete video"""
143|    success = await db.delete_video(video_id)
144|    if not success:
145|        raise HTTPException(status_code=404, detail="Video not found")
146|    return {"message": "Video deleted successfully"}
147|
148|# Artwork Management
149|@admin_router.get("/artwork", response_model=List[Artwork])
150|async def admin_get_artwork():
151|    """Get all artwork (admin view)"""
152|    return await db.get_artwork()
153|
154|@admin_router.post("/artwork", response_model=Artwork)
155|async def create_artwork(artwork_data: ArtworkCreate):
156|    """Create new artwork"""
157|    return await db.create_artwork(artwork_data)
158|
159|@admin_router.put("/artwork/{artwork_id}", response_model=Artwork)
160|async def update_artwork(artwork_id: str, artwork_data: ArtworkUpdate):
161|    """Update artwork"""
162|    artwork = await db.update_artwork(artwork_id, artwork_data)
163|    if not artwork:
164|        raise HTTPException(status_code=404, detail="Artwork not found")
165|    return artwork
166|
167|@admin_router.delete("/artwork/{artwork_id}")
168|async def delete_artwork(artwork_id: str):
169|    """Delete artwork"""
170|    success = await db.delete_artwork(artwork_id)
171|    if not success:
172|        raise HTTPException(status_code=404, detail="Artwork not found")
173|    return {"message": "Artwork deleted successfully"}
174|
175|# Merchandise Management
176|@admin_router.get("/merchandise", response_model=List[Merchandise])
177|async def admin_get_merchandise():
178|    """Get all merchandise (admin view)"""
179|    return await db.get_merchandise()
180|
181|@admin_router.post("/merchandise", response_model=Merchandise)
182|async def create_merchandise(merch_data: MerchandiseCreate):
183|    """Create new merchandise"""
184|    return await db.create_merchandise(merch_data)
185|
186|@admin_router.put("/merchandise/{merch_id}", response_model=Merchandise)
187|async def update_merchandise(merch_id: str, merch_data: MerchandiseUpdate):
188|    """Update merchandise"""
189|    merch = await db.update_merchandise(merch_id, merch_data)
190|    if not merch:
191|        raise HTTPException(status_code=404, detail="Merchandise not found")
192|    return merch
193|
194|@admin_router.delete("/merchandise/{merch_id}")
195|async def delete_merchandise(merch_id: str):
196|    """Delete merchandise"""
197|    success = await db.delete_merchandise(merch_id)
198|    if not success:
199|        raise HTTPException(status_code=404, detail="Merchandise not found")
200|    return {"message": "Merchandise deleted successfully"}

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

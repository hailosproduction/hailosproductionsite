from fastapi import FastAPI, APIRouter, HTTPException, File, UploadFile
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from typing import List, Optional
import aiofiles
import uuid
from models import *
from database import db

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI(title="Hāịlō Music Website API", version="1.0.0")

# Create routers
api_router = APIRouter(prefix="/api")
admin_router = APIRouter(prefix="/api/admin")

# Create uploads directory
uploads_dir = ROOT_DIR / "uploads"
uploads_dir.mkdir(exist_ok=True)

# Serve uploaded files
app.mount("/uploads", StaticFiles(directory=str(uploads_dir)), name="uploads")

# ============================================================================
# PUBLIC API ENDPOINTS (for frontend)
# ============================================================================

@api_router.get("/")
async def root():
    return {"message": "Hāịlō Music Website API", "version": "1.0.0"}

@api_router.get("/artist-info", response_model=Optional[ArtistInfo])
async def get_artist_info():
    """Get artist information"""
    return await db.get_artist_info()

@api_router.get("/music", response_model=List[MusicTrack])
async def get_music_tracks(platform: Optional[str] = None):
    """Get music tracks with optional platform filter"""
    return await db.get_music_tracks(platform)

@api_router.get("/videos", response_model=List[Video])
async def get_videos(type: Optional[str] = None):
    """Get videos with optional type filter"""
    return await db.get_videos(type)

@api_router.get("/artwork", response_model=List[Artwork])
async def get_artwork():
    """Get all artwork"""
    return await db.get_artwork()

@api_router.get("/merchandise", response_model=List[Merchandise])
async def get_merchandise(type: Optional[str] = None):
    """Get merchandise with optional type filter"""
    return await db.get_merchandise(type)

@api_router.get("/charities", response_model=List[Charity])
async def get_charities():
    """Get all supported charities"""
    return await db.get_charities()

@api_router.get("/news", response_model=List[NewsArticle])
async def get_news_articles():
    """Get all published news articles"""
    return await db.get_news_articles(published_only=True)

@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact_form(message_data: ContactMessageCreate):
    """Submit contact form"""
    return await db.create_contact_message(message_data)

@api_router.get("/settings", response_model=SiteSettings)
async def get_site_settings():
    """Get site settings"""
    return await db.get_site_settings()

# ============================================================================
# ADMIN API ENDPOINTS (for content management)
# ============================================================================

# Artist Info Management
@admin_router.put("/artist-info", response_model=ArtistInfo)
async def update_artist_info(artist_data: ArtistInfoUpdate):
    """Update artist information"""
    return await db.update_artist_info(artist_data)

# Music Track Management
@admin_router.get("/music", response_model=List[MusicTrack])
async def admin_get_music_tracks():
    """Get all music tracks (admin view)"""
    return await db.get_music_tracks()

@admin_router.post("/music", response_model=MusicTrack)
async def create_music_track(track_data: MusicTrackCreate):
    """Create new music track"""
    return await db.create_music_track(track_data)

@admin_router.put("/music/{track_id}", response_model=MusicTrack)
async def update_music_track(track_id: str, track_data: MusicTrackUpdate):
    """Update music track"""
    track = await db.update_music_track(track_id, track_data)
    if not track:
        raise HTTPException(status_code=404, detail="Track not found")
    return track

@admin_router.delete("/music/{track_id}")
async def delete_music_track(track_id: str):
    """Delete music track"""
    success = await db.delete_music_track(track_id)
    if not success:
        raise HTTPException(status_code=404, detail="Track not found")
    return {"message": "Track deleted successfully"}

# Video Management
@admin_router.get("/videos", response_model=List[Video])
async def admin_get_videos():
    """Get all videos (admin view)"""
    return await db.get_videos()

@admin_router.post("/videos", response_model=Video)
async def create_video(video_data: VideoCreate):
    """Create new video"""
    return await db.create_video(video_data)

@admin_router.put("/videos/{video_id}", response_model=Video)
async def update_video(video_id: str, video_data: VideoUpdate):
    """Update video"""
    video = await db.update_video(video_id, video_data)
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")
    return video

@admin_router.delete("/videos/{video_id}")
async def delete_video(video_id: str):
    """Delete video"""
    success = await db.delete_video(video_id)
    if not success:
        raise HTTPException(status_code=404, detail="Video not found")
    return {"message": "Video deleted successfully"}

# Artwork Management
@admin_router.get("/artwork", response_model=List[Artwork])
async def admin_get_artwork():
    """Get all artwork (admin view)"""
    return await db.get_artwork()

@admin_router.post("/artwork", response_model=Artwork)
async def create_artwork(artwork_data: ArtworkCreate):
    """Create new artwork"""
    return await db.create_artwork(artwork_data)

@admin_router.put("/artwork/{artwork_id}", response_model=Artwork)
async def update_artwork(artwork_id: str, artwork_data: ArtworkUpdate):
    """Update artwork"""
    artwork = await db.update_artwork(artwork_id, artwork_data)
    if not artwork:
        raise HTTPException(status_code=404, detail="Artwork not found")
    return artwork

@admin_router.delete("/artwork/{artwork_id}")
async def delete_artwork(artwork_id: str):
    """Delete artwork"""
    success = await db.delete_artwork(artwork_id)
    if not success:
        raise HTTPException(status_code=404, detail="Artwork not found")
    return {"message": "Artwork deleted successfully"}

# Merchandise Management
@admin_router.get("/merchandise", response_model=List[Merchandise])
async def admin_get_merchandise():
    """Get all merchandise (admin view)"""
    return await db.get_merchandise()

@admin_router.post("/merchandise", response_model=Merchandise)
async def create_merchandise(merch_data: MerchandiseCreate):
    """Create new merchandise"""
    return await db.create_merchandise(merch_data)

@admin_router.put("/merchandise/{merch_id}", response_model=Merchandise)
async def update_merchandise(merch_id: str, merch_data: MerchandiseUpdate):
    """Update merchandise"""
    merch = await db.update_merchandise(merch_id, merch_data)
    if not merch:
        raise HTTPException(status_code=404, detail="Merchandise not found")
    return merch

@admin_router.delete("/merchandise/{merch_id}")
async def delete_merchandise(merch_id: str):
    """Delete merchandise"""
    success = await db.delete_merchandise(merch_id)
    if not success:
        raise HTTPException(status_code=404, detail="Merchandise not found")
    return {"message": "Merchandise deleted successfully"}

# Charity Management
@admin_router.get("/charities", response_model=List[Charity])
async def admin_get_charities():
    """Get all charities (admin view)"""
    return await db.get_charities()

@admin_router.post("/charities", response_model=Charity)
async def create_charity(charity_data: CharityCreate):
    """Create new charity"""
    return await db.create_charity(charity_data)

@admin_router.put("/charities/{charity_id}", response_model=Charity)
async def update_charity(charity_id: str, charity_data: CharityUpdate):
    """Update charity"""
    charity = await db.update_charity(charity_id, charity_data)
    if not charity:
        raise HTTPException(status_code=404, detail="Charity not found")
    return charity

@admin_router.delete("/charities/{charity_id}")
async def delete_charity(charity_id: str):
    """Delete charity"""
    success = await db.delete_charity(charity_id)
    if not success:
        raise HTTPException(status_code=404, detail="Charity not found")
    return {"message": "Charity deleted successfully"}

# News Article Management
@admin_router.get("/news", response_model=List[NewsArticle])
async def admin_get_news_articles():
    """Get all news articles (admin view)"""
    return await db.get_news_articles(published_only=False)

@admin_router.post("/news", response_model=NewsArticle)
async def create_news_article(article_data: NewsArticleCreate):
    """Create new news article"""
    return await db.create_news_article(article_data)

@admin_router.put("/news/{article_id}", response_model=NewsArticle)
async def update_news_article(article_id: str, article_data: NewsArticleUpdate):
    """Update news article"""
    article = await db.update_news_article(article_id, article_data)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

@admin_router.delete("/news/{article_id}")
async def delete_news_article(article_id: str):
    """Delete news article"""
    success = await db.delete_news_article(article_id)
    if not success:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"message": "Article deleted successfully"}

# Contact Message Management
@admin_router.get("/messages", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages"""
    return await db.get_contact_messages()

@admin_router.put("/messages/{message_id}")
async def update_message_status(message_id: str, read: Optional[bool] = None, replied: Optional[bool] = None):
    """Update message status"""
    message = await db.update_contact_message(message_id, read, replied)
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    return {"message": "Status updated successfully"}

@admin_router.delete("/messages/{message_id}")
async def delete_contact_message(message_id: str):
    """Delete contact message"""
    success = await db.delete_contact_message(message_id)
    if not success:
        raise HTTPException(status_code=404, detail="Message not found")
    return {"message": "Message deleted successfully"}

# File Upload
@admin_router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    """Upload image or media file"""
    # Validate file type
    allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Invalid file type")
    
    # Generate unique filename
    file_extension = file.filename.split('.')[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = uploads_dir / unique_filename
    
    # Save file
    async with aiofiles.open(file_path, 'wb') as f:
        content = await file.read()
        await f.write(content)
    
    # Return file URL
    file_url = f"/uploads/{unique_filename}"
    return {"url": file_url, "filename": unique_filename}

# Site Settings Management
@admin_router.get("/settings", response_model=SiteSettings)
async def admin_get_site_settings():
    """Get site settings (admin view)"""
    return await db.get_site_settings()

@admin_router.put("/settings", response_model=SiteSettings)
async def update_site_settings(settings_data: SiteSettingsUpdate):
    """Update site settings"""
    return await db.update_site_settings(settings_data)

# Include routers in the main app
app.include_router(api_router)
app.include_router(admin_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db():
    """Initialize database connection"""
    await db.connect()
    logger.info("Database connected and API ready")

@app.on_event("shutdown")
async def shutdown_db():
    """Close database connection"""
    await db.close()

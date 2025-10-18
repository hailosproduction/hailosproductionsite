from motor.motor_asyncio import AsyncIOMotorClient

from models import *

import os

from typing import List, Optional

from bson import ObjectId

import logging

logger = logging.getLogger(__name__)

class Database:

def __init__(self):

self.client = None

self.db = None

async def connect(self):

"""Connect to MongoDB"""

try:

mongo_url = os.environ['MONGO_URL']

self.client = AsyncIOMotorClient(mongo_url)

self.db = self.client[os.environ['DB_NAME']]

logger.info("Connected to MongoDB successfully")

except Exception as e:

logger.error(f"Failed to connect to MongoDB: {e}")

raise

async def close(self):

"""Close MongoDB connection"""

if self.client:

self.client.close()

logger.info("MongoDB connection closed")

# Artist Info Operations

async def get_artist_info(self) -> Optional[ArtistInfo]:

"""Get artist information"""

doc = await self.db.artist_info.find_one()

return ArtistInfo(**doc) if doc else None

async def update_artist_info(self, artist_data: ArtistInfoUpdate) -> ArtistInfo:

"""Update or create artist information"""

update_data = {k: v for k, v in artist_data.dict().items() if v is not None}

update_data['updated_at'] = datetime.utcnow()


existing = await self.db.artist_info.find_one()

if existing:

await self.db.artist_info.update_one(

{"_id": existing["_id"]},

{"$set": update_data}

)

updated_doc = await self.db.artist_info.find_one({"_id": existing["_id"]})

else:

# Create new artist info

new_artist = ArtistInfo(**update_data)

await self.db.artist_info.insert_one(new_artist.dict(by_alias=True))

updated_doc = await self.db.artist_info.find_one({"_id": new_artist.id})


return ArtistInfo(**updated_doc)

# Music Track Operations

async def get_music_tracks(self, platform: Optional[str] = None) -> List[MusicTrack]:

"""Get music tracks with optional platform filter"""

query = {}

if platform and platform.lower() != 'all':

query['platform'] = platform


cursor = self.db.music_tracks.find(query).sort("created_at", -1)

tracks = await cursor.to_list(length=None)

return [MusicTrack(**track) for track in tracks]

async def create_music_track(self, track_data: MusicTrackCreate) -> MusicTrack:

"""Create a new music track"""

track = MusicTrack(**track_data.dict())

await self.db.music_tracks.insert_one(track.dict(by_alias=True))

return track

async def update_music_track(self, track_id: str, track_data: MusicTrackUpdate) -> Optional[MusicTrack]:

"""Update a music track"""

update_data = {k: v for k, v in track_data.dict().items() if v is not None}

update_data['updated_at'] = datetime.utcnow()


result = await self.db.music_tracks.update_one(

{"_id": ObjectId(track_id)},

{"$set": update_data}

)


if result.modified_count:

updated_doc = await self.db.music_tracks.find_one({"_id": ObjectId(track_id)})

return MusicTrack(**updated_doc)

return None

async def delete_music_track(self, track_id: str) -> bool:

"""Delete a music track"""

result = await self.db.music_tracks.delete_one({"_id": ObjectId(track_id)})

return result.deleted_count > 0

# Video Operations

async def get_videos(self, video_type: Optional[str] = None) -> List[Video]:

"""Get videos with optional type filter"""

query = {}

if video_type and video_type.lower() != 'all':

query['type'] = video_type


cursor = self.db.videos.find(query).sort("created_at", -1)

videos = await cursor.to_list(length=None)

return [Video(**video) for video in videos]

async def create_video(self, video_data: VideoCreate) -> Video:

"""Create a new video"""

video = Video(**video_data.dict())

await self.db.videos.insert_one(video.dict(by_alias=True))

return video

async def update_video(self, video_id: str, video_data: VideoUpdate) -> Optional[Video]:

"""Update a video"""

update_data = {k: v for k, v in video_data.dict().items() if v is not None}

update_data['updated_at'] = datetime.utcnow()


result = await self.db.videos.update_one(

{"_id": ObjectId(video_id)},

{"$set": update_data}

)


if result.modified_count:

updated_doc = await self.db.videos.find_one({"_id": ObjectId(video_id)})

return Video(**updated_doc)

return None

async def delete_video(self, video_id: str) -> bool:

"""Delete a video"""

result = await self.db.videos.delete_one({"_id": ObjectId(video_id)})

return result.deleted_count > 0

# Artwork Operations

async def get_artwork(self) -> List[Artwork]:

"""Get all artwork"""

cursor = self.db.artwork.find().sort("created_at", -1)

artwork_docs = await cursor.to_list(length=None)

return [Artwork(**artwork) for artwork in artwork_docs]

async def create_artwork(self, artwork_data: ArtworkCreate) -> Artwork:

"""Create new artwork"""

artwork = Artwork(**artwork_data.dict())

await self.db.artwork.insert_one(artwork.dict(by_alias=True))

return artwork

async def update_artwork(self, artwork_id: str, artwork_data: ArtworkUpdate) -> Optional[Artwork]:

"""Update artwork"""

update_data = {k: v for k, v in artwork_data.dict().items() if v is not None}

update_data['updated_at'] = datetime.utcnow()


result = await self.db.artwork.update_one(

{"_id": ObjectId(artwork_id)},

{"$set": update_data}

)


if result.modified_count:

updated_doc = await self.db.artwork.find_one({"_id": ObjectId(artwork_id)})

return Artwork(**updated_doc)

return None

async def delete_artwork(self, artwork_id: str) -> bool:

"""Delete artwork"""

result = await self.db.artwork.delete_one({"_id": ObjectId(artwork_id)})

return result.deleted_count > 0

# Merchandise Operations

async def get_merchandise(self, merch_type: Optional[str] = None) -> List[Merchandise]:

"""Get merchandise with optional type filter"""

query = {}

if merch_type and merch_type.lower() != 'all':

query['type'] = merch_type


cursor = self.db.merchandise.find(query).sort("created_at", -1)

merch_docs = await cursor.to_list(length=None)

return [Merchandise(**merch) for merch in merch_docs]

async def create_merchandise(self, merch_data: MerchandiseCreate) -> Merchandise:

"""Create new merchandise"""

merch = Merchandise(**merch_data.dict())

await self.db.merchandise.insert_one(merch.dict(by_alias=True))

return merch

async def update_merchandise(self, merch_id: str, merch_data: MerchandiseUpdate) -> Optional[Merchandise]:

"""Update merchandise"""

update_data = {k: v for k, v in merch_data.dict().items() if v is not None}

update_data['updated_at'] = datetime.utcnow()


result = await self.db.merchandise.update_one(

{"_id": ObjectId(merch_id)},

{"$set": update_data}

)


if result.modified_count:

updated_doc = await self.db.merchandise.find_one({"_id": ObjectId(merch_id)})

return Merchandise(**updated_doc)

return None

async def delete_merchandise(self, merch_id: str) -> bool:

"""Delete merchandise"""

result = await self.db.merchandise.delete_one({"_id": ObjectId(merch_id)})

return result.deleted_count > 0

# Charity Operations

async def get_charities(self) -> List[Charity]:

"""Get all charities"""

cursor = self.db.charities.find().sort("created_at", -1)

charity_docs = await cursor.to_list(length=None)

return [Charity(**charity) for charity in charity_docs]

async def create_charity(self, charity_data: CharityCreate) -> Charity:

"""Create new charity"""

charity = Charity(**charity_data.dict())

await self.db.charities.insert_one(charity.dict(by_alias=True))

return charity

async def update_charity(self, charity_id: str, charity_data: CharityUpdate) -> Optional[Charity]:

"""Update charity"""

update_data = {k: v for k, v in charity_data.dict().items() if v is not None}

update_data['updated_at'] = datetime.utcnow()


result = await self.db.charities.update_one(

{"_id": ObjectId(charity_id)},

{"$set": update_data}

)


if result.modified_count:

updated_doc = await self.db.charities.find_one({"_id": ObjectId(charity_id)})

return Charity(**updated_doc)

return None

async def delete_charity(self, charity_id: str) -> bool:

"""Delete charity"""

result = await self.db.charities.delete_one({"_id": ObjectId(charity_id)})

return result.deleted_count > 0

# News Article Operations

async def get_news_articles(self, published_only: bool = True) -> List[NewsArticle]:

"""Get news articles"""

query = {"published": True} if published_only else {}

cursor = self.db.news_articles.find(query).sort("created_at", -1)

article_docs = await cursor.to_list(length=None)

return [NewsArticle(**article) for article in article_docs]

async def create_news_article(self, article_data: NewsArticleCreate) -> NewsArticle:

"""Create new news article"""

article = NewsArticle(**article_data.dict())

await self.db.news_articles.insert_one(article.dict(by_alias=True))

return article

async def update_news_article(self, article_id: str, article_data: NewsArticleUpdate) -> Optional[NewsArticle]:

"""Update news article"""

update_data = {k: v for k, v in article_data.dict().items() if v is not None}

update_data['updated_at'] = datetime.utcnow()


result = await self.db.news_articles.update_one(

{"_id": ObjectId(article_id)},

{"$set": update_data}

)


if result.modified_count:

updated_doc = await self.db.news_articles.find_one({"_id": ObjectId(article_id)})

return NewsArticle(**updated_doc)

return None

async def delete_news_article(self, article_id: str) -> bool:

"""Delete news article"""

result = await self.db.news_articles.delete_one({"_id": ObjectId(article_id)})

return result.deleted_count > 0

# Contact Message Operations

async def get_contact_messages(self) -> List[ContactMessage]:

"""Get all contact messages"""

cursor = self.db.contact_messages.find().sort("created_at", -1)

message_docs = await cursor.to_list(length=None)

return [ContactMessage(**message) for message in message_docs]

async def create_contact_message(self, message_data: ContactMessageCreate) -> ContactMessage:

"""Create new contact message"""

message = ContactMessage(**message_data.dict())

await self.db.contact_messages.insert_one(message.dict(by_alias=True))

return message

async def update_contact_message(self, message_id: str, read: bool = None, replied: bool = None) -> Optional[ContactMessage]:

"""Update contact message status"""

update_data = {}

if read is not None:

update_data['read'] = read

if replied is not None:

update_data['replied'] = replied


if update_data:

result = await self.db.contact_messages.update_one(

{"_id": ObjectId(message_id)},

{"$set": update_data}

)


if result.modified_count:

updated_doc = await self.db.contact_messages.find_one({"_id": ObjectId(message_id)})

return ContactMessage(**updated_doc)

return None

async def delete_contact_message(self, message_id: str) -> bool:

"""Delete contact message"""

result = await self.db.contact_messages.delete_one({"_id": ObjectId(message_id)})

return result.deleted_count > 0

# Site Settings Operations

async def get_site_settings(self) -> SiteSettings:

"""Get site settings"""

doc = await self.db.site_settings.find_one()

if doc:

return SiteSettings(**doc)

else:

# Create default settings

default_settings = SiteSettings()

await self.db.site_settings.insert_one(default_settings.dict(by_alias=True))

return default_settings

async def update_site_settings(self, settings_data: SiteSettingsUpdate) -> SiteSettings:

"""Update site settings"""

update_data = {k: v for k, v in settings_data.dict().items() if v is not None}

update_data['updated_at'] = datetime.utcnow()


existing = await self.db.site_settings.find_one()

if existing:

await self.db.site_settings.update_one(

{"_id": existing["_id"]},

{"$set": update_data}

)

updated_doc = await self.db.site_settings.find_one({"_id": existing["_id"]})

else:

# Create new settings

new_settings = SiteSettings(**update_data)

await self.db.site_settings.insert_one(new_settings.dict(by_alias=True))

updated_doc = await self.db.site_settings.find_one({"_id": new_settings.id})


return SiteSettings(**updated_doc)

# Global database instance

db = Database()

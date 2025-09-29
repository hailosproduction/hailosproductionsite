```python
from datetime import datetime
from typing import List, Optional, Any
from pydantic import BaseModel, Field, ConfigDict
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_pydantic_core_schema__(cls, source_type: Any, handler):
        from pydantic_core import core_schema
        return core_schema.json_or_python_schema(
            json_schema=core_schema.str_schema(),
            python_schema=core_schema.union_schema([
                core_schema.is_instance_schema(ObjectId),
                core_schema.chain_schema([
                    core_schema.str_schema(),
                    core_schema.no_info_plain_validator_function(cls.validate),
                ])
            ]),
            serialization=core_schema.to_string_ser_schema()
        )

    @classmethod
    def validate(cls, v):
        if isinstance(v, ObjectId):
            return v
        if isinstance(v, str) and ObjectId.is_valid(v):
            return ObjectId(v)
        raise ValueError("Invalid ObjectId")

class MongoBaseModel(BaseModel):
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True
    )
    
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")

# Artist Info Model
class ArtistInfo(MongoBaseModel):
    name: str
    tagline: str
    bio: str
    qualifications: List[str] = []
    goals: List[str] = []
    profile_image: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ArtistInfoUpdate(BaseModel):
    name: Optional[str] = None
    tagline: Optional[str] = None
    bio: Optional[str] = None
    qualifications: Optional[List[str]] = None
    goals: Optional[List[str]] = None
    profile_image: Optional[str] = None

# Music Track Model
class MusicTrack(MongoBaseModel):
    title: str
    duration: str
    platform: str  # SoundCloud, YouTube, Spotify
    url: str
    description: str
    cover_art: Optional[str] = None
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class MusicTrackCreate(BaseModel):
    title: str
    duration: str
    platform: str
    url: str
    description: str
    cover_art: Optional[str] = None
    featured: bool = False

class MusicTrackUpdate(BaseModel):
    title: Optional[str] = None
    duration: Optional[str] = None
    platform: Optional[str] = None
    url: Optional[str] = None
    description: Optional[str] = None
    cover_art: Optional[str] = None
    featured: Optional[bool] = None

# Video Model
class Video(MongoBaseModel):
    title: str
    type: str  # music-video, sound-design, live-performance
    thumbnail: Optional[str] = None
    url: str
    description: str
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class VideoCreate(BaseModel):
    title: str
    type: str
    thumbnail: Optional[str] = None
    url: str
    description: str
    featured: bool = False

class VideoUpdate(BaseModel):
    title: Optional[str] = None
    type: Optional[str] = None
    thumbnail: Optional[str] = None
    url: Optional[str] = None
    description: Optional[str] = None
    featured: Optional[bool] = None

# Artwork Model
class Artwork(MongoBaseModel):
    title: str
    medium: str
    image: str
    description: str
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ArtworkCreate(BaseModel):
    title: str
    medium: str
    image: str
    description: str
    featured: bool = False

class ArtworkUpdate(BaseModel):
    title: Optional[str] = None
    medium: Optional[str] = None
    image: Optional[str] = None
    description: Optional[str] = None
    featured: Optional[bool] = None

# Merchandise Model
class Merchandise(MongoBaseModel):
    name: str
    type: str  # clothing, jewelry, digital
    price: float
    image: str
    description: str
    sizes: Optional[List[str]] = None
    materials: Optional[List[str]] = None
    formats: Optional[List[str]] = None
    featured: bool = False
    in_stock: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class MerchandiseCreate(BaseModel):
    name: str
    type: str
    price: float
    image: str
    description: str
    sizes: Optional[List[str]] = None
    materials: Optional[List[str]] = None
    formats: Optional[List[str]] = None
    featured: bool = False
    in_stock: bool = True

class MerchandiseUpdate(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    price: Optional[float] = None
    image: Optional[str] = None
    description: Optional[str] = None
    sizes: Optional[List[str]] = None
    materials: Optional[List[str]] = None
    formats: Optional[List[str]] = None
    featured: Optional[bool] = None
    in_stock: Optional[bool] = None

# Charity Model
class Charity(MongoBaseModel):
    name: str
    cause: str
    description: str
    website: str
    logo: Optional[str] = None
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class CharityCreate(BaseModel):
    name: str
    cause: str
    description: str
    website: str
    logo: Optional[str] = None
    featured: bool = False

class CharityUpdate(BaseModel):
    name: Optional[str] = None
    cause: Optional[str] = None
    description: Optional[str] = None
    website: Optional[str] = None
    logo: Optional[str] = None
    featured: Optional[bool] = None

# News Article Model
class NewsArticle(MongoBaseModel):
    title: str
    excerpt: str
    content: str
    image: Optional[str] = None
    category: str  # music, advocacy, behind-scenes
    published: bool = False
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class NewsArticleCreate(BaseModel):
    title: str
    excerpt: str
    content: str
    image: Optional[str] = None
    category: str
    published: bool = False
    featured: bool = False

class NewsArticleUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    image: Optional[str] = None
    category: Optional[str] = None
    published: Optional[bool] = None
    featured: Optional[bool] = None

# Contact Message Model
class ContactMessage(MongoBaseModel):
    name: str
    email: str
    subject: str
    message: str
    type: str  # fan-message, collaboration, booking, general
    read: bool = False
    replied: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    type: str

# Site Settings Model
class SocialLinks(BaseModel):
    instagram: Optional[str] = None
    twitter: Optional[str] = None
    youtube: Optional[str] = None
    soundcloud: Optional[str] = None

class SiteSettings(MongoBaseModel):
    site_name: str = "Hāịlō"
    tagline: str = "Dark Melodies, Bright Advocacy"
    contact_email: str = "hello@hailo-music.com"
    social_links: SocialLinks = Field(default_factory=SocialLinks)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class SiteSettingsUpdate(BaseModel):
    site_name: Optional[str] = None
    tagline: Optional[str] = None
    contact_email: Optional[str] = None
    social_links: Optional[SocialLinks] = None
```

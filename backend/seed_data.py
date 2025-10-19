"""

Data seeder to populate the database with initial content

Run this script to seed the database with Hāịlō's content

"""

import asyncio

import sys

import os

from pathlib import Path

from dotenv import load_dotenv

sys.path.append('/app/backend')

# Load environment variables

ROOT_DIR = Path(__file__).parent

load_dotenv(ROOT_DIR / '.env')

from database import db

from models import *

async def seed_database():

"""Seed the database with initial content"""

await db.connect()

print("🌱 Starting database seeding...")

# Seed Artist Info

artist_info = ArtistInfoUpdate(

name="Hāịlō",

tagline="Dark Melodies, Bright Advocacy",

bio="Hāịlō creates emotionally charged music that explores the depths of human experience while advocating for marginalized communities. Through haunting melodies and powerful lyrics, this artist bridges the gap between personal expression and social consciousness.",

qualifications=[

"Bachelor of Music Production - Sound Design Specialization",

"Certified Audio Engineer (Pro Tools, Ableton Live)",

"Mental Health First Aider - Community Support",

"LGBTQIA+ Youth Advocate Certification"

],

goals=[

"Release debut album 'Shadows & Light' by end of 2024",

"Perform at Pride festivals worldwide to support LGBTQIA+ rights",

"Collaborate with autism advocacy organizations through music therapy",

"Raise awareness for environmental causes through sustainable touring",

"Create safe spaces for trans and non-binary artists in the music industry"

]

)

await db.update_artist_info(artist_info)

print("✅ Artist info seeded")

# Seed Music Tracks

music_tracks = [

MusicTrackCreate(

title="Whispers in the Void",

duration="4:23",

platform="SoundCloud",

url="https://soundcloud.com/hailo/whispers-in-the-void",

description="A haunting exploration of isolation and connection",

cover_art="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",

featured=True

),

MusicTrackCreate(

title="Neon Dreams",

duration="3:47",

platform="YouTube",

url="https://youtube.com/watch?v=neon-dreams",

description="Electronic meets emotion in this cyberpunk anthem",

cover_art="https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop"

),

MusicTrackCreate(

title="Breaking Barriers",

duration="5:12",

platform="Spotify",

url="https://open.spotify.com/track/breaking-barriers",

description="An empowering track about overcoming societal limitations",

cover_art="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop"

)

]


for track in music_tracks:

await db.create_music_track(track)

print("✅ Music tracks seeded")

# Seed Videos

videos = [

VideoCreate(

title="Whispers in the Void - Official Music Video",

type="music-video",

thumbnail="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",

url="https://youtube.com/watch?v=whispers-video",

description="Cinematic journey through emotional landscapes",

featured=True

),

VideoCreate(

title="Atmospheric Soundscapes - Sound Design Reel",

type="sound-design",

thumbnail="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=400&fit=crop",

url="https://vimeo.com/soundscapes-reel",

description="Commercial and film sound design portfolio"

),

VideoCreate(

title="Pride Festival Live Performance",

type="live-performance",

thumbnail="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",

url="https://youtube.com/watch?v=pride-live",

description="Live performance supporting LGBTQIA+ rights"

)

]


for video in videos:

await db.create_video(video)

print("✅ Videos seeded")

# Seed Artwork

artworks = [

ArtworkCreate(

title="Digital Rebellion",

medium="Digital Art",

image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=600&fit=crop",

description="Abstract representation of breaking free from digital constraints",

featured=True

),

ArtworkCreate(

title="Spectrum of Identity",

medium="Mixed Media",

image="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop",

description="Celebrating the diversity of human identity and experience"

),

ArtworkCreate(

title="Environmental Echoes",

medium="Photography & Digital Manipulation",

image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=600&fit=crop",

description="Nature's call for environmental consciousness"

)

]


for artwork in artworks:

await db.create_artwork(artwork)

print("✅ Artwork seeded")

# Seed Merchandise

merchandise_items = [

MerchandiseCreate(

name="Shadows & Light Tour Tee",

type="clothing",

price=25.00,

image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",

description="Soft cotton tee with tour artwork",

sizes=["S", "M", "L", "XL", "XXL"],

featured=True

),

MerchandiseCreate(

name="Handcrafted Pride Earrings",

type="jewelry",

price=18.00,

image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",

description="Unique rainbow-themed earrings supporting LGBTQIA+ causes",

materials=["Sterling Silver", "Colorful Resin"]

),

MerchandiseCreate(

name="Whispers in the Void - Digital Album",

type="digital",

price=12.00,

image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",

description="High-quality digital download with bonus tracks",

formats=["MP3 320kbps", "FLAC", "WAV"]

)

]


for item in merchandise_items:

await db.create_merchandise(item)

print("✅ Merchandise seeded")

# Seed Charities

charities = [

CharityCreate(

name="Autism Speaks",

cause="Autism Support",

description="Promoting solutions across the spectrum and life span for the needs of people with autism",

website="https://autismspeaks.org",

logo="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=200&fit=crop",

featured=True

),

CharityCreate(

name="GLAAD",

cause="LGBTQIA+ Rights",

description="Working to accelerate acceptance for LGBTQ people through media representation",

website="https://glaad.org",

logo="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop"

),

CharityCreate(

name="Greenpeace",

cause="Environmental",

description="Global environmental organization campaigning for planet protection",

website="https://greenpeace.org",

logo="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop"

),

CharityCreate(

name="Mental Health America",

cause="Mental Health",

description="Leading community-based nonprofit dedicated to mental health advocacy",

website="https://mhanational.org",

logo="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop"

)

]


for charity in charities:

await db.create_charity(charity)

print("✅ Charities seeded")

# Seed News Articles

news_articles = [

NewsArticleCreate(

title="New Single 'Neon Dreams' Drops This Friday",

excerpt="Hāịlō's latest track explores the intersection of technology and human emotion...",

content="""

This latest release from Hāịlō represents a significant evolution in their artistic journey,

blending the signature dark atmospheric sound with more vibrant electronic elements that

reflect their advocacy for social change and personal empowerment.

The track explores themes of digital connection in an increasingly isolated world,

questioning how technology both unites and divides us. Through haunting vocals and

pulsing synths, the song creates a sonic landscape that mirrors the neon-lit dreams

of a generation caught between virtual and physical reality.

Recording took place over several months, with Hāịlō collaborating with producers

who share their commitment to both musical excellence and social consciousness.

The result is a track that doesn't just entertain, but challenges listeners to

examine their own relationship with technology and human connection.

This release coincides with Hāịlō's expanded advocacy work, with proceeds from

streaming and downloads supporting organizations focused on digital literacy

and mental health support for young people navigating online spaces.

""",

image="https://images.unsplash.com/photo-1571974599782-87624638275c?w=600&h=300&fit=crop",

category="music",

published=True,

featured=True

),

NewsArticleCreate(

title="Partnering with Local LGBTQIA+ Organizations",

excerpt="Exciting collaboration announced to support transgender youth through music...",

content="""

Hāịlō is proud to announce a groundbreaking partnership with several local LGBTQIA+

organizations to create safe spaces and support systems for transgender and non-binary

youth in the music industry.

This initiative includes mentorship programs, scholarship opportunities for music education,

and the creation of inclusive venues where all identities can be celebrated and protected.

The partnership will also fund emergency support services for LGBTQIA+ youth experiencing

housing insecurity or family rejection, providing both immediate assistance and long-term

resources for stability and growth.

Through music workshops, performance opportunities, and community building events,

this collaboration aims to amplify marginalized voices and create lasting change

in both the local community and the broader music industry.

""",

image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=300&fit=crop",

category="advocacy",

published=True

),

NewsArticleCreate(

title="Behind the Scenes: Sound Design Process",

excerpt="Take a deep dive into the creative process behind atmospheric soundscapes...",

content="""

Creating the haunting, atmospheric soundscapes that define Hāịlō's music is both

an art and a science. This behind-the-scenes look explores the tools, techniques,

and creative philosophy that shape every track.

The process begins with field recordings - capturing everything from urban

environments to natural spaces, seeking sounds that carry emotional weight

and narrative potential. These raw recordings become the foundation for

larger compositions.

Using a combination of analog synthesizers, digital audio workstations, and

unconventional instruments, each track is built layer by layer, with careful

attention to how sounds interact and create emotional resonance.

The goal is never just to create pleasant sounds, but to craft sonic experiences

that challenge listeners, evoke empathy, and support the advocacy messages

woven throughout the music.

""",

image="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=300&fit=crop",

category="behind-scenes",

published=True

)

]


for article in news_articles:

await db.create_news_article(article)

print("✅ News articles seeded")

# Seed Site Settings

settings = SiteSettingsUpdate(

site_name="Hāịlō",

tagline="Dark Melodies, Bright Advocacy",

contact_email="hello@hailo-music.com",

social_links=SocialLinks(

instagram="https://instagram.com/hailo_music",

twitter="https://twitter.com/hailo_music",

youtube="https://youtube.com/c/hailoofficial",

soundcloud="https://soundcloud.com/hailo"

)

)

await db.update_site_settings(settings)

print("✅ Site settings seeded")

await db.close()

print("🎉 Database seeding completed successfully!")

if __name__ == "__main__":

asyncio.run(seed_database())

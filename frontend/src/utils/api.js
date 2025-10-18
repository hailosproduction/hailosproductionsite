import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
const API_BASE_URL = `${BACKEND_URL}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Artist Info
export const getArtistInfo = () => api.get('/artist-info');
export const updateArtistInfo = (data) => api.put('/artist-info', data);

// Music
export const getMusicTracks = (platform = null) => {
  const params = platform && platform !== 'all' ? { platform } : {};
  return api.get('/music', { params });
};
export const createMusicTrack = (data) => api.post('/music', data);
export const updateMusicTrack = (id, data) => api.put(`/music/${id}`, data);
export const deleteMusicTrack = (id) => api.delete(`/music/${id}`);

// Videos
export const getVideos = (type = null) => {
  const params = type && type !== 'all' ? { type } : {};
  return api.get('/videos', { params });
};
export const createVideo = (data) => api.post('/videos', data);
export const updateVideo = (id, data) => api.put(`/videos/${id}`, data);
export const deleteVideo = (id) => api.delete(`/videos/${id}`);

// Artwork
export const getArtwork = () => api.get('/artwork');
export const createArtwork = (data) => api.post('/artwork', data);
export const updateArtwork = (id, data) => api.put(`/artwork/${id}`, data);
export const deleteArtwork = (id) => api.delete(`/artwork/${id}`);

// Merchandise
export const getMerchandise = (type = null) => {
  const params = type && type !== 'all' ? { type } : {};
  return api.get('/merchandise', { params });
};
export const createMerchandise = (data) => api.post('/merchandise', data);
export const updateMerchandise = (id, data) => api.put(`/merchandise/${id}`, data);
export const deleteMerchandise = (id) => api.delete(`/merchandise/${id}`);

// Charities
export const getCharities = () => api.get('/charities');
export const createCharity = (data) => api.post('/charities', data);
export const updateCharity = (id, data) => api.put(`/charities/${id}`, data);
export const deleteCharity = (id) => api.delete(`/charities/${id}`);

// News
export const getNewsArticles = () => api.get('/news');
export const createNewsArticle = (data) => api.post('/news', data);
export const updateNewsArticle = (id, data) => api.put(`/news/${id}`, data);
export const deleteNewsArticle = (id) => api.delete(`/news/${id}`);

// Contact
export const createContactMessage = (data) => api.post('/contact', data);
export const getContactMessages = () => api.get('/admin/messages');
export const updateContactMessage = (id, data) => api.put(`/admin/messages/${id}`, data);
export const deleteContactMessage = (id) => api.delete(`/admin/messages/${id}`);

// Site Settings
export const getSiteSettings = () => api.get('/settings');
export const updateSiteSettings = (data) => api.put('/admin/settings', data);

export default api;

1|import axios from 'axios';
2|
3|const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
4|const API = `${BACKEND_URL}/api`;
5|
6|// Create axios instance
7|const api = axios.create({
8|  baseURL: API,
9|  timeout: 10000,
10|});
11|
12|// API functions for easy use across components
13|export const apiService = {
14|  // Artist info
15|  getArtistInfo: () => api.get('/artist-info'),
16|  
17|  // Music
18|  getMusic: (platform = null) => {
19|    const params = platform && platform !== 'All' ? { platform } : {};
20|    return api.get('/music', { params });
21|  },
22|  
23|  // Videos
24|  getVideos: (type = null) => {
25|    const params = type && type !== 'all' ? { type } : {};
26|    return api.get('/videos', { params });
27|  },
28|  
29|  // Artwork
30|  getArtwork: () => api.get('/artwork'),
31|  
32|  // Merchandise
33|  getMerchandise: (type = null) => {
34|    const params = type && type !== 'all' ? { type } : {};
35|    return api.get('/merchandise', { params });
36|  },
37|  
38|  // Charities
39|  getCharities: () => api.get('/charities'),
40|  
41|  // News
42|  getNews: () => api.get('/news'),
43|  
44|  // Contact
45|  submitContact: (data) => api.post('/contact', data),
46|  
47|  // Settings
48|  getSettings: () => api.get('/settings'),
49|};
50|
51|export default apiService;

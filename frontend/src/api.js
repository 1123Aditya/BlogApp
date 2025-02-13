import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000/api/posts" });

export const createPost = (postData) => API.post('/create', postData);
export const fetchPosts = () => API.get('/posts');

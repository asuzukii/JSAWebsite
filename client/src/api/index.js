import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
// change this later when hooking up to server

API.interceptors.request.use((req) =>  {
    if (localStorage.getItem('profile')) {
        req.headers.authorization =
            `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const signUp = (formData) => API.post('/users/signup', formData);
export const logIn = (formData) => API.post('/users/login', formData);
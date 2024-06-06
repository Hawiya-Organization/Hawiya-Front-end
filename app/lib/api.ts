import axios from 'axios';
import store from './store';

const api = axios.create({
        baseURL: 'http://192.168.20.80:8000/api',
});

api.interceptors.request.use((config) => {
        const state = store.getState();

        config.headers['Authorization'] = `Bearer 18|JvSQKNPI5AGnjam6rbN9dypChvUem1EaMPt1qdJq16600c1b`;


        return config;
}, (error) => {
        return Promise.reject(error);
});

export default api;

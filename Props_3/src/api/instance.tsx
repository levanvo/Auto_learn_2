import axios from 'axios';

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

instance.interceptors.request.use(function (config: any) {
    return config;
}, function (error: any) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response: any) {
    return response.data;
}, function (error: any) {
    return Promise.reject(error);
});
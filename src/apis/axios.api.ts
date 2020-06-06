import { loadingOn, loadingOff } from '../components/loading';
import axios from 'axios';

axios.interceptors.request.use((config) => {
    loadingOn();
    return config;
}, (error) => {
   return Promise.reject(error); 
});

axios.interceptors.response.use((config) => {
    loadingOff();
    return config;
}, (error) => {
    return Promise.reject(error);
});
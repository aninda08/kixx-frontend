import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT } from '../constants/apiConstants';

export const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: API_TIMEOUT,
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
  withCredentials: true
});

// Add request headers
apiService.interceptors.request.use(
  (config) => {
    config.headers['Origin'] = 'http://localhost:3000';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add interceptors for handling loading and error states
apiService.interceptors.request.use(
  (config) => {
    console.log('Request URL:', config.url);
    console.log('Request Headers:', config.headers);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log('Response status:', response.status);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

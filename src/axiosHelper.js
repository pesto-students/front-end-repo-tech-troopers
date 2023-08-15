import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://brighter-days.onrender.com/api', // Replace this with your API base URL
  timeout: 10000, // Set a timeout (in milliseconds) for the request
});

// Optional: You can add an interceptor for handling response errors globally.
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data; // Return only the response data to the caller
  },
  (error) => {
    // Handle common error cases, e.g., authentication errors, network errors, etc.
    return Promise.reject(error);
  }
);

// Set the authentication token before making a request
axiosInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      config.headers['x-auth-token'] = userToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

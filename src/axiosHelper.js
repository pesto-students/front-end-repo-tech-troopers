import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://brighter-days.onrender.com/api', // Replace this with your API base URL
  timeout: 10000, // Set a timeout (in milliseconds) for the request
  headers: {
    'x-auth-token': `${localStorage.getItem('userToken')}`, // Set the default content type for requests
  },
});

// Optional: You can add an interceptor for request modifications, e.g., adding authentication tokens.
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any headers or tokens to the request config if needed
    // For example:
    // config.headers['Authorization'] = 'Bearer ' + YOUR_AUTH_TOKEN;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

export default axiosInstance;

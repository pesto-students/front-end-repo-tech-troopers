import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Replace this with your API base URL
  timeout: 10000, // Set a timeout (in milliseconds) for the request
  headers: {
    'x-auth-token': `${localStorage.getItem('userToken')}`, // Set the default content type for requests
  },
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

export default axiosInstance;

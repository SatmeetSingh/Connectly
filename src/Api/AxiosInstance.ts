import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7272/api',
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error(
            'Bad Request: ',
            error.response.data.message || 'Invalid request data'
          );
          break;
        case 401:
          console.error('Unauthorized: Please log in again');
          // Optionally, redirect to login page or clear authentication state
          // logoutUser();
          break;
        case 403:
          console.error('Forbidden: You do not have access to this resource');
          // Optionally, show a notification or redirect to an error page
          break;
        case 404:
          console.error('Not Found: The requested resource was not found');
          break;
        case 409:
          // Handle conflict (e.g., duplicate data)
          console.error(
            'Conflict: ',
            error.response.data.message || 'Data conflict occurred'
          );
          break;
        case 429:
          // Handle too many requests (e.g., rate limiting)
          console.error('Too Many Requests: Please try again later');
          break;
        case 500:
          console.error(
            'Server Error: An unexpected error occurred on the server'
          );
          break;
        case 504:
          console.error('Gateway Timeout: The server did not respond in time');
          break;
        default:
          console.error(
            'Unexpected Error: ',
            error.response.status,
            error.response.data.message || 'Unknown error occurred'
          );
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

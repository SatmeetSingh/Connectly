import axios from 'axios';
import axiosInstance from './AxiosInstance';
import { Data, LoginData } from '../Pages/Auth/AuthSlice';
import { UpdatedData } from '../Pages/AppLayout/layoutSlice';

export const UserApiClient = {
  get: async (url: string, userId: string | null, config = {}) => {
    try {
      const response = await axiosInstance.get(`${url}/${userId}`, config);
      console.log('get: ', response.data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error Message:', error.message);
        if (error.response) {
          throw error.response?.data || error.message;
        }
        throw new Error('No response received from server');
      } else {
        console.error('Unknown Error:', error);
        throw new Error('An unknown error occurred');
      }
    }
  },

  signupPost: async (url: string, data: Data, config = {}) => {
    try {
      const res = await axiosInstance.post(url, data, config);
      console.log('Signup: ', res.data);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Message:', error.message);
        if (error.response) {
          throw new Error(
            error.response?.data?.message ||
              error.response?.data ||
              'Server returned an error'
          );
        }
        throw new Error('No response received from server');
      } else {
        console.error('Unknown Error:', error);
        throw new Error('An unknown error occurred');
      }
    }
  },

  loginPost: async (url: string, data: LoginData, config = {}) => {
    try {
      const res = await axiosInstance.post(url, data, config);
      console.log('Login: ', res);
      const userId = res.data.user?.id;
      if (userId) {
        localStorage.setItem('userId', userId);
        localStorage.setItem('loggedIn', 'true');
      } else {
        console.warn('User ID is not defined in the response');
      }
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Message:', error.message);
        if (error.response) {
          throw new Error(
            error.response?.data?.message ||
              error.response?.data ||
              'Server returned an error'
          );
        }
        throw new Error('No response received from server');
      } else {
        console.error('Unknown Error:', error);
        throw new Error('An unknown error occurred');
      }
    }
  },

  updatePatch: async (
    url: string,
    data: UpdatedData,
    userId: string | null,
    config = {}
  ) => {
    try {
      const res = await axiosInstance.patch(`${url}/${userId}`, data, config);
      console.log('Update: ', res);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Message:', error.message);
        if (error.response) {
          throw error.response?.data || error.message;
        }
        throw new Error('No response received from server');
      } else {
        console.error('Unknown Error:', error);
        throw new Error('An unknown error occurred');
      }
    }
  },
};
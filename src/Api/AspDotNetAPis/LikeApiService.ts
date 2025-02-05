import axios from 'axios';
import axiosInstance from '../AxiosInstance';

export const LikesApiClient = {
  getLikesByPostId: async (url: string, postId: string | null, config = {}) => {
    try {
      const response = await axiosInstance.get(`${url}/${postId}`, config);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Message:', error.message);
        if (error.response) {
          throw new Error(
            error.response?.data?.message || 'No response received from server'
          );
        }
      } else {
        console.error('Unknown Error:', error);
        throw new Error('An unknown error occurred');
      }
    }
  },
  PostLikes: async (
    baseUrl: string,
    userId: string,
    postId: string,
    config = {}
  ) => {
    try {
      const url = `${baseUrl}/${postId}/like/${userId}`;
      const res = await axiosInstance.post(url, config);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
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
  RemoveLikes: async (
    baseUrl: string,
    userId: string,
    postId: string,
    config = {}
  ) => {
    try {
      const url = `${baseUrl}/${postId}/unlike/${userId}`;
      const res = await axiosInstance.post(url, config);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
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

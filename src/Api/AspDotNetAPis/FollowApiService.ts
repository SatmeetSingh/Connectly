import axios from 'axios';
import axiosInstance from '../AxiosInstance';

export const followApiClient = {
  follow: async (followerId: string, followingId: string, config = {}) => {
    try {
      const res = await axiosInstance.post(
        `Users/${followerId}/follow/${followingId}`,
        config
      );
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
      }
    }
  },

  unfollow: async (followerId: string, followingId: string, config = {}) => {
    try {
      const res = await axiosInstance.post(
        `Users/${followerId}/unfollow/${followingId}`,
        config
      );
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
      }
    }
  },

  fetchFollowStatus: async (
    followerId: string,
    followingId: string,
    config = {}
  ) => {
    try {
      const res = await axiosInstance.get(
        `/Users/${followerId}/follow-status/${followingId}`,
        config
      );
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
      }
    }
  },

  UserFollowing: async (userId: string, config = {}) => {
    try {
      const res = await axiosInstance.get(`/Users/${userId}/following`, config);
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
      }
    }
  },

  UserFollowers: async (userId: string, config = {}) => {
    try {
      const res = await axiosInstance.get(`/Users/${userId}/followers`, config);
      console.log('Follower List', res);
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
      }
    }
  },
};

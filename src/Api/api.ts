import axios from 'axios';
import React from 'react';

const userId = localStorage.getItem('userId');

export const getUserbyId = async () => {
  try {
    const res = await axios.get(`https://localhost:7272/api/users/${userId}`);
    return res.data;
  } catch (error) {
    console.error('Error', error);
  }
};

interface UpdatedData {
  name?: string;
  username?: string;
  bio?: string;
  gender?: string;
  profilePicture?: string;
}

export const updateUser = async (updatedData: UpdatedData) => {
  try {
    const response = await axios.patch(
      'https://example.com/users/123',
      updatedData
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

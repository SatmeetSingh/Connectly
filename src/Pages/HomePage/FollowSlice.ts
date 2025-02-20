import { followApiClient } from '../../Api/AspDotNetAPis/FollowApiService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';

interface followProps {
  followerId: string;
  followingId: string;
  config?: AxiosRequestConfig;
}

export const followUser = createAsyncThunk(
  '/follow/followUser',
  async (
    { followerId, followingId, config = {} }: followProps,
    { rejectWithValue }
  ) => {
    try {
      await followApiClient.follow(followerId, followingId, config);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const UnfollowUser = createAsyncThunk(
  '/follow/unfollowUser',
  async (
    { followerId, followingId, config = {} }: followProps,
    { rejectWithValue }
  ) => {
    try {
      const res = await followApiClient.unfollow(
        followerId,
        followingId,
        config
      );
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const fetchFollowStatus = createAsyncThunk(
  '/follow/followStatus',
  async (
    { followerId, followingId, config = {} }: followProps,
    { rejectWithValue }
  ) => {
    try {
      const res = await followApiClient.fetchFollowStatus(
        followerId,
        followingId,
        config
      );
      return res;
    } catch (error: any) {
      console.error('Error fetching follow status:', error);
      return rejectWithValue(
        error.response?.data || error.message || 'An unknown error occurred'
      );
    }
  }
);

interface GetfollowProps {
  userId: string;
  config?: AxiosRequestConfig;
}

export const fetchFollowing = createAsyncThunk(
  '/follow/following',
  async ({ userId, config = {} }: GetfollowProps, { rejectWithValue }) => {
    try {
      return await followApiClient.UserFollowing(userId, config);
    } catch (error: any) {
      console.error('Error fetching follow status:', error);
      return rejectWithValue(
        error.response?.data || error.message || 'An unknown error occurred'
      );
    }
  }
);

export const fetchFollowers = createAsyncThunk(
  '/follow/followers',
  async ({ userId, config = {} }: GetfollowProps, { rejectWithValue }) => {
    try {
      return await followApiClient.UserFollowers(userId, config);
    } catch (error: any) {
      console.error('Error fetching follow status:', error);
      return rejectWithValue(
        error.response?.data || error.message || 'An unknown error occurred'
      );
    }
  }
);

export interface IState {
  isLoading: boolean;
  isFollowing: boolean;
  followError: string | null;
  status: string;
  followingData: {};
}

const initialState: IState = {
  isLoading: false,
  isFollowing: false,
  followError: null,
  status: 'idle',
  followingData: {},
};

const followSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFollowStatus.pending, (state) => {
        state.isLoading = true;
        state.followError = null;
      })
      .addCase(fetchFollowStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFollowing = action.payload.isFollowing;
      })
      .addCase(fetchFollowStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.followError =
          typeof action.payload === 'string'
            ? action.payload
            : 'An followError occurred';
      })
      .addCase(followUser.pending, (state) => {
        state.isLoading = true;
        state.followError = null;
      })
      .addCase(followUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isFollowing = true;
      })
      .addCase(followUser.rejected, (state, action) => {
        state.isLoading = false;
        state.followError =
          typeof action.payload === 'string'
            ? action.payload
            : 'An followError occurred';
      })
      .addCase(UnfollowUser.pending, (state) => {
        state.isLoading = true;
        state.followError = null;
      })
      .addCase(UnfollowUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isFollowing = false;
      })
      .addCase(UnfollowUser.rejected, (state, action) => {
        state.isLoading = false;
        state.followError =
          typeof action.payload === 'string'
            ? action.payload
            : 'An followError occurred';
      })
      .addCase(fetchFollowing.pending, (state) => {
        state.status = 'loading';
        state.followError = null;
      })
      .addCase(fetchFollowing.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.followingData = action.payload.data;
      })
      .addCase(fetchFollowing.rejected, (state, action) => {
        state.status = 'failed';
        state.followError =
          typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred';
      });
  },
});

export default followSlice.reducer;

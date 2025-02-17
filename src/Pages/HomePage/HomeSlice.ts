import { AxiosRequestConfig } from 'axios';
import { UserApiClient } from '../../Api/AspDotNetAPis/UserApiService';
import { User, userdata } from '../../Components/Profile/UserInterface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostApiClient } from '../../Api/AspDotNetAPis/PostApiService';
import { Post } from './PostInterface';
import { LikesApiClient } from '../../Api/AspDotNetAPis/LikeApiService';

interface FetchDataArgs {
  url: string;
  userId?: string | null;
  config?: AxiosRequestConfig;
}

interface FetchDataArgs2 {
  url: string;
  postId?: string | null;
  config?: AxiosRequestConfig;
}

/*rejectWithValue: Provided by redux, it returns the error payload and marks the thunk as rejected instead of throwing an error.*/
export const fetchData = createAsyncThunk(
  'home/fetchData',
  async (
    { url, userId = null, config = {} }: FetchDataArgs,
    { rejectWithValue }
  ) => {
    try {
      return await UserApiClient.getById(url, userId, config);
    } catch (error) {
      console.error('Error in API call:', error);
      return rejectWithValue(error);
    }
  }
);

export const fetchPostsByUserId = createAsyncThunk(
  'home/fetchPost',
  async (
    { url, userId = null, config = {} }: FetchDataArgs,
    { rejectWithValue }
  ) => {
    try {
      const res = await PostApiClient.getPostByUserId(url, userId, config);
      return res.data.posts;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          'It looks like you have not posted anything yet'
      );
    }
  }
);

export const FetchLikesByPost = createAsyncThunk(
  'post/fetchLikes',
  async (
    { url, postId = null, config = {} }: FetchDataArgs2,
    { rejectWithValue }
  ) => {
    try {
      const res = await LikesApiClient.getLikesByPostId(url, postId, config);
      console.log(res);
      return res?.data.count;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

interface PostDataArgs {
  url: string;
  userId: string;
  postId: string;
  config?: AxiosRequestConfig;
}

export const AddLikeToPost = createAsyncThunk(
  'likes/postLikes',
  async (
    { url, userId, postId, config = {} }: PostDataArgs,
    { rejectWithValue }
  ) => {
    try {
      const res = await LikesApiClient.PostLikes(url, userId, postId, config);
      console.log(res);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const RemoveLikeFromPost = createAsyncThunk(
  'likes/postLikes',
  async (
    { url, userId, postId, config = {} }: PostDataArgs,
    { rejectWithValue }
  ) => {
    try {
      const res = await LikesApiClient.RemoveLikes(url, userId, postId, config);
      console.log(res);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export interface ErrorObject {
//   [key: string]: any;
// }

export interface HomeState {
  userData: User;
  postData: Post[];
  LikeData: { userId: string; postId: string };
  RemoveLikeData: { userId: string; postId: string };
  status: string;
  count: number;
  error: null | string;
}

const initialState: HomeState = {
  userData: userdata,
  postData: [],
  LikeData: { userId: '', postId: '' },
  RemoveLikeData: { userId: '', postId: '' },
  status: 'idle',
  count: 0,
  error: null,
};

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.userData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred';
      })
      .addCase(fetchPostsByUserId.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPostsByUserId.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.postData = action.payload;
      })
      .addCase(fetchPostsByUserId.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred';
      })
      .addCase(FetchLikesByPost.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(FetchLikesByPost.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.count = action.payload;
      })
      .addCase(FetchLikesByPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred';
      })
      .addCase(AddLikeToPost.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(AddLikeToPost.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.LikeData = action.payload;
      })
      .addCase(AddLikeToPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred';
      });
  },
});

export default HomeSlice.reducer;

import { AxiosRequestConfig } from 'axios';
import { UserApiClient } from '../../Api/UserApiService';
import { User, userdata } from '../../Components/Profile/UserInterface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface FetchDataArgs {
  url: string;
  userId?: string | null;
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
      return await UserApiClient.get(url, userId, config);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export interface state {
  userData: User;
  status: string;
  error: null | object;
}

const initialState: state = {
  userData: userdata,
  status: 'idle', // loading status (idle, loading, succeeded, failed)
  error: null,
};

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder // Fetch Data
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
        state.error = action.payload || 'An error occurred';
      });
  },
});

export default HomeSlice.reducer;

import { UserApiClient } from '../../Api/UserApiService';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';

export interface UpdatedData {
  name?: string;
  username?: string;
  bio?: string;
  gender?: string;
  file?: File;
}

interface UpdatedDataProp {
  url: string;
  userId: string | null;
  data: UpdatedData;
  config?: AxiosRequestConfig;
}

export const UpdateData = createAsyncThunk(
  'app/updateUser',
  async (
    { url, userId, data, config = {} }: UpdatedDataProp,
    { rejectWithValue }
  ) => {
    try {
      return UserApiClient.updatePatch(url, data, userId, config);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export interface AppState {
  updateData: UpdatedData;
  status: string;
  error: null | object;
}

const initialState: AppState = {
  updateData: {
    name: '',
    username: '',
    bio: '',
    gender: '',
    file: undefined,
  },
  status: 'idle',
  error: null,
};

const ApplayoutSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUpdateData(state, action) {
      state.updateData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UpdateData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(UpdateData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.updateData = action.payload;
      })
      .addCase(UpdateData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'An error occurred';
      });
  },
});

export const { setUpdateData } = ApplayoutSlice.actions;

export default ApplayoutSlice.reducer;

import { UserApiClient } from '../../Api/AspDotNetAPis/UserApiService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';

export interface UpdatedFormData {
  Name?: string;
  username?: string;
  bio?: string;
  gender?: string;
  file?: File;
}
export interface UpdatedData {
  name?: string;
  username?: string;
  bio?: string;
  gender?: string;
}

interface UpdatedDataProp {
  url: string;
  userId: string | null;
  data: FormData | UpdatedFormData;
  config?: AxiosRequestConfig;
}

export const UpdateData = createAsyncThunk(
  'app/updateUser',
  async (
    { url, userId, data, config = {} }: UpdatedDataProp,
    { rejectWithValue }
  ) => {
    try {
      return await UserApiClient.updatePatch(url, data, userId, config);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export interface AppState {
  updateData: UpdatedData;
  status: string;
  layoutError: null | string;
}

export const initialState: AppState = {
  updateData: {
    name: '',
    username: '',
    bio: '',
    gender: '',
  },
  status: 'idle',
  layoutError: null,
};

const ApplayoutSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUpdateData(state, action) {
      state.updateData = { ...state.updateData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UpdateData.pending, (state) => {
        state.status = 'loading';
        state.layoutError = null;
      })
      .addCase(UpdateData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const { name, value } = action.payload;
        state.updateData = {
          ...state.updateData,
          [name]: value, // Update the specific field based on name and value
        };
      })
      .addCase(UpdateData.rejected, (state, action) => {
        state.status = 'rejected';
        state.layoutError =
          typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred';
      });
  },
});

export const { setUpdateData } = ApplayoutSlice.actions;

export default ApplayoutSlice.reducer;

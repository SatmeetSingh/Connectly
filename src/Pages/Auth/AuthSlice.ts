import { createSlice } from '@reduxjs/toolkit';

export interface Data {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  Email: string;
  Password: string;
}

interface state {
  isAuthenticated: boolean;
  formData: Data;
  loginData: LoginData;
  errors: { field: string; message: string }[];
  isShown: boolean;
  loading: boolean;
}

// export const SignUpUser = As;

const initialState: state = {
  isAuthenticated: false,
  formData: {
    username: '',
    email: '',
    password: '',
  },
  loginData: {
    Email: '',
    Password: '',
  },
  errors: [],
  isShown: false,
  loading: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setIsShown: (state, action) => {
      state.isShown = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const {
  setFormData,
  setIsAuthenticated,
  setIsShown,
  setLoginData,
  setLoading,
  setErrors,
} = AuthSlice.actions;

export default AuthSlice.reducer;

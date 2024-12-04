import { createSlice } from '@reduxjs/toolkit';

interface Data {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface state {
  isAuthenticated: boolean;
  formData: Data;
  loginData: LoginData;
  errors: { field: string; message: string }[];
  isShown: boolean;
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
    email: '',
    password: '',
  },
  errors: [],
  isShown: false,
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
    setIsShown: (state, action) => {
      state.isShown = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setFormData, setIsAuthenticated, setIsShown, setErrors } =
  AuthSlice.actions;

export default AuthSlice.reducer;

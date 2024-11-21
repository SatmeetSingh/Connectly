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
  formData: Data;
  loginData: LoginData;
  errors: { field: string; message: string }[];
  isShown: boolean;
}

// export const SignUpUser = As;

const initialState: state = {
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
  isShown: true,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;

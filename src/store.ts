import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Pages/AuthSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

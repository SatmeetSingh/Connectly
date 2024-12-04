import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Pages/Auth/AuthSlice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

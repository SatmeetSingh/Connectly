import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Pages/Auth/AuthSlice';
import homeReducer from './Pages/HomePage/HomeSlice';
import AppReducer from './Pages/AppLayout/layoutSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    app: AppReducer,
  },
});

export default store;

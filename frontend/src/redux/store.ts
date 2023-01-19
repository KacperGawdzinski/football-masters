import { configureStore } from '@reduxjs/toolkit';
import seasonReducer from './seasonSlice';

export const store = configureStore({
  reducer: {
    season: seasonReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

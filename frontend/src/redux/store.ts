import { configureStore } from '@reduxjs/toolkit';
import seasonReducer from './seasonSlice';
import loginReducer from './loginSlice';

export const store = configureStore({
  reducer: {
    season: seasonReducer,
    login: loginReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

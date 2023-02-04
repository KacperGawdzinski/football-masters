import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
  login: string;
  jwt: string;
}

const initialState: LoginState = {
  login: '',
  jwt: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<LoginState>) => {
      state.login = action.payload.login;
      state.jwt = action.payload.jwt;
    }
  }
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;

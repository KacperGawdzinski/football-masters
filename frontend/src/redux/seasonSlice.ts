import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SeasonState {
  season: number;
}

const initialState: SeasonState = {
  season: 2022
};

export const seasonSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {
    setSeason: (state, action: PayloadAction<number>) => {
      state.season = action.payload;
    }
  }
});

export const { setSeason } = seasonSlice.actions;

export default seasonSlice.reducer;

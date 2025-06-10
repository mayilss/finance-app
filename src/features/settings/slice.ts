import { type Theme, type ThemeState } from "@features/settings/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: ThemeState = {
  mode: "system",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.mode = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

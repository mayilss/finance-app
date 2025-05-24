import type { RootState } from "@app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectTheme = createSelector(
  (state) => state,
  (state: RootState) => state.theme,
);

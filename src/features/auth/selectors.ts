import type { RootState } from "@app/store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  Boolean(state.auth.user);
export const selectUsername = (state: RootState) =>
  state.auth.user ? state.auth.user.username : null;

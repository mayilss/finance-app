import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AuthState, LoginFormValues } from "./types";

const initialState: AuthState = { user: null, error: null };
const expectedPassword = "0000";

export const loginAsync = createAsyncThunk<
  AuthState["user"],
  LoginFormValues,
  { rejectValue: string }
>("auth/login", async ({ username, password }, thunkAPI) => {
  if (password !== expectedPassword) {
    return thunkAPI.rejectWithValue("Invalid password");
  }
  return { username };
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.error = action.payload ?? action.error.message!;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

import { afterEach, describe, expect, it, vi } from "vitest";
import authReducer, { loginAsync, logout } from "../slice";
import type { AuthState } from "../types";

afterEach(vi.clearAllMocks);

describe("authSlice", () => {
  describe("loginAsync thunk", () => {
    it("fulfills with user data when password is correct", async () => {
      const dispatch = vi.fn();
      const getState = vi.fn();

      const thunk = loginAsync({ username: "john", password: "0000" });
      const result = await thunk(dispatch, getState, undefined);

      expect(result.type).toBe(loginAsync.fulfilled.type);
      expect(result.payload).toEqual({ username: "john" });
    });

    it("rejects with error message when password is incorrect", async () => {
      const dispatch = vi.fn();
      const getState = vi.fn();

      const thunk = loginAsync({ username: "john", password: "wrong" });
      const result = await thunk(dispatch, getState, undefined);

      expect(result.type).toBe(loginAsync.rejected.type);
      expect(result.payload).toBe("Invalid password");
    });
  });

  describe("reducer", () => {
    const initialState: AuthState = { user: null, error: null };

    it("handles loginAsync.fulfilled", () => {
      const action = {
        type: loginAsync.fulfilled.type,
        payload: { username: "john" },
      };
      const stateAfter = authReducer(initialState, action);
      expect(stateAfter).toEqual({ user: { username: "john" }, error: null });
    });

    it("handles loginAsync.rejected", () => {
      const action = {
        type: loginAsync.rejected.type,
        payload: "Invalid password",
      };
      const state = authReducer(initialState, action);
      expect(state).toEqual({ user: null, error: "Invalid password" });
    });

    it("handles logout", () => {
      const initialState: AuthState = {
        user: { username: "john" },
        error: null,
      };
      const stateAfter = authReducer(initialState, logout());
      expect(stateAfter).toEqual({ user: null, error: null });
    });
  });
});

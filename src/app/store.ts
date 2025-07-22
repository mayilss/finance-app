import authReducer from "@features/auth/slice";
import type { AuthState } from "@features/auth/types";
import themeReducer from "@features/settings/slice";
import type { ThemeState } from "@features/settings/types";
import transactionsReducer from "@features/transactions/slice";
import { debounce } from "@lib/debounce";
import { loadState, saveState } from "@lib/persist";
import { configureStore } from "@reduxjs/toolkit";
import type { TransactionState } from "@features/transactions/types";

export type PreloadedState = {
  transactions: TransactionState;
  theme: ThemeState;
  auth: AuthState;
};

const preloadedState = loadState();

export const store = configureStore({
  preloadedState,
  reducer: {
    transactions: transactionsReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});

const debouncedSaveState = debounce(saveState, 300);

store.subscribe(() => {
  const state = store.getState();
  debouncedSaveState(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "@features/transactions/slice";
import themeReducer from "@features/settings/theme/slice";
import { loadState, saveState } from "@lib/persist";
import type { TransactionState } from "./types/transaction";
import type { ThemeState } from "@app/types/settings";

export type PreloadedState = {
  transactions: TransactionState;
  theme: ThemeState;
};

const preloadedState = loadState();

export const store = configureStore({
  preloadedState,
  reducer: {
    transactions: transactionsReducer,
    theme: themeReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

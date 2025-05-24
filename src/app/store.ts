import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "@features/transactions/slice";
import themeReducer from "@features/settings/theme/slice";
import { loadState, saveState } from "@lib/persist";
import type { TransactionState } from "./types/transaction";
import type { ThemeState } from "@app/types/settings";
import { debounce } from "@lib/debounce";

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

const debouncedSaveState = debounce(saveState, 300);

store.subscribe(() => {
  const state = store.getState();
  debouncedSaveState(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

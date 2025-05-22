import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "@features/transactions/slice";
import { loadState, saveState } from "@lib/persist";
import type { TransactionState } from "./types/transaction";

export type PreloadedState = {
  transactions: TransactionState;
};

const preloadedState = loadState();

export const store = configureStore({
  preloadedState,
  reducer: {
    transactions: transactionReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

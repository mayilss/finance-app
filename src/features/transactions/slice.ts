import type { Transaction } from "@app/types/transaction";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TransactionState = { [id: string]: Transaction };

const initialState: TransactionState = {};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, { payload }: PayloadAction<Transaction>) => {
      state[payload.id] = payload;
    },
    removeTransaction: (state, { payload }: PayloadAction<string>) => {
      delete state[payload];
    },
  },
});

export const selectTransactions = (state: { transactions: TransactionState }) =>
  Object.values(state.transactions);

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;

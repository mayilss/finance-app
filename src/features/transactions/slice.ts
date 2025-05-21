import type { Transaction, TransactionState } from "@app/types/transaction";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;

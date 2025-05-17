import type { Transaction } from "@app/types/transaction";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Transaction[] = [];

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, { payload }: PayloadAction<Transaction>) => {
      state.push(payload);
    },
    removeTransaction: (state, { payload }: PayloadAction<string>) => {
      state = state.filter((transaction) => transaction.id != payload);
    },
  },
});

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;

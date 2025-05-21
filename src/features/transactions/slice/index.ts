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
      const index = state.findIndex(
        (transaction) => transaction.id === payload,
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;

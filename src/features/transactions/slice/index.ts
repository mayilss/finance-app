import type { Transaction } from "@app/types/transaction";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Transaction[] = [];

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, { payload }) => {
      state.push(payload);
    },
    removeTransaction: () => {},
  },
});

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;

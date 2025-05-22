import type { TransactionState } from "@app/types/transaction";
import { createSelector } from "@reduxjs/toolkit";

export const selectTransactionsState = (state: {
  transactions: TransactionState;
}) => state.transactions;

export const selectTransactions = createSelector(
  [selectTransactionsState],
  (transactions) => Object.values(transactions),
);

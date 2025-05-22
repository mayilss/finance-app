import {
  TRANSACTION_TYPES,
  type TransactionState,
} from "@app/types/transaction";
import { createSelector } from "@reduxjs/toolkit";

export const selectTransactionsState = (state: {
  transactions: TransactionState;
}) => state.transactions;

export const selectTransactions = createSelector(
  [selectTransactionsState],
  (transactions) => Object.values(transactions),
);

export const selectTotalIncome = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === TRANSACTION_TYPES[0])
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
);

export const selectTotalExpence = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === TRANSACTION_TYPES[1])
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
);

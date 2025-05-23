import {
  TRANSACTION_TYPES,
  type TransactionState,
} from "@app/types/transaction";
import { formatDate } from "@lib/format";
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

export const selectTotalExpense = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === TRANSACTION_TYPES[1])
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
);

export const selectTotalBalance = createSelector(
  [selectTotalIncome, selectTotalExpense],
  (totalIncome, totalExpense) => {
    return totalIncome - totalExpense;
  },
);

export const selectNetBalanceChartData = createSelector(
  [selectTransactions],
  (transactions) => {
    let netBalance = 0;

    const data = transactions.map((transaction) => {
      if (transaction.type === TRANSACTION_TYPES[0]) {
        netBalance += transaction.amount;
      } else {
        netBalance -= transaction.amount;
      }
      return {
        name: formatDate(transaction.date, true),
        uv: netBalance,
      };
    });

    return data;
  },
);

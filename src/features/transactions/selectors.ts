import type { RootState } from "@app/store";
import { formatDate } from "@lib/format";
import { createSelector } from "@reduxjs/toolkit";

export const selectTransactionsState = createSelector(
  (state) => state,
  (state: RootState) => state.transactions,
);

export const selectTransactions = createSelector(
  [selectTransactionsState],
  (transactions) => Object.values(transactions),
);

export const selectTotalIncome = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
);

export const selectTotalExpense = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === "expense")
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
      if (transaction.type === "income") {
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

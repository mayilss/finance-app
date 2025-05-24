import type { RootState } from "@app/store";
import type { ChartData } from "@app/types/charts";
import type { TransactionState } from "@app/types/transaction";
import { createSelector } from "@reduxjs/toolkit";

export const selectTransactionsState: (state: RootState) => TransactionState = (
  state: RootState,
) => state.transactions;

export const selectTransactions = createSelector(
  [selectTransactionsState],
  (transactions) => Object.values(transactions),
);

export const selectTotalIncome: (state: RootState) => number = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
);

export const selectTotalExpense: (state: RootState) => number = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
);

export const selectTotalBalance: (state: RootState) => number = createSelector(
  [selectTotalIncome, selectTotalExpense],
  (totalIncome, totalExpense) => {
    return totalIncome - totalExpense;
  },
);

export const selectNetBalanceChartData: (state: RootState) => ChartData =
  createSelector([selectTransactions], (transactions) => {
    let netBalance = 0;

    const data = transactions.map((transaction) => {
      if (transaction.type === "income") {
        netBalance += transaction.amount;
      } else {
        netBalance -= transaction.amount;
      }
      return {
        name: transaction.date,
        uv: netBalance,
      };
    });

    return data;
  });

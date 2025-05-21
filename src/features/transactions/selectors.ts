import type { TransactionState } from "@app/types/transaction";

export const selectTransactions = (state: { transactions: TransactionState }) =>
  Object.values(state.transactions);

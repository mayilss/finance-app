import type { Transaction, TransactionFormValues } from "./types";

export const createTransaction = (data: TransactionFormValues): Transaction => {
  return {
    ...data,
    id: crypto.randomUUID(),
    date: new Date().toLocaleString("en-GB"),
    amount: Number(data.amount),
  };
};

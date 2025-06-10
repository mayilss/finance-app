export const TRANSACTION_TYPES = ["income", "expense"] as const;
export type TransactionType = (typeof TRANSACTION_TYPES)[number];

export interface Transaction {
  id: string;
  label: string;
  amount: number;
  date: string;
  type: TransactionType;
}

export type TransactionState = Record<string, Transaction>;

export type TransactionFormValues = Omit<
  Transaction,
  "amount" | "id" | "date"
> & {
  amount: string;
};

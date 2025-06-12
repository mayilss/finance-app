import { useAppDispatch } from "@app/hooks";
import React from "react";
import type { TransactionFormValues } from "./types";
import { createTransaction } from "./utils";
import { addTransaction } from "./slice";

export const useAddTransaction = () => {
  const dispatch = useAppDispatch();

  return React.useCallback((data: TransactionFormValues) => {
    const transaction = createTransaction(data);
    dispatch(addTransaction(transaction));
  }, []);
};

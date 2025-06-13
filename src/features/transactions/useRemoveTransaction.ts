import { useAppDispatch } from "@app/hooks";
import React from "react";
import { removeTransaction } from "./slice";

export const useRemoveTransaction = () => {
  const dispatch = useAppDispatch();

  return React.useCallback((id: string) => {
    dispatch(removeTransaction(id));
  }, []);
};

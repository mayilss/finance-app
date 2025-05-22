import {
  type Transaction,
  type TransactionState,
} from "@/app/types/transaction";
import transactionReducer, {
  addTransaction,
  removeTransaction,
} from "@features/transactions/slice";
import { cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

afterEach(cleanup);

describe("addTransaction", () => {
  it("should handle adding a new transaction", () => {
    const initialState: TransactionState = {};

    const newTransaction: Transaction = {
      id: "123",
      amount: 100,
      date: "2025-05-17",
      label: "Groceries",
    };

    const stateAfter = transactionReducer(
      initialState,
      addTransaction(newTransaction),
    );

    const values = Object.values(stateAfter);

    expect(values).toHaveLength(1);
    expect(values[0]).toEqual(newTransaction);
    expect(stateAfter).not.toBe(initialState);
  });

  it("should correctly handle multiple transactions", () => {
    const initialState: TransactionState = {
      "1": {
        id: "1",
        amount: 50,
        label: "Utilities",
        date: "2025-05-16",
      },
    };

    const newTransaction: Transaction = {
      id: "2",
      amount: 200,
      label: "Salary",
      date: "2025-05-17",
    };

    const stateAfter = transactionReducer(
      initialState,
      addTransaction(newTransaction),
    );

    const values = Object.values(stateAfter);

    expect(values).toHaveLength(2);
    expect(values[1]).toEqual(newTransaction);
    expect(stateAfter).not.toBe(initialState);
  });
});

describe("removeTransaction", () => {
  it("should handle removing a transaction", () => {
    const initialState: TransactionState = {
      "1": {
        id: "1",
        amount: 50,
        label: "Utilities",
        date: "2025-05-16",
      },
      "2": {
        id: "2",
        amount: 200,
        label: "Salary",
        date: "2025-05-17",
      },
    };

    const stateAfter = transactionReducer(initialState, removeTransaction("1"));

    const values = Object.values(stateAfter);

    expect(values).toHaveLength(1);
    expect(values[0].id).toBe("2");
    expect(stateAfter).not.toBe(initialState);
  });
});

import { describe, it, expect } from "vitest";
import transactionReducer, {
  addTransaction,
  removeTransaction,
} from "@features/transactions/slice";
import { type Transaction } from "@/app/types/transaction";

describe("addTransaction", () => {
  it("should handle adding a new transaction", () => {
    const initialState: Transaction[] = [];

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

    expect(stateAfter).toHaveLength(1);
    expect(stateAfter[0]).toEqual(newTransaction);
  });

  it("should correctly handle multiple transactions", () => {
    const initialState = [
      {
        id: "1",
        amount: 50,
        label: "Utilities",
        date: "2025-05-16",
      },
    ];

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

    expect(stateAfter).toHaveLength(2);
    expect(stateAfter[1]).toEqual(newTransaction);
  });
});

describe("removeTransaction", () => {
  it("should handle removing a transaction", () => {
    const initialState: Transaction[] = [
      {
        id: "1",
        amount: 50,
        label: "Utilities",
        date: "2025-05-16",
      },
      {
        id: "2",
        amount: 200,
        label: "Salary",
        date: "2025-05-17",
      },
    ];

    const stateAfter = transactionReducer(initialState, removeTransaction("1"));

    expect(stateAfter).toHaveLength(1);
    expect(stateAfter[0].id).toBe("2");
  });
});

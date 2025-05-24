import type { RootState } from "@app/store";
import { type Transaction } from "@app/types/transaction";
import { cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  selectTotalBalance,
  selectTotalExpense,
  selectTotalIncome,
  selectTransactions,
} from "../selectors";

afterEach(cleanup);
type TransactionTestRootState = Pick<RootState, "transactions">;

describe("select transactions", () => {
  it("should select all transactions", () => {
    const state: TransactionTestRootState = {
      transactions: {
        1: {
          id: "1",
          type: "income",
          amount: 100,
          date: "2023-01-01",
          label: "Salary",
        },
        2: {
          id: "2",
          type: "expense",
          amount: 50,
          date: "2023-01-02",
          label: "Groceries",
        },
      },
    };

    const expectedTransactions: Transaction[] = [
      {
        id: "1",
        type: "income",
        amount: 100,
        date: "2023-01-01",
        label: "Salary",
      },
      {
        id: "2",
        type: "expense",
        amount: 50,
        date: "2023-01-02",
        label: "Groceries",
      },
    ];

    expect(selectTransactions(state)).toEqual(expectedTransactions);
  });
});

describe("select total income", () => {
  it("should select total income", () => {
    const state: TransactionTestRootState = {
      transactions: {
        "1": {
          id: "1",
          type: "income",
          amount: 100,
          date: "2023-01-01",
          label: "Salary",
        },
        "2": {
          id: "2",
          type: "expense",
          amount: 50,
          date: "2023-01-02",
          label: "Groceries",
        },
        "3": {
          id: "3",
          type: "income",
          amount: 50,
          date: "2023-01-03",
          label: "Bonus",
        },
      },
    };

    expect(selectTotalIncome(state)).toEqual(150);
  });
});

describe("select total expense", () => {
  it("should select total expense", () => {
    const state: TransactionTestRootState = {
      transactions: {
        "1": {
          id: "1",
          type: "income",
          amount: 100,
          date: "2023-01-01",
          label: "Salary",
        },
        "2": {
          id: "2",
          type: "expense",
          amount: 50,
          date: "2023-01-02",
          label: "Groceries",
        },
        "3": {
          id: "3",
          type: "expense",
          amount: 30,
          date: "2023-01-03",
          label: "Utilities",
        },
      },
    };

    expect(selectTotalExpense(state)).toEqual(80);
  });
});

describe("select net balance", () => {
  it("should select net balance", () => {
    const state: TransactionTestRootState = {
      transactions: {
        "1": {
          id: "1",
          type: "income",
          amount: 100,
          date: "2023-01-01",
          label: "Salary",
        },
        "2": {
          id: "2",
          type: "expense",
          amount: 50,
          date: "2023-01-02",
          label: "Groceries",
        },
        "3": {
          id: "3",
          type: "expense",
          amount: 30,
          date: "2023-01-03",
          label: "Utilities",
        },
      },
    };

    expect(selectTotalBalance(state)).toEqual(20);
  });
});

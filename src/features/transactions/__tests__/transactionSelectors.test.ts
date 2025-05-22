import type { RootState } from "@app/store";
import { TRANSACTION_TYPES, type Transaction } from "@app/types/transaction";
import { afterEach, describe, expect, it } from "vitest";
import {
  selectTotalExpence,
  selectTotalIncome,
  selectTransactions,
} from "../selectors";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("select transactions", () => {
  const [Income, Expense] = TRANSACTION_TYPES;
  it("should select all transactions", () => {
    const state: RootState = {
      transactions: {
        1: {
          id: "1",
          type: Income,
          amount: 100,
          date: "2023-01-01",
          label: "Salary",
        },
        2: {
          id: "2",
          type: Expense,
          amount: 50,
          date: "2023-01-02",
          label: "Groceries",
        },
      },
    };

    const expectedTransactions: Transaction[] = [
      {
        id: "1",
        type: Income,
        amount: 100,
        date: "2023-01-01",
        label: "Salary",
      },
      {
        id: "2",
        type: Expense,
        amount: 50,
        date: "2023-01-02",
        label: "Groceries",
      },
    ];

    expect(selectTransactions(state)).toEqual(expectedTransactions);
  });
});

describe("select total income", () => {
  const [Income, Expense] = TRANSACTION_TYPES;
  it("should select total income", () => {
    const state: RootState = {
      transactions: {
        "1": {
          id: "1",
          type: Income,
          amount: 100,
          date: "2023-01-01",
          label: "Salary",
        },
        "2": {
          id: "2",
          type: Expense,
          amount: 50,
          date: "2023-01-02",
          label: "Groceries",
        },
        "3": {
          id: "3",
          type: Income,
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
  const [Income, Expense] = TRANSACTION_TYPES;
  it("should select total expense", () => {
    const state: RootState = {
      transactions: {
        "1": {
          id: "1",
          type: Income,
          amount: 100,
          date: "2023-01-01",
          label: "Salary",
        },
        "2": {
          id: "2",
          type: Expense,
          amount: 50,
          date: "2023-01-02",
          label: "Groceries",
        },
        "3": {
          id: "3",
          type: Expense,
          amount: 30,
          date: "2023-01-03",
          label: "Utilities",
        },
      },
    };

    expect(selectTotalExpence(state)).toEqual(80);
  });
});

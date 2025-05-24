import type { RootState } from "@app/store";
import { type Transaction } from "@app/types/transaction";
import { cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  selectNetBalanceChartData,
  selectTotalBalance,
  selectTotalExpense,
  selectTotalIncome,
  selectTransactions,
} from "../selectors";

describe("select transactions", () => {
  afterEach(cleanup);
  const state: RootState = {
    transactions: {
      1: {
        id: "1",
        type: "income",
        amount: 100,
        date: "01/01/2025, 00:00:00",
        label: "Salary",
      },
      2: {
        id: "2",
        type: "expense",
        amount: 50,
        date: "02/01/2025, 00:00:00",
        label: "Groceries",
      },
      3: {
        id: "3",
        type: "expense",
        amount: 30,
        date: "03/01/2025, 00:00:00",
        label: "Gambling",
      },
    },
    theme: {
      mode: "system",
    },
  };
  it("should select all transactions", () => {
    const expectedTransactions: Transaction[] = [
      {
        id: "1",
        type: "income",
        amount: 100,
        date: "01/01/2025, 00:00:00",
        label: "Salary",
      },
      {
        id: "2",
        type: "expense",
        amount: 50,
        date: "02/01/2025, 00:00:00",
        label: "Groceries",
      },
      {
        id: "3",
        type: "expense",
        amount: 30,
        date: "03/01/2025, 00:00:00",
        label: "Gambling",
      },
    ];

    expect(selectTransactions(state)).toEqual(expectedTransactions);
  });

  it("should select total income", () => {
    expect(selectTotalIncome(state)).toEqual(100);
  });

  it("should select total expense", () => {
    expect(selectTotalExpense(state)).toEqual(80);
  });

  it("should select net balance", () => {
    expect(selectTotalBalance(state)).toEqual(20);
  });

  it("should select chart data", () => {
    const expectedChartData = [
      { name: "01/01/2025, 00:00:00", uv: 100 },
      { name: "02/01/2025, 00:00:00", uv: 50 },
      { name: "03/01/2025, 00:00:00", uv: 20 },
    ];

    expect(selectNetBalanceChartData(state)).toEqual(expectedChartData);
  });
});

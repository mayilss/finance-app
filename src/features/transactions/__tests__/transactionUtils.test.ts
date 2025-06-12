import { describe, expect, it, vi } from "vitest";
import { createTransaction } from "@features/transactions/utils";
import type { TransactionFormValues } from "../types";

vi.spyOn(global.crypto, "randomUUID").mockReturnValue("123-123-123-123-123");

describe("createTransaction", () => {
  it("should convert form values to a transaction", () => {
    const values: TransactionFormValues = {
      label: "Test",
      amount: "50",
      type: "income",
    };
    const result = createTransaction(values);
    expect(result).toMatchObject({
      id: "123-123-123-123-123",
      label: "Test",
      amount: 50,
      type: "income",
    });
    expect(typeof result.date).toBe("string");
  });
});

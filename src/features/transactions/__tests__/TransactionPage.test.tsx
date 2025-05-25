import type { TransactionFormValues } from "@app/types/transaction";
import { capitalizeFirstLetterLocale, formatCurrency } from "@lib/format";
import renderWithRedux from "@lib/render-with-redux";
import TransactionPage from "@pages/TransactionsPage";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

afterEach(cleanup);

describe("TransactionPage integration", () => {
  it("lets a user add a transaction and see it in the table", async () => {
    renderWithRedux(<TransactionPage />);

    const typeInput = screen.getByLabelText(/Transaction Type/i, {
      selector: "select",
    }) as HTMLSelectElement;
    const labelInput = screen.getByLabelText(/Label/i, {
      selector: "input",
    }) as HTMLInputElement;
    const amountInput = screen.getByLabelText(/Amount/i, {
      selector: "input",
    }) as HTMLInputElement;
    const addButton = screen.getByRole("button", { name: /Add/i });

    const testData: TransactionFormValues = {
      label: "Test Transaction",
      amount: "100",
      type: "income",
    };

    await userEvent.type(typeInput, testData.type);

    await userEvent.clear(labelInput);
    await userEvent.type(labelInput, testData.label);

    await userEvent.clear(amountInput);
    await userEvent.type(amountInput, testData.amount);

    await userEvent.click(addButton);

    expect(labelInput.value).toBe("");
    expect(amountInput.value).toBe("");
    expect(typeInput.value).toBe("income");

    expect(screen.getByText(testData.label)).toBeDefined();
    expect(
      screen.getByText(formatCurrency(Number(testData.amount))),
    ).toBeDefined();
    expect(
      screen.getByText(capitalizeFirstLetterLocale(testData.type), {
        selector: "span",
      }),
    ).toBeDefined();
  });
});

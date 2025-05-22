import { TRANSACTION_TYPES } from "@app/types/transaction";
import transactionReducer from "@features/transactions/slice";
import { formatCurrency } from "@lib/format";
import TransactionPage from "@pages/TransactionsPage";
import { configureStore } from "@reduxjs/toolkit";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { afterEach, describe, expect, it } from "vitest";

afterEach(cleanup);

function renderWithRedux(ui: React.ReactElement) {
  const store = configureStore({
    reducer: { transactions: transactionReducer },
  });
  return render(<Provider store={store}>{ui}</Provider>);
}

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
    const addButton = screen.getByRole("button", { name: /Add|Submit/i });

    const testData = {
      label: "Test Transaction",
      amount: "100",
      type: TRANSACTION_TYPES[0], // Assuming this is "Income"
    };

    // await userEvent.clear(typeInput);
    await userEvent.type(typeInput, testData.type);

    await userEvent.clear(labelInput);
    await userEvent.type(labelInput, testData.label);

    await userEvent.clear(amountInput);
    await userEvent.type(amountInput, testData.amount);

    await userEvent.click(addButton);

    expect(labelInput.value).toBe("");
    expect(amountInput.value).toBe("");
    expect(typeInput.value).toBe(TRANSACTION_TYPES[0]);

    expect(screen.getByText(testData.label)).toBeDefined();
    expect(
      screen.getByText(formatCurrency(Number(testData.amount))),
    ).toBeDefined();
    expect(
      screen.getByText(testData.type, {
        selector: "span",
      }),
    ).toBeDefined();
  });
});

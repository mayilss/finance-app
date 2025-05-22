// import transactionReducer from "@features/transactions/slice";
// import TransactionPage from "@pages/TransactionsPage";
// import { configureStore } from "@reduxjs/toolkit";
// import { cleanup, fireEvent, render } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { afterEach, describe, expect, it } from "vitest";
// import "@testing-library/jest-dom";

// afterEach(cleanup);

// function renderWithRedux(ui: React.ReactElement) {
//   const store = configureStore({
//     reducer: { transactions: transactionReducer },
//   });
//   return render(<Provider store={store}>{ui}</Provider>);
// }

// describe("TransactionPage integration", () => {
//   it("lets a user add a transaction and see it in the table", async () => {
//     const screen = renderWithRedux(<TransactionPage />);

//     const labelInput = screen.getByLabelText(/Label/i, { selector: "input" });
//     const amountInput = screen.getByLabelText(/Amount/i, { selector: "input" });
//     const addButton = screen.getByRole("button", { name: /Add/i });

//     const testData = {
//       label: "Test Transaction",
//       amount: "100",
//     };

//     fireEvent.change(labelInput, {
//       target: { value: testData.label },
//     });
//     fireEvent.change(amountInput, {
//       target: { value: testData.amount },
//     });

//     await addButton.click();

//     await expect((labelInput as HTMLInputElement).value).toBe("");
//     await expect((amountInput as HTMLInputElement).value).toBe("0");
//     await expect(screen.getByText(testData.label)).toBeDefined();
//     await expect(screen.getByText(testData.amount)).toBeDefined();
//   });
// });

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
    };

    await userEvent.clear(labelInput);
    await userEvent.type(labelInput, testData.label);

    await userEvent.clear(amountInput);
    await userEvent.type(amountInput, testData.amount);

    await userEvent.click(addButton);

    expect(labelInput.value).toBe("");
    expect(amountInput.value).toBe("0");

    expect(screen.getByText(testData.label)).toBeDefined();
    expect(
      screen.getByText(formatCurrency(Number(testData.amount))),
    ).toBeDefined();
  });
});

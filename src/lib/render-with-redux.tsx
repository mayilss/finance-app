import transactionReducer from "@features/transactions/slice";
import { configureStore, type ConfigureStoreOptions } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

function renderWithRedux(
  ui: React.ReactElement,
  options?: Omit<ConfigureStoreOptions, "reducer">,
) {
  const store = configureStore({
    reducer: { transactions: transactionReducer },
    ...options,
  });
  return render(<Provider store={store}>{ui}</Provider>);
}

export default renderWithRedux;

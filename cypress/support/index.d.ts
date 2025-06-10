/// <reference types="cypress" />
import { type TransactionFormValues } from "../../src/features/transactions/types";

declare global {
  namespace Cypress {
    interface Chainable {
      addTransaction(transaction: TransactionFormValues): Chainable<void>;
    }
  }
}
export {};

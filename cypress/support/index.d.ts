/// <reference types="cypress" />
import { type TransactionFormValues } from "../../src/app/types/transaction";

declare global {
  namespace Cypress {
    interface Chainable {
      addTransaction(transaction: TransactionFormValues): Chainable<void>;
    }
  }
}
export {};

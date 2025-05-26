/// <reference types="./index.d.ts" />
import { type TransactionFormValues } from "../../src/app/types/transaction";

Cypress.Commands.add("addTransaction", (transaction: TransactionFormValues) => {
  cy.get('[data-cy="transaction-type"]').select(transaction.type);
  cy.get('[data-cy="transaction-label"]').type(transaction.label);
  cy.get('[data-cy="transaction-amount"]').type(transaction.amount);
  cy.get('[data-cy="add-transaction"]').click();
});

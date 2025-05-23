/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    addTransaction(transaction: {
      type: string;
      label: string;
      amount: string;
    }): Chainable<Subject>;
  }
}

Cypress.Commands.add("addTransaction", (transaction) => {
  cy.get('[data-cy="transaction-type"]').select(transaction.type);
  cy.get('[data-cy="transaction-label"]').type(transaction.label);
  cy.get('[data-cy="transaction-amount"]').type(transaction.amount);
  cy.get('[data-cy="add-transaction"]').click();
});

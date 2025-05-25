describe("Dashboard Transactions Flow", function () {
  beforeEach(() => {
    cy.fixture("transactions").as("transactions");
  });

  afterEach(function () {
    if (this.currentTest?.state === "failed") {
      cy.screenshot(`${Cypress.spec.name}/${this.currentTest.title} -- failed`);
    }
  });

  it("should add and delete a transaction and update net balance", function () {
    cy.visit("/");
    cy.get('[data-cy="net-balance"]').should("have.text", "Net Balance: $0.00");

    cy.visit("/transactions");

    // Add transactions
    this.transactions.forEach((transaction) => {
      cy.addTransaction(transaction);
    });

    // Verify the transactions are added
    this.transactions.forEach((transaction) => {
      cy.get('[data-cy="transaction-row"]').should(
        "contain",
        transaction.label,
      );
      cy.get('[data-cy="transaction-row"]').should(
        "contain",
        transaction.amount,
      );
      // cy.get('[data-cy="transaction-row"]').should("contain", transaction.type);
    });

    // Verify the total results are displayed
    cy.get('[data-cy="total-income"]').should(
      "have.text",
      "Total Income: $200.00",
    );
    cy.get('[data-cy="total-expense"]').should(
      "have.text",
      "Total Expense: $100.00",
    );

    // Verify the net balance is updated
    cy.window()
      .its("localStorage")
      .invoke("getItem", "state")
      .should((raw) => {
        const state = JSON.parse(raw as string);
        expect(Object.values(state.transactions)).to.have.length(4);
      });

    // Verify the net balance is updated
    cy.visit("/");
    cy.get('[data-cy="net-balance"]', { timeout: 1000 }).should(
      "have.text",
      "Net Balance: $100.00",
    );

    cy.visit("/transactions");

    // Delete the Income transaction
    cy.get('[data-cy="transaction-row"]')
      .contains("Groceries")
      .parent()
      .find("button")
      .click();

    // Verify the transaction is deleted
    cy.get('[data-cy="transaction-row"]').should("not.contain", "Groceries");
    cy.get('[data-cy="transaction-row"]').should("contain", "Bonus");

    // Verify the net balance is updated after deletion
    cy.window()
      .its("localStorage")
      .invoke("getItem", "state")
      .should((raw) => {
        const state = JSON.parse(raw as string);
        expect(Object.values(state.transactions)).to.have.length(3);
      });

    // Verify the net balance is updated after deletion
    cy.visit("/");
    cy.get('[data-cy="net-balance"]', { timeout: 1000 }).should(
      "have.text",
      "Net Balance: $150.00",
    );
  });
});

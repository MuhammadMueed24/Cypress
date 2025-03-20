class ConfirmationPage {
  addressConfirmation() {
    cy.get("#country").type("pakistan");
    cy.get(".suggestions ul li a", { timeout: 10000 }).click();
  }

  successfullOrderConfirmation() {
    cy.get(".btn-success").click();
    return cy.get(".alert-success");
  }
}

export default ConfirmationPage;

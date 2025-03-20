class ProductPage {
  pageValidation() {
    return cy.contains("Shop Name");
  }

  verifyCardLimit() {
    return cy.get("app-card");
  }

  selectProduct(productName) {
    cy.get("app-card")
      .filter(`:contains("${productName}")`)
      .then((ele) => {
        cy.wrap(ele).contains("button", "Add").click();
      });
  }

  selectFirstProduct() {
    cy.get("app-card").eq(0).contains("button", "Add").click();
  }

  gotoCart() {
    cy.contains("a", "Checkout").click();
  }
}

export default ProductPage;

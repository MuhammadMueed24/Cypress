class CartPage {
  verifyBill() {
    let sum = 0;
   return cy.get("tr td:nth-child(4) strong")
      .each(($ele) => {
        const amount = Number($ele.text().split(" ")[1].trim());
        sum += amount;
      })
      .then(() => {
        return cy.wrap(sum);
      });
  }

  checkout() {
    cy.contains("button", "Checkout").click();
  }
}

export default CartPage;

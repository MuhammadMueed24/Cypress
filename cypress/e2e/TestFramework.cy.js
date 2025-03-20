/// <reference types="cypress"/>

import CartPage from "../support/pageObjects/CartPage";
import ConfirmationPage from "../support/pageObjects/ConfirmationPage";
import HomePage from "../support/pageObjects/HomePage";
import ProductPage from "../support/pageObjects/ProductPage";

describe("End to end ecommerce test", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      cy.wrap(data).as("data");
    });
  });

  const homePage = new HomePage();
  const prodPage = new ProductPage();
  const cartPage = new CartPage();
  const confirmPage = new ConfirmationPage();

  it("Submit order", () => {
    cy.get("@data").then((data) => {
      const productName = data.productName;

      homePage.goTo(Cypress.env("url") + "/loginpagePractise/#");
      homePage.login(data.username, data.password);

      prodPage.pageValidation().should("be.visible");
      prodPage.verifyCardLimit().should("have.length", 4);
      prodPage.selectProduct(productName);
      prodPage.selectFirstProduct();
      prodPage.gotoCart();

      cartPage.verifyBill().then((sum) => {
        expect(sum).to.be.lessThan(200000);
      });
      cartPage.checkout();

      confirmPage.addressConfirmation();
      confirmPage.successfullOrderConfirmation().should("contain", "Success");
    });
  });
});

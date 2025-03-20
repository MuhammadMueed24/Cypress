const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const HomePage = require("../../support/pageObjects/HomePage");
const ProductPage = require("../../support/pageObjects/ProductPage");
const CartPage = require("../../support/pageObjects/CartPage");
const ConfirmPage = require("../../support/pageObjects/ConfirmationPage");

const homePage = new HomePage();
const prodPage = new ProductPage();
const cartPage = new CartPage();
const confirmPage = new ConfirmPage();
let testData;

before(() => {
  cy.fixture("example").then((data) => {
    testData = data;
  });
});

Given("I am on Ecommerce Page", () => {
  homePage.goTo(Cypress.env("url") + "/loginpagePractise/#");
});

When("I login to the application", () => {
  homePage.login(testData.username, testData.password);
  prodPage.pageValidation().should("be.visible");
});

When("I add items to cart", () => {
  prodPage.verifyCardLimit().should("have.length", 4);
  prodPage.selectProduct(testData.productName);
  prodPage.selectFirstProduct();
  prodPage.gotoCart();
});

When("Validate the total price limit and checkout", () => {
  cartPage.verifyBill().then((sum) => {
    expect(sum).to.be.lessThan(200000);
  });
  cartPage.checkout();
});

Then(
  "Select the country submit the address and verify the success message",
  () => {
    confirmPage.addressConfirmation();
    confirmPage.successfullOrderConfirmation().should("contain", "Success");
  }
);

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: "cypress-mochawesome-reporter",
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    viewportHeight: 720,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    //specPattern:"cypress/e2e/*.js",
  },
});

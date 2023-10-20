const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation:false,
    retries: 3,
    pageLoadTimeout:10000,
    baseUrl:'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

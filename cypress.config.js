const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation:false,
    retries: 3,
    pageLoadTimeout:100000,
    baseUrl:'https://qa-sp.docs-dev.bosch-fsde.com/saas/dochub/overview/8a80c0d18b426ef5018b42d8728c000c#pricing',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

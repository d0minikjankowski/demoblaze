const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoblaze.com/',
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "configFile": "reporter-config.json"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});

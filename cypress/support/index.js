// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//const localUrl = "http://localhost:3000"

// Added before and after each methods globaly for running before and after each tests

beforeEach(() => {
  cy.visit("/");
  window.sessionStorage.clear();
});

afterEach(() => {
cy.wait(1000);
});

//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

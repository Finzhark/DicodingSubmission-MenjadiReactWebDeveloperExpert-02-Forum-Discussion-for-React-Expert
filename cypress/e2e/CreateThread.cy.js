/**
 * skenario test
 *
 * - CreateThread
 *   - should create new thread successfully
 *     - visit the homepage
 *     - click on login button
 *     - enter email and password
 *     - click on login button and handle alert
 *     - wait for page to load and ensure add thread button is visible
 *     - click on add thread button
 *     - enter title, body, and category for the new thread
 *     - click on create thread button
 *     - wait for page to load and ensure add thread button is visible
 *     - logout after creating thread
 */

describe('CreateThread', () => {
  it('should create new thread successfully', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy=email]').type('e242090@dicoding.org');
    cy.get('[data-cy=password]').type('testing');
    cy.get('[data-cy=button-login]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Login Success');
    });
    cy.wait(500);
    cy.get('button').contains('OK').click();
    cy.wait(500);
    cy.get('[data-cy=add-thread]').should('be.visible').click();
    cy.get('[data-cy=title]').type('Ohayou Gozaimasu');
    cy.get('[data-cy=body-thread]').type('Watashi wa mahou shoujo!');
    cy.get('[data-cy=category]').type('Halusin Nasi');
    cy.get('[data-cy=button-create-thread]').click();
    cy.wait(3000);
    cy.contains('Ohayou Gozaimasu').should('exist');
    cy.get('[data-cy=logout]').click({ force: true });
  });
});

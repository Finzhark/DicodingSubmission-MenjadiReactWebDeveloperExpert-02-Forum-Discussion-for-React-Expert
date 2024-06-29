/**
 * skenario test
 *
 * - Login
 *   - should email or password not be empty
 *     - visit the homepage
 *     - click on login button
 *     - click on login button without entering email or password
 *   - should password not be empty
 *     - visit the homepage
 *     - click on login button
 *     - enter email
 *     - click on login button without entering password
 *   - should email or password wrong
 *     - visit the homepage
 *     - click on login button
 *     - enter incorrect email or password
 *     - click on login button
 *   - should login successfully
 *     - visit the homepage
 *     - click on login button
 *     - enter correct email and password
 *     - click on login button
 *     - verify success message
 *     - logout
 */

describe('Login', () => {
  it('it should email or password not be empty', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy=button-login]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('"email is not allowed to be empty');
    });
  });
  it('it should password not be empty', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy=email]').type('e242090@dicoding.org');
    cy.get('[data-cy=button-login]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('"password is not allowed to be empty');
    });
  });
  it('it should email or password wrong', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy=email]').type('e242090@dicoding.org');
    cy.get('[data-cy=password]').type('saminaminaeewakawakaee');
    cy.get('[data-cy=button-login]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('"email or password is wrong"');
    });
  });
  it('it should login successfully', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy=email]').type('e242090@dicoding.org');
    cy.get('[data-cy=password]').type('testing');
    cy.get('[data-cy=button-login]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Login Success');
    });
    cy.wait(500)
    cy.get('button').contains('OK').click();
    cy.wait(5000);
    cy.get('[data-cy=logout]').click({ force: true });
    cy.wait(5000);
  });
});

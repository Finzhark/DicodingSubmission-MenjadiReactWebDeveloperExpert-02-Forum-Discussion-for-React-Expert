describe('CreateThread', () => {
  it('it should create new thread successfully', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy=email]').type('e242090@dicoding.org');
    cy.get('[data-cy=password]').type('testing');
    cy.get('[data-cy=button-login]').click();
    cy.on('window:alert', (havtext) => {
      expect(text).to.equal('Login Success');
      expect(text).to.equal('Ok').click();
    });
    cy.wait(500);
    cy.get('[data-cy=add-thread]').should('be.visible').click();
    cy.get('[data-cy=title]').type('Ohayou Gozaimasu');
    cy.get('[data-cy=body-thread]').type('Shiawasena');
    cy.get('[data-cy=category]').type('Shiawasena');
    cy.get('[data-cy=button-create-thread]').click();
    cy.get('[data-cy=logout]').click({ force: true });
  });
});

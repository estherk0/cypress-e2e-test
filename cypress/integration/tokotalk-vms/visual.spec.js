describe('Cypress Studio Demo', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });
  it('create new transaction', () => {
    cy.visit('/login')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#input-23').clear();
    cy.get('#input-23').type('estherk@codebrick.co');
    cy.get('#input-27').clear();
    cy.get('#input-27').type('tokotalk1234');
    cy.get('.v-btn--is-elevated').click();
    /* ==== End Cypress Studio ==== */
    cy.should(() => {
      expect(localStorage.getItem('x-vendor-id')).to.not.null
    })
  })
  it('create new transaction2', () => {
    cy.visit('/')
  })
})
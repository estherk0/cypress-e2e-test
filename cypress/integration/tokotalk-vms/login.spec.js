describe('Log into vms', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/login')
  })

  it('log into vms with existing account', () => {
    // input ID
    cy.get('#app > div > main > div > div > div > div > div > div.v-card__text > div > div > form > div:nth-child(1) > div.row.no-gutters > div > div > div > div.v-input__slot > div > input').type('estherk@codebrick.co')
    // input Password
    cy.get('#app > div > main > div > div > div > div > div > div.v-card__text > div > div > form > div:nth-child(2) > div.row.no-gutters > div > div > div > div.v-input__slot > div > input')
      .type('tokotalk1234')
    // Click LOGIN button
    cy.get('#app > div > main > div > div > div > div > div > div.v-card__text > div > div > button.v-btn.v-btn--block.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default.primary')
      .click()
    
    cy.should(() => {
      expect(localStorage.getItem('x-vendor-id')).to.not.null
    })
  })
})

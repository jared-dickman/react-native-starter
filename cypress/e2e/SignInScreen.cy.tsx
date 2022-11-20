/// <reference types="cypress" />

describe('SignIn Screen', () => {
  
  it(' it opens to signin', () => {
    // arrange
    cy.visit('/')
    // assert
    cy.contains('Sign In')
      // act
      .should('be.visible')
  })

})
describe('case 1', () => {
  before(() =>{
    cy.visit("https://qa-sp.docs-dev.bosch-fsde.com/");
        cy.get(':nth-child(4) > .MuiButton-text').click();
  })
  it.skip('search bar', () => {
    cy.get('.MuiFormControl-root').click();
  })

  it('click on iphone 6 32gb',() =>{
    
      cy.get('.MuiFilledInput-root').type("DocHub");
      cy.get('[aria-label=search]').click()
      cy.get('.MuiCardContent-root > :nth-child(2) > .MuiTypography-root').should('have.text', "DocHub");
      cy.get('[aria-label=Clear]').click()
  
  })

})
//f3qf3
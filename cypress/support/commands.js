
 Cypress.Commands.add("listingPage",(category,subCategory)=>{
    
    cy.contains(category).should("be.visible").trigger('mouseover')
    cy.get(".MuiGrid-grid-md-7")
    cy.get('p').contains(subCategory).should("be.visible").click()
    cy.get('.category_products-container__uEVuR').first().should('be.visible').within(()=>{
      cy.get('button').contains('Explore All').click({force:true}).wait(10000)
    })
  })

  Cypress.Commands.add('clickViewDetails',()=>{
    
        cy.get('.MuiGrid-spacing-xs-3 > :nth-child(3) > .MuiPaper-root').wait(10000).within(()=>{
            cy.get('.css-d2zmuk-MuiSvgIcon-root').click()
        })
    })
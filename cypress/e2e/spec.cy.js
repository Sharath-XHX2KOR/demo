describe('case 1', () => {
  before(() =>{
    cy.visit('https://www.demoblaze.com/');
  })
  it.skip('click on Phones', () => {
    cy.get('a[id="itemc"]').contains('Phones').click()
  })

  it('click on iphone 6 32gb',() =>{
    cy.get('a[class="hrefch"]').contains('Iphone 6 32gb').click()
  })

  it('add to cart',() =>{
    cy.get('a').contains('Add to cart',{timeout:5000}).click()
  })

  it('click on Home',() =>{
    cy.get('a').contains('Home').click()
  })
})
//f3qf3
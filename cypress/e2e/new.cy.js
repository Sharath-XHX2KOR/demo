describe('case 2', () => {
    before(() =>{
      cy.visit('https://www.demoblaze.com/');
    })
    it('click on Phones', () => {
      cy.get('a[id="itemc"]').contains('Laptops').click()
    })
  
    it('click on iphone 6 32gb',() =>{
      cy.get('a[class="hrefch"]').contains('MacBook air').click()
    })
  
    it('add to cart',() =>{
      cy.get('a').contains('Add to cart',{timeout:5000}).click()
    })
  
    it('click on Home',() =>{
      cy.get('a').contains('Home').click()
    })
  })
  
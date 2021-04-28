context('The details page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/book?id=dsz5AwAAQBAJ');
    });
    it('displays the correct book', () => {
        cy.get('h1').contains('Hooked')
    })
    it('back button redirects back to the home screen', () => {
        cy.get('#back-button').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})
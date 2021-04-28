const book1 = {
  id: 'dsz5AwAAQBAJ',
  volumeInfo: {
    authors: ['Nir Eyal'],
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/publisher/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73Std2aCICLOw-EBuZG8repRo5DTg0LXYdqCHbOc5MPqs7NUOZCPSP4bDLRbotr2nLu4DznNrT4sNZXeIpLJZKgueI56jSbN9cZj5LjZbrkHQdU4bGUYbYyCTVHsG9CxhsC_ERr&source=gbs_api',
      thumbnail: 'http://books.google.com/books/publisher/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70JNJgkukGPnaTnaNNJsuSOjCQI7Xhw__QCCY9AKs9YAcBepBMR6ZI4uDR_erRuRMfK3Rzm6L8BrT0JLRznwvg3lUnTdxXeS_BO2IcjpG-gSeJ8tu7RCdFc1J_U_9QjuQN_Nmz7&source=gbs_api',
    },
    title: 'Hooked',
  },
};
const book2 = {
  id: 'rB2ZDQAAQBAJ',
  volumeInfo: {
    authors: ['Gary Keller', 'Jay Papasan', 'Gary Keller'],
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/publisher/content?id=rB2ZDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE727qA2jmtMlx1ux02YqlpoARfkjxgF8KtMQBd5TRWI4rGq4WABjqNo5rL_t1rAnUZypCNgg1rWTRvLfLE6wA7irHP_liok_avil_6lnfRqh9HWNtCEAcGfvmCEzYS8RWEKZr5RK&source=gbs_api',
      thumbnail: 'http://books.google.com/books/publisher/content?id=rB2ZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7276yeo3cE2ALA9kxw8jb4x4Y0adUkm8r2YDOo1-gXhgQ60K7fUZaI-eGOhbgXJJMRgk0gMK1xQtFo4H578zY9rHl9as-oPN1aTBE6lY78q_5voDkPcEQUYQ5Ld7QrgUyBNUigg&source=gbs_api',
    },
    title: 'The ONE Thing',
  },
};
context('The landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  context('the discover tab', () => {
    it('displays the correct amount of books', () => {
      cy.get('#main-books').children().should('have.length', 3);
    });
    it('redirects when you click a book', () => {
      cy.get('#main-book-0').click();
      cy.url().should('eq', 'http://localhost:3000/book?id=dsz5AwAAQBAJ')
    });
    it('redirects to the correct book', () => {
      cy.get('#main-book-0').contains('Hooked')
      cy.get('#main-book-0').click();
      cy.get('h1').contains('Hooked')
      cy.visit('http://localhost:3000/');
      cy.get('#main-book-1').contains('The ONE Thing')
      cy.get('#main-book-1').click();
      cy.get('h1').contains('The ONE Thing')
    });
  })
});

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
context('The search', () => {
    context('bar', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/');
          });
        it('redirects correctly', () => {
          cy.get('input[name=query]').type('test')
          cy.url().should('eq', 'http://localhost:3000/search?q=test')
        });
    })
    context('page', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/search');
          });
        it('displays the correct message if no books were found', () => {
            cy.intercept(
              'GET', 
              'https://www.googleapis.com/books/v1/volumes?q=test&startIndex=0&maxResults=12',
              {
                statusCode: 200,
                  body: {}
              }
            )
            cy.get('input[name=query]').type('test')
            cy.get('main').contains('No books were found')
          })
          it('displays the correct amount of results', () => {
            cy.intercept(
              'GET', 
              'https://www.googleapis.com/books/v1/volumes?q=test&startIndex=0&maxResults=12',
              {
                statusCode: 200,
                  body: {
                    totalItems: 2,
                    items: [book1, book2]
                  }
              }
            )
            cy.get('input[name=query]').type('test')
            cy.get('main').children('article').should('have.length', 2);
          })
          it('loads more books', () => {
            cy.get('input[name=query]').type('lord of the rings')
            cy.get('main').children('article').should('have.length', 12);
            cy.get('#load-more').click()
            cy.get('main').children('article').should('have.length', 24);
          })
          it('opens the correct book', () => {
            cy.intercept(
              'GET', 
              'https://www.googleapis.com/books/v1/volumes?q=test&startIndex=0&maxResults=12',
              {
                statusCode: 200,
                  body: {
                    totalItems: 1,
                    items: [book1]
                  }
              }
            )
            cy.get('input[name=query]').type('test')
            cy.get(`#${book1.id}`).click()
            cy.url().should('eq', `http://localhost:3000/book?id=${book1.id}`)
          })
    })
})
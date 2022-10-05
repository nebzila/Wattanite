
describe('full run through of What a Night', () => {
  it('opens start screen and types details', () => {
    cy.log('RUNNING TEST')
    cy.visit('http://localhost:3000/')
    cy.findByPlaceholderText('Enter your name...').type('Username');
    cy.findByPlaceholderText('Enter your postcode...').type('NW8');
    cy.findByRole('button').click()
    cy.findByText('Bullet Train')
    let chosenMovie = '';
    let chosenResaurant = '';
    cy.get('.movie-title')
    .first()
    .then(($h1) => {
      chosenMovie = $h1.text()
    })

    cy.get('.movie-vote-button')
      .first()
      .click()

     cy.get('.restaurant-title')
    .last()
    .then(($h1) => {
      chosenResaurant = $h1.text()
    })

    cy.get('button')
      .last()
      .click()

    cy.log('final rest: ', chosenResaurant, ' final movie: ', chosenMovie)

    cy.get('.winner-restaurant-title').should(($txt) => {
      expect($txt.text()).to.eq(chosenResaurant)
    })
    cy.get('.winner-movie-title').should(($txt) => {
      expect($txt.text()).to.eq(chosenMovie)
    })

})

})

export {}
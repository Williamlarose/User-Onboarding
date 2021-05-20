// User.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
function Go(value) {
    cy.get(value)
}
const sumbitbtn = () => cy.get('button')
describe('user-form', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3001/`)
    })
    it('yo', () => {
        Go('input[name=Email]')
    })
    it('prop', () => {
        Go('input[name=Name]')
    })
    it('btn', () => {
        sumbitbtn().should('be.disabled')
    })
    it('value', () => {
        cy.get('input[name=Name]')
            .should('have.value', '')
            .type('William')
            .should('have.value', 'William')
        cy.get('input[name=Email]').should('have.value', '')
            .type('Williamlarose@aol.com')
            .should('have.value', 'Williamlarose@aol.com')
        cy.get('input[name=Password]')
            .should('have.value', '')
            .type('het')
            .should('have.value', 'het')
        sumbitbtn().should('not.be.disabled')
        cy.get('input[name=Terms]').click()
    })
})
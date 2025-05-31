import { faker } from '@faker-js/faker'

describe('User Registration on AutomationExercise', () => {
  const name = faker.person.firstName()
  const email = faker.internet.email({ firstName: name }).toLowerCase()
  const password = faker.internet.password()

  it('Should register a new user successfully', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains('Signup / Login').click()


    cy.get('input[data-qa="signup-name"]').type(name)
    cy.get('input[data-qa="signup-email"]').type(email)
    cy.get('button[data-qa="signup-button"]').click()

    cy.get('#id_gender1').check() // Mr.
    cy.get('#password').type(password)
    cy.get('#days').select('10')
    cy.get('#months').select('May')
    cy.get('#years').select('1995')

    cy.get('#first_name').type(name)
    cy.get('#last_name').type(faker.person.lastName())
    cy.get('#address1').type(faker.location.streetAddress())
    cy.get('#country').select('Canada')
    cy.get('#state').type(faker.location.state())
    cy.get('#city').type(faker.location.city())
    cy.get('#zipcode').type(faker.location.zipCode())
    cy.get('#mobile_number').type(faker.phone.number('###-###-####'))

    cy.get('button[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')
    cy.get('a[data-qa="continue-button"]').click()

    cy.contains(`Logged in as ${name}`).should('be.visible')
  })
})

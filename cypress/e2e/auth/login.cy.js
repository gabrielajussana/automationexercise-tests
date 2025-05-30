describe('Login on AutomationExercise', () => {
  it('Should log in successfully', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('input[data-qa="login-email"]').type('tests@tests.com')
    cy.get('input[data-qa="login-password"]').type('teste123')
    cy.get('button[data-qa="login-button"]').click()

    cy.url().should('eq', 'https://automationexercise.com/')
    cy.contains('Logged in as').should('be.visible')
  })

  it('Should try to log in with an invalid password', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('input[data-qa="login-email"]').type('tests@tests.com')
    cy.get('input[data-qa="login-password"]').type('senhaerrada')
    cy.get('button[data-qa="login-button"]').click()
    cy.get('.alert-danger').should('contain', 'Your email or password is incorrect!')
  })

  it('Should try to log in with empty fields', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('button[data-qa="login-button"]').click()
    cy.get('.alert-danger').should('contain', 'Email Address and Password are required!')
  })

  it('Should try to log in with an invalid email format', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('input[data-qa="login-email"]').type('emailinvalido')
    cy.get('input[data-qa="login-password"]').type('teste123')
    cy.get('button[data-qa="login-button"]').click()
    cy.get('.alert-danger').should('contain', 'Invalid email address!')
  })
})

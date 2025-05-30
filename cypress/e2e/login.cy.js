describe('Login no AutomationExercise', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('input[data-qa="login-email"]').type('tests@tests.com')
    cy.get('input[data-qa="login-password"]').type('teste123')
    cy.get('button[data-qa="login-button"]').click()

    cy.url().should('eq', 'https://automationexercise.com/')
    cy.contains('Logged in as').should('be.visible')
  })

  it('Deve tentar fazer login com senha inválida', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('input[data-qa="login-email"]').type('tests@tests.com')
    cy.get('input[data-qa="login-password"]').type('senhaerrada')
    cy.get('button[data-qa="login-button"]').click()
    cy.get('.alert-danger').should('contain', 'Your email or password is incorrect!')
    })

  it('Deve tentar fazer login com campos vazios', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('button[data-qa="login-button"]').click()
    cy.get('.alert-danger').should('contain', 'Email Address and Password are required!')
  })

    it('Deve tentar fazer login com email inválido', () => {
        cy.visit('https://automationexercise.com/login')
    
        cy.get('input[data-qa="login-email"]').type('emailinvalido')
        cy.get('input[data-qa="login-password"]').type('teste123')
        cy.get('button[data-qa="login-button"]').click()
        cy.get('.alert-danger').should('contain', 'Invalid email address!')
    })  
})

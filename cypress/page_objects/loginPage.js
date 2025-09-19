class LoginPage {

    usernameInput = '#loginusername'
    passwordInput = '#loginpassword'
    logInBttn = '.btn.btn-primary'
    openLogInBttn = '#login2'
    welcomeBttn = '#nameofuser'


    visitLoginPage() {
        cy.visit('/')
    }

    SucessfullLogIn() {
        cy.get(this.openLogInBttn).click()
        cy.fixture('users.json').then((users) => {
            cy.get(this.usernameInput).type(users.validUser.username)
            cy.wait(1000)
            cy.get(this.passwordInput).type(users.validUser.password)
            cy.wait(1000)
            cy.get(this.logInBttn).eq(2).click()
            cy.get(this.welcomeBttn).should('have.text', 'Welcome' + ' ' + users.validUser.username)
    })}

    NotExistingUserLogin() {
        cy.get(this.openLogInBttn).click()
        cy.fixture('users.json').then((users) => {
            cy.get(this.usernameInput).type(users.invalidUser.username)
            cy.wait(1000)
            cy.get(this.passwordInput).type(users.invalidUser.password)
            cy.wait(1000)
            cy.get(this.logInBttn).eq(2).click()})
            cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('User does not exist.')
        })
    }


}

export default new LoginPage;
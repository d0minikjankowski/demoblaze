class LoginPage {

    usernameInput = '#loginusername'
    passwordInput = '#loginpassword'
    logInBttn = '.btn.btn-primary'
    openLogInBttn = '#login2'
    existingUsername = 'admin'
    nonExistingUsername = 'pindol'
    password = 'admin'
    welcomeBttn = '#nameofuser'


    visitLoginPage() {
        cy.visit('/')
    }

    SucessfullLogIn(existingUsername, password) {
        cy.get(this.openLogInBttn).click()
        cy.get(this.usernameInput).type(this.existingUsername)
        cy.wait(1000)
        cy.get(this.passwordInput).type(this.password)
        cy.wait(1000)
        cy.get(this.logInBttn).eq(2).click()
        cy.get(this.welcomeBttn).contains(this.existingUsername)
    }

    NotExistingUserLogin(nonexistingUsername, password) {
        cy.get(this.openLogInBttn).click()
        cy.get(this.usernameInput).type(this.nonExistingUsername)
        cy.wait(1000)
        cy.get(this.passwordInput).type(this.password)
        cy.wait(1000)
        cy.get(this.logInBttn).eq(2).click()
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('User does not exist.')
        })
    }
}



export default new LoginPage;
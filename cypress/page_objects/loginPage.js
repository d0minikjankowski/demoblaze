import mainPageLocators from "./mainPageLocators"

class LoginPage {

    visitLoginPage() {
        cy.visit('/')
    }

    SucessfullLogIn() {
        cy.get(mainPageLocators.openLogInBttn).click()
        cy.fixture('users.json').then((users) => {
            cy.get(mainPageLocators.usernameInput).type(users.validUser.username)
            cy.wait(1000)
            cy.get(mainPageLocators.passwordInput).type(users.validUser.password)
            cy.wait(1000)
            cy.get(mainPageLocators.logInBttn).eq(2).click()
            cy.get(mainPageLocators.welcomeBttn).should('have.text', 'Welcome' + ' ' + users.validUser.username)
    })}

    NotExistingUserLogin() {
        cy.get(mainPageLocators.openLogInBttn).click()
        cy.fixture('users.json').then((users) => {
            cy.get(mainPageLocators.usernameInput).type(users.invalidUser.username)
            cy.wait(1000)
            cy.get(mainPageLocators.passwordInput).type(users.invalidUser.password)
            cy.wait(1000)
            cy.get(mainPageLocators.logInBttn).eq(2).click()})
            cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('User does not exist.')
        })
    }


}

export default new LoginPage;
import loginPage from "../page_objects/loginPage";


describe('login tests', () =>{
    it('successful login', () => {
        loginPage.visitLoginPage()
        loginPage.SucessfullLogIn()
    })

    it('[negative] non-existing user login attempt', () => {
        loginPage.visitLoginPage()
        loginPage.NotExistingUserLogin()
    })
})
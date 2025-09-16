import loginPage from "../page_objects/loginPage";


describe('login tests', () =>{  //zwykłe logowanie
    it('successful login', () => {
        loginPage.visitLoginPage()
        loginPage.SucessfullLogIn()
    })

    it('[negative] non-existing user login attempt', () => { //test negatywny
        loginPage.visitLoginPage()
        loginPage.NotExistingUserLogin()
    })
})
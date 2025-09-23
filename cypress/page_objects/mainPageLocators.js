class MainpageLocators {
    get usernameInput() {
        return '#loginusername'
    }

    get passwordInput() {
        return '#loginpassword'
    }

    get logInBtn () {
        return '.btn.btn-primary'
    }

    get openLogInBtn () {
        return '#login2'
    }

    get welcomeBtn () {
        return '#nameofuser'
    }

    get cartBtn () {
        return '#cartur'
    }

    get logo () {
        return '[src="bm.png"]'
    }
}

export default new MainpageLocators;

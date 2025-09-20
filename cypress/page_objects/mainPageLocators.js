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
}

export default new MainpageLocators;

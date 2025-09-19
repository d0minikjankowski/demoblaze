class MainpageLocators {
    get usernameInput() {
        return '#loginusername'
    }

    get passwordInput() {
        return '#loginpassword'
    }

    get logInBttn () {
        return '.btn.btn-primary'
    }

    get openLogInBttn () {
        return '#login2'
    }

    get welcomeBttn () {
        return '#nameofuser'
    }
}

export default new MainpageLocators;

import productsLocators from "./productsLocators";

class CartOperations {

    addSamsungGalaxyS6() {
        cy.get(productsLocators.samsungGalaxyS6).eq(0).click();
        cy.get(productsLocators.addToCartBtn).click();
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub')
        })
        cy.get('@alertStub').should('have.been.calledWith', 'Product added')
    }

    addSamsungGalaxyS7() {
        cy.get(productsLocators.samsungGalaxyS7).eq(1).click()
        cy.get(productsLocators.addToCartBtn).click()
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub')
        })
        cy.get('@alertStub').should('have.been.calledWith', 'Product added')
    }

    addNokiaLumia1520() {
        cy.get(productsLocators.nokiaLumia1520).click()
        cy.get(productsLocators.addToCartBtn).click()
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub')
        })
        cy.get('@alertStub').should('have.been.calledWith', 'Product added')
    }

    addNexus6() {
        cy.get(productsLocators.nexus6).click()
        cy.get(productsLocators.addToCartBtn).click()
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub')
        })
        cy.get('@alertStub').should('have.been.calledWith', 'Product added')
    }

    addIphone632gb() {
        cy.get(productsLocators.iphone632gb).click()
        cy.get(productsLocators.addToCartBtn).click()
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub')
        })
        cy.get('@alertStub').should('have.been.calledWith', 'Product added')
    }

    addSonyXperiaZ5() {
        cy.get(productsLocators.sonyXperiaZ5).click()
        cy.get(productsLocators.addToCartBtn).click()
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub')
        })
        cy.get('@alertStub').should('have.been.calledWith', 'Product added')
    }

}

export default new CartOperations();

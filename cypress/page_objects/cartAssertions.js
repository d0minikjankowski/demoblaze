import productsLocators from "./productsLocators";

class CartAssertions {

    assertSamsungGalaxyS7() {
        cy.get(productsLocators.samsungGalaxyS7).should('be.visible')
    }

    assertLumia1520() {
        cy.get(productsLocators.nokiaLumia1520).should('be.visible')
    }

    assertSonyXperiaZ5() {
        cy.get(productsLocators.sonyXperiaZ5).should('be.visible')
    }

}

export default new CartAssertions;


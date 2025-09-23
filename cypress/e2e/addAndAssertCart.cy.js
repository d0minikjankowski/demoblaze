import cartAssertions from "../page_objects/cartAssertions"
import cartOperations from "../page_objects/cartOperations"
import mainPageLocators from "../page_objects/mainPageLocators"


describe('adding products and verifying the cart', () => {
    it('Add multiple products to the cart', () => {
        cy.visit('/')
        cartOperations.addNokiaLumia1520()
        cartOperations.clickLogoBtn()
        cartOperations.addSamsungGalaxyS7()
        cartOperations.clickLogoBtn()
        cartOperations.addSonyXperiaZ5()
        cy.get(mainPageLocators.cartBtn).click()
        cartAssertions.assertLumia1520()
        cartAssertions.assertSamsungGalaxyS7()
        cartAssertions.assertSonyXperiaZ5()
    })
})
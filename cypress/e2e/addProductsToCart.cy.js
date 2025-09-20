import cartOperations from "../page_objects/cartOperations";
import loginPage from "../page_objects/loginPage";

describe('adding products', () => {

    beforeEach(() => {
        loginPage.visitLoginPage()
    })

    it('add Samsung Galaxy S6', () => {
        cartOperations.addSamsungGalaxyS6()
    })

    it('add Samsung Galaxy S7', () => {
        cartOperations.addSamsungGalaxyS7()
    })

})

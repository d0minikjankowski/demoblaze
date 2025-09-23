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

    it('add Nokia Lumia 1520', () => {
        cartOperations.addNokiaLumia1520()
    })

    it('add Nexus 6', () => {
        cartOperations.addNexus6()
    })

    it('add iphone 6 32GB', () => {
        cartOperations.addIphone632gb()
    })

    it('add Sony Xperia Z5', () => {
        cartOperations.addSonyXperiaZ5()
    })

})

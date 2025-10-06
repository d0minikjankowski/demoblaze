

describe('a11y test', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.injectAxe()
    })

    it('check all site', () => {
        cy.checkA11y(null, null, (violations) => {
            violations.forEach((v) => {
                cy.log(`${v.id} - ${v.help}`);
                cy.log(v.nodes.map(n => n.target).join(', '))
            })
        })
    })
})

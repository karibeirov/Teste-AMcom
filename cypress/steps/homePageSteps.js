class HomePage {

    AccessHomePage()  {
        cy.visit('https://amcomtesteqa.z15.web.core.windows.net/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    }

    
}

export default new HomePage

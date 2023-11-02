import formulario3Page from "../pages/formulario3Page"

const form3 = formulario3Page.Formulario3Page()

class Formulario3Steps {

    // ValidarMensagemSaudacao()  {
    //     const meioDia = new Date()
    //     meioDia.setHours(12, 0, 0, 0)
    //     //cy.clock(meioDia.getTime(), ['Date'])
    //     // cy.get(form3.labelFormulario3).should('be.visible').should('contain', `Formulário 1`) 
    //     cy.get(form3.botaoSaudacao).should('be.visible').click() 
    //     cy.wait(1000)
    //         cy.window().then((popupWindow) => {
    //             cy.wrap(popupWindow)    
    //             .its('document.body')
    //             .should('be.visible')
    //             //.should('contain', ' ')
    //         }) 
    // }

    // // cy.window().then((popupWindow) => {
    // //     cy.wrap(popupWindow)
    // //       .its('document.title')
    // //       .should('include', 'Pop-up de Saudação')

}

export default new Formulario3Steps
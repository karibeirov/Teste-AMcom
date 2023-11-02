import formulario2Page from "../pages/formulario2Page"

const form2 = formulario2Page.Formulario2Page()

class Formulario2Steps {

    SelecionarCor(cor)  {
        cy.get(form2.labelFormulario2).should('be.visible').should('contain', `Formulário 2`) 
        cy.get(form2.blocoFormulario2).should('be.visible').should('contain', `Selecione uma cor:`) 
        cy.get(form2.selecionarCores).select(cor)
    }

    ValidarFundoFormulario2(rgbFundo, rgbSelecao)  {
        cy.get(form2.cardCores).should('have.css', 'background-color', rgbFundo)
        cy.get(form2.selecionarCores).should('have.css', 'background-color', rgbSelecao)      
    }

}

export default new Formulario2Steps


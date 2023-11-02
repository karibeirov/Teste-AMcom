import formulario1Page from "../pages/formulario1Page"

const form1 = formulario1Page.Formulario1Page()

class Formulario1Steps {

    PreencherDadosFormulario(nome, sobrenome, telefone)  {
        cy.get(form1.labelFormulario1).should('be.visible').should('contain', `Formulário 1`) 
        cy.get(form1.blocoFormulario1).should('be.visible').should('contain', `Nome:`) 
        cy.get(form1.inputNome).should('be.visible').type(nome) 
        cy.get(form1.blocoFormulario1).should('be.visible').should('contain', `Sobrenome:`) 
        cy.get(form1.inputSobrenome).should('be.visible').type(sobrenome) 
        cy.get(form1.blocoFormulario1).should('be.visible').should('contain', `Telefone:`) 
        cy.get(form1.inputTelefone).should('be.visible').type(telefone) 
    }

    ClicarBotaoEnviar(){
        cy.get(form1.botaoEnviar).should('be.visible').click()
    }

    ValidarEnvioFormulario(mensagem){
        cy.get(form1.confirmacaoEnvio).should('be.visible').should('contain', mensagem) 
        cy.get(form1.botaoFecharModal).should('be.visible')
    }

    FecharModal(){
        cy.get(form1.botaoFecharModal).should('be.visible').click()
    }

    LimparFormulario1(){
        cy.get(form1.inputNome).should('be.visible').clear()
        cy.get(form1.inputSobrenome).should('be.visible').clear()
        cy.get(form1.inputTelefone).should('be.visible').clear()
    }

}

export default new Formulario1Steps
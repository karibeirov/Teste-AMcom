import formulario3Page from "../pages/formulario3Page"


const form3 = formulario3Page.Formulario3Page()

class Formulario3Steps {

    ValidarMensagemSaudacao(horario, mensagem) {
        cy.get(form3.labelFormulario3).should('be.visible').should('contain', 'Formulário 3');
        cy.clock(horario); 
        cy.get(form3.botaoSaudacao).should('be.visible').click();
        cy.on('window:alert', (txt) => {
            expect(txt).to.contain(mensagem);
        })
    }
};

export default new Formulario3Steps
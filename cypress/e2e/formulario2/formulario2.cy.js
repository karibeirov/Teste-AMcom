import formulario2Steps from "../../steps/formulario2Steps"
import homePageSteps from "../../steps/homePageSteps"

const home = homePageSteps
const form2 = formulario2Steps

describe('Formulário 2', () => {

    beforeEach(() => {
        home.AccessHomePage()
    });

    const variaveisForm2 = {

        // Cores

        azul: 'Azul',
        amarelo: 'Amarelo',
        vermelho: 'Vermelho',
        selecioneCor: 'Selecione um item',
        rgbAzul: 'rgb(0, 0, 255)',
        rgbAmarelo: 'rgb(255, 255, 0)',
        rgbVermelho: 'rgb(255, 0, 0)',
        rgbBranco: 'rgb(255, 255, 255)'
    }

    it('1 - Validar a seleção da cor azul no formulário 2', () => {
        form2.SelecionarCor(variaveisForm2.azul)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbAzul, variaveisForm2.rgbBranco)
    });

    it('2 - Validar a seleção da cor amarela no formulário 2', () => {
        form2.SelecionarCor(variaveisForm2.amarelo)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbAmarelo, variaveisForm2.rgbBranco)
    });

    it('3 - Validar a seleção da cor vermelha no formulário 2', () => {
        form2.SelecionarCor(variaveisForm2.vermelho)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbVermelho, variaveisForm2.rgbBranco)
    });

    it('4 - Validar a remoção da cor amarela no formulário 2', () => {
        form2.SelecionarCor(variaveisForm2.amarelo)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbAmarelo, variaveisForm2.rgbBranco)
        form2.SelecionarCor(variaveisForm2.selecioneCor)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbBranco, variaveisForm2.rgbBranco)
    });

    it('5 - Validar a remoção da cor azul no formulário 2', () => {
        form2.SelecionarCor(variaveisForm2.azul)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbAzul, variaveisForm2.rgbBranco)
        form2.SelecionarCor(variaveisForm2.selecioneCor)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbBranco, variaveisForm2.rgbBranco)
    });

    it('6 - Validar a remoção da cor vermelha no formulário 2', () => {
        form2.SelecionarCor(variaveisForm2.vermelho)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbVermelho, variaveisForm2.rgbBranco)
        form2.SelecionarCor(variaveisForm2.selecioneCor)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbBranco, variaveisForm2.rgbBranco)
    });

    it('7 - Validar a alteração de cor do formulário 2', () => {
        form2.SelecionarCor(variaveisForm2.amarelo)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbAmarelo, variaveisForm2.rgbBranco)
        form2.SelecionarCor(variaveisForm2.vermelho)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbVermelho, variaveisForm2.rgbBranco)
        form2.SelecionarCor(variaveisForm2.azul)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbAzul, variaveisForm2.rgbBranco)
        form2.SelecionarCor(variaveisForm2.selecioneCor)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbBranco, variaveisForm2.rgbBranco)
        form2.SelecionarCor(variaveisForm2.vermelho)
        form2.ValidarFundoFormulario2(variaveisForm2.rgbVermelho, variaveisForm2.rgbBranco)
    });


});
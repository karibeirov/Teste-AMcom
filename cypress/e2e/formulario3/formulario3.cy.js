import formulario3Steps from "../../steps/formulario3Steps"
import homePageSteps from "../../steps/homePageSteps"

const home = homePageSteps
const form3 = formulario3Steps

describe('Formulário 3', () => {

    beforeEach(() => {
        home.AccessHomePage()
    });

    const variaveisForm3 = {

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

    it ('1 - Validar a seleção da cor azul no formulário 2', () => {
        form3.ValidarMensagemSaudacao()
    });

});
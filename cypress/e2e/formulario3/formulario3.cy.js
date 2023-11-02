import formulario3Steps from "../../steps/formulario3Steps"
import homePageSteps from "../../steps/homePageSteps"


const home = homePageSteps
const form3 = formulario3Steps

describe('Formulário 3', () => {

    beforeEach(() => {
        home.AccessHomePage()
    });

    const variaveisForm3 = {

        // Saudações

        bomDia: 'Bom dia',
        boaTarde: 'Boa tarde',
        boaNoite: 'Boa noite',

        // Horários

        // Manhã
        meiaNoite: new Date('2023-11-02T00:00:00'),
        dezHoras: new Date('2023-11-02T10:00:59'),
        onzeCinquentaNove: new Date('2023-11-02T11:59:05'),

        // Tarde
        meioDia: new Date('2023-11-02T12:00:00'),
        tresTrintaSete: new Date('2023-11-02T13:37:08'),
        cincoCinquentaNove: new Date('2023-11-02T17:59:59'),

        // Noite
        seisHoras: new Date('2023-11-02T18:00:03'),
        oitoCinquentaTres: new Date('2023-11-02T20:53:45'),
        onzeCinquentaNove: new Date('2023-11-02T23:59:59'),
    }


    it('1 - Validar a mensagem de saudação do formulário 3 meia noite', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.meiaNoite, variaveisForm3.bomDia)
    });

    it('2 - Validar a mensagem de saudação do formulário 3 às 10h', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.dezHoras, variaveisForm3.bomDia)
    });

    it('3 - Validar a mensagem de saudação do formulário 3 às 11h59min', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.onzeCinquentaNove, variaveisForm3.bomDia)
    });

    it('4 - Validar a mensagem de saudação do formulário 3 meio-dia', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.meioDia, variaveisForm3.boaTarde)
    });

    it('5 - Validar a mensagem de saudação do formulário 3 às 15h37min', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.tresTrintaSete, variaveisForm3.boaTarde)
    });

    it('6 - Validar a mensagem de saudação do formulário 3 às 17h59min', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.cincoCinquentaNove, variaveisForm3.boaTarde)
    });

    it('7 - Validar a mensagem de saudação do formulário 3 às 18h', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.seisHoras, variaveisForm3.boaNoite)
    });

    it('8 - Validar a mensagem de saudação do formulário 3 às 20h53', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.oitoCinquentaTres, variaveisForm3.boaNoite)
    });

    it('9 - Validar a mensagem de saudação do formulário 3 às 23h59', () => {
        form3.ValidarMensagemSaudacao(variaveisForm3.onzeCinquentaNove, variaveisForm3.boaNoite)
    });

});
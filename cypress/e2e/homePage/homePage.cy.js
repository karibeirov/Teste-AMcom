import homePageSteps from "../../steps/homePageSteps"
import formulario1Steps from "../../steps/formulario1Steps"
import formulario2Steps from "../../steps/formulario2Steps"
import formulario3Steps from "../../steps/formulario3Steps"


const home = homePageSteps
const form1 = formulario1Steps
const form2 = formulario2Steps
const form3 = formulario3Steps



describe('Formulário 1', () => {

    beforeEach(() => {
        home.AccessHomePage()
    });

    const variaveisHome = {

        // Dados para preenchimento do formulário 1
        nome: 'Kamila',
        sobrenome: 'Ribeiro',
        telefoneFixo: '1141482525',
        telefoneCelular: '11962623535',
        sucesso: 'Enviado com sucesso',

        // Cores utilizadas no formulário 2
        azul: 'Azul',
        amarelo: 'Amarelo',
        vermelho: 'Vermelho',
        selecioneCor: 'Selecione um item',
        rgbAzul: 'rgb(0, 0, 255)',
        rgbAmarelo: 'rgb(255, 255, 0)',
        rgbVermelho: 'rgb(255, 0, 0)',
        rgbBranco: 'rgb(255, 255, 255)',

        // Saudação esperada e definição do horário para formulário 3 
        boaTarde: 'Boa tarde',
        meioDia: new Date('2023-11-02T12:00:00'),
    }

    it('1 - Utilizar todos os formulários um em seguida do outro', () => {
        form2.SelecionarCor(variaveisHome.amarelo)
        form2.ValidarFundoFormulario2(variaveisHome.rgbAmarelo, variaveisHome.rgbBranco)
        form1.PreencherDadosFormulario(variaveisHome.nome, variaveisHome.sobrenome, variaveisHome.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisHome.sucesso)
        form1.FecharModal()
        form3.ValidarMensagemSaudacao(variaveisHome.meioDia, variaveisHome.boaTarde)
    });

    it('2 - Validar que a cor selecionada no formulário 2 não é removida após envio do formulário 1 e 3', () => {
        form2.SelecionarCor(variaveisHome.amarelo)
        form2.ValidarFundoFormulario2(variaveisHome.rgbAmarelo, variaveisHome.rgbBranco)
        form1.PreencherDadosFormulario(variaveisHome.nome, variaveisHome.sobrenome, variaveisHome.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisHome.sucesso)
        form1.FecharModal()
        form3.ValidarMensagemSaudacao(variaveisHome.meioDia, variaveisHome.boaTarde)
        form2.ValidarFundoFormulario2(variaveisHome.rgbAmarelo, variaveisHome.rgbBranco)
    });

})
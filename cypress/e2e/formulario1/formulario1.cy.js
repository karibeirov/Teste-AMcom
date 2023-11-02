import formulario1Steps from "../../steps/formulario1Steps";
import homePageSteps from "../../steps/homePageSteps"

const home = homePageSteps
const form1 = formulario1Steps

describe('Formulário 1', () => {

    beforeEach(() => {
        home.AccessHomePage()
    });
    
    const variaveisForm1 = {

        // Dados para preenchimento com sucesso do formulário 1
        nome: 'Kamila', 
        sobrenome: 'Ribeiro', 
        telefoneFixo: '1141482525',
        telefoneCelular: '11962623535',

        // Mensagens de sucesso ou erro apresentadas ao enviar formulario
        sucesso: 'Enviado com sucesso',
        camposVazios: 'Preencher os campos nome, sobrenome e telefone para envio do formulário',
        nomeObrig: 'Preencher o campo nome para envio do formulário',
        sobrenomeObrig: 'Preencher o campo sobrenome para envio do formulário',
        telefoneObrig: 'Preencher o campo telefone para envio do formulário',
        nomeNumerosCarac: 'O campo nome não permite o seu preenchimento com números e caracteres especiais, utilize apenas letras',
        sobrenomeNumerosCarac: 'O campo nome não permite o seu preenchimento com números e caracteres especiais, utilize apenas letras',
        telefoneLetrasCarac: 'O campo telefone não permite o seu preenchimento com letras e caracteres especiais, utilize apenas números',
        numerosCaracLetras: 'Os campos nome e sobrenome não permitem o seu preenchimento com números e caracteres especiais e o campo telefone não permite o seu preenchimento com letras e caracteres especiais',
        semDDD: 'Telefone deve ser preenchido com seu respectivo DDD. Ex. 11962317474',
        dadosCadastrados: 'Dados cadastrados anteriormente',

        // Dados incorretos para validar a obrigatoriedade dos campos
        nomeNumeros: 'ka123mila',
        nomeCaracteres: 'ka@@mila',
        nomeNumerosCarac: 'Ka12@mila',
        nomeVazio: '  ',
        sobrenomeNumeros: 'Ri1235iro',
        sobrenomeCaracteres: 'Ribeir#',
        sobrenomeNumerosCarac: 'Ribe1585r#',
        sobrenomeVazio: '  ',
        telefoneLetras: '1196234abc1',
        telefoneCaracteres: '119@@5298@@',
        telefoneNumerosCarac: '119@@@1456A',
        telefoneVazio: '  ',
        telFixoSemDDD: '41487474',
        celFixoSemDDD: '965231414'

    }
    it('1 - Validar o envio do formulário 1 quando preenchemos o telefone com telefone fixo', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.sucesso)
    });

    it('2 - Validar o envio do formulário 1 quando preenchemos o telefone com telefone celular', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneCelular)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.sucesso)
    });
    
    it('3 - Validar o fechamento do modal após envio dos dados do formulário 1', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneCelular)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.sucesso)
        form1.FecharModal()
    });

    it('4 - Limpar os dados preenchidos após envio', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.sucesso)
        form1.FecharModal()
        form1.LimparFormulario1()
    });

    it('5 - Validar a obrigatoriedade do preenchimento de todos os campos do formulário 1', () => {
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.camposVazios)
        form1.FecharModal()
    });

    it('6 - Validar a obrigatoriedade do preenchimento do campo nome no formulário 1', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nomeVazio, variaveisForm1.sobrenome, variaveisForm1.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.nomeObrig)
        form1.FecharModal()
    });

    it('7 - Validar a obrigatoriedade do preenchimento do campo sobrenome no formulário 1', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenomeVazio, variaveisForm1.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.sobrenomeObrig)
        form1.FecharModal()
    });

    it('8 - Validar a obrigatoriedade do preenchimento do campo telefone do formulário 1', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneVazio)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.telefoneObrig)
        form1.FecharModal()
    });

    it('9 - Validar o envio do formulário quando preenchemos o campo nome com números', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nomeNumeros, variaveisForm1.sobrenome, variaveisForm1.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.nomeNumerosCarac)
        form1.FecharModal()
    });

    it('10 - Validar o envio do formulário quando preenchemos o campo nome com caracteres especiais', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nomeCaracteres, variaveisForm1.sobrenome, variaveisForm1.telefoneCelular)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.nomeNumerosCarac)
        form1.FecharModal()
    });

    it('11 - Validar o envio do formulário quando preenchemos o campo sobrenome com números', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenomeNumeros, variaveisForm1.telefoneCelular)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.sobrenomeNumerosCarac)
        form1.FecharModal()
    });

    it('12 - Validar o envio do formulário quando preenchemos o campo sobrenome com caracteres especiais', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenomeCaracteres, variaveisForm1.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.sobrenomeNumerosCarac)
        form1.FecharModal()
    });

    it('13 - Validar o envio do formulário quando preenchemos o campo telefone com letras', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneLetras)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.telefoneLetrasCarac)
        form1.FecharModal()
    });

    it('14 - Validar o envio do formulário quando preenchemos o campo telefone com caracteres especiais', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneCaracteres)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.telefoneLetrasCarac)
        form1.FecharModal()
    });

    it('15 - Validar o envio do formulário quando preenchemos os campos nome e sobrenome com números e caracteres especiais e o telefone com letras e caracteres especiais', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nomeNumerosCarac, variaveisForm1.sobrenomeNumerosCarac, variaveisForm1.telefoneNumerosCarac)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.numerosCaracLetras)
        form1.FecharModal()
    });

    it('16 - Validar a obrigatoriedade do DDD no campo telefone quando preenchemos ele com telefone fixo', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telFixoSemDDD)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.semDDD)
        form1.FecharModal()
    });

    it('17 - Validar a obrigatoriedade do DDD do campo telefone quando preenchemos ele com telefone celular', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.celFixoSemDDD)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.semDDD)
        form1.FecharModal()
    });

    it('18 - Validar o envio do formulário 1 quando enviamos informações repetidas', () => {
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.sucesso)
        form1.FecharModal()
        form1.LimparFormulario1()
        form1.PreencherDadosFormulario(variaveisForm1.nome, variaveisForm1.sobrenome, variaveisForm1.telefoneFixo)
        form1.ClicarBotaoEnviar()
        form1.ValidarEnvioFormulario(variaveisForm1.dadosCadastrados)
        form1.FecharModal()
    });

});
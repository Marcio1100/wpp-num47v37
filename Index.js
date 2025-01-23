//New code aclop repository
const { Client, Buttons, List, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal')

const commander = require('commander')
const axios = require('axios')
const urlRegex = require('url-regex')

// Parse command line arguments
commander
    .option('-c, --chrome <value>', 'Use a installed Chrome Browser')
    .option('-f, --ffmpeg <value>', 'Use a different ffmpeg')
    .parse(process.argv)

const options = commander.opts()

const log_debug = options.debug ? console.log : () => { }
const puppeteerConfig = !options.chrome ? { executablePath: "/usr/bin/chromium-browser", args: ['--no-sandbox'] } : { executablePath: "/usr/bin/chromium-browser", args: ['--no-sandbox'] }
const ffmpegPath = options.ffmpeg ? options.ffmpeg : undefined

// Inicialize WhatsApp Web client
const client = new Client({
    authStrategy: new LocalAuth(),
    ffmpegPath,
    puppeteer: puppeteerConfig,
    webVersionCache: {
        type: "remote",
        remotePath:
            "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
})

client.on('qr', qr => {
    qrcode.generate(qr, { small: true })
})

//cliente autenticado
client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Sucesso! WhatsApp conectado e rodando.');
});

//vari�vel permanentes
let VPessoa;
let VCNPJ;
let VDireito;
let VNatOperacao;
let VFomento;
let VDescricao;
let VIA;
let VPJ;
let VMI;

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil de mensagens 
client.on('message', async msg => {
    //Inicio
   
    // if ( msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|Oi|O|o|oi|ei|Ei|Eu|eu|Solicito|Bom|bom|boa|oie|Boa|Hi|hi)/i) && msg.from.endsWith('@c.us')) {
    if (VIA != 99 && msg.body != '' && msg.body.length >= 4 && msg.body != 'não' && msg.body.length !== 14 && msg.body.length !== 18 && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Olá! ' + name.split(" ")[0] + ' Sou o *Assistente Virtual VioH.* Como posso ajudá-lo? \nPor favor, digite uma das opções abaixo:\n\n Digite (*PF*) Pessoa Física\n Digite (*PJ*) Pessoa Jurídica\n Digite (*SC*) Serviços de contabilidade\n Digite (*STI*) Suporte Técnico em TI\nDigite *00* - Quem é a VioH?');

    }

    //Por favor digite o seu CNPJ
    if (msg.body !== null && msg.body === '0' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VIA = '';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Olá! ' + name.split(" ")[0] + ' Sou o *Assistente Virtual VioH.* Como posso ajudá-lo? \nPor favor, digite uma das opções abaixo:\n\n Digite (*PF*) Pessoa Física\n Digite (*PJ*) Pessoa Jurídica\n Digite (*SC*) Serviços de contabilidade\n Digite (*STI*) Suporte Técnico em TI\nDigite *00* - Quem é a VioH?');
    }

    //Por favor digite o seu CNPJ
    if (msg.body !== null && msg.body === '00' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Vioh significa Virtual operações HoppeDSH. A HoppeDSM é uma empresa de serviços de tecnologia da informação (T.I)  que trabalha com vários ramos de atividades como desenvolvimento de softwares, venda de produtos, prestação de outros serviços como consultoria, serviços contábeis a  empresas...\n\nPossuímos ainda empresas auxiliares com outros tipos de atividades você pode visitar nosso site em https://vioh.com.br/ ou por contato@vioh.com.br\n\nAgradecemos o seu contato! Você está sendo atendido pelo assistente  criado pela própria Vioh.\n\nConheça também nossa Inteligência Artificial *IA*, digitando *99*. ');

    }


    //PF
    if (msg.body === "PF" || msg.body === "pf" || msg.body === "Pf" || msg.body === "pF" || msg.body === "CPF" || msg.body === "cpf" && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPessoa = 'Pessoa Física';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Olá! ' + name.split(" ")[0] + ' Por favor, digite uma das opções abaixo:\n\n*60* - Produtos\n*61* - Serviço Empresarial\n*62* - Serviço Contábil\n*0* - Menu inicial\n*99* - Falar com atendente IA');

    }


    //PJ
    if (msg.body === "PJ" || msg.body === "pj" || msg.body === "Pj" || msg.body === "pJ" || msg.body === "CNPJ" || msg.body === "cnpj" && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VPessoa = 'Pessoa Jurídica';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Olá! ' + name.split(" ")[0] + ' Por favor, digite uma das opções abaixo:\n\n*1* - Sou Pessoa Jurídica (Pública)\n*2* - Sou Pessoa Jurídica (Privada)\n*0* - Menu inicial\n*99* - Falar com atendente IA'); //Primeira mensagem de texto

    }

    //SC
    if (msg.body === "SC" || msg.body === "sc" || msg.body === "Sc" || msg.body === "sC" && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPessoa = 'Contabilidade';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Olá! ' + name.split(" ")[0] + ' Por favor, digite uma das opções abaixo:\n\n*20* - Declarações e obrigações fiscais\n*21* - Organização e análise contábil\n*22* - Suporte em decisões empresariais\n*23* - Escrituração contábil e tributária\n*37* - Download Nfe PDF\n*38* - Consulta CNPJ\n*0* - Menu inicial\n*99* - Falar com atendente IA'); //Primeira mensagem de texto

    }


    //STI
    if (msg.body === "STI" || msg.body === "sti" || msg.body === "STi" || msg.body === "Sti" || msg.body === "sTI" || msg.body === "stI" || msg.body === "sTi" && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPessoa = 'Tecnologia da Informática';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Olá! ' + name.split(" ")[0] + ' Por favor, digite uma das opções abaixo:\n\n*50* - Produtos\n*51* - Serviços\n*52* - Desenvolvimento TIC\n*53* - Designer\n*54* - Redes\n*55* - Softs\n*56* - APIs\n*57* - Outro\n*0* - Menu inicial\n*99* - Falar com atendente IA'); //Primeira mensagem de texto

    }


    //Por favor digite o seu CNPJ
    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'Público';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor digite o seu CNPJ.');
    }

    //Por favor digite o seu CNPJ
    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'Privado';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor digite o seu CNPJ.');
    }

    //Digitado o CNPJ
    if (msg.body !== null && VPJ === 'PJ' && msg.body.length === 14 || msg.body.length === 18 && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        VPJ = 'PJ';

        let EmpCnpj;
        let EmpRzSocila;
        let EmpNFantasia;
        let EmpPorte;
        let EmpNjudridico;
        let EmpSimples;
        let VSimples;

        let MensagemAviso;

        var vrf;
        var cnpj;

        cnpj = msg.body.replace(/[^\d]+/g, '');

        if (isNaN(cnpj) == false) {
            if (cnpj == '') vrf = "false";
            if (cnpj.length != 14) vrf = "false";

            if (cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999")
                vrf = "false";

            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0, tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0)) vrf = "false";
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                vrf = "false";

            // CNPJ V�lido
            if (vrf != "false") {

                //var axios = require('axios');
                var config = {
                    method: 'get', url: 'https://www.receitaws.com.br/v1/cnpj/' + cnpj,
                };

                axios(config)

                function getCNPJ() {
                    axios.get('https://www.receitaws.com.br/v1/cnpj/' + cnpj)
                        .then(response => {
                            //console.log(JSON.stringify(response.data));
                            VCNPJ = (JSON.stringify(response.data.cnpj));
                            EmpCnpj = (JSON.stringify(response.data.cnpj));
                            EmpRzSocila = (JSON.stringify(response.data.nome));
                            EmpNFantasia = (JSON.stringify(response.data.fantasia));
                            EmpPorte = (JSON.stringify(response.data.porte));
                            EmpNjudridico = (JSON.stringify(response.data.natureza_juridica));
                            VSimples = (JSON.stringify(response.data.simples.optante));
                            if (VSimples == 'false') {
                                EmpSimples = 'Não';
                            }
                            if (VSimples == 'true') {
                                EmpSimples = 'Sim';

                            }

                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                }
                getCNPJ()

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, '*Seu dados são:*');

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'CNPJ: ' + '*' + EmpCnpj + '*');

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Razão Social: ' + '*' + EmpRzSocila + '*');

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Nome Fantasia: ' + '*' + EmpNFantasia + '*');

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Porte da empresa: ' + '*' + EmpPorte + '*');

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Natureza Jurídica: ' + '*' + EmpNjudridico + '*');

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Simples Nacional: ' + '*' + EmpSimples + '*');

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n*Sim*  - Estão corretas\n*Não*  - Estão erradas');

                if (vrf == "false") {

                    await delay(3000); //delay de 3 segundos
                    await chat.sendStateTyping(); // Simulando Digitação
                    await delay(3000);
                    await client.sendMessage(msg.from, 'Você digitou um CNPJ:  ' + cnpj + ' incorreto ou falso');

                }

            }
            else {
                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Por favor, digite novamente não entendemos! Verifique se está corrento por favor!');
            }




        }







    }

    //Sim
    if (msg.body !== null && msg.body == 'Sim' || msg.body == 'sim' || msg.body == 'SIM' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor, digite uma das opções abaixo:\n\n*3* - Produtos\n*4* - Serviços\n*9* - Preenchimento de Cotações\n*10* - Convite para licitações\n*15* - Falar com atendente');

    }

    //Não
    if (msg.body !== null && msg.body == 'Não' || msg.body == 'não' || msg.body == 'NÃO' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor digite novamente o CNPJ!');

    }

    //Produtos PJ
    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VNatOperacao = 'Produtos';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor, digite uma das opções abaixo:\n\n*5* - Estou vendendo\n*6* - Estou comprando'); //Primeira mensagem de texto

    }

    //Produtos PF
    if (msg.body !== null && msg.body === '60' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VNatOperacao = 'Produtos';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Por favor, digite uma das opções abaixo:\n\n*64* - Estou vendendo\n*65* - Estou comprando'); //Primeira mensagem de texto

    }

    //Servi�os PJ
    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VNatOperacao = 'Serviços';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor, digite uma das opções abaixo:\n\n*7* - Sou prestador serviços\n*8* - Sou tomador serviços'); //Primeira mensagem de texto

    }

    //Servi�os PF
    if (msg.body !== null && msg.body === '61' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VNatOperacao = 'Serviços';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Por favor, digite uma das opções abaixo:\n\n*66* - Sou prestador serviços\n*67* - Sou tomador serviços'); //Primeira mensagem de texto

    }

    //Estou vendendo PJ
    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VFomento = 'Estou vendendo';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Descreva para nós que produtos deseja vender e retornaremos o contato o mais breve possível com um de nossos atendentes?');

    }

    //Estou vendendo PF
    if (msg.body !== null && msg.body === '64' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Estou vendendo';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nós que produtos deseja vender e retornaremos o contato o mais breve possível com um de nossos atendentes?');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossos atendentes retornarão o contato assim que possível');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Info do seu contato abaixo:\n\n ' + VPessoa + ' ' + VDireito + ' - \n' + VNatOperacao + '\n' + VFomento + '\n' + VDescricao);

    }

    //Estou comprando PJ
    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Estou comprando';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Descreva para nós que produtos deseja comprar e retornaremos o contato o mais breve possível com um de nossos atendentes?');

    }

    //Estou comprando PF
    if (msg.body !== null && msg.body === '65' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Estou comprando';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nós que produtos deseja comprar e retornaremos o contato o mais breve possível com um de nossos atendentes?');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossos atendentes retornarão o contato assim que possível');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Info do seu contato abaixo:\n\n ' + VPessoa + ' ' + VDireito + ' - \n' + VNatOperacao + '\n' + VFomento + '\n' + VDescricao);


    }

    //Sou prestador servi�os PJ
    if (msg.body !== null && msg.body === '7' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VFomento = 'Sou prestador serviços';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Descreva para nós suas atividades utilizando pelo menos 20 caracteres?');

    }

    //Sou prestador servi�os PF
    if (msg.body !== null && msg.body === '66' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Sou prestador serviços';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nós suas atividades utilizando pelo menos 20 caracteres?');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossos atendentes retornarão o contato assim que possível');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Info do contato abaixo:\n\n ' + VPessoa + ' ' + VDireito + ' - \n' + VNatOperacao + '\n' + VFomento + '\n' + VDescricao);


    }

    //Sou tomador servi�os PJ
    if (msg.body !== null && msg.body === '8' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VFomento = 'Sou tomador serviços';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Descreva para nós suas atividades utilizando pelo menos 20 caracteres?');

    }

    //Sou tomador servi�os PF
    if (msg.body !== null && msg.body === '67' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Sou tomador serviços';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nós suas atividades utilizando pelo menos 20 caracteres?');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossos atendentes retornarão o contato assim que possível');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Info do contato abaixo:\n\n ' + VPessoa + '\n' + VNatOperacao + '\n' + VFomento);

    }


    //Servi�os cont�bil PF
    if (msg.body !== null && msg.body.length === '62' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        VDescricao = msg.body;

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nós suas necessidades utilizando pelo menos 20 caracteres?\nNossos atendentes retornarão o contato assim que possível');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Caso desejar poderá usar o link para o envio de arquivos: https://vioh.com.br/Index#contactForm');
    }

    //Falar com atendente PF
    if (msg.body !== null && msg.body.length === '63' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        VDescricao = msg.body;

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nós suas necessidades utilizando pelo menos 20 caracteres?\nNossos atendentes retornarão o contato assim que possível');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Caso desejar poderá usar o link para o envio de arquivos: https://vioh.com.br/Index#contactForm');
    }

    //Falar com atendente IA
    if (msg.body !== null && msg.body === '99' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        VIA = '99';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*IA* | Agora você está conversando com a *IA da VioH*, Pergunte algo?');
    }

    //Falar com atendente IA
    if (msg.body !== null && msg.body != "" && msg.body !== "99" && VIA === '99' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        //const axios = require('axios');

       const apiKey = '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';
        const url = 'https://api.openai.com/v1/chat/completions';

        let responseIA;

        axios.post(url, {
            model: "gpt-4o-mini",
            messages: [{ "role": "user", "content": msg.body }],
            temperature: 0.7,
            max_tokens: 1024,

        }, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${apiKey}`,
            }
        })
            .then(response => {
                //console.log(JSON.stringify(response.data.choices[0].message.content));
                let rps = JSON.stringify(response.data.choices[0].message.content);
                if (rps != "undefined") {
                    responseIA = '*IA* : ' + JSON.stringify(response.data.choices[0].message.content).replace("\n\n", " ");
                }
                else {
                    responseIA = '*IA* Não entendi, poderia se expressar melhor?';
                }

            })
            .catch(function (error) {
                console.log(error);
            });


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, responseIA);

        VIA = '99';


    }


    //Cota��es
    if (msg.body !== null && msg.body === '9' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Envie por aqui mesmo os arquivos para nós e devolveremos posteriormente preenchidos');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Caso desejar poderá usar o link para o envio de arquivos: https://vioh.com.br/Index#contactForm');

    }

    //Licita��es
    if (msg.body !== null && msg.body === '10' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Envie por aqui mesmo o convite ou link');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Caso desejar poderá usar o link para o envio de arquivos: https://vioh.com.br/Index#contactForm');

    }

    //Atendent PJ
    if (msg.body !== null && msg.body === '15' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Estamos redirecionando para um atendente. Ele entrará em contato assim que possível ');

    }

    //Atendent PF
    if (msg.body !== null && msg.body === '16' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Estamos redirecionando para um atendente');

    }

    //DOF Mensais
    if (msg.body !== null && msg.body === '20' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'Declarações e obrigações fiscais';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, digite uma das opções abaixo:\n\n*24* - Nota Fiscal Eletrônica (NF-e)\n*25* - Declarações de Débitos e Créditos Tributários Federais Mensal (DCTF)\n*26* - SPED Fiscal (EFD-ICMS/IPI)\n*27* - Declaração de Déb/Cré Tributários Federais Previdenciários (DCTFWeb\n*99* - Falar com atendente IA'); //Primeira mensagem de texto
    }

    //OAC Semestral/Bimestral/Anual
    if (msg.body !== null && msg.body === '21' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'Organização e análise contábil';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, digite uma das opções abaixo:\n\n*28* - Avaliação de Solvência\n*29* - Análise de Fluxo de Caixa\n*30* - Balanço Patrimonial\n*31* - Relatórios de Administração\n*32* - Pareceres de Auditoria e do Conselho Fiscal\n*33* - Detecção de Fraudes\n*34* - Gestão de Riscos\n*99* - Falar com atendente IA');
    }



    //DSS Suporte em decis�es empresariais
    if (msg.body !== null && msg.body === '22' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'Suporte em decisões empresariais';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor as suas necessidades para que possamos retornar o contato com um de nossos atendentes especializados na área. ');
    }


    //ECT 
    if (msg.body !== null && msg.body === '23' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'Escrituração contábil e tributária';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, digite uma das opções abaixo:\n\n*35* - Escrituração Contábil Digital (ECD)\n*36* - Escrituração Contábil Fiscal (ECF)');
    }


    //24 NFE
    if (msg.body !== null && msg.body === '24' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor as suas necessidades Nota Fiscal Eletrônica (NF-e) para que possamos retornar o contato e sanar suas dúvidas. ');
    }

    //25 DCTF
    if (msg.body !== null && msg.body === '25' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor  quais problemas você possue com suas (DCTFs) para que possamos retornar o contato e sanar suas dúvidas. ');
    }

    //26 IPI ICMS
    if (msg.body !== null && msg.body === '26' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor quais os impostos nas diferentes operações SPED você possue e quais suas dúvidas ou problemas para que possamos retornar o contato posteriomente e sanar suas dúvidas. ');
    }

    //27 DCTFWEB
    if (msg.body !== null && msg.body === '27' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor  quais problemas você possue com suas (DCTFWEB) para que possamos retornar o contato e sanar suas dúvidas. ');
    }

    //28 Avalia��o de Solv�ncia
    if (msg.body !== null && msg.body === '28' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, apresente de forma resumida os ativos e passivos da empresa quais problemas ela enfrenta para que possamos retornar o contato e orientá-lo da melhor forma possível. ');
    }

    //29 An�lise de Fluxo de Caixa
    if (msg.body !== null && msg.body === '29' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questão é necessário uma intervenção interna em sua empresa, caso você desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //30 Balan�o Patrimonial
    if (msg.body !== null && msg.body === '30' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questão é necessário uma intervenção interna em sua empresa, caso você desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //31 Relat�rios de Administra��o
    if (msg.body !== null && msg.body === '31' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questão é necessário uma intervenção interna em sua empresa, caso você desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //32 Pareceres de Auditoria e do Conselho Fiscal
    if (msg.body !== null && msg.body === '32' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questão é necessário uma intervenção interna em sua empresa, caso você desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //33 Detec��o de Fraudes
    if (msg.body !== null && msg.body === '33' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questão é necessário uma intervenção interna em sua empresa, caso você desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //34 Detecção de Fraudes
    if (msg.body !== null && msg.body === '34' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questão é necessário uma intervenção interna em sua empresa, caso você desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //50 Produtos
    if (msg.body !== null && msg.body === '50' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria produtos de TI? Descreva suas necessidades e retornaremos o contato. ');
    }

    //51 Serviços
    if (msg.body !== null && msg.body === '51' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria serviços de TI? Descreva suas necessidades e retornaremos o contato. ');
    }

    //52 Desenvolvimento
    if (msg.body !== null && msg.body === '52' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria desenvolvimento de TI? Descreva suas necessidades e retornaremos o contato. ');
    }


    //53 Designer
    if (msg.body !== null && msg.body === '53' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria designer de TI? Descreva suas necessidades e retornaremos o contato. ');
    }

    //54 Redes
    if (msg.body !== null && msg.body === '54' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria redes de TI? Descreva suas necessidades e retornaremos o contato. ');
    }

    //55 Softs
    if (msg.body !== null && msg.body === '55' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria Softs? Descreva suas necessidades e retornaremos o contato. ');
    }


    //56 APIs
    if (msg.body !== null && msg.body === '56' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria APIs? Descreva suas necessidades e retornaremos o contato. ');
    }


    //57 Outro
    if (msg.body !== null && msg.body === '57' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar? Descreva suas necessidades e retornaremos o contato. ');
    }


    //Download da DANFE
    if (msg.body !== null && msg.body === '37' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse a nossa página para fazer o download da Nfe em PDF: https://vioh.com.br/Index#CnpN');

    }

    //Consulta CNPJ
    if (msg.body !== null && msg.body === '38' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse a nossa página para fazer a consulta do CNPJ: https://vioh.com.br/Index#CnpN');

    }





});


client.initialize()

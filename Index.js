//tutorial hospedagem https://www.youtube.com/watch?v=6FOkWIGFNzI
// aws https://sa-east-1.console.aws.amazon.com/ec2/home?region=sa-east-1#Home:
// ---------------------------------------------------------------------------------------------------------
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia, LocalAuth } = require('whatsapp-web.js'); // MudanÃ§a Buttons
//const client = new Client();
const client = new Client({
    authStrategy: new LocalAuth(),
});

// serviÃ§o de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

//cliente autenticado
client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Sucesso! WhatsApp conectado e rodando.');
});

//variï¿½vel permanentes
let VPessoa;
let VCNPJ;
let VDireito;
let VNatOperacao;
let VFomento;
let VDescricao;
let VIA;
let VPJ;
let VMI;

qrcode.generate('http://github.com', function (qrcode) {
    console.log(qrcode);
});

// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // FunÃ§Ã£o que usamos para criar o delay entre uma aÃ§Ã£o e outra

//tutorial
//https://jagad.dev/posts/how-to-create-a-whatsapp-bot-with-node-js
//https://stackoverflow.com/questions/63803078/checking-message-length-with-discord-js


// Funil
client.on('message', async msg => {

    //Inicio
   // if ( msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|OlÃ¡|olÃ¡|ola|Ola|Oi|O|o|oi|ei|Ei|Eu|eu|Solicito|Bom|bom|boa|oie|Boa|Hi|hi)/i) && msg.from.endsWith('@c.us')) {
    if (VIA != 99 && msg.body != '' && msg.body.length >= 4 && msg.body != 'nÃ£o' && msg.body.length !== 14 && msg.body.length !== 18 &&  msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'OlÃ¡! ' + name.split(" ")[0] + ' Sou o *Assistente Virtual VioH.* Como posso ajudÃ¡-lo? \nPor favor, digite uma das opÃ§Ãµes abaixo:\n\n Digite (*PF*) Pessoa FÃ­sica\n Digite (*PJ*) Pessoa JurÃ­dica\n Digite (*SC*) ServiÃ§os de contabilidade\n Digite (*STI*) Suporte TÃ©cnico em TI\nDigite *00* - Quem Ã© a VioH?');

        
    }

     //Por favor digite o seu CNPJ
     if (msg.body !== null && msg.body === '0' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VIA = '';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'OlÃ¡! ' + name.split(" ")[0] + ' Sou o *Assistente Virtual VioH.* Como posso ajudÃ¡-lo? \nPor favor, digite uma das opÃ§Ãµes abaixo:\n\n Digite (*PF*) Pessoa FÃ­sica\n Digite (*PJ*) Pessoa JurÃ­dica\n Digite (*SC*) ServiÃ§os de contabilidade\n Digite (*STI*) Suporte TÃ©cnico em TI\nDigite *00* - Quem Ã© a VioH?');
    }

    //Por favor digite o seu CNPJ
    if (msg.body !== null && msg.body === '00' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃƒÂ§ÃƒÂ£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Vioh significa Virtual operaÃ§Ãµes HoppeDSH. A HoppeDSM Ã© uma empresa de serviÃ§os de tecnologia da informaÃ§Ã£o (T.I)  que trabalha com vÃ¡rios ramos de atividades como desenvolvimento de softwares, venda de produtos, prestaÃ§Ã£o de outros serviÃ§os como consultoria, serviÃ§os contÃ¡beis a  empresas...\n\nPossuÃ­mos ainda empresas auxiliares com outros tipos de atividades vocÃª pode visitar nosso site em https://vioh.com.br/ ou por contato@vioh.com.br\n\nAgradecemos o seu contato! VocÃª estÃ¡ sendo atendido pelo assistente  criado pela prÃ³pria Vioh.\n\nConheÃ§a tambÃ©m nossa InteligÃªncia Artificial *IA*, digitando *99*. ');

    }


    //PF
    if (msg.body === "PF" || msg.body === "pf" || msg.body === "Pf" || msg.body === "pF" || msg.body === "CPF" || msg.body === "cpf" && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPessoa = 'Pessoa FÃ­sica';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'OlÃ¡! ' + name.split(" ")[0] + ' Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*60* - Produtos\n*61* - ServiÃ§o Empresarial\n*62* - ServiÃ§o ContÃ¡bil\n*0* - Menu inicial\n*99* - Falar com atendente IA');
        
    }


    //PJ
    if (msg.body === "PJ" || msg.body === "pj" || msg.body === "Pj" || msg.body === "pJ" || msg.body === "CNPJ" || msg.body === "cnpj" && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VPessoa = 'Pessoa JurÃ­dica';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'OlÃ¡! ' + name.split(" ")[0] + ' Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*1* - Sou Pessoa JurÃ­dica (PÃºblica)\n*2* - Sou Pessoa JurÃ­dica (Privada)\n*0* - Menu inicial\n*99* - Falar com atendente IA'); //Primeira mensagem de texto

    }

    //SC
    if (msg.body === "SC" || msg.body === "sc" || msg.body === "Sc" || msg.body === "sC" && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPessoa = 'Contabilidade';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'OlÃ¡! ' + name.split(" ")[0] + ' Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*20* - DeclaraÃ§Ãµes e obrigaÃ§Ãµes fiscais\n*21* - OrganizaÃ§Ã£o e anÃ¡lise contÃ¡bil\n*22* - Suporte em decisÃµes empresariais\n*23* - EscrituraÃ§Ã£o contÃ¡bil e tributÃ¡ria\n*37* - Download Nfe PDF\n*38* - Consulta CNPJ\n*0* - Menu inicial\n*99* - Falar com atendente IA'); //Primeira mensagem de texto

    }


    //STI
    if (msg.body === "STI" || msg.body === "sti" || msg.body === "STi" || msg.body === "Sti" || msg.body === "sTI" || msg.body === "stI" || msg.body === "sTi" && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPessoa = 'Tecnologia da InformÃ¡tica';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'OlÃ¡! ' + name.split(" ")[0] + ' Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*50* - Produtos\n*51* - ServiÃ§os\n*52* - Desenvolvimento TIC\n*53* - Designer\n*54* - Redes\n*55* - Softs\n*56* - APIs\n*57* - Outro\n*0* - Menu inicial\n*99* - Falar com atendente IA'); //Primeira mensagem de texto

    }


    //Por favor digite o seu CNPJ
    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'PÃºblico';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor digite o seu CNPJ.');
    }

    //Por favor digite o seu CNPJ
    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'Privado';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
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

        if(isNaN(cnpj) == false)
        {
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

        // CNPJ Vï¿½lido
        if (vrf != "false") {

            var axios = require('axios');
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
                            EmpSimples = 'NÃ£o';
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
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, '*Seu dados sÃ£o:*');

            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, 'CNPJ: ' + '*' + EmpCnpj + '*');

            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, 'RazÃ£o Social: ' + '*' + EmpRzSocila + '*');

            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, 'Nome Fantasia: ' + '*' + EmpNFantasia + '*');

            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, 'Porte da empresa: ' + '*' + EmpPorte + '*');

            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, 'Natureza JurÃ­dica: ' + '*' + EmpNjudridico + '*');

            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, 'Simples Nacional: ' + '*' + EmpSimples + '*');

            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, 'Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*Sim*  - EstÃ£o corretas\n*NÃ£o*  - EstÃ£o erradas');

            if (vrf == "false") {

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
                await delay(3000);
                await client.sendMessage(msg.from, 'VocÃª digitou um CNPJ:  ' + cnpj + ' incorreto ou falso');
    
            }
            
        }
        else
        {
            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
            await delay(3000);
            await client.sendMessage(msg.from, 'Por favor, digite novamente nÃ£o entendemos! Verifique se estÃ¡ corrento por favor!');
        }


            

        }



        



    }

    //Sim
    if (msg.body !== null && msg.body == 'Sim' || msg.body == 'sim' || msg.body == 'SIM' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*3* - Produtos\n*4* - ServiÃ§os\n*9* - Preenchimento de CotaÃ§Ãµes\n*10* - Convite para licitaÃ§Ãµes\n*15* - Falar com atendente');

    }

    //NÃ£o
    if (msg.body !== null && msg.body == 'NÃ£o' || msg.body == 'nÃ£o' || msg.body == 'NÃƒO' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor digite novamente o CNPJ!');

    }

    //Produtos PJ
    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VNatOperacao = 'Produtos';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*5* - Estou vendendo\n*6* - Estou comprando'); //Primeira mensagem de texto

    }

     //Produtos PF
     if (msg.body !== null && msg.body === '60' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

         VPJ = 'PJ';
        VNatOperacao = 'Produtos';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
         await client.sendMessage(msg.from, '*PF* | Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*64* - Estou vendendo\n*65* - Estou comprando'); //Primeira mensagem de texto

    }

    //Serviï¿½os PJ
    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VNatOperacao = 'ServiÃ§os';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*7* - Sou prestador serviÃ§os\n*8* - Sou tomador serviÃ§os'); //Primeira mensagem de texto

    }

    //Serviï¿½os PF
    if (msg.body !== null && msg.body === '61' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VNatOperacao = 'ServiÃ§os';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*66* - Sou prestador serviÃ§os\n*67* - Sou tomador serviÃ§os'); //Primeira mensagem de texto

    }

    //Estou vendendo PJ
    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VFomento = 'Estou vendendo';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Descreva para nÃ³s que produtos deseja vender e retornaremos o contato o mais breve possÃ­vel com um de nossos atendentes?');

    }

    //Estou vendendo PF
    if (msg.body !== null && msg.body === '64' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Estou vendendo';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nÃ³s que produtos deseja vender e retornaremos o contato o mais breve possÃ­vel com um de nossos atendentes?');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossos atendentes retornarÃ£o o contato assim que possÃ­vel');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Info do seu contato abaixo:\n\n ' + VPessoa + ' ' + VDireito + ' - \n' + VNatOperacao + '\n' + VFomento + '\n' + VDescricao);

    }

    //Estou comprando PJ
    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Estou comprando';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Descreva para nÃ³s que produtos deseja comprar e retornaremos o contato o mais breve possÃ­vel com um de nossos atendentes?');

    }

    //Estou comprando PF
    if (msg.body !== null && msg.body === '65' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Estou comprando';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nÃ³s que produtos deseja comprar e retornaremos o contato o mais breve possÃ­vel com um de nossos atendentes?');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossos atendentes retornarÃ£o o contato assim que possÃ­vel');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Info do seu contato abaixo:\n\n ' + VPessoa + ' ' + VDireito + ' - \n' + VNatOperacao + '\n' + VFomento + '\n' + VDescricao);


    }

    //Sou prestador serviï¿½os PJ
    if (msg.body !== null && msg.body === '7' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VFomento = 'Sou prestador serviÃ§os';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Descreva para nÃ³s suas atividades utilizando pelo menos 20 caracteres?');

    }

    //Sou prestador serviï¿½os PF
    if (msg.body !== null && msg.body === '66' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Sou prestador serviÃ§os';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nÃ³s suas atividades utilizando pelo menos 20 caracteres?');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossos atendentes retornarÃ£o o contato assim que possÃ­vel');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Info do contato abaixo:\n\n ' + VPessoa + ' ' + VDireito + ' - \n' + VNatOperacao + '\n' + VFomento + '\n' + VDescricao);


    }

    //Sou tomador serviï¿½os PJ
    if (msg.body !== null && msg.body === '8' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VPJ = 'PJ';
        VFomento = 'Sou tomador serviÃ§os';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Descreva para nÃ³s suas atividades utilizando pelo menos 20 caracteres?');

    }

    //Sou tomador serviï¿½os PF
    if (msg.body !== null && msg.body === '67' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VFomento = 'Sou tomador serviÃ§os';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nÃ³s suas atividades utilizando pelo menos 20 caracteres?');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossos atendentes retornarÃ£o o contato assim que possÃ­vel');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Info do contato abaixo:\n\n ' + VPessoa + '\n' + VNatOperacao + '\n' + VFomento);

    }


    //Serviï¿½os contï¿½bil PF
    if (msg.body !== null && msg.body.length === '62' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        VDescricao = msg.body;

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nÃ³s suas necessidades utilizando pelo menos 20 caracteres?\nNossos atendentes retornarÃ£o o contato assim que possÃ­vel');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Caso desejar poderÃ¡ usar o link para o envio de arquivos: https://vioh.com.br/Index#contactForm');
    }

    //Falar com atendente PF
    if (msg.body !== null && msg.body.length === '63' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        VDescricao = msg.body;

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Descreva para nÃ³s suas necessidades utilizando pelo menos 20 caracteres?\nNossos atendentes retornarÃ£o o contato assim que possÃ­vel');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Caso desejar poderÃ¡ usar o link para o envio de arquivos: https://vioh.com.br/Index#contactForm');
    }

    //Falar com atendente IA
    if (msg.body !== null && msg.body === '99' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        VIA = '99';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*IA* | Agora vocÃª estÃ¡ conversando com a *IA da VioH*, Pergunte algo?');
    }

    //Falar com atendente IA
    if (msg.body !== null && msg.body != "" && msg.body !== "99" && VIA === '99' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        
        const axios = require('axios');

        const apiKey =  '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';
        const url = 'https://api.openai.com/v1/chat/completions';

        let responseIA;

        axios.post(url, {
            model: "gpt-4o-mini",
            messages: [{"role": "user", "content": msg.body }],
            temperature: 0.7,
            max_tokens: 1024, 

        }, {
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${apiKey}`,
        }
        })
        .then( response => {
        //console.log(JSON.stringify(response.data.choices[0].message.content));
        let rps = JSON.stringify(response.data.choices[0].message.content);
        if(rps != "undefined" ){
            responseIA = '*IA* : ' + JSON.stringify(response.data.choices[0].message.content).replace("\n\n", " ");
        }
        else{
            responseIA = '*IA* NÃ£o entendi, poderia se expressar melhor?';
        }

        })
        .catch(function (error) {
        console.log(error);
        });


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from,  responseIA);

        VIA = '99';


    }


    //Cotaï¿½ï¿½es
    if (msg.body !== null && msg.body === '9' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Envie por aqui mesmo os arquivos para nÃ³s e devolveremos posteriormente preenchidos');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Caso desejar poderÃ¡ usar o link para o envio de arquivos: https://vioh.com.br/Index#contactForm');

    }

    //Licitaï¿½ï¿½es
    if (msg.body !== null && msg.body === '10' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Envie por aqui mesmo o convite ou link');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Caso desejar poderÃ¡ usar o link para o envio de arquivos: https://vioh.com.br/Index#contactForm');

    }

    //Atendent PJ
    if (msg.body !== null && msg.body === '15' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PJ* | Estamos redirecionando para um atendente. Ele entrarÃ¡ em contato assim que possÃ­vel ');

    }

    //Atendent PF
    if (msg.body !== null && msg.body === '16' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*PF* | Estamos redirecionando para um atendente');

    }

    //DOF Mensais
    if (msg.body !== null && msg.body === '20' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'DeclaraÃ§Ãµes e obrigaÃ§Ãµes fiscais';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*24* - Nota Fiscal EletrÃ´nica (NF-e)\n*25* - DeclaraÃ§Ãµes de DÃ©bitos e CrÃ©ditos TributÃ¡rios Federais Mensal (DCTF)\n*26* - SPED Fiscal (EFD-ICMS/IPI)\n*27* - DeclaraÃ§Ã£o de DÃ©b/CrÃ© TributÃ¡rios Federais PrevidenciÃ¡rios (DCTFWeb\n*99* - Falar com atendente IA'); //Primeira mensagem de texto
    }

    //OAC Semestral/Bimestral/Anual
    if (msg.body !== null && msg.body === '21' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'OrganizaÃ§Ã£o e anÃ¡lise contÃ¡bil';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*28* - AvaliaÃ§Ã£o de SolvÃªncia\n*29* - AnÃ¡lise de Fluxo de Caixa\n*30* - BalanÃ§o Patrimonial\n*31* - RelatÃ³rios de AdministraÃ§Ã£o\n*32* - Pareceres de Auditoria e do Conselho Fiscal\n*33* - DetecÃ§Ã£o de Fraudes\n*34* - GestÃ£o de Riscos\n*99* - Falar com atendente IA');
    }



    //DSS Suporte em decisï¿½es empresariais
    if (msg.body !== null && msg.body === '22' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'Suporte em decisÃµes empresariais';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor as suas necessidades para que possamos retornar o contato com um de nossos atendentes especializados na Ã¡rea. ');
    }


    //ECT 
    if (msg.body !== null && msg.body === '23' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        VDireito = 'EscrituraÃ§Ã£o contÃ¡bil e tributÃ¡ria';

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, digite uma das opÃ§Ãµes abaixo:\n\n*35* - EscrituraÃ§Ã£o ContÃ¡bil Digital (ECD)\n*36* - EscrituraÃ§Ã£o ContÃ¡bil Fiscal (ECF)');
    }


    //24 NFE
    if (msg.body !== null && msg.body === '24' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor as suas necessidades Nota Fiscal EletrÃ´nica (NF-e) para que possamos retornar o contato e sanar suas dÃºvidas. ');
    }

    //25 DCTF
    if (msg.body !== null && msg.body === '25' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor  quais problemas vocÃª possue com suas (DCTFs) para que possamos retornar o contato e sanar suas dÃºvidas. ');
    }

    //26 IPI ICMS
    if (msg.body !== null && msg.body === '26' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor quais os impostos nas diferentes operaÃ§Ãµes SPED vocÃª possue e quais suas dÃºvidas ou problemas para que possamos retornar o contato posteriomente e sanar suas dÃºvidas. ');
    }

    //27 DCTFWEB
    if (msg.body !== null && msg.body === '27' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, descreva melhor  quais problemas vocÃª possue com suas (DCTFWEB) para que possamos retornar o contato e sanar suas dÃºvidas. ');
    }

    //28 Avaliaï¿½ï¿½o de Solvï¿½ncia
    if (msg.body !== null && msg.body === '28' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, apresente de forma resumida os ativos e passivos da empresa quais problemas ela enfrenta para que possamos retornar o contato e orientÃ¡-lo da melhor forma possÃ­vel. ');
    }

    //29 Anï¿½lise de Fluxo de Caixa
    if (msg.body !== null && msg.body === '29' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questÃ£o Ã© necessÃ¡rio uma intervenÃ§Ã£o interna em sua empresa, caso vocÃª desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //30 Balanï¿½o Patrimonial
    if (msg.body !== null && msg.body === '30' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questÃ£o Ã© necessÃ¡rio uma intervenÃ§Ã£o interna em sua empresa, caso vocÃª desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //31 Relatï¿½rios de Administraï¿½ï¿½o
    if (msg.body !== null && msg.body === '31' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questÃ£o Ã© necessÃ¡rio uma intervenÃ§Ã£o interna em sua empresa, caso vocÃª desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //32 Pareceres de Auditoria e do Conselho Fiscal
    if (msg.body !== null && msg.body === '32' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questÃ£o Ã© necessÃ¡rio uma intervenÃ§Ã£o interna em sua empresa, caso vocÃª desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //33 Detecï¿½ï¿½o de Fraudes
    if (msg.body !== null && msg.body === '33' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questÃ£o Ã© necessÃ¡rio uma intervenÃ§Ã£o interna em sua empresa, caso vocÃª desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //34 DetecÃ§Ã£o de Fraudes
    if (msg.body !== null && msg.body === '34' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*SC* | Por favor, para que possamos ajudar nessa questÃ£o Ã© necessÃ¡rio uma intervenÃ§Ã£o interna em sua empresa, caso vocÃª desejar podemos trabalhar juntos! Descreva melhor suas necessidades e retornaremos o contato. ');
    }

    //50 Produtos
    if (msg.body !== null && msg.body === '50' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria produtos de TI? Descreva suas necessidades e retornaremos o contato. ');
    }

    //51 ServiÃ§os
    if (msg.body !== null && msg.body === '51' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria serviÃ§os de TI? Descreva suas necessidades e retornaremos o contato. ');
    }

    //52 Desenvolvimento
    if (msg.body !== null && msg.body === '52' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria desenvolvimento de TI? Descreva suas necessidades e retornaremos o contato. ');
    }


    //53 Designer
    if (msg.body !== null && msg.body === '53' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria designer de TI? Descreva suas necessidades e retornaremos o contato. ');
    }

    //54 Redes
    if (msg.body !== null && msg.body === '54' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria redes de TI? Descreva suas necessidades e retornaremos o contato. ');
    }

    //55 Softs
    if (msg.body !== null && msg.body === '55' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria Softs? Descreva suas necessidades e retornaremos o contato. ');
    }


    //56 APIs
    if (msg.body !== null && msg.body === '56' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar na categoria APIs? Descreva suas necessidades e retornaremos o contato. ');
    }


    //57 Outro
    if (msg.body !== null && msg.body === '57' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, '*STI* | Como podemos ajudar? Descreva suas necessidades e retornaremos o contato. ');
    }

    
    //Download da DANFE
    if (msg.body !== null && msg.body === '37' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse a nossa pÃ¡gina para fazer o download da Nfe em PDF: https://vioh.com.br/Index#CnpN');

    }

    //Consulta CNPJ
    if (msg.body !== null && msg.body === '38' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando DigitaÃ§Ã£o
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse a nossa pÃ¡gina para fazer a consulta do CNPJ: https://vioh.com.br/Index#CnpN');

    }





});

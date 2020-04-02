// ************ Criando e Configurando o Servidor NodeJS **************//

// - Instalação de pacotes uteis

// ************************* Nodemon **********************************
// O nodemon é um pacote para restart o serviço (servidor) do node,
// toda vez que um arquivo é alterado.
// ("-g" é para a instalação do nodem ser global)
// Comando para instalar: npm install nodemon -g 




// ********************************************************************//

// // Carregando o módulo HTTP
// const http = require('http');

// Subindo o servidor com o "express"
// Obs.: O express já sobe o HTTP junto.
const express = require('express')

// Invocando o express. O Express é um função
const app = express()




// Linha de comando para subir com o express
// Não precisamos usar o comando "createServer", apenas o método da nossa rota
app.get('/', (req, res) => {

    // ************ USANDO O EXPRESS *****************//
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá!!!</h1>')

    // console.log('URL: ', req.url);
    // console.log('METHOD: ', req.method);

})

app.get('/users', (req, res) => {

    // ************ USANDO O EXPRESS *****************//
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'Fylipe',
            email: 'fylipears@gmail.com',
            id: 1
        }]
    })

    // console.log('URL: ', req.url);
    // console.log('METHOD: ', req.method);

})

// // Criando o servidor com o método "createServer" passando o método de "request/response"
// // const server = http.createServer((req, res) => {

//     // ************ SEM USAR O EXPRESS *****************//
//     // // Comando para a resposta não ficar sem fim
//     // res.end('OK!');

//     // Criando um switch para analisar a URL de solicitação
//     switch (req.url) {

//         case '/':
//             // Podemos passar também o status da requisição
//             // O código 200 da requisicao para o protocolo http é de sucesso
//             res.statusCode = 200;
//             // Podemos especificar o cabeçalho da requisição.
//                 // Content-Type: Tipo do conteúdo
//                 // text/html: Texto no padrão html
//             res.setHeader('Content-Type', 'text/html');
//             res.end('<h1>Olá!!!</h1>')
//             break;

//         // Vamos programar uma nova rota para testes
//         case '/users':
//             // Podemos passar também o status da requisição
//             // O código 200 da requisicao para o protocolo http é de sucesso
//             res.statusCode = 200;
//             // Exemplo para requisicao do tipo "JSON"
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify({
//                 users: [{
//                     name: 'Fylipe',
//                     email: 'fylipears@gmail.com',
//                     id: 1
//                 }]
//             }))
//             break;


//     }

// })

// Comando para o servidor ficar ouvindo
// IP local: 127.0.0.1
// server.listen(3000, '127.0.0.1', () => {

//     console.log('O servidor está rodando...')

// })

// ************ USANDO O EXPRESS *****************//
app.listen(3000, '127.0.0.1', () => {

    console.log('O servidor está rodando...')
    
})



// ******* Testando *********//

// (1)
// No terminal escrevermos o o "node" e o nome do arquivo (com ou sem extenção)
// Ex.: "node index"
// Verificar se apareceu a mensagem "O servidor está rodando..." no próprio terminal

// (2)
// No browser acesse a URL: "http://localhost:3000/"

// (3)
// Verificar se no console 
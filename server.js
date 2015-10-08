var http = require('http');
console.log('Criando server em localhost:3000');
http.createServer(function (req, res) {
    console.log('Server em localhost:3000 recebeu uma requisição');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sou um servidor criado pelo Node.JS!');
}).listen(3000, '127.0.0.1');
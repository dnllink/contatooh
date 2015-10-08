var http = require('http');

var app = require('./config/express')();

console.log('Criando server em localhost:3000');
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
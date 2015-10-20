var mongoose = require('mongoose');

module.exports = function (uri) {
    
    mongoose.set('debug', true);
    
    mongoose.connect(uri);
    
    process.on('SIGINT', function () {
        
        mongoose.connection.close(function () {
                        
            console.log('Mongoose - desconectado pelo término da aplicação');
            process.exit(0);
            
        });
        
    });

    mongoose.connection.on('connected', function () {
        
        console.log('Mongoose - conectado em ' + uri);
        
    });
    
    mongoose.connection.on('disconnected', function () {
        
        console.log('Mongoose - desconectado de ' + uri);
        
    });
    
    mongoose.connection.on('error', function (erro) {
        
        console.log('Mongoose - erro: ' + erro);
        
    });
    
}
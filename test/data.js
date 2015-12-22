var MongoClient = require('mongodb').MongoClient;

var contatos = [{
    nome: 'teste1',
    email: 'teste1@email'
}, {
    nome: 'teste2',
    email: 'teste2@email'
}, {
    nome: 'teste3',
    email: 'teste3@email'
}];

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh_test', function (erro, db) {
    if (erro) throw erro;

    db.dropDatabase(function (err) {
        if (err) throw err;

        console.log('Banco apagado com sucesso.');
        db.collection('contatos').insert(contatos, function (err, inserted) {
            if (err) return console.log(err);

            console.log('Banco populado com sucesso.');
            process.exit(0);
        });
    });
});
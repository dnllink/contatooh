var contatos = [
        {_id: 1, nome: 'Tyrion Lanister', email: 'contato1@got.com'},
        {_id: 2, nome: 'Jon Snow', email: 'contato2@got.com'},
        {_id: 3, nome: 'Ned Stark', email: 'contato3@got.com'}
    ];

module.exports = function() {
    var controller = {};
    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };
    controller.obtemContato = function(req, res) {
        console.log('id do contato: ' + req.params.id);
        var iDContato = req.params.id;
        var contato = contatos.filter(function(contato) {
            return contato._id == iDContato;
        })[0];
        contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
    };
    return controller;
};
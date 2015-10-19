var contatos = [
        {_id: 1, nome: 'Tyrion Lanister', email: 'contato1@got.com'},
        {_id: 2, nome: 'Jon Snow', email: 'contato2@got.com'},
        {_id: 3, nome: 'Ned Stark', email: 'contato3@got.com'}
    ];

module.exports = function() {
    
    var ID_CONTATO_INC = 3;
    
    var controller = {};
    
    controller.listaContatos = function (req, res) {
        res.json(contatos);
    };
    
    controller.obtemContato = function (req, res) {
        
        var iDContato = req.params.id;
        
        console.log('API: busca contato  = ' + iDContato);
        
        var contato = contatos.filter(function(contato) {
            return contato._id == iDContato;
        })[0];
        contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
        
    };
    
    controller.removeContato = function (req, res) {
        
        var iDContato = req.params.id;
    
        console.log('API: remove contato  = ' + iDContato);
        
        contatos = contatos.filter(function (contato) {
        
            return contato._id != iDContato;
        
        });
        res.status(204).end();
    
    };
    
    controller.salvaContato = function (req, res) {
    
        var contato = req.body;
        contato = contato._id ? atualiza(contato) : adiciona(contato);
        
        res.json(contato);
    
    };
    
    function adiciona (contatoNovo) {
    
        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        
        return contatoNovo;
    
    };
    
    function atualiza (contatoAlterar) {
    
        contatos = contatos.map(function (contato) {
        
            if (contato._id == contatoAlterar._id) {
            
                contato = contatoAlterar;
            
            }
            return contato;
        });
        return contatoAlterar;
    };
    
    return controller;
};
angular.module('contatooh').controller('ContatosController', function ($scope, Contato) {
    
    $scope.contatos = [];

    $scope.filtro = '';
    
    $scope.mensagem = {texto: ''};
    
    $scope.remove = function (contato) {
    
        Contato.delete({id: contato._id}, 
                      buscaContatos,
                      function (erro) {
        
                        $scope.mensagem = {texto: 'Não foi possível remover o contato'};
                        console.log('[ERRO] Não foi possível remover o contato');
                        console.log('[STATUSTEXT] ' + erro);
            
            }
        );
        
    };
    
    function buscaContatos () {
    
        Contato.query(function (contatos) {
            $scope.contatos = contatos;
            $scope.mensagem = {};
        }, function (erro) {
            $scope.mensagem = {texto: 'Não foi possível obter a lista de contatos'};
            console.log('[ERRO] Não foi possível obter a lista de contatos');
            console.log('[STATUSTEXT] ' + erro);
        });
        
    };
    
    buscaContatos();

});
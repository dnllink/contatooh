angular.module('contatooh').controller('EnderecoController', function ($scope, Endereco) {
    
    $scope.enderecos = [];
    
    $scope.mensagem = {texto: ''};
    
    function buscaEnderecos () {
        
        Endereco.get({cep:'02969100'}, function (enderecos) {
            
            var retornoWs = enderecos;                        
            $scope.enderecos.push(retornoWs);            
            $scope.mensagem = {};
            
        }, function (erro) {
            
            $scope.mensagem = {texto: 'Não foi possível obter a lista de contatos'};
            console.log('[ERRO] Não foi possível obter a lista de contatos');
            console.log('[STATUSTEXT] ' + erro);
            
        });
        
    
    };
    
    buscaEnderecos();

});
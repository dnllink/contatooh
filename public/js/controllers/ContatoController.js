angular.module('contatooh').controller('ContatoController', function ($scope, $routeParams, Contato) {
    
    $scope.mensagem = {texto: ''};
    
    $scope.contato = new Contato();
    
    $scope.contatos = [];
    
    Contato.query(function (contatos) {
        $scope.contatos = contatos;
    });
    
    if ($routeParams.contatoId) {
    
        Contato.get({id: $routeParams.contatoId}, function (contato) {
    
        $scope.contato = contato;
        $scope.mensagem = {};
    
    }, function (erro) {
    
        $scope.mensagem = {texto: 'Não foi possível obter o contato'};
        console.log('[ERRO] Não foi possível obter o contato');
        console.log('[STATUSTEXT]' + erro);
        
        });
        
    };
    
    $scope.salva = function () {
    
        $scope.contato.$save().then(function () {
        
            $scope.mensagem = {texto: 'Salvo com sucesso'};
            
            $scope.contato = new Contato();
        
        }).catch(function () {
        
            $scope.mensagem = {texto: 'Não foi possível salvar'};
            
        });
    
    };
    
});
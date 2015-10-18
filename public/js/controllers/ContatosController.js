angular.module('contatooh').controller('ContatosController', function($scope) {
    
    $scope.total = 0;
    
    $scope.incrementa = function() {
        $scope.total++;
    };
    
    $scope.contatos = [
        {_id: 1, nome: 'Tyrion Lanister', email: 'contato1@email.com'},
        {_id: 2, nome: 'Jon Snow', email: 'contato2@email.com'},
        {_id: 3, nome: 'Ned Stark', email: 'contato3@email.com'}
    ];
    
    $scope.filtro = '';
    
});
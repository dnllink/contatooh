angular.module('contatooh').controller('ContatosController', function ($scope, $http) {
    
    $scope.total = 0;
    
    $scope.contatos = [];

    $scope.filtro = '';
    
    $scope.incrementa = function () {
        $scope.total++;
    };
    
    $http.get('/contatos').success(function (data) {
        $scope.contatos = data;
    }).error(function (statusText) {
        console.log('[ERRO] Não foi possível obter a lista de contatos');
        console.log('[STATUSTEXT] ' + statusText);
    });
    
});
angular.module('contatooh', ['ngRoute', 'ngResource']).config(function($routeProvider, $httpProvider) {
    
    $httpProvider.defaults.useXDomain = true;
    
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });
    
    $routeProvider.when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });
    
    $routeProvider.when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });
    
    $routeProvider.when('/enderecos', {
        templateUrl: 'partials/enderecos.html',
        controller: 'EnderecoController'
    });
    
    $routeProvider.otherwise({redirectTo: '/contatos'});
    
});
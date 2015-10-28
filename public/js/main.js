angular.module('contatooh', ['ngRoute', 'ngResource']).config(function($routeProvider, $httpProvider) {
    
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('meuInterceptor');
    
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
    
    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'
    });
    
    $routeProvider.otherwise({redirectTo: '/contatos'});
    
});
angular.module('contatooh').factory('Endereco', function ($resource) {

    return $resource('http://www.devmedia.com.br/api/cep/service/10/?cep=:cep&chave=FUKRVKLIKW&formato=json');

});
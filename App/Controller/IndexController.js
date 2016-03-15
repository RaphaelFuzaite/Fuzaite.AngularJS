'use strict';

angular.module('AngularWebApp').controller('IndexController', ['GridService', function(GridService) {
    var vm = this;
    vm.Mensagem = 'Listagem de Paises'; 
    vm.Grid = new GridService({
        Url: 'https://restcountries.eu/rest/v1/all'
    });
}]);
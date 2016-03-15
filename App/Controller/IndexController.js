'use strict';

angular.module('AngularWebApp').controller('IndexController', ['GridService', function(GridService) {
    var vm = this;
    vm.Mensagem = 'Hello Word!';
}]);
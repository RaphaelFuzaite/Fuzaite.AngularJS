'use strict';

angular.module('AngularWebApp').directive('navigation', [function () {
    return {
        restrict: 'A',
        templateUrl: 'https://raw.githubusercontent.com/RaphaelFuzaite/Fuzaite.AngularJS/master/App/Templates/Navigation.html',
        controller: function () {
                    
        }
    }
}]).directive('metaTags', [function () {
    return {
        restrict: 'E',
        templateUrl: 'https://raw.githubusercontent.com/RaphaelFuzaite/Fuzaite.AngularJS/master/App/Templates/MetaTags.html',
        controller: function () {
                    
        }
    }
}]);
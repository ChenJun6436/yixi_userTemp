(function () {
    'use strict';
    angular.module('app.jun').controller('junController', junController);
    junController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
    ];
    function junController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {};
        console.log($rootScope.userRole);
    }
})();
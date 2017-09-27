(function () {

    'use strict';

    angular.module('app.chen').controller('chenController', chenController);

    chenController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state'
    ];

    function chenController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {};
        console.log('wo s  chenCCCCCCCCCCCCCCCCCCCCCCCC')
    }
})();
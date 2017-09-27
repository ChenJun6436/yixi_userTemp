/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */

(function () {
    'use strict';
    angular.module('app.layout').controller('headerController', headerController);

    headerController.$inject = ['$state', '$rootScope'];

    function headerController($state, $rootScope) {
        console.log('w s  header');
    }
})();

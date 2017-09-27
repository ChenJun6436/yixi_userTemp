(function () {
    'use strict';
    angular.module('app.helper').provider('routerHelper', routerHelperProvider);
    routerHelperProvider.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    function routerHelperProvider($stateProvider, $urlRouterProvider, $httpProvider) {
        this.$get = RouterHelper;
        RouterHelper.$inject = ['$rootScope', '$state'];
        function RouterHelper($rootScope, $state) {
            $httpProvider.interceptors.push('postInterceptor');
            var hasOtherwise = false;
            function configureStates(states, otherwisePath) {
                states.forEach(function (state) {
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }
            function getStates() {
                return $state.get();
            }
            var service = {
                configureStates: configureStates,
                getStates: getStates
            };
            return service;
        }
    }
})();
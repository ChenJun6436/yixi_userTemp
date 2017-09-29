(function() {
    'use strict';
    angular.module('app.login').run(appRun);
    appRun.$inject = ['routerHelper'];
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'login',
                config: {
                    url: '/login',
                    views: {
                        '': {
                            templateUrl: 'static/dist/tpls/components/businesses/login/inlogin.html',
                            controller: ['$state','$scope', '$rootScope', function ($state, $scope, $rootScope) {
                                    $scope.login = true;
                                $scope.showRegister = function () {
                                    $scope.login = !$scope.login;
                                    if($scope.login){

                                    }
                                }
                            }]
                        },
                        'login@login': {
                            templateUrl: 'static/dist/tpls/components/businesses/login/login.html',
                            controller: 'loginController'
                        },
                        'register@login': {
                            templateUrl: 'static/dist/tpls/components/businesses/login/register.html',
                            controller: 'registerController'
                        }
                    }
                }
            }
        ];
    }
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';

    angular.module('app.layout').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        var otherwise = '/login';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: 'main',
                config: {
                    url: '/main',
                    views: {
                        '': {
                            templateUrl: 'static/dist/tpls/components/businesses/layout/main.html'
                        },
                        'header@main': {
                            templateUrl: 'static/dist/tpls/components/businesses/layout/header.html',
                            controller: 'headerController'
                        },
                        'aside@main': {
                            templateUrl: 'static/dist/tpls/components/businesses/layout/aside.html',
                            controller: 'asideController'
                        },
                        'section@main': {
                            controller: ['$state', '$rootScope', function ($state, $rootScope) {
                                //根据角色不同判断默认显示的初始化页面

                            }]
                        }
                    }
                }
            }
        ];
    }
})();

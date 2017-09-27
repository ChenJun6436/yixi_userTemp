(function() {

    'use strict';

    angular.module('app.userManagement').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.authorityManagement',
            config: {
                url: '/authorityManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/userManagement/authorityManagement.html',
                        controller: 'authorityManagementController'
                    }
                }
            }
        },{
            state: 'main.roleManagement',
            config: {
                url: '/roleManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/userManagement/roleManagement.html',
                        controller: 'roleManagementController'
                    }
                }
            }
        },{
            state: 'main.userManagement',
            config: {
                url: '/userManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/userManagement/userManagement.html',
                        controller: 'userManagementController'
                    }
                }
            }
        }];
    }
})();
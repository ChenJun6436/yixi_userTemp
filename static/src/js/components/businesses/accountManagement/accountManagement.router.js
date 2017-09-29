(function() {

    'use strict';

    angular.module('app.accountManagement').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.userData',
            config: {
                url: '/userData',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/accountManagement/userData.html',
                        controller: 'userDataController'
                    }
                }
            }
        },{
            state: 'main.dealManagement',
            config: {
                url: '/dealManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/accountManagement/dealManagement.html',
                        controller: 'dealManagementController'
                    }
                }
            }
        }];
    }
})();
(function() {

    'use strict';

    angular.module('app.orderManagement').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        console.log('wo s chen Router')
        return [{
            state: 'main.capitalManagement',
            config: {
                url: '/capitalManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/orderManagement/capitalManagement.html',
                        controller: 'capitalManagementController'
                    }
                }
            }
        },{
            state: 'main.dealManagement',
            config: {
                url: '/dealManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/orderManagement/dealManagement.html',
                        controller: 'dealManagementController'
                    }
                }
            }
        }];
    }
})();
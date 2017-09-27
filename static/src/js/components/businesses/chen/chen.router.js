(function() {

    'use strict';

    angular.module('app.chen').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        console.log('wo s chen Router')
        return [{
            state: 'main.chen',
            config: {
                url: '/chen',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/chen/chen.html',
                        controller: 'chenController'
                    }
                }
            }
        }];
    }
})();
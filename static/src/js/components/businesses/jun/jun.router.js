(function() {
    'use strict';
    angular.module('app.jun').run(appRun);
    appRun.$inject = ['routerHelper'];
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.jun',
            config: {
                url: '/jun',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/jun/jun.html',
                        controller: 'junController'
                    }
                }
            }
        }];
    }
})();
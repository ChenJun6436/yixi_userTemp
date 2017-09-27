/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.core').factory('postInterceptor', postInterceptor);

    postInterceptor.$inject = ['$rootScope', '$q', 'tools', '$cookies'];

    function postInterceptor ($rootScope, $q, tools, $cookies) {
        return {
            'request': function (config) {
                return config;
            },
            'response': function (resp) {
                if (resp.data.status === false) {
                    if (resp.data.message === '用户已过期') {
                        setTimeout(function () {
                            window.location.href = $rootScope.url;
                            $cookies.remove('user');
                            $rootScope.user = $cookies.getObject('user');
                            localStorage.clear();
                        }, 2000);
                    }
                    if (resp.data.flag === 1) {
                        if(resp.data.message==null){
                            tools.alertError('操作失败，请稍后再试！');
                        }else{
                            tools.alertError(resp.data.message);
                        }
                    } else if (resp.data.flag === 0) {
                        tools.alertError(resp.data.message);
                    } else {
                        tools.alertError(resp.data.message);
                    }
                }
                return resp;
            },
            'requestError': function (rejection) {
                console.log('requestError' + $q.reject(rejection));
                return $q.reject(rejection);
            },
            'responseError': function (rejection) {
                console.log('responseError' + rejection);
                return rejection;
            }
        };
    }
})();
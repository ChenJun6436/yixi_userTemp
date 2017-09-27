/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function() {
    'use strict';
    angular.module('app').config(appConfig);

    appConfig.$inject = ['$httpProvider', '$locationProvider'];

    function appConfig($httpProvider, $locationProvider) {
        //添加发送请求的拦截器，发送之后的回调函数
        $httpProvider.interceptors.push('postInterceptor');
        //转换到根目录 这里暂时不用
        // $locationProvider.html5Mode(true);
        //设置hash值
        $locationProvider.hashPrefix('');
    }
})();
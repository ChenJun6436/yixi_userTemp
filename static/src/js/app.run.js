/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app').run(appRun);

    appRun.$inject = ['$rootScope', '$cookies', '$state', '$http'];

    function appRun($rootScope, $cookies, $state, $http) {
        //改变全局  需要引入moment.JS 时间处理类库  这里是上下午zh-cn
        // moment.locale('zh-cn')
        // if ($cookies.getObject('user')) {
        //     $rootScope.userRole = $cookies.getObject('user').role;
        //     $rootScope.userName = $cookies.getObject('user').name;
        //     console.log($rootScope.userRole +""+"这是启动的时候")
        // }
        // console.log($cookies.getObject('user')+""+"这是启动的时候 获取cookies")
        /**
         * 取消请求
         */
        $rootScope.clearPending = function () {
            angular.forEach($http.pendingRequests, function (request) {
                if (request.cancel && request.timeout) {
                    request.cancel.resolve('canceled');
                }
            });
        };
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.clearPending();
            $rootScope.alert = false;
            console.log("********************");
            //页面权限控制，防止交叉访问
            //不是登陆页面
            if (toState.name !== 'login') {
                //公共页面
                var premissionArr = [
                    'main'
                ];
                //用户判断去哪个页面,特定用户添加router
                premissionArr = premissionArr.concat([
                    'main.userData',
                    'main.roleManagement',
                    'main.userManagement',
                    'main.dealManagement',
                    'main.capitalManagement',
                ]);
                //如果在路由集合中找不到  输入的地址或者即将跳转的地址，那么就去主页
                if (premissionArr.indexOf(toState.name) === -1) {
                    event.preventDefault();
                    $state.go('main');
                }
            }
        });
        //操作成功或失败弹窗
        $rootScope.isActive = true;
        $rootScope.alertValue = '';
        $rootScope.alert = false;
    }
})();
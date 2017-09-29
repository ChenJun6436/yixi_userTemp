/*author：chenjun 17.9.20*/
(function () {
    'use strict';
    angular.module('app.login').controller('registerController', registerController);
    registerController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state'
    ];
    function registerController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {
            Ruser: {},
            canClick: false,
            loginErrorTitle: '账号认证不通过',
            loginErrorMessage: '请联系管理员开通'
        };
        //开发
        // $cookies.remove('user');
        //
        $('#registerButton').on('click', function () {
            $scope.vm.RSubmit = true;
            var $btn = $(this).button('loading')
            if($scope.vm.registerForm.$valid){

            }else {
                $btn.button('reset')
            }
        })
        // $scope.vm.login = function () {
        //验证表单
        /*发送登录请求*/
        // commonService.postLogin().then(function(res){
        //     if(res){
        //         console.log('成功登录')
        //         $state.go('main');
        //         $cookies.putObject('user', {
        //             name: $scope.vm.user.userName,
        //             pwd: $scope.vm.user.passWords
        //         });
        //         $rootScope.user_Name = $cookies.getObject('user').role;
        //         $rootScope.user_Token = $cookies.getObject('user').name;
        //     }else if(res.aa){
        //         console.log('登录失败')
        //     }
        // })
        // };
        //点击注册
        $scope.vm.showRegister = function () {
            $scope.vm.login = true;
        }
        // $scope.vm.register = function () {
        //     console.log(2222222)
        // }
    }
})();
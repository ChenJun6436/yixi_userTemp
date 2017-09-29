/*author：chenjun 17.9.20*/
(function () {
    'use strict';
    angular.module('app.login').controller('loginController', loginController);
    loginController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state'
    ];
    function loginController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {
            user: {},
            // login: true,
            canClick: false,
            loginErrorTitle: '账号认证不通过',
            loginErrorMessage: '请联系管理员开通'
        };
        //开发
        // $cookies.remove('user');
        //
        $('#loginButton').on('click', function () {
            $scope.vm.loginSubmit = true;
            var $btn = $(this).button('loading')
            if($scope.vm.longinForm.$valid){
                $cookies.remove('user');
                $cookies.putObject('user', {
                    name: $scope.vm.user.userName,
                    pwd: $scope.vm.user.passWords
                });
                if($cookies.getObject('user').name == '1'){
                    $scope.vm.loginError = true
                    $scope.vm.closeLoginError = function () {
                        $scope.vm.loginError = false
                        $btn.button('reset')
                    }
                }else {
                    $rootScope.userName = $cookies.getObject('user').name;
                    $state.go('main.userData');
                }
            }else {
                $btn.button('reset')
            }
        })
        $('[name="status"]').bootstrapSwitch({
            onText:"记住账号",
            offText:"不保存账号",
            onColor:"success",
            offColor:"defult",
            size:"small",
            onSwitchChange:function(event,state){
                if(state==true){
                    $(this).val("1");
                }else{
                    $(this).val("2");
                }
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
        // $scope.vm.showRegister = function () {
        //     $scope.vm.login = false;
        // }
        $scope.vm.register = function () {
            console.log(11111)
        }
    }
})();
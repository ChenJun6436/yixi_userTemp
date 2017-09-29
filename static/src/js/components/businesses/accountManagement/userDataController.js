(function () {

    'use strict';

    angular.module('app.accountManagement').controller('userDataController', userDataController);

    userDataController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams'
    ];

    function userDataController($scope, $rootScope, $cookies, $state, NgTableParams) {
        $scope.vm = {};
        $scope.vm.menuList = [
            {'PK':1,'menuName':'超级管理员','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'一般管理员','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'一级代理','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'二级代理','parentName':'heihei','menuLevelName':'陈俊'},
        ]
        $scope.vm.tableParams = new NgTableParams(
            { count: 100 },
            { dataset: $scope.vm.menuList}
        );
        //初始化时间
        laydate.render({
            elem: '#startTime', //指定元素
            range: '~',
            theme: '#524f4f'
        });
        //初始化开关
        $('[name="status"]').bootstrapSwitch({
            onText:"男",
            offText:"女",
            onColor:"success",
            offColor:"danger",
            size:"small",
            onSwitchChange:function(event,state){
                if(state==true){
                    $(this).val("1");
                    $scope.vm.bb = 1
                }else{
                    $(this).val("2");
                    $scope.vm.bb = 2
                }
            }
        })
        //提交
        $scope.vm.putUser = function () {
            $scope.vm.uSubmit = true;
            if($scope.vm.userForm.$valid){
                if(!$scope.vm.bb){
                    $scope.vm.bb = 2
                }
                console.log($scope.vm.bb )
            }else {
                console.log(1)
            }
        }
    }
})();
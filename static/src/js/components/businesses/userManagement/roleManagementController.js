(function () {

    'use strict';

    angular.module('app.userManagement').controller('roleManagementController', roleManagementController);

    roleManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams'
    ];

    function roleManagementController($scope, $rootScope, $cookies, $state, NgTableParams) {
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
        //编辑
        $scope.vm.editorRole = function () {
            $('#editorUser').modal('show')
        }
        //删除
            $scope.vm.deleteRole = function () {
            $('#deleteRole').modal('show')
        }
        //添加角色
        $scope.vm.addRole = function () {
            $('#addRole').modal('show')
            //初始化开关
            $('[name="status"]').bootstrapSwitch({
                onText:"需要",
                offText:"不需要",
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
        }
    }
})();
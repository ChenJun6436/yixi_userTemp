(function () {

    'use strict';

    angular.module('app.userManagement').controller('authorityManagementController', authorityManagementController);

    authorityManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams',
        'tools'
    ];

    function authorityManagementController($scope, $rootScope, $cookies, $state, NgTableParams,tools) {
        $scope.vm = {};
        $scope.vm.menuList = [
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},{'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
        ]
        $scope.vm.tableParams = new NgTableParams(
            { count: 100 },
            { dataset: $scope.vm.menuList}
        );
        //添加菜单
        $scope.vm.showAddMenu = function () {
            $('#addMenu').modal('show')
        }
        //添加子菜单
        $scope.vm.showAddChildMenu = function () {
            $('#addMenu').modal('show')
        }
        //编辑子菜单
        $scope.vm.showEdtChildMenu = function () {
            $('#addMenu').modal('show')
        }
        //删除子菜单
        $scope.vm.showDelChildMenu = function () {
            $('#deleteMenu').modal('show')
            //确认删除
            $scope.vm.sureDelete = function () {
                tools.alertSuccess('删除成功')
                $('#deleteMenu').modal('hide')
            }
        }
    }
})();
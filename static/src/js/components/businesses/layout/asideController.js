/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.layout').controller('asideController', asideController);

    asideController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state'
    ];
    function asideController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {}
        $scope.state = $state
        //获取用户操作菜单
        $scope.vm.getUserList = function () {
            //发送请求
            $scope.vm.userListFirst = ['管理首页','系统设置','用户管理','通道管理','订单管理','提款管理','文章管理']
            $scope.vm.userListSecond = ['基本设置','邮件设置','系统更新']
            $scope.vm.navList = ['基本设置','111']
            $scope.vm.nowChooseNav = 0
        }
        $scope.vm.getUserList()
        // 显示 导航栏点击显示
        $scope.vm.chooseFirst = function (_index) {
            $scope.vm.chooseFirstOne = _index
        }
        // 显示 历史记录显示
        $scope.vm.chooseNav = function (_index) {
            $scope.vm.nowChooseNav = _index
        }
        // 历史Nav添加
        $scope.vm.pushNavList = function (navName) {
            if($scope.vm.navList.indexOf(navName)=== -1){
                $scope.vm.navList.push(navName)
            }else {
                console.log(navName)
            }
        }
        // 历史Nav删除
        $scope.vm.delNavList = function (_index) {
            $scope.vm.navList.splice(_index,1)
            if($scope.vm.navList.length === 0){
                $scope.vm.navList.push('默认页面')
            }
        }
        //vm.delNowChoose()">关闭当前选项卡
        $scope.vm.delNowChoose = function () {
            $scope.vm.navList.splice($scope.vm.nowChooseNav,1)
            if($scope.vm.navList.length === 0){
                $scope.vm.navList.push('默认页面')
            }
        }
        //vm.delAllChoose()">关闭全部选项卡
        $scope.vm.delAllChoose = function () {
            $scope.vm.navList = []
            $scope.vm.navList.push('默认页面')
        }
        //vm.delOtherChoose()">关闭其他选项卡
        $scope.vm.delOtherChoose = function () {
            $scope.vm.navList = [$scope.vm.navList[$scope.vm.nowChooseNav]]
        }
    }
})();

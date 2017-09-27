(function() {
    'use strict';
    angular.module('app.helper',
        [
            'ui.router'
        ]);
})();
/**
* 需要引入的插件和模块
* */
(function() {
    'use strict';
    angular.module('app.core', [
        'app.helper',
        'ngCookies',
        'ngTable',
    ]);
})();
(function() {
    'use strict';
    angular.module('app.chen', ['app.core']);
})();
(function() {
    'use strict';
    angular.module('app.jun', ['app.core']);
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function() {
    'use strict';

    angular.module('app.layout', ['app.core']);

})();
(function() {
    'use strict';
    angular.module('app.login', ['app.core']);
})();
(function() {
    'use strict';
    angular.module('app.orderManagement', ['app.core']);
})();
(function() {
    'use strict';
    angular.module('app.userManagement', ['app.core']);
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app', [
        'app.helper',
        'app.core',
        'app.layout',
        'app.login',
        'app.chen',
        'app.jun',
        'app.userManagement',
        'app.orderManagement'
    ]);
})();
(function () {
    'use strict';
    angular.module('app.helper').provider('routerHelper', routerHelperProvider);
    routerHelperProvider.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    function routerHelperProvider($stateProvider, $urlRouterProvider, $httpProvider) {
        this.$get = RouterHelper;
        RouterHelper.$inject = ['$rootScope', '$state'];
        function RouterHelper($rootScope, $state) {
            $httpProvider.interceptors.push('postInterceptor');
            var hasOtherwise = false;
            function configureStates(states, otherwisePath) {
                states.forEach(function (state) {
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }
            function getStates() {
                return $state.get();
            }
            var service = {
                configureStates: configureStates,
                getStates: getStates
            };
            return service;
        }
    }
})();
angular.module('app.core').directive('alertDelete',function(){
    return {
        restrict :"E",
        //1: 指令形式，（E以元素存在）
        scope:{sureDelete:'&sureDelete'},  //5:传入数据，模板上的变量名：“=指令上的属性名”；
        template :
        '<div class="modal fade modal-open" id="deleteMenu" tabindex="-1" role="dialog" aria-labelledby="addGrantsModal" style="top:50%;margin-top: -200px;height: 202px;overflow-y:hidden;">'+
            '<div class="modal-dialog" style="width:450px;" role="document">'+
                '<div class="modal-content">'+
                    '<div class="modal-header h50">'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><spanaria-hidden="true">&times;</span></button>'+
                            '<h4 class="modal-title fs16 lh30" id="addGrantsModal">确认删除{{x}}</h4>'+
                        '</div>'+
                    '<div class="modal-body">'+
                        '<p>确定要删除吗？</p>'+
                        '<div class="text-center mt30">'+
                            '<button class="btn btn-primary" ng-click="sureDelete()">确定</button>'+
                            '<button type="button" class="btn btn-default ml10" data-dismiss="modal" aria-label="Close">取消</button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
        ,
        replace:true,
        //3： 是否替换掉自定指令元素
        transclude:true,
        //4： 处理指令里面的dom显示在哪里的，是否需要在
        link:function(scope, element, attrs){
            //自己用一个controller

        }
    }
});
/**
 * Created by Administrator on 2017/9/27 0027.
 */

(function() {

    'use strict';

    angular.module('app.chen').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        console.log('wo s chen Router')
        return [{
            state: 'main.chen',
            config: {
                url: '/chen',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/chen/chen.html',
                        controller: 'chenController'
                    }
                }
            }
        }];
    }
})();
(function () {

    'use strict';

    angular.module('app.chen').controller('chenController', chenController);

    chenController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state'
    ];

    function chenController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {};
        console.log('wo s  chenCCCCCCCCCCCCCCCCCCCCCCCC')
    }
})();
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
(function () {
    'use strict';
    angular.module('app.jun').controller('junController', junController);
    junController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
    ];
    function junController($scope, $rootScope, $cookies, $state) {
        $scope.vm = {};
        console.log($rootScope.userRole);
    }
})();
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

/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */

(function () {
    'use strict';
    angular.module('app.layout').controller('headerController', headerController);

    headerController.$inject = ['$state', '$rootScope'];

    function headerController($state, $rootScope) {
        console.log('w s  header');
    }
})();

/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';

    angular.module('app.layout').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        var otherwise = '/login';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: 'main',
                config: {
                    url: '/main',
                    views: {
                        '': {
                            templateUrl: 'static/dist/tpls/components/businesses/layout/main.html'
                        },
                        'header@main': {
                            templateUrl: 'static/dist/tpls/components/businesses/layout/header.html',
                            controller: 'headerController'
                        },
                        'aside@main': {
                            templateUrl: 'static/dist/tpls/components/businesses/layout/aside.html',
                            controller: 'asideController'
                        },
                        'section@main': {
                            controller: ['$state', '$rootScope', function ($state, $rootScope) {
                                //根据角色不同判断默认显示的初始化页面

                            }]
                        }
                    }
                }
            }
        ];
    }
})();

(function() {
    'use strict';
    angular.module('app.login').run(appRun);
    appRun.$inject = ['routerHelper'];
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'login',
            config: {
                url: '/login',
                templateUrl: 'static/dist/tpls/components/businesses/login/login.html',
                controller: 'loginController'
            }
        }];
    }
})();
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
                console.log($cookies.getObject('user'))
                if($cookies.getObject('user').name == '1'){
                    $scope.vm.loginError = true
                    $scope.vm.closeLoginError = function () {
                        $scope.vm.loginError = false
                        $btn.button('reset')
                    }
                }else {
                    $rootScope.userName = $cookies.getObject('user').name;
                    $state.go('main.authorityManagement');
                }
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
    }
})();
(function () {

    'use strict';

    angular.module('app.orderManagement').controller('capitalManagementController', capitalManagementController);

    capitalManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams'
    ];

    function capitalManagementController($scope, $rootScope, $cookies, $state, NgTableParams) {
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
    }
})();
(function () {

    'use strict';

    angular.module('app.orderManagement').controller('dealManagementController', dealManagementController);

    dealManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams'
    ];

    function dealManagementController($scope, $rootScope, $cookies, $state, NgTableParams) {
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
        //初始化时间
        laydate.render({
            elem: '#startTime', //指定元素
            range: '~',
            theme: '#524f4f'
        });
        laydate.render({
            elem: '#completeTime', //指定元素
            range: '~',
            theme: '#524f4f'
        });
    }
})();
(function() {

    'use strict';

    angular.module('app.orderManagement').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        console.log('wo s chen Router')
        return [{
            state: 'main.capitalManagement',
            config: {
                url: '/capitalManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/orderManagement/capitalManagement.html',
                        controller: 'capitalManagementController'
                    }
                }
            }
        },{
            state: 'main.dealManagement',
            config: {
                url: '/dealManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/orderManagement/dealManagement.html',
                        controller: 'dealManagementController'
                    }
                }
            }
        }];
    }
})();
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
(function() {

    'use strict';

    angular.module('app.userManagement').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.authorityManagement',
            config: {
                url: '/authorityManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/userManagement/authorityManagement.html',
                        controller: 'authorityManagementController'
                    }
                }
            }
        },{
            state: 'main.roleManagement',
            config: {
                url: '/roleManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/userManagement/roleManagement.html',
                        controller: 'roleManagementController'
                    }
                }
            }
        },{
            state: 'main.userManagement',
            config: {
                url: '/userManagement',
                views: {
                    'section@main': {
                        templateUrl: 'static/dist/tpls/components/businesses/userManagement/userManagement.html',
                        controller: 'userManagementController'
                    }
                }
            }
        }];
    }
})();
(function () {

    'use strict';

    angular.module('app.userManagement').controller('userManagementController', userManagementController);

    userManagementController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'NgTableParams',
        '$timeout'
    ];

    function userManagementController($scope, $rootScope, $cookies, $state, NgTableParams, $timeout) {
        $scope.vm = {};
        //初始化时间插件
        laydate.render({
            elem: '#startTime', //指定元素udate
            range: '~',
            theme: '#524f4f'
        });
        $scope.vm.menuList = [
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
            {'PK':1,'menuName':'haha','parentName':'heihei','menuLevelName':'陈俊'},
        ]
        $scope.vm.tableParams = new NgTableParams(
            { count: 100 },
            { dataset: $scope.vm.menuList}
        );
        $scope.vm.tableParams2 = new NgTableParams(
            { count: 100 },
            { dataset: $scope.vm.menuList}
        );
        //查看认证
        $scope.vm.showUserAuthentification = function () {
            $('#userAuthentification').modal('show')
        }
        //查看账户总额
        $scope.vm.showUserTotalAmount = function () {
            $('#userTotalAmount').modal('show')
        }
        //增加金额
        $scope.vm.showAddAmount = function () {
            $('#addUserTotalAmount').modal('show')
        }
        //冻结金额
        $scope.vm.showFrostAmount = function () {
            $('#frostUserTotalAmount').modal('show')
        }
        //提现-->
        $scope.vm.showCaseUser = function () {
            $('#caseUser').modal('show')
        }
        //通道-->AisleUser
        $scope.vm.showAisleUser = function () {
            $('#aisleUser').modal('show')
        }
        //费率-->RateUser
        $scope.vm.showRateUser = function () {
            $('#rateUser').modal('show')
        }
        //密码-->PasswordUser
        $scope.vm.showPasswordUser = function () {
            $('#passwordUser').modal('show')
        }
        //编辑-->EditorUser
        $scope.vm.showEditorUser = function () {
            $('#editorUser').modal('show')
            //初始化时间插件
            laydate.render({
                elem: '#udate', //指定元素
                theme: '#524f4f'
            });
        }
        //删除-->DeleteUser
        $scope.vm.showDeleteUser = function () {
            $('#deleteUser').modal('show')
        }
        //初始化开关
        $timeout(function(){
            $('[name="status"]').bootstrapSwitch({
                onText:"正常",
                offText:"禁用",
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
            $('[name="apiStatus"]').bootstrapSwitch({
                onText:"开启",
                offText:"关闭",
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
        },500);

    }
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.core').factory('httpServer', httpServer);

    httpServer.$inject = ['$http', '$q', 'ROOT'];

    function httpServer($http, $q, ROOT) {
        return {
            postHttp: function (url, data) {
                var deferred = $q.defer();
                if (data) {
                    $http({
                        method: 'post',
                        url: ROOT + url,
                        data: data,
                        timeout: deferred.promise,
                        cancel: deferred
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                } else {
                    $http({
                        method: 'post',
                        url: ROOT + url,
                        timeout: deferred.promise,
                        cancel: deferred,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                }
                return deferred.promise;
            },
            put: function (url, data) {
                var deferred = $q.defer();
                $http({
                    method: 'put',
                    url: ROOT + url,
                    data: data,
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            post: function (url, data) {
                var deferred = $q.defer();
                $http.post(ROOT + url + '/' + data, {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            get: function (url, data) {

                var _pramas = '';

                if(data || data === 0){
                    if (angular.isArray(data)){
                        angular.forEach(data, function (value){
                            _pramas += '/' + value;
                        });
                    }else {
                        _pramas = '/' + data;
                    }
                }

                var deferred = $q.defer();
                $http.get(ROOT + url + ( _pramas !== '' ? _pramas : ''), {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                }, function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            delete: function (url, data) {
                var deferred = $q.defer();
                $http.delete(ROOT + url + '/' + data, {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            deleteHttp:  function (url, data) {
                var deferred = $q.defer();
                if (data) {
                    $http({
                        method: 'delete',
                        url: ROOT + url,
                        data: data,
                        timeout: deferred.promise,
                        cancel: deferred
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                } else {
                    $http({
                        method: 'delete',
                        url: ROOT + url,
                        timeout: deferred.promise,
                        cancel: deferred,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                }
                return deferred.promise;
            }
        };
    }
})();

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
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    /**
     * 常量
     */
    angular.module('app.core').constant('ROOT', '');
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('grantsAdvisorServer', grantsAdvisorServer);

    grantsAdvisorServer.$inject = ['httpServer'];

    function grantsAdvisorServer(httpServer) {
        var myServices = {};
        //本学年评定经济困难但未申请助学金
        myServices.notApply = function (data) {
            return httpServer.get('/grantsAdvisor/povertyNotApply', data);
        };
        //s


        return myServices;
    }
})();

/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.core').factory('locals', locals);

    locals.$inject = ['$window'];

    function locals($window) {
        return {        //存储单个属性
            set: function (key, value) {
                $window.localStorage[key] = value;
            },        //读取单个属性
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },        //存储对象，以JSON格式存储
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },        //读取对象
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        };
    }
})();
/**
 * @Author: chenjun
 * @Date:   2017-09-21
 */
(function () {
    'use strict';
    angular.module('app.core').service('tools', tools);

    tools.$inject = ['$timeout', '$rootScope', '$cookies'];

    function tools($timeout, $rootScope, $cookies) {
        /**
         * 退出登录
         */
        this.logout = function () {
            $cookies.remove('user');
            $rootScope.user = $cookies.getObject('user');
            localStorage.clear();
        };

        /**
         * 成功提示框
         * @param data  提示信息
         */
        this.alertSuccess = function (data, time) {
            $rootScope.alert = true;
            $rootScope.isActive = true;
            $timeout(function () {
                $rootScope.alert = false;
            }, time ? time : 2000);
            $rootScope.alertValue = data;
        };

        /**
         * 失败提示框
         * @param data  提示信息
         */
        this.alertError = function (data, time) {
            $rootScope.alert = true;
            $rootScope.isActive = false;
            $timeout(function () {
                $rootScope.alert = false;
            }, time ? time : 2000);
            $rootScope.alertValue = data;
        };

        /**
         * 判断对象是否为空
         * @param e
         * @returns {boolean}
         */
        this.isEmptyObject = function (e) {
            var t;
            for (t in e) {
                return !1;
            }
            return !0;
        };

        /**
         * 改数组null为0
         * @param arr
         * @param item *多少
         * @returns {boolean}
         */
        this.formatArr = function (arr, item) {
            return arr.map(function (data) {
                return data == null || data === 'NaN' ? 0 : (item == null ? data : data * item);
            });
        };
        
        /**
         * 格式化字符串
         * @param str   传入字符串
         * @param num   从第几个位置开始
         * @param tips  添加标记
         * @returns {string}
         */
        this.formatStr = function (str, num, tips) {
            var newStr = '';
            var count = 0;
            if (str) {
                for (var i = 0, len = str.length; i < len; i++) {
                    if (count % num === 0 && count !== 0) {
                        newStr = newStr + tips + str.charAt(i);
                    } else {
                        newStr = newStr + str.charAt(i);
                    }
                    count++;
                }
                return newStr;
            } else {
                return str;
            }
        };
        
        /**
         * 返回数组中最大值
         * @param arr
         */
        this.max = function (arr) {
            //Math.max.apply(null, [])  =>-Infinity
            if (angular.isArray(arr)) {
                return arr.length > 0 ? Math.max.apply(null, arr) : 0;
            } else {
                console.log(arr + 'is not a array');
            }
        };

        /**
         * 返回数组中最小值
         * @param arr
         */
        this.min = function (arr) {
            if (angular.isArray(arr)) {
                return arr.length > 0 ? Math.min.apply(null, arr) : 0;
            } else {
                console.log(arr + 'is not a array');
            }
        };

        /**
         * 判断json数组对象属性是否重复
         * @param arr
         * @param name
         * @returns {boolean}
         */
        this.isRepeat = function (arr, name) {

            var obj = {}, _arr = [];

            angular.forEach(arr, function (value) {
                if (!obj[value[name]]) {
                    obj[value[name]] = 1;
                    _arr.push(value[name]);
                }
            });

            return arr.length !== _arr.length;
        };
        /**
         * 验证大于0的数字
         * */
        this.number = function (num) {
            var reg = new RegExp("^[0-9]*$");
            if(reg.test(num)){
                return true;
            }else {
                return false;
            }
        };
    }
})();
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
                    'main.chen',
                    'main.authorityManagement',
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
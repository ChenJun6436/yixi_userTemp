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

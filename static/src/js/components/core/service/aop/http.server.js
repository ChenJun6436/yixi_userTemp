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

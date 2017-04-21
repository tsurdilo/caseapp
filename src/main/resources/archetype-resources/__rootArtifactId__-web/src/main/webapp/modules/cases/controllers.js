'use strict';

angular.module('Cases')

.controller('CasesController',
    ['$scope', '$rootScope', '$location', 'appConfig', 'CasesService',
    function ($scope, $rootScope, $location, appConfig, CasesService) {
            $scope.dataLoading = true;

            CasesService.GetDefinitions(appConfig.get('kieserver_url'), function (response) {

                if (response.success) {
                    $scope.cases = response.data;
                    $location.path('/listcasesdefs');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
    }]);
'use strict';

angular.module('Home')

    .controller('HomeController',
        ['$scope', '$rootScope', '$location','sharedStateService', 'Page', 'ModalService',
            function ($scope, $rootScope, $location, sharedStateService, Page , ModalService) {
                $scope.Page = Page;
                $scope.Page.setTitle("Case Application");
                $scope.user = $rootScope.globals.currentUser.username;
                $scope.userrole = $rootScope.globals.currentUser.role;
                $scope.serverInfo = $rootScope.kieServer;
                $scope.date = new Date();

                $scope.go = function ( path ) {
                    $location.path( path );
                };

                $scope.showStartCodingModal = function() {
                    ModalService.showModal({
                        templateUrl: "modules/home/views/startcoding-modal.html",
                        controller: "SimpleModalController"
                    }).then(function(modal) {
                        modal.element.modal();
                        modal.close.then(function(result) {

                        });
                    });
                };
            }])

    .controller('HeaderController',
        ['$scope', '$rootScope', '$location',
            function ($scope, $rootScope, $location)  {
                $scope.isActive = function (viewLocation) {
                    return viewLocation === $location.path();
                }
            }])

    .controller('SimpleModalController', ['$scope', 'close', function($scope, close) {

        $scope.close = function(result) {
            close(result, 500);
        };

    }]);

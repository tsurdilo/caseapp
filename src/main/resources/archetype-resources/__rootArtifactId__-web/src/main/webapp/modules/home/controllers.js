'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$rootScope', '$location','sharedStateService', 'Page',
    function ($scope, $rootScope, $location, sharedStateService, Page) {
        $scope.Page = Page;
        $scope.Page.setTitle("Case Application");
        $scope.user = $rootScope.globals.currentUser.username;
        $scope.userrole = $rootScope.globals.currentUser.role;
        $scope.serverInfo = $rootScope.kieServer;
        $scope.date = new Date();        

        $scope.go = function ( path ) {
            $location.path( path );
          };
    }])

.controller('HeaderController',
        ['$scope', '$rootScope', '$location',
            function ($scope, $rootScope, $location)  {
                $scope.isActive = function (viewLocation) {
                    return viewLocation === $location.path();
                }
    }]);

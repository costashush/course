var myApp = angular.module('myApp', []);
myApp.controller('curencyC', [function($scope) {
            $scope.x1 = "JOHN";
            $scope.x2 = angular.lowercase($scope.x1);
        });
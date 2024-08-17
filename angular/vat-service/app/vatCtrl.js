app.controller('vatCtrl', ["$scope", "vat", function($scope, vat) {
    // $scope.vat = vat;

    this.calc = function(num) {
        return vat.calc(num) + num
    }
}]);
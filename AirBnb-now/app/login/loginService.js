myApp.factory('loginService', ['$rootScope', 'usersService', loginService]);

function loginService($rootScope, usersService) {
    var service = {};

    service.user;
    service.pass;

    service.login
    service.loginMsg = "";

    service.login = function (userName, pass) {
        var exists = usersService.match(userName, pass);
        if (exists) {

            service.user = userName;
            service.pass = pass;
            $rootScope.$broadcast('login', exists);

        } else {
            service.loginMsg = "invalid user";
        }

    }

    service.removeMsg = function () {
        service.loginMsg = "";
        // $scope.userName = "";
        // $scope.pass = "";

    }

    return service;
}
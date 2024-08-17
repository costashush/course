myApp.factory('subscribeService', ['loginService', 'homesService', subscribeService]);

function subscribeService(loginService, homesService) {
    var service = {};
    service.subscribeHomesStruct = {};

    service.subscribeHome = function (homeId) {
        var userName = loginService.userName;
        if (this.subscribeHomesStruct[userName] === undefined) {
            this.subscribeHomesStruct[userName] = [];
        }
        var home = homesService.getHome('id', homeId);

        this.subscribeHomesStruct[userName].push(home);
    }

    service.getSubscriptionHomes = function () {
        var userName = loginService.user;
        if (this.subscribeHomesStruct[userName ] === undefined) {
            // return [];
            return [{"id":6,"ownerId":8,"description":"Environmental Specialist","price":"$2381.29","roomNum":3,"latitude":31.6057917,"longtitude":34.1698563}];
        }
        return this.subscribeHomesStruct[userName ];
    }

    return service;
}
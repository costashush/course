myApp.factory('usersService', [usersService]);


function usersService() {

    var service = {}


    service.getData = function () {
        return users;
    }

    service.getImg = function (userId) {
        for (let user of users) {
            if (user.id == userId) {
                return user.image;
            }

        }
        return null;
    }

    service.match = function (userName, pass) {
        for (let user of users) {
            if (user.userName == userName && user.pass === pass) {
                return  true;
            }
        }
        return false;

    }

    return service;
}




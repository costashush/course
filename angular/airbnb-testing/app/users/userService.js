myApp.factory('userList', [function() {

    var services = {};

    services.getImg = function(index) {
        return users[index].img;
    }
    services.getData = function() {
        return users;
    }

    services.match = function(userName, password) {

        for (var user of users) {
            if (user.name == useName && user.password === password) {
                return true;

            } else {
                return false;
            }
        }
    }
    return services;
}])
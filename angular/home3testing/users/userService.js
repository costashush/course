myApp.factory('userList', [function() {

    var services = {};



    services.getImg = function(index) {
        return users[index].img;
    }
    services.getData = function() {
        return users;
    }
    return services;
}])
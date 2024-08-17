var myApp = angular.module('myApp', []);

myApp.controller('HomeInventoryControler', ['userList', 'houseList', function(userList, houseList) {
    // this.maxPrice= filter.
    this.getUsers = userList.getData;
    this.getHouse = houseList.getData;
    this.add = houseList.add;
    this.delete = houseList.delete;
    this.getImg = userList.getImg;
    this.update = houseList.update;
    this.showTasks = houseList.showTasks;
    this.getPrev = houseList.getPrev;
    this.getNext = houseList.getNext;
}]);

// myApp.filter('maxPrice', function() {
//     return function(input, price) {
//         return input > price;
//     };
// })
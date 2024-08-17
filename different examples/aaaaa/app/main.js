angular.module('myApp', []).controller('main', [function () {
    this.houses = [{
            city: 'jerusalem',
            price: 100
        },
        {
            city: 'tel aviv',
            price: 200
        }
    ]
}])
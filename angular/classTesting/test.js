var myApp = angular.module('myApp', []);

myApp.controller('adder', function() {


    this.sum = 0;

    this.add = function(a, b) {

        this.sum = a + b;

    }

})
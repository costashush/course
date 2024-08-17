
'use strict'




myApp.controller('listController', ['$rootScope','$scope', 'usersService', 'homesService','subscribeService', function ($rootScope,$scope, usersService, homesService,subscribeService) {


    this.markers = [];
    this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 31.771959, lng: 35.217018 }

    });
    
    this.subscribeService = subscribeService;

    $scope.login = false;
    $rootScope.$on("login", (event, exists) => {
        $scope.login = exists;
            // this.subscribeService.getSubscriptionHomes();
    });


    this.usersService = usersService;
    this.homesService = homesService;

    this.getHomes = function () {

        var tempHomes = homesService.getData1();

        return tempHomes;
    }

this.nextHomes = function(){
    this.homesService.nextHomes();
    this.initMap1()

}

this.prevHomes = function(){
    this.homesService.prevHomes();
    this.initMap1()

}



    this.initMap1 = function () {
        var locations = [];
        var tempHomes = this.getHomes();
        var firstHome = null;
        for (let home of tempHomes) {
            if (firstHome === null) {
                firstHome = home;
            }
            locations.push(home)
        }

        var marker, i;
        for (let marker of this.markers) {
            marker.setMap(null)

        }
        this.markers = [];

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: { lat: locations[i].latitude, lng: locations[i].longtitude },
                map: this.map,
                title: locations[i].description
            });
            this.markers.push(marker);


        }

    }











}]);





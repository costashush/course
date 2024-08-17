var myApp = angular.module('myApp', []);

myApp.controller('HomeInventoryControler', ['userList', 'houseList', function(userList, houseList) {
    // this.maxPrice= filter.
    // this.getUsers = userList.getData;
    this.getHouse = houseList.getData;
    this.add = houseList.add;


    this.getImg = userList.getImg;
    this.update = houseList.update;
    ////fix 10 homes getter
    this.getPrev = houseList.getPrev;
    this.getNext = houseList.getNext;


    this.markers = []

    this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 40, lng: 0 }
    });

    this.initMap = function(houses) {

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }


        for (i = 0; i < houses.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(houses[i].latitude, houses[i].longitude),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(houses[i].id.toString());
                    infowindow.open(map, marker);
                }
            })(marker, i));
            this.markers.push(marker);
        }

    }





}]);
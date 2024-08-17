myApp.factory('houseList', [function() {


    var markers = []

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 40, lng: 0 }
    });

    var services = {};

    services.initMap = function(houses) {


        // var markers = []



        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
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
            markers.push(marker);
        }

    }


    services.getImg = function(index) {
        return houses[index].picture;
    }


    services.getData = function(rooms, price) {
        var upHouses = [];

        if (rooms || price) {

            for (var i in houses) {
                if (houses[i].rooms == rooms && houses[i].price <= price) {
                    upHouses.push(houses[i]);

                }

            }

        } else {
            upHouses = houses;
        }
        services.initMap(upHouses);
        // services.initMarkers(upHouses);
        return upHouses;

    }
    services.add = function(ownerId, description, rooms, price, lat, long, pic) {
        var newHouse = {};

        newHouse["id"] = houses.length + 1
        newHouse["ownerId"] = ownerId
        newHouse["description"] = description
        newHouse["rooms"] = rooms
        newHouse["price"] = price
        newHouse["latitude"] = lat
        newHouse["longitude"] = long
        newHouse["picture"] = pic

        houses.push(newHouse);

        return ownerId = null;

    }


    return services;
}]);
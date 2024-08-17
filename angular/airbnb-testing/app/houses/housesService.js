myApp.factory('houseList', [function() {



    var services = {};



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
        // services.initMap(upHouses);

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
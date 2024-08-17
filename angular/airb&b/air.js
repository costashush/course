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



myApp.factory('userList', [function() {

    var services = {};

    var users = [{ "img": "https://robohash.org/quamlaborealias.jpg?size=50x50&set=set4", "first_name": "Alfred", "last_name": "Carslake", "telephone": "acarslake0@patch.com", "open": false },
        { "img": "https://robohash.org/veritatismaximehic.png?size=50x50&set=set4", "first_name": "Alphard", "last_name": "Gilliland", "telephone": "agilliland1@shutterfly.com", "open": false },
        { "img": "https://robohash.org/inventorelaudantiumsimilique.png?size=50x50&set=set4", "first_name": "Ebony", "last_name": "Clymo", "telephone": "eclymo2@lycos.com", "open": false },
        { "img": "https://robohash.org/inciduntmagnamvoluptatem.png?size=50x50&set=set4", "first_name": "Hilliary", "last_name": "Birtwhistle", "telephone": "hbirtwhistle3@biblegateway.com", "open": false },
        { "img": "https://robohash.org/sintveliterror.bmp?size=50x50&set=set4", "first_name": "Verene", "last_name": "Marney", "telephone": "vmarney4@mayoclinic.com", "open": false },
        { "img": "https://robohash.org/utdolorrepellat.bmp?size=50x50&set=set4", "first_name": "Joycelin", "last_name": "Fontes", "telephone": "jfontes5@soup.io", "open": false },
        { "img": "https://robohash.org/expeditasolutaamet.png?size=50x50&set=set4", "first_name": "Keeley", "last_name": "Watkiss", "telephone": "kwatkiss6@gmpg.org", "open": false },
        { "img": "https://robohash.org/molestiaedoloresarchitecto.bmp?size=50x50&set=set4", "first_name": "Giusto", "last_name": "Krysiak", "telephone": "gkrysiak7@facebook.com", "open": false },
        { "img": "https://robohash.org/ettemporibusmaiores.png?size=50x50&set=set4", "first_name": "May", "last_name": "Gough", "telephone": "mgough8@bravesites.com", "open": false },
        { "img": "https://robohash.org/eosmagnammaiores.png?size=50x50&set=set4", "first_name": "Priscella", "opl;": "Misk", "telephone": "pmisk9@howstuffworks.com", "open": false }
    ]

    services.getImg = function(index) {
        return users[index].img;
    }
    services.getData = function() {
        return users;
    }
    return services;
}])





myApp.factory('houseList', [function() {


    var markers = []

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 40, lng: 0 }
    });

    var services = {};

    var houses = [{ "id": 1, "ownerId": 4, "latitude": 46.95, "longitude": 79.66667, "rooms": 5, "price": "2222.43", "description": "Replacement of Perineum Tendon with Nonautologous Tissue Substitute, Open Approach", "picture": "https://robohash.org/aliquiddoloresnon.bmp?size=50x50&set=set1" },
        { "id": 2, "ownerId": 1, "latitude": 47.5113895, "longitude": 1.820875, "rooms": 5, "price": "1533.55", "description": "Bypass Left Pulmonary Artery from Innominate Artery with Autologous Arterial Tissue, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/nihilnullaexpedita.jpg?size=50x50&set=set1" },
        { "id": 3, "ownerId": 8, "latitude": 56.4477313, "longitude": 13.6156546, "rooms": 5, "price": "1264.03", "description": "Removal of Drainage Device from Lower Bone, Percutaneous Approach", "picture": "https://robohash.org/velitdoloresvoluptates.bmp?size=50x50&set=set1" },
        { "id": 4, "ownerId": 8, "latitude": 14.5404328, "longitude": 49.127197, "rooms": 4, "price": "1528.40", "description": "Excision of Left Inferior Parathyroid Gland, Percutaneous Approach, Diagnostic", "picture": "https://robohash.org/eaquequiincidunt.bmp?size=50x50&set=set1" },
        { "id": 5, "ownerId": 6, "latitude": 14.4711923, "longitude": 121.0206914, "rooms": 1, "price": "1166.99", "description": "Dilation of Coronary Artery, Four or More Arteries, Bifurcation, with Two Drug-eluting Intraluminal Devices, Open Approach", "picture": "https://robohash.org/liberoaccusamusvitae.bmp?size=50x50&set=set1" },
        { "id": 6, "ownerId": 7, "latitude": -6.7290837, "longitude": 111.3694594, "rooms": 4, "price": "2286.40", "description": "Restriction of Splenic Vein, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/totamsolutaincidunt.jpg?size=50x50&set=set1" },
        { "id": 7, "ownerId": 4, "latitude": 50.4244054, "longitude": 14.3899392, "rooms": 3, "price": "1147.40", "description": "Reattachment of Left Hand Skin, External Approach", "picture": "https://robohash.org/eaquequiareprehenderit.png?size=50x50&set=set1" },
        { "id": 8, "ownerId": 9, "latitude": -2.0980751, "longitude": 36.7819505, "rooms": 2, "price": "4731.55", "description": "Removal of Monitoring Device from Gallbladder, Open Approach", "picture": "https://robohash.org/rationelaborealias.jpg?size=50x50&set=set1" },
        { "id": 9, "ownerId": 1, "latitude": 49.12249, "longitude": 15.8681689, "rooms": 4, "price": "2153.46", "description": "Excision of Right Hip Tendon, Open Approach", "picture": "https://robohash.org/estomnisdolores.bmp?size=50x50&set=set1" },
        { "id": 10, "ownerId": 5, "latitude": -8.5643, "longitude": 116.1492, "rooms": 4, "price": "1889.88", "description": "Insertion of External Fixation Device into Right Thumb Phalanx, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/etnullaeaque.jpg?size=50x50&set=set1" },
        { "id": 11, "ownerId": 9, "latitude": 64.0128827, "longitude": 11.496376, "rooms": 5, "price": "1138.26", "description": "Beam Radiation of Skull using Photons <1 MeV", "picture": "https://robohash.org/totamenimquaerat.png?size=50x50&set=set1" },
        { "id": 12, "ownerId": 3, "latitude": -6.8300602, "longitude": 110.8374104, "rooms": 4, "price": "1664.56", "description": "Resection of Right Lower Extremity Bursa and Ligament, Open Approach", "picture": "https://robohash.org/quoearumquaerat.jpg?size=50x50&set=set1" },
        { "id": 13, "ownerId": 6, "latitude": 45.416456, "longitude": -73.9160797, "rooms": 5, "price": "4014.36", "description": "Revision of Drainage Device in Mesentery, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/consequaturnamquo.bmp?size=50x50&set=set1" },
        { "id": 14, "ownerId": 7, "latitude": 13.4292207, "longitude": -88.5945715, "rooms": 1, "price": "3673.48", "description": "Respiratory System, Extirpation", "picture": "https://robohash.org/voluptatemillumet.bmp?size=50x50&set=set1" },
        { "id": 15, "ownerId": 1, "latitude": 48.6511908, "longitude": 6.481599, "rooms": 4, "price": "3411.13", "description": "Dilation of Mitral Valve, Open Approach", "picture": "https://robohash.org/velitporrovel.jpg?size=50x50&set=set1" },
        { "id": 16, "ownerId": 1, "latitude": 30.242572, "longitude": 120.053059, "rooms": 3, "price": "4023.49", "description": "Removal of Monitoring Device from Hepatobiliary Duct, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/suscipitetexcepturi.jpg?size=50x50&set=set1" },
        { "id": 17, "ownerId": 1, "latitude": 59.4015532, "longitude": 18.3427724, "rooms": 3, "price": "4202.34", "description": "Removal of Drainage Device from Pancreas, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/enimfacereaccusantium.png?size=50x50&set=set1" },
        { "id": 18, "ownerId": 6, "latitude": -14.5154982, "longitude": -39.299866, "rooms": 2, "price": "3631.95", "description": "Reattachment of Left Lower Lung Lobe, Open Approach", "picture": "https://robohash.org/voluptatibusquasiexpedita.jpg?size=50x50&set=set1" },
        { "id": 19, "ownerId": 6, "latitude": 50.0588756, "longitude": 23.9736471, "rooms": 1, "price": "1266.44", "description": "Reposition Left External Iliac Artery, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/enimnostrumad.bmp?size=50x50&set=set1" },
        { "id": 20, "ownerId": 2, "latitude": 28.155801, "longitude": 105.444765, "rooms": 4, "price": "1699.84", "description": "Computerized Tomography (CT Scan) of Left Hip using Low Osmolar Contrast", "picture": "https://robohash.org/aliasconsequuntursint.bmp?size=50x50&set=set1" },
        { "id": 21, "ownerId": 6, "latitude": 48.7057309, "longitude": 2.2186743, "rooms": 4, "price": "1151.15", "description": "Muscle Performance Assessment of Integumentary System - Whole Body using Orthosis", "picture": "https://robohash.org/autnemoeos.bmp?size=50x50&set=set1" },
        { "id": 22, "ownerId": 8, "latitude": 41.2115446, "longitude": -8.1699995, "rooms": 1, "price": "4096.40", "description": "Dilation of Left Colic Artery with Two Intraluminal Devices, Open Approach", "picture": "https://robohash.org/ipsaiustomolestiae.bmp?size=50x50&set=set1" },
        { "id": 23, "ownerId": 10, "latitude": 33.613239, "longitude": -4.191742, "rooms": 2, "price": "1712.46", "description": "Radiation Therapy, Urinary System, Beam Radiation", "picture": "https://robohash.org/quisquamnobisminus.png?size=50x50&set=set1" },
        { "id": 24, "ownerId": 3, "latitude": 60.1960972, "longitude": 17.8961823, "rooms": 5, "price": "3041.45", "description": "Dilation of Left Axillary Artery with Four or More Intraluminal Devices, Open Approach", "picture": "https://robohash.org/ututquod.bmp?size=50x50&set=set1" },
        { "id": 25, "ownerId": 1, "latitude": 51.55683, "longitude": 105.1262, "rooms": 2, "price": "3246.15", "description": "Revision of Autologous Tissue Substitute in Right Thumb Phalanx, Percutaneous Approach", "picture": "https://robohash.org/eaquebeataemodi.bmp?size=50x50&set=set1" },
        { "id": 26, "ownerId": 4, "latitude": 36.617134, "longitude": 101.778223, "rooms": 2, "price": "1820.83", "description": "Removal of Drainage Device from Gallbladder, External Approach", "picture": "https://robohash.org/sithica.jpg?size=50x50&set=set1" },
        { "id": 27, "ownerId": 8, "latitude": 7.1061769, "longitude": 125.6424056, "rooms": 5, "price": "2391.37", "description": "Bypass Right External Jugular Vein to Upper Vein with Autologous Venous Tissue, Open Approach", "picture": "https://robohash.org/doloribusenimdolor.jpg?size=50x50&set=set1" },
        { "id": 28, "ownerId": 6, "latitude": -6.9842, "longitude": 112.4909, "rooms": 3, "price": "1295.10", "description": "Occlusion of Common Bile Duct with Intraluminal Device, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/aperiamsapienteneque.bmp?size=50x50&set=set1" },
        { "id": 29, "ownerId": 8, "latitude": 38.093189, "longitude": 114.478864, "rooms": 3, "price": "4107.34", "description": "Division of Right Maxilla, Open Approach", "picture": "https://robohash.org/indeleniticupiditate.png?size=50x50&set=set1" },
        { "id": 30, "ownerId": 5, "latitude": -27.5571934, "longitude": -53.9759139, "rooms": 2, "price": "1506.91", "description": "Drainage of Right Lower Leg Muscle, Open Approach", "picture": "https://robohash.org/sitrepellendusomnis.png?size=50x50&set=set1" }
    ]





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
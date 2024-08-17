angular.module('myApp', []).controller('houseCtrl', [function() {




    this.houses = [{ "id": 1, "ownerId": 4, "latitude": 46.95, "longitude": 79.66667, "rooms": 5, "price": "2222.43", "description": "Replacement of Perineum Tendon with Nonautologous Tissue Substitute, Open Approach", "picture": "https://robohash.org/aliquiddoloresnon.bmp?size=50x50&set=set1" },
        { "id": 2, "ownerId": 1, "latitude": 47.5113895, "longitude": 1.820875, "rooms": 5, "price": "1533.55", "description": "Bypass Left Pulmonary Artery from Innominate Artery with Autologous Arterial Tissue, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/nihilnullaexpedita.jpg?size=50x50&set=set1" },
        { "id": 3, "ownerId": 8, "latitude": 56.4477313, "longitude": 13.6156546, "rooms": 5, "price": "1264.03", "description": "Removal of Drainage Device from Lower Bone, Percutaneous Approach", "picture": "https://robohash.org/velitdoloresvoluptates.bmp?size=50x50&set=set1" },
        { "id": 4, "ownerId": 8, "latitude": 14.5404328, "longitude": 49.127197, "rooms": 4, "price": "1528.40", "description": "Excision of Left Inferior Parathyroid Gland, Percutaneous Approach, Diagnostic", "picture": "https://robohash.org/eaquequiincidunt.bmp?size=50x50&set=set1" },
        { "id": 5, "ownerId": 6, "latitude": 14.4711923, "longitude": 121.0206914, "rooms": 1, "price": "1166.99", "description": "Dilation of Coronary Artery, Four or More Arteries, Bifurcation, with Two Drug-eluting Intraluminal Devices, Open Approach", "picture": "https://robohash.org/liberoaccusamusvitae.bmp?size=50x50&set=set1" },
        { "id": 6, "ownerId": 7, "latitude": -6.7290837, "longitude": 111.3694594, "rooms": 4, "price": "2286.40", "description": "Restriction of Splenic Vein, Percutaneous Endoscopic Approach", "picture": "https://robohash.org/totamsolutaincidunt.jpg?size=50x50&set=set1" },
        { "id": 7, "ownerId": 4, "latitude": 50.4244054, "longitude": 14.3899392, "rooms": 3, "price": "1147.40", "description": "Reattachment of Left Hand Skin, External Approach", "picture": "https://robohash.org/eaquequiareprehenderit.png?size=50x50&set=set1" }
    ]
    this.getHouse = function() {
        return this.houses[3];
    }
}])
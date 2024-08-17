var myApp = angular.module('myApp', []);


myApp.controller('peopleCtrl', people1);
// myApp.services('')


function people1() {

    this.people = [{ "img": "https://robohash.org/quamlaborealias.jpg?size=50x50&set=set4", "first_name": "Alfred", "last_name": "Carslake", "telephone": "acarslake0@patch.com", "open": false },
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

    this.toggle = function(index) {
        if (this.people[index].open == false) {
            this.people[index].open = true;
        } else {
            this.people[index].open = false;
        }
    }
    this.delete = function(index) {
        this.people.splice(index, 1);
    }




}
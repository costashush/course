var myApp = angular.module('myApp', []);

myApp.controller('showControler', function() {
    this.show = false;

    this.toggle = function() {
        return this.show = !this.show
    }

});



myApp.controller('toDoControler', ['userList', 'taskList', function(userList, taskList) {

    this.getUsers = userList.getData;
    this.getTasks = taskList.getData;
    this.add = taskList.add;
    this.delete = taskList.delete;
    this.getImg = userList.getImg;
    this.update = taskList.update;
    this.showTasks = taskList.showTasks;
    this.getPrev = taskList.getPrev;
    this.getNext = taskList.getNext;
}]);





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



myApp.factory('taskList', [function() {
    var start = 0;
    var services = {};

    var tasks = [{ "id": 1, "user-id": 7, "task": "Buzzdog", "body": "Knox College", "priority": 1, "importance": 4, "completed": 71 },
        { "id": 2, "user-id": 9, "task": "Babbleblab", "body": "Shih Chien University", "priority": 1, "importance": 1, "completed": 88 },
        { "id": 3, "user-id": 3, "task": "Brainlounge", "body": "University of Zürich", "priority": 3, "importance": 4, "completed": 77 },
        { "id": 4, "user-id": 1, "task": "Yakidoo", "body": "College of St. Scholastica", "priority": 1, "importance": 1, "completed": 8 },
        { "id": 5, "user-id": 8, "task": "Trupe", "body": "Northwestern University", "priority": 5, "importance": 5, "completed": 74 },
        { "id": 6, "user-id": 1, "task": "Zoombox", "body": "Katholisch-Theologische Privatuniversität Linz", "priority": 1, "importance": 2, "completed": 5 },
        { "id": 7, "user-id": 10, "task": "Ntags", "body": "Ecole Mohammadia d'Ingénieurs", "priority": 3, "importance": 2, "completed": 27 },
        { "id": 8, "user-id": 9, "task": "Dynabox", "body": "Shanghai Television University", "priority": 5, "importance": 5, "completed": 25 },
        { "id": 9, "user-id": 7, "task": "Zoovu", "body": "Sardar Vallabhai Patel University of Agriculture Amd Technology", "priority": 2, "importance": 2, "completed": 49 },
        { "id": 10, "user-id": 6, "task": "Zoombox", "body": "New World University", "priority": 3, "importance": 4, "completed": 6 },
        { "id": 11, "user-id": 1, "task": "Ozu", "body": "Wesley College", "priority": 4, "importance": 1, "completed": 14 },
        { "id": 12, "user-id": 5, "task": "Skinder", "body": "University of Waikato", "priority": 5, "importance": 2, "completed": 44 },
        { "id": 13, "user-id": 1, "task": "Bluejam", "body": "American Graduate School in Paris", "priority": 4, "importance": 1, "completed": 95 },
        { "id": 14, "user-id": 3, "task": "Tanoodle", "body": "Abu Dhabi University", "priority": 3, "importance": 5, "completed": 74 },
        { "id": 15, "user-id": 4, "task": "Fanoodle", "body": "Golden Gate University", "priority": 5, "importance": 3, "completed": 34 },
        { "id": 16, "user-id": 3, "task": "Vidoo", "body": "State University of New York College of Environmental Science and Forestry", "priority": 2, "importance": 3, "completed": 79 },
        { "id": 17, "user-id": 6, "task": "Lazzy", "body": "Harbin University of Civil Engineering & Architecture", "priority": 5, "importance": 5, "completed": 91 },
        { "id": 18, "user-id": 1, "task": "Dabtype", "body": "Kyoto University", "priority": 5, "importance": 1, "completed": 2 },
        { "id": 19, "user-id": 10, "task": "Realpoint", "body": "Mahatma Gandhi University Meghalaya ", "priority": 5, "importance": 3, "completed": 82 },
        { "id": 20, "user-id": 9, "task": "Skaboo", "body": "Royal Military Academy", "priority": 5, "importance": 5, "completed": 5 },
        { "id": 21, "user-id": 7, "task": "Ainyx", "body": "Sri Ramachardra Medical College and Research Institute", "priority": 3, "importance": 5, "completed": 2 },
        { "id": 22, "user-id": 6, "task": "Feedmix", "body": "Rasmussen College, Illinois Campuses", "priority": 1, "importance": 5, "completed": 66 },
        { "id": 23, "user-id": 6, "task": "Agivu", "body": "National Pedagogical University M. Dragomanov ", "priority": 2, "importance": 2, "completed": 4 },
        { "id": 24, "user-id": 1, "task": "Vinder", "body": "Universidad Nacional del Callao", "priority": 2, "importance": 5, "completed": 53 },
        { "id": 25, "user-id": 7, "task": "Skajo", "body": "King Abdul Aziz University", "priority": 2, "importance": 5, "completed": 94 }
    ]


    services.getData = function() {
        var temp = [];
        for (var i = start; i < start + 10 && i < tasks.length; i++) {
            temp.push(tasks[i]);

        }
        return temp;
    }
    services.getPrev = function() {
        if (start > 0) {

            start -= 10
        }
    }
    services.getNext = function() {
        if (start < tasks.length) {
            start += 10
        }
    }


    services.add = function(id, userId, task, body, prio, impo, comp) {
        var newTask = {};

        newTask["id"] = id
        newTask["user-id"] = userId
        newTask["task"] = task
        newTask["body"] = body
        newTask["priority"] = prio
        newTask["importance"] = impo
        newTask["completed"] = comp

        tasks.push(newTask);
    }
    services.getLength = function() {
        return tasks.length;
    }

    services.delete = function(index) {
        tasks.splice(index, 1);
    }

    services.showTasks = function() {
        console.log(tasks);
    }


    services.update = function(index, value) {
        for (var i in tasks) {

            if (tasks[i].id == index) {

                tasks[i].completed = value;
            }
        }
    }

    return services;
}])
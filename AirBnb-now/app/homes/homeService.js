myApp.factory('homesService', ['$filter', homesService]);

function homesService($filter) {

    var start = 0;

    var service = {}


    service.sort = function (field) {
        homes = $filter('orderBy')(homes, field);
        return homes;
    }


    service.getMarkers = function () {
        return markers;
    }
    service.createItem = function (id, ownerId, description, price, roomNum, latitude, longtitude) {
        var newhome = {};
        newhome["id"] = id;
        newhome["ownerId"] = ownerId;
        newhome["description"] = description;
        newhome["price"] = price;
        newhome["roomNum"] = roomNum;
        newhome["latitude"] = latitude;
        newhome["longtitude"] = longtitude;


        return newhome;
    }
    service.getData1 = function () {
        var tempHomes = [];
        for (var i = start; i < start + 10 && i < homes.length; i++) {
            tempHomes.push(homes[i]);
        }
        return tempHomes;
    }
    service.getAllData = function () {
        return homes;
    }
    service.addItem = function (ownerId, description, price, roomNum, latitude, longtitude) {
        id = this.getAllData().length
        var newhome = service.createItem(id, ownerId, description, price, roomNum, latitude, longtitude);
        homes.push(newhome);
        var approveMsg = document.getElementById('approveMsg');
        approveMsg.innerText = "succedd :" + description + " is add to use num: " + ownerId;
        approveMsg.style.color = "green";
        service.clearFormFields();
        var time = setTimeout(function () {
            approveMsg.innerText = "";
        }, 2000);
        return homes;
    }

    service.clearFormFields = function () {
        var homeFieldSetInputs = document.getElementById('homeForm');
        var homeFieldSetInputsShort = homeFieldSetInputs.getElementsByTagName("input");
        var arr = service.convert(homeFieldSetInputsShort);
        arr.splice(arr.length - 1, 1);
        for (let inputF of arr) {
            inputF.value = "";

        }
    }


    service.convert = function (homeFieldSetInputsShort) {
        var x = []
        $.each(homeFieldSetInputsShort, function (i, n) {
            x.push(n);
        });
        return x;
    }
    service.prevHomes = function () {
        start -= 10;
    }

    service.nextHomes = function () {
        start += 10;

    }
    service.cosoleHomes = function () {
        console.log(homes);

    }

    service.getHome = function (fieldName, val) {
        for (let home of homes) {
            if(home[fieldName] === val){
                return home ;
            }
            
        }
        return null;
    }



    return service;

}



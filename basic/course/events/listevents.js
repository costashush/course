window.onload = function () {

    var lists = document.getElementsByTagName("ul");

    for (var i = 0; i < lists.length; i++) {

        lists[i].addEventListener("click", function (pik) {

            pik.target.classList.toggle('paint');
        });

    }

    var bup = document.getElementById("up");
    var bdown = document.getElementById("down");

    bup.addEventListener("click", function (moveup) {
        var list1 = document.getElementById("list1");
        var list2 = document.getElementById("list2");
        var itemsToUp = list2.getElementsByClassName("paint");
moover(list1, itemsToUp);


    });

    bdown.addEventListener("click", function (movedown) {
        var list1 = document.getElementById("list1");
        var list2 = document.getElementById("list2");
        var itemsToDown = list1.getElementsByClassName("paint");
moover(list2, itemsToDown);


    });
    function moover(listIn, items) {
        for (var i = 0; 0<items.length; i++) {
            listIn.appendChild(items[0]).classList.remove("paint");
                    



           
        }


    }

}








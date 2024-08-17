window.onload = function () {

    var rect = document.getElementById("rectangale");
    var oval = document.getElementById("oval");
    var board = document.getElementById("maindiv");
    //******************************load */

    var loadButton = document.getElementById("load");
    loadButton.addEventListener("click", loadOperation);


    //*****************save */

    var saveButton = document.getElementById("save");
    saveButton.addEventListener("click", saveOperation);

    //************color menu */
    var colors = document.getElementById("colors");
    colors.addEventListener("click", colorMenu);



    //***********************color change */
    var colortable = document.getElementsByTagName('table')
    colortable[0].addEventListener("click", colorChange);


    //************************delete */
    var delButton = document.getElementById("delete");
    delButton.addEventListener("click", delele);
    var flag = false;



    //shape button caling and shape creation
    rect.addEventListener("click", function createRect() {

        var newRect = document.createElement("div");
        board.appendChild(newRect).className = "rectangale";
        newRect.style.backgroundColor = randomColor();
        newRect.style.height = randomSize();
        newRect.style.width = randomSize();
        newRect.style.top = randomPosition(newRect.offsetHeight);
        newRect.style.left = randomPosition(newRect.offsetWidth);
        createCorners(newRect);
    });

    oval.addEventListener("click", function createOval() {

        var newOval = document.createElement("div");
        board.appendChild(newOval).className = "oval";
        newOval.style.backgroundColor = randomColor();
        newOval.style.height = randomSize();
        newOval.style.width = randomSize();
        newOval.style.top = randomPosition(newOval.offsetHeight);
        newOval.style.left = randomPosition(newOval.offsetWidth);
        createCorners(newOval);

    });












    //*****************obj to save */

    

    // var saveObj;
    // function saveObject(name) {

    //     var bigObj = {};
    //     var canvas = document.getElementById("maindiv");

    //     var recToSave = canvas.getElementsByTagName("rectangale");

    //     for (var i = 0; i < recToSave.length; i++) {
    //         saveObj = {};

    //         saveObj["left"] = recToSave[i].style.left;
    //         saveObj["top"] = recToSave[i].style.top;
    //         saveObj["height"] = recToSave[i].style.height;
    //         saveObj["width"] = recToSave[i].style.width;
    //         saveObj["color"] = recToSave[i].style.color;
    //         bigObj[i] = saveObj;
    //     }
    //     var ovalToSave = canvas.getElementsByTagName("oval");

    //     for (var i = 0; i < ovalToSave.length; i++) {
    //         var saveObj = {};

    //         saveObj["left"] = ovalToSave[i].style.left;
    //         saveObj["top"] = ovalToSave[i].style.top;
    //         saveObj["height"] = ovalToSave[i].style.height;
    //         saveObj["width"] = ovalToSave[i].style.width;
    //         saveObj["color"] = ovalToSave[i].style.color;
    //         bigObj[i] = saveObj;
    //     }

    // }




















    // function createSaveObject( ){






    // }





}
function saveOperation(event) {

    document.getElementById("blackdiv").classList.toggle("hidetable");
    document.getElementById("savediv").classList.toggle("hidetable");
    var span = document.getElementById("savespan");
    span.addEventListener("click", saveOperation);

    //  function (event) {
    //     event.stopPropagation();
    //     document.getElementById("blackdiv").classList.toggle("hidetable");
    //     document.getElementById("savediv").classList.toggle("hidetable");

    // });


}

function loadOperation(event) {
    document.getElementById("blackdiv").classList.toggle("hidetable");
    document.getElementById("loaddiv").classList.toggle("hidetable");
    var span = document.getElementById("loadspan");
    span.addEventListener("click", loadOperation);

    // function (event) {
    //     document.getElementById("blackdiv").classList.toggle("hidetable");
    //     document.getElementById("loaddiv").classList.toggle("hidetable");

    // });

}

function resize(element) {
    event.stopPropagation();
    var shape = this.parentElement;
    var oldX = event.clientX;
    var oldY = event.clientY;
    // console.log("a-a-a-a-a-a")
    this.onmousemove = function (e) {
        // console.log(this.classList);
        var newX = e.clientX - oldX;
        var newY = e.clientY - oldY;
        if (this.classList.value == ("rb controler conton")) {

            shape.style.width = shape.offsetWidth + newX + "px";
            shape.style.height = shape.offsetHeight + newY + "px";
            oldX = e.clientX;
            oldY = e.clientY;
        }
        else if (this.classList.value == ("lb controler conton")) {

            shape.style.width = shape.offsetWidth - newX + "px";
            shape.style.height = shape.offsetHeight + newY + "px";
            shape.style.left = shape.offsetLeft + newX + "px";
            oldX = e.clientX;
            oldY = e.clientY;

        }
        else if (this.classList.value == ("rt controler conton")) {
            shape.style.width = shape.offsetWidth + newX + "px";
            shape.style.height = shape.offsetHeight - newY + "px";
            shape.style.top = shape.offsetTop + newY + "px";
            oldX = e.clientX;
            oldY = e.clientY;
        }
        else if (this.classList.value == ("lt controler conton")) {
            shape.style.width = shape.offsetWidth - newX + "px";
            shape.style.height = shape.offsetHeight - newY + "px";
            shape.style.top = shape.offsetTop + newY + "px";
            shape.style.left = shape.offsetLeft + newX + "px";
            oldX = e.clientX;
            oldY = e.clientY;

        }

    }
    this.addEventListener("mouseup", function () {
        this.onmousemove = null;
    });
}

function createCorners(element) {

    var LT = document.createElement("div");
    var RT = document.createElement("div");
    var LB = document.createElement("div");
    var RB = document.createElement("div");
    element.appendChild(LT).className = "lt controler";
    element.appendChild(RT).className = "rt controler";
    element.appendChild(LB).className = "lb controler";
    element.appendChild(RB).className = "rb controler";

    var pickedCorners = document.getElementsByClassName("controler");
    for (var i = 0; i < pickedCorners.length; i++) {

        pickedCorners[i].addEventListener("mousedown", resize);

    }


    cornerEvents(element);



}

function cornerEvents(element) {
    clickEventShape(element);
    mouseDownEventShape(element);
    mouseUpEventShape(element);


}

function mouseUpEventShape(element) {
    element.addEventListener("mouseup", function () {
        flag = false;
    });

}

function mouseDownEventShape(element) {

    //**move */

    element.addEventListener("mousedown", function (e) {

        var diffx = parseInt(event.clientX - element.offsetLeft);
        var diffy = parseInt(event.clientY - element.offsetTop);

        flag = true;

        if (this.classList.contains("marked")) {


            this.onmousemove = function () {
                if (flag) {


                    console.log(diffx, " ", diffy);

                    var x = event.clientX;
                    var y = event.clientY;


                    // console.log(event.offsetY, " ", event.offsetX);
                    // console.log(event.clientY, " ", event.clientX);

                    // var left = x - element.offsetWidth / 2;
                    // var top = y - element.offsetHeight / 2;

                    var left = x - diffx;
                    var top = y - diffy;

                    if (left > 0 && top > 0) {
                        element.style.left = left + "px";
                        element.style.top = top + "px";
                    }
                }
            }
        }
    });
}

function clickEventShape(element) {
    element.addEventListener("click", function (event) {


        var children = this.children;
        var corners = document.getElementsByClassName("conton");
        if (!event.ctrlKey) {
            if (!checkCorners(this, corners)) {
                removeCorner();
                removeMarked();

            }
        }
        this.classList.toggle('marked');

        for (var i = 0; i < children.length; i++) {
            children[i].classList.toggle("conton");
        }

    });
}
function colorMenu(event) {
    var table = document.getElementsByTagName("table");
    table[0].classList.toggle("hidetable");
}
function colorChange(event) {
    var marked = document.getElementsByClassName('marked');
    var colorpic = event.target.style.backgroundColor;
    for (var i = 0; i < marked.length; i++) {
        marked[i].style.backgroundColor = colorpic;
    }
}

function delele(event) {
    var board = document.getElementById("maindiv");
    var marked = document.getElementsByClassName('marked');
    for (var i = 0; 0 < marked.length; i++) {
        board.removeChild(marked[0]);
    }
}
function checkCorners(element, corners) {
    var cildCorner = element.children;

    for (var i = 0; i < cildCorner.length; i++) {
        if (cildCorner[i] !== corners[i]) {
            return false;
        }
        else {
            return true;

        }
    }
}

function removeMarked(element) {
    var marked = document.getElementsByClassName("marked");

    for (var i = 0; i < marked.length; i++) {

        marked[0].classList.remove("marked");

    }
}
function removeCorner(element) {


    var cornerToOff = document.getElementsByClassName("conton");

    var len = cornerToOff.length;
    for (var i = 0; i < len; i++) {
        cornerToOff[0].classList.toggle("conton");

    }
}

function randomColor() {

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = "rgb(" + r + "," + g + "," + b + ")";

    return color;
}
function randomSize() {
    var ran = Math.floor(Math.random() * 350 + 50);
    var size = ran + 'px';
    return size;
}
function randomPosition(max) {
    var x = Math.floor(Math.random() * (960 - max));

    var size = x + "px";
    return size;

}






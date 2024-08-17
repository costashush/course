window.onload = function () {

    var rect = document.getElementById("rectangale");
    var oval = document.getElementById("oval");
    var board = document.getElementById("maindiv");
    window.addEventListener("mouseup", stop);
    var flag = false;

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
}
    function stop(element) {
        flag = false;
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

        element.addEventListener("click", function (pik) {
            var children = this.children;
            var corners = document.getElementsByClassName("conton");
            if (!event.ctrlKey) {
                if (!checkCorners(this, corners)) {
                    removeCorner();
                }
            }
            for (var i = 0; i < children.length; i++) {
                children[i].classList.toggle("conton");
            }

        });
        element.addEventListener("mousedown", function (e) {
            flag = true;
            this.onmousemove = function () {
                if (flag) {
                    var x = event.clientX;
                    var y = event.clientY;
                    console.log(event.offsetY)
                     console.log(event.offsetX)
                    element.style.left = x-element.offsetWidth/2 + "px";
                    element.style.top = y-element.offsetHeight/2 + "px";
                    
                }
            
            }
        });
    
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
                var x = Math.floor(Math.random() * (1000 - max));

                var size = x + "px";
                return size;

            }


        
        


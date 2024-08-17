// client side game logic
// will authorize mooves acording to info on server side
var initUser = (function() {

    var socket = io.connect();
    initLoginInput();



    socket.on('newUserList', function(updatedList) {
        getSelectList(updatedList);
    })


    socket.on('ship_transfer', function(data) {
        toggelLoginDiv();
        draw = new Draw(socket);

        for (var i in data) {

            draw.drawship(data[i], draw.start - 100, draw.cellSize);
        }

    });

    socket.on('turn_msg', function(msg) {
        msgBoard(msg)
    });


    socket.on('hit', function(cords, hitShip) {
        draw.drawHits(cords.x, cords.y, hitShip);
    });
    socket.on('mark', function(cords, hitShip) {
        draw.markHits(cords.x, cords.y, hitShip);
    });
    socket.on('win', function(data) {
        msgBoard(data)

        socket.emit('reset_game', 'reset')
        setTimeout(function() {
            draw.clearCanvas();
            toggelLoginDiv();
        }, 6000);


    });
    socket.on('lose', function(data) {
        msgBoard(data)


        socket.emit('reset_game', 'reset')
        setTimeout(function() {
            draw.clearCanvas();
            toggelLoginDiv()
        }, 6000);

    });







    function toggelLoginDiv() {


        if (document.getElementById('maindiv').style.display == 'none') {

            document.getElementById('maindiv').style.display = ''
        } else {
            document.getElementById('maindiv').style.display = 'none'
        }

    }

    function initLoginInput() {
        var goOn = true;
        var loginButton = document.getElementById("loginButton")
        loginButton.addEventListener("click", function() {

            var userNameInput = document.getElementById("loginInput").value;
            socket.on('invalid_user', function(errorMsg, flag) {
                    goOn = flag;
                    if (!flag) {

                        alert(errorMsg);
                    }
                    if (goOn) {
                        playButton();

                    }
                })
                // disableButtonInput();
            socket.emit('newUser', userNameInput);

        })




    }

    function startGame() {
        var player1 = document.getElementById('loginInput').value;
        var rivel = document.getElementById('userList');
        var player2 = rivel.options[rivel.selectedIndex].value;
        // console.log(player1, player2);
        socket.emit('newGame', player1, player2);
    }

    function playButton() {

        var div = document.getElementById('maindiv');
        var btn = document.createElement('button');
        btn.textContent = 'play';
        btn.className = "myButton";
        div.appendChild(btn);
        btn.addEventListener("click", function() {
            startGame();
            // btn.setAttribute('disabled', 'true');

        })


    }

    // function disableButtonInput() {
    //     document.getElementById("loginButton").setAttribute('disabled', 'true');
    //     document.getElementById("loginInput").setAttribute('disabled', 'true');


    // }

    function msgBoard(msg) {
        document.getElementById("msg").innerHTML = msg;
    }

    function getSelectList(list) {
        var select = document.getElementById('userList');
        for (var i in select) {

            select.remove(i);
        }
        for (var user of list) {
            if (user.socket == socket.id) {

            } else {
                var option = document.createElement("option");
                option.text = user.nick;
                select.add(option);

            }
        }
    }
})();
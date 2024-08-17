//main node js express code here


var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var UsersFile = require('./app/users');
var Game = require('./app/game-mgmt');
var ConnectFile = require('./app/connection_mgmt.js');


http.listen(3000);
// console.log("server is up");


app.use(express.static(__dirname + "/public"));

var userlist = new UsersFile.userList();

var conStore = [];


io.on('connection', function(socket) {
    socket.on('newUser', function(userName) {
        var socketId = socket.id;
        var user = new UsersFile.users(userName, socketId);
        userlist.authUser(user, socket);


    });

    socket.on('newGame', function(player1, player2) {
        var player1 = userlist.getUserSetPlaying(player1)
        var player2 = userlist.getUserSetPlaying(player2)
        var con = new ConnectFile(player1, player2, socket);
        conStore.push(con);
        socket.emit('newUserList', userlist.getFreeUserList());
        socket.broadcast.emit('newUserList', userlist.getFreeUserList());

    })


    socket.on('tryHit', function(cord) {
        for (var cons of conStore) {
            if (cons.player1.socket == socket.id || cons.player2.socket == socket.id)
                cons.hit(socket.id, cord, socket);
            // cons.getCurentTurn(socket);





        }


    });
    socket.on('disconnect', function() {
        var list = userlist.userList;
        for (var i in list) {
            if (list[i].socket == socket.id) {
                list.splice(i, 1);
            }
        }

        for (var cons of conStore) {
            if (cons.player1.socket == socket.id) {
                cons.player2.isPlaying = false;
            } else if (cons.player2.socket == socket.id) {
                cons.player1.isPlaying = false;

            }

        }

        socket.emit('newUserList', userlist.getFreeUserList());
        socket.broadcast.emit('newUserList', userlist.getFreeUserList());
    });
    socket.on('reset_game', function() {
        var list = userlist.userList;
        for (var i in list) {
            if (list[i].socket == socket.id) {
                list[i].isPlaying = false;
            }
        }

        for (var cons of conStore) {
            if (cons.player1.socket == socket.id || cons.player2.socket == socket.id) {
                conStore.splice(cons, 1);

            }
            socket.emit('newUserList', userlist.getFreeUserList());

            socket.broadcast.emit('newUserList', userlist.getFreeUserList());

        }

    });
});
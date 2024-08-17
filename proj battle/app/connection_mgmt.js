var game = require('./game-mgmt');


var connection = class connection {
    constructor(player1, player2, socket) {
        this.socketExport = socket;
        this.game = new game(player1.nick, player2.nick);
        this.player1 = player1;
        this.player2 = player2;
        this.curentTurn = this.player1;
        this.sendShip(this.socketExport);
        this.getCurentTurn(socket);
    }
    getCurentTurn(socket) {
        var your = "YOUR TURN!!!";
        var oponent = 'OPONENT TURN!!!';

        socket.emit('turn_msg', oponent);
        socket.to(this.switchPlayer(this.curentTurn).socket).emit('turn_msg', your);

    }

    getPlayer(id) {
        if (id == this.player1.socket) {
            return this.player1;
        } else if (id == this.player2.socket) {
            return this.player2;
        }

    }
    getPlayerNeme(id) {
        if (id == this.player1.socket) {
            return "player1";
        } else if (id == this.player2.socket) {
            return "player2";
        }

    }
    checkWin(player, socket) {
        var win = true;
        var ships = this.game[player].ships;
        for (let ship of ships) {
            if (ship.life != 0) {

                win = false;
                // win = true;
            }
        }
        if (win) {

            socket.emit('win', 'WIN!!!');
            socket.to(this[player].socket).emit('lose', 'LOSE!!!');

        }
    }

    checkShips(cordinates, player) {
        var ships = this.game[player].ships;

        for (let ship of ships) {
            for (let item of ship.target) {

                if (item.x == cordinates.x && item.y == cordinates.y) {
                    ship.life--;

                    return true;
                }
            }

        }

    }

    checkHit(cordinates, player, socket, id) {
        var hitShip = false;

        if (this.game[player].board[cordinates.x][cordinates.y].marked == true) {

        } else {
            this.game[player].board[cordinates.x][cordinates.y].marked = true

            hitShip = this.checkShips(cordinates, player);
            socket.to(this[player].socket).emit('hit', cordinates, hitShip);
            this.checkWin(player, socket);

            if (!hitShip) {

                this.curentTurn = this.switchPlayer(this.getPlayer(id));

            }
            socket.emit('mark', cordinates, hitShip);

        }

    }
    switchPlayer(player) {

        if (player == this.player1) {
            return this.player2;
        } else {
            return this.player1;
        }

    }
    switchPlayerNames(player) {

        if (player == 'player1') {
            return 'player2';
        } else {
            return 'player1';
        }

    }

    hit(id, cordinates, socket) {

        if (this.curentTurn.socket == id) {

            var enemy = this.switchPlayer(this.getPlayer(id));

            this.checkHit(cordinates, this.getPlayerNeme(enemy.socket), socket, id);

        }

    }

    sendShip(socket) {
        socket.emit('ship_transfer', this.game.player1.ships);
        socket.to(this.player2.socket).emit('ship_transfer', this.game.player2.ships);


    }
}


module.exports = connection;
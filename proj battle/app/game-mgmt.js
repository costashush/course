var game = class Game {
    constructor(player1, player2) {

        var b1 = new Board();
        var b2 = new Board();
        this.player1 = new Player(player1, b1.board);
        this.player2 = new Player(player2, b2.board);

    }


}
class Cell {
    constructor() {
        this.marked = false;
    }
}

class Board {
    constructor() {
        this.board = [];

        for (var i = 0; i < 10; i++) {
            this.board[i] = new Array()
            for (var j = 0; j < 10; j++) {
                this.board[i][j] = new Cell();
            }
        }
    }
}

class Player {
    constructor(nick, board) {
        this.nick = nick;
        this.board = board;
        this.ships = this.shipsPosChecker();

    }



    //rondom ship methods ///////////////////////////////////////////////////////////
    randomPosition() {

        var position = parseInt(Math.random() * 2);
        return position;
    }


    randomCordinate(ship) {
        var x = parseInt(Math.random() * (10 - ship + 1));
        var y = parseInt(Math.random() * (10 - ship + 1));
        return [x, y];
    }

    checkCordinate(cord, board) {

        if (board[cord[0]][cord[1]] == 0) {
            return true;
        } else {
            return false;
        }
    }
    checkNext(cord, pos, board) {
        cord[pos]++

            if (board[cord[0]][cord[1]] != 1) {

                return true;
            } else {

                return false;
            }

    }
    checkShip(ship, cord, pos, board) {

        var tempShip = [];

        tempShip.push({ x: cord[0], y: cord[1] });
        while (ship > 1) {
            if (this.checkNext(cord, pos, board)) {
                ship--
                var cordObj = { x: cord[0], y: cord[1] };
                tempShip.push(cordObj)
            } else {
                break;
            }

        }
        if (ship == 1) {
            this.markShipCord(tempShip, board);
            var shipCord = [];
            for (var ship of tempShip) {

                shipCord.push(new Cordinate(ship.x, ship.y))
            }

            return shipCord;
        }

    }

    markShipCord(cordArray, board) {

        for (var cor of cordArray) {
            board[cor.x][cor.y] = 1
            board[cor.x + 1][cor.y + 1] = 1
            board[cor.x][cor.y + 1] = 1
            board[cor.x + 1][cor.y] = 1

            if (cor.x > 0 && cor.y > 0) {
                board[cor.x - 1][cor.y - 1] = 1

            }
            if (cor.x > 0) {
                board[cor.x - 1][cor.y + 1] = 1
                board[cor.x - 1][cor.y] = 1

            }
            if (cor.y > 0) {
                board[cor.x + 1][cor.y - 1] = 1
                board[cor.x][cor.y - 1] = 1

            }
        }

    }

    shipsPosChecker() {
            var ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
            let board = []
            var shipList = [];
            for (var i = 0; i <= 10; i++) {
                board[i] = new Array()
                for (var j = 0; j <= 10; j++) {
                    board[i][j] = 0;
                }
            }

            while (ships.length > 0) {


                var pos = this.randomPosition();
                var initCord = this.randomCordinate(ships[0]);
                var cord = initCord;
                if (this.checkCordinate(cord, board)) {
                    var shipTobuild = this.checkShip(ships[0], cord, pos, board);
                    if (shipTobuild != null) {

                        shipList.push(new BattleShip(ships[0], shipTobuild, ships[0]));
                        ships.splice(0, 1);
                    }

                } else {

                }
            }
            return shipList;
        }
        /////////////////////////////////////////////////////////////////////
}
class Cordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

}
class BattleShip {
    constructor(name, target, life) {
        this.name = name;
        this.target = target;
        this.life = life;
    }

}
module.exports = game;
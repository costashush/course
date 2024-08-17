

function newTTTgame() {
    var board = [[, , ,], [, , ,], [, , ,]];
    board.length = 3;
    var positionCord = {
        "1": [0, 0],
        "2": [0, 1],
        "3": [0, 2],
        "4": [1, 0],
        "5": [1, 1],
        "6": [1, 2],
        "7": [2, 0],
        "8": [2, 1],
        "9": [2, 2]
    }
    //******************input validation  */
    function inputValid() {

        var readlineSync = require('readline-sync');
        var userPlay = parseInt(readlineSync.question('enter a number: '));
        //validation rule ===>1-9 / nan
        while (isNaN(userPlay) || (userPlay < 1 || userPlay > 9)) {
            console.log("please inter a valid nember 1-9")
            userPlay = parseInt(readlineSync.question('enter a number: '));
        }
        //validation rule ===>filled up places
        while (!(userPlay in positionCord)) {
            console.log("this plase is taken, please enter a new number");
            userPlay = parseInt(readlineSync.question('enter a number: '));
        }
        return userPlay;
    }
    //*********************************insert to o/x to the game board*********** */
    function inserToBoard(position, player) {

        var p = positionCord[position];
        board[p[0]][p[1]] = player;//player o/x
        delete positionCord[position];
    }
    //*********************************printing updated game board************* */
    function print() {
        for (var i = 0; i < board.length; i++) {
            console.log(board[i]);
        }
    }
    //******************************************************** */
    function rowScan(array) {
        var goOn = true;
        for (var i = 0; i < array.length; i++) {
            var xCount = 0;
            var oCount = 0;
            for (var j = 0; j < array.length; j++) {
                if (array[i][j] == "x") {
                    xCount++;
                }
                else if (array[i][j] == "o") {
                    oCount++;
                }
                else if (array[i][j] != "x" && array[i][j] != "o") {
                    var index = array[i][j];

                }
            }
            if (xCount == 3 || oCount == 3) {
                goOn = false;

                console.log("WE HAVE AWINNER")
                break;
            }
            if (xCount == 2 || oCount == 2 && index != null) {
                goOn = false;

                break;
            }

        }
        if (!goOn) {
            return index;
        }
    }
    //********************************** */
    function colScan(array) {
        for (var i = 0; i < array.length; i++) {
            xCount = 0;
            oCount = 0
            for (var j = 0; j < array[i].length; j++) {
                if (array[j][i] == "x") {
                    xCount++;
                }
                else if (array[j][i] == "o") {
                    oCount++;
                }
                else if (array[j][i] != "x" && array[j][i] != "o") {
                    var index = array[j][i];

                }

            }
            if (xCount == 3 || oCount == 3) {
                console.log("WE HAVE AWINNER")
                break;
            }
            if (xCount == 2 || oCount == 2 && index != null) {
                break;

            }
        }
        return index;
    }
    function clearBoard(array) {
        var cells = 1;
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                board[i][j] = cells.toString();
                cells++;
            }
        }
        return board;
    }
    //**************************************************8 */
    function play() {
        clearBoard(board);
        print();
        for (var i = 0; i < 1; i++) {


            var playerIntup = inputValid();
            inserToBoard(playerIntup, "x");

            if ("5" in positionCord) {
                inserToBoard(5, "o");

            } else {
                var random = 1 + parseInt(Math.random() * 9);

                if (random in positionCord) {

                    inserToBoard(random, "o");
                } else {
                    while (!(random in positionCord)) {

                        var newrandom = 1 + parseInt(Math.random() * 9);
                        random = newrandom;
                    }
                    inserToBoard(random, "o");

                }
            }
            print();
        }
        var temp = Object.keys(positionCord);
        while (temp.length > 0) {
            playerIntup = inputValid();
            inserToBoard(playerIntup, "x");
            temp = Object.keys(positionCord);

            var computerPlay = rowScan(board);
            // positionCord.getKeyByValue
            if (computerPlay==null){
                computerPlay=colScan(board);
            }
            inserToBoard(computerPlay, "o");
            print();


        }
        console.log("the game ended");
    }

    var finalFunctions = {};
    finalFunctions.inputValid = inputValid;
    finalFunctions.play = play;
    // finalFunctions.newGame = newGame
    return finalFunctions;
}//newTTTgame end ----main fn


function TTT_UI() {
    var game = newTTTgame();// here i put all the function and manege all the game

    //  game.newGame();
    game.play();
}
TTT_UI();
// var test = newTTTgame();
// test.inputValid();


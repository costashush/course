board.length = 2;

function newTTTgame() {
//******************input validation  */
    function inputValid() {

        var readlineSync = require('readline-sync');
        var userPlay = parseInt(readlineSync.question('enter a number: '));
        if (isNaN(userPlay) || (userPlay < 1 || userPlay > 9)) {
            console.log("please inter a valid nember 1-9")


        }
        return userPlay;
    }
//******************************************** */
function inserToBoard (position,player){

        "1":[0,0],
        "2":[0,1],
        "3":[0,2],
        "4":[1,0],
        "5":[1,1],
        "6":[1,2],
        "7":[2,0],
        "8":[2,1],
        "9":[2,2]
    }

var p = positionCord[position];
board[p[o]][p[1]]=player;//player o/x
delete positionCord[position];
}
//********************************************** */
function checkPosition(position){
    if(position!="-"){
        console.log("the position is taken ,please renter");
        // inputValid();
    }
return position
}




//******************************************************** */
    function clearBoard() {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                             
           
            board[i][j] = "-";
            }
        }
        return board;
    }


//****************************************************** */

    function newGame() {
          clearBoard();
          

    }

//**************************************************8 */
    function play(location) {



    }
    //******************* */
function winer(){


    
}

//**********************************************88 */

    var finalFunctions = {};
    finalFunctions.inputValid = inputValid;
    finalFunctions.play = play;
    finalFunctions.newGame = newGame
    return finalFunctions;



}//newTTTgame end ----main fn


function TTT_UI() {
    var game = newTTTgame();// here i put all the function and manege all the game
    
     game.newGame();
    game.play();



}
TTT_UI();
// var test = newTTTgame();
// test.inputValid();


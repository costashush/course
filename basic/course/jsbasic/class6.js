// //**********closures */
// function makeGame() {
//     var Board = [];
//     function GameInit() {
//         for (var i = 0; i < array.length; i++) {
//             Board[i] = 0;

//         }
//     }
//     function gamePlay(move){


//     }
//     var ret={                            //when more than two return an object 
//                                           // else return the inside function
//         gameInet:GameInit,
//         play:gamePlay
//     }
//     return ret;
// }



//************rgular expresion */
// var re1 = /^abc/;
// var re2 = /abc/g;
// var re3 = /a[x-z]c/g;



// var string1 = "yyyyyyyyyyyyyyyyyyyyyyyyabc";
// var string2 = "bbabc";
// var string3 = 'abctttabc----ab-----bc-----cba ++abc ';
// var string4 = 'axctttazc----ab-----bc---abc--cba ++azc ';



// var res = string3.match(re2);
// var res1 = string4.match(re3);

// var test1 = re1.exec(string1);
// var test2 = re1.exec(string2);
// var test3 = re2.exec(string3);
// var test4 = re2.exec(string3);
// var test5 = re2.exec(string1);


// console.log(test1, test2, test3, test4, test5);//returns array and object with properties 
// console.log(res, res1);



var re4 = /(ab+)(cd)/g;
var string5 = "abbbcdcba"


var res;
do {
    res = re4.exec(string5)
    console.log(res);
}

while (res != null)



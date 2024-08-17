
    var positionCord={
    
    }
    var random =1+ parseInt(Math.random()*9);

// while(!(random in positionCord)){

// var newrandom =1+ parseInt(Math.random()*9);
// random=newrandom;
// }
console.log(Object.keys(positionCord).length>1);
var c = Object.keys(positionCord).length;
console.log(c);
console.log(positionCord["a"]);
console.log("4" in positionCord);


function getKeyByValue(value){
    return Object.keys(positionCord).find(key=>positionCord[key]===value);
}
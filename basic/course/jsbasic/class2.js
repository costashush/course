//input
var readlineSync = require('readline-sync');
var array= [];
for (var i = 0; i < 3; ) {
    var input = parseInt(readlineSync.question('enter a number: '));
    if (isNaN(input)) {
        console.log("please enter a valid number")
        // var input = parseInt(readlineSync.question('enter a number: '));
    }else{
        array[i]=input;
        i++;
    }         
}
console.log(array);
// check
var up = false;
var down = false;
 for (var i = 0; i < array.length-1; i++) {
    if (array[i]<array[i+1]){
        up=true;
    }
    if (array[i]>array[i+1]) {
        down=true;
    }
 }
 // output
 if (up&&!down) {
     console.log("going up")
 }
if (!up&&down) {
     console.log("going down")
 }
 if (up&&down||!up&&!down) {
     console.log("unordered")
 }
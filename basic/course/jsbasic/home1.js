var readlineSync = require('readline-sync');
 

var a = parseInt(readlineSync.question('enter a number: '));
var b = parseInt(readlineSync.question('enter a number: '));
if(isNaN(a)||isNaN(b)){
    console.log('enter a valid number');
    var a = readlineSync.question('enter a number: ');
    var b = readlineSync.question('enter a number: ');
}
var per = 2*(a+b);
var area = (a*b);
if(a<b){
    console.log('higth: '+ a +' whith: '+ b );

}else{
    console.log('higth: '+ b +' whith: '+ a );

}
console.log('the area is '+area);
console.log("the perimeter is "+per);

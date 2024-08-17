// es 6 intro 

var a = 5;

function f() {
    var a = 6;
    console.log(a);


    return function() {
        return a;
    }
}

f();
//6 
console.log(a);
//5


var b = f();

console.log(b());
console.log(b)
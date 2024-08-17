//**********arguments example */

function f1() {
    console.log(arguments);
}
f1(7, 8, 9, undefined, 'Hello', false, null);


//***********objects */

var o = {};

o.name = 'Keren';

var o1 = o;

//o and o1 refere to the same point
o1.sayHallo = function () {
    console.log("hallo")
}
o1.sayHallo();
o1.lname = "Cohen";

o1.contacts = ['einar', 'andrey', 'lev'];

console.log(o);

function showNameAndContacts(person) {
    console.log(person.name);
    console.log(person.contacts)
}
showNameAndContacts(o);

o["age"] = 14
console.log(o);


function personMaker(name, lname, age) {
    var newObj = {};
    newObj.name = name;
    newObj.lname = lname;
    newObj.age = age;
    return newObj;
}


var o1 = personMaker('orev', 'shahor', 2);
var o2 = personMaker('Yona', 'levana', 4);

console.log(o1, o2);
function testFunc (){
    ttt= 777; 
    console.log('')
}


//******functions as objects

function f1(){
    console.log("iam a function")
}
f1.saveProp='nice';
console.log(f1);
console.log(Object);
Object


//*********for in obj */
for (var a in o){

    console.log(a)
}

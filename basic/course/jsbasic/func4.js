//***********Objects ***************/
//in o there is a referance to name
//object is like a container that I can add properties and methods to it
//incupsulation - the object is like a rap that allow me to define properties and methods that are not global , and recongnized only in the object scope
// 'use strict';

var o = {}
o.name = "lee";
o.sayHello = function () {//method  - this is a function inside an object
    console.log("hello");
}
var o1 = o;//we have 1 object with 2 referances
console.log(o1);// 
o.sayHello();


console.log(o); // print { name: 'lee', sayHello: [Function] }

o.contacts = ['alex', 'costa'];
console.log(o);
var k = {};
k.man = o;
console.log(k);//k contain a ref to o

function showNameAndContacts(person) {
    console.log(person.name);
    console.log(person.contacts);
}

showNameAndContacts(o);//I send o to the function 

console.log(o["name"]);// i am using o obj as an array - o[property]

console.log(o["contacts"]);//constacts as properties

o["sex"] = "male"; //I am adding a new property  in this array property system
o["age"] = 21; // add
o[2] = 1; // add 2 as string - '2': 1,
console.log(o);

console.log(o.length);//retrun undefine , so obj is not an array
//////////////////////////////

var arr = [];
arr.name = "orev";//not enter to array - this is a property
console.log(arr.length);//not effect size
arr[3] = "4";
arr['6'] = "888888";//the '6' became to a number
console.log(arr.length);
console.log(arr);
arr[-1] = "-4-4-4-4";//this enter as a property
console.log(arr);


o.child = {};
console.log(o);
o.child.name = "meir";//add child as property to o
console.log(o);

o = 5;
console.log(o);//became 5
console.log("---------------");//became 5
console.log(o1);//became still have data of o obj

//create a new person in a function
function personMaker(name, lname, age) {
    var newObj = {};
    newObj.name = name;
    newObj.lname = lname;
    newObj.age = age;
    return newObj;
}
console.log("\ncreate a new person with a function");
var person1 = personMaker("lee", "yahav", 30);
console.log(person1);

//another way to write an obj
console.log("\ncreate a new object in another way");
var o3 = {
    name: "shay",
    lname: "geva",
    age: 32
}
console.log(o3);


console.log("Object.keys(o3)");
console.log(Object.keys(o3));//show me all the properties inside this obj
console.log("Object.keys(01)");
console.log(Object.keys(o1));

var ttt = 9;

function func() {//never forget to put var befor a define
    ttt = 5; // if I did not put var before so it will search this var in the global
}

console.log(ttt);



//***************function is also an obj */
function f() {
    console.log("I am a function");
}

f.saveProp = "nice";//add prop to the function
console.log(f); // return { [Function: f] saveProp: 'nice' }


console.log(Math.random);//return [Function: random]




var o4 = {//in the obj there are key value - its an Hash table 
    prop1: "bala",
    prop2: "blibli",
    name: "what what",
    age: 18,
    isGood: false,
    showAge: function () {
        console.log("age : " + this.age);//this is when I want to see the props of myslef
    }
}
console.log("=============================");


o4.showAge();









console.log(o4);

console.log("======================show properties====================================");


for (var a in o4) {
    console.log(a);

}
console.log("===========================show values===============================");
for (var a in o4) {
    console.log(o4[a]);
}

console.log(Object.keys(o4));//return all keys - Object is a function
console.log(Object);

//this for will print all keys in o4:
// prop1
// prop2
// name
// age
// isGood


console.log("prop1" in o4);//check if "prop1" is a property of o4
console.log("prop21" in o4);//check if "prop1" is a property of o4

var arr1 = [];
arr1["3"] = 4;// "3" will be index 3
console.log(arr1);



function writeToGlobal() {
    this.globProp = 3;// I am writing to the global
}

writeToGlobal();
console.log("globProp " + globProp);//now globProp is known

console.log(this);

this.l1111 = "fsdfsdfsd";
//the this is one level up , but it depands who call me 



//*********************I can decide from where the call will be operate using call */
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
}

foo.call(obj);//method in function in js - apply and call are almost the same , apply get vals in array

// var bar = foo.bind(obj)//retrun a function -  connect foo function to my obj permanentlly
// bar();
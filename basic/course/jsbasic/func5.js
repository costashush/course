// var o = {
//     "y": 2,
//     x: 1,
//     "-3": 3
// }
// o[5] = 5; // can add to obj fron the outside, 5 is not  a legal var so it convert it to string
// //obj is working  like an Hash table - o.x ~ 0["x"]

// console.log(o);//return { x: 1, y: 2, '-3': 3 }

// for (var i in o) {
//   console.log("key : " + i + " val : " + o[i] );//print keys and vals
// }




///*************************************JSON_JSON_JSON */////////////////
var  o ={
    
    "name" : "why this kolaveri di",
    "url"  : "http://www.youtube.com/watch?v=YR12Z8f1Dh8",
    "singer": "Dhanush",
    "movie": "3",
    "views" : 10000000,
    "music" : "Anirudh Ravichandran",
    "fn" : function(){ console.log("hello");}

}

//this function help me to show also the string in
function replacer(key,val){
    if(typeof val == 'function' ){
        return  val.toString();
    }
    return val
}

var strJson = JSON.stringify(o,replacer);//convert to string
console.log(strJson);//convert obj to string

console.log("========================");
var json = JSON.parse(strJson);//parse the string to object
console.log(json);


// var s = 'function (){ console.log("hello");}' ;
var s = "function test(){  console.log(1); }";
// var s  = 'console.log("hello");';
eval(s);
test();
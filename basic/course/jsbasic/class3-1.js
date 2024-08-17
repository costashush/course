var f = function(a){
    console.log("parameter:"+a);
    return "the end!!!!!!";
}
var x =f("abc");
console.log(x);


function callerX(callMe){
    callMe('X');
}

var niceFunc=function(){
console.log('I am nice')
}
function uglyFunc(who){
    console.log(who + "is ugly." )
}
callerX(niceFunc);
callerX(uglyFunc);

//*********recursion */
function addNum(n){
    if(n==1){
        return 1;
    }else{
        return addNum(n-1)+n;
    }
}
//console.log(addNum(2));

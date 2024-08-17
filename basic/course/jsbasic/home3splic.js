function splice(array,start,count,item1,item2,item3){
var len = array.length;
var newArray=[];

for (var j=0 ,i = start; i < array.length; i++,j++) {
    newArray[j]=array[i];

    }
  array[start++]=item1;
  array[start++]=item2;
  array[start++]=item3;
for (var i = count; i < newArray.length; i++) {
   array[start]=newArray[i];
    start++;
  }
  array.length=len+3-count;
    return array;
}

var arr=[1,2,3,4,5,6,7,8,9];
var result=splice(arr,2,5,9,9,9);
console.log(result);

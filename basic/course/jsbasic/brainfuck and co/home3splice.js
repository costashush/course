//*************splice Fn */
function splice(array, start, count, item1, item2, item3) {
  var len = array.length;
  var startIndex = start;
  var newArray = [];

  for (var j = 0, i = start; i < array.length; i++ , j++) {//pushing to new array from "start" to the end of original array
    newArray[j] = array[i];

  }
  array[start++] = item1;//inser items to original array
  array[start++] = item2;
  array[start++] = item3;

  if (count < (len - startIndex)) {//rule if count a biger number than the what is left of the array
    for (var i = count; i < newArray.length; i++) {//push back to the original array
      array[start] = newArray[i];
      start++;
    }

    array.length = len + 3 - count;//croping the original array

    newArray.length = count;//croping newArray for return
  } else {
    array.length = startIndex + 3;//croping the original array if count is a big number
  }
  return newArray;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(splice(arr, 2, 5, 9, 9, 9));
console.log(arr);
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(splice(arr2, 2, 7, 9, 9, 9));
console.log(arr2);
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(splice(arr3, 2, 100, 9, 9, 9));
console.log(arr3);

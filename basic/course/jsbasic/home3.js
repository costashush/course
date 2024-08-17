//***********sort */
function sort(array, compare) {

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length-1; j++) {
            if (compare(array[j], array[j + 1])) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }

    }
    return array;
}
function compareDist(a, b) {
    var dis1 = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
    var dis2 = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
    return dis1 > dis2;
}
var arr =[[5,3],[1,1],[3,8],[-3,3]];
sort(arr,compareDist);
console.log(arr);
//*******************revers string*/
















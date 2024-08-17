
// This function will receive2 arrays,and return a new out array.
// Out array elements are created based on input arrays
// and a user supply function:


function zip(array1, array2, func, def) {
    var arr = [];
    if (array1.length < array2.length) {
        arr.length = array2.length;

    } else {
        arr.length = array1.length
    }
    for (var i = 0; i < arr.length; i++) {
        if (array1[i] == undefined || array2[i] == undefined) {
            arr[i] = def
        } else {
            arr[i] = func(array1[i], array2[i]);
        }
    }
    return arr;
}
//initiation func
function test() {
    var arr1 = [2, 3, 5, 6, 1, 3];
    var arr2 = [5, 34, 12, 23, 4, 2, 4, 2, 1, 4];     
    //user func
    var out = function addArray(a, b) {
        return a * b;
    }
    console.log(zip(arr2, arr1, out, 99));
}
test();
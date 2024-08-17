function sorter(array) {

    for (var i = 0; i < array.length-1; i++) {
        for (var j = 0; j < array.length-i; j++) {
            if (array[j] > array[j + 1]) {

                var temp = array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array;
}
module.exports = sorter;


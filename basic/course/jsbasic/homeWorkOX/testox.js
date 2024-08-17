

function boardScan(array, sign) {
    var xCount;
    var oCount;
    var signalCount = 0
    //********rows scan */
    function rowScan(array) {
        for (var i = 0; i < array.length; i++) {
            xCount = 0;
            oCount = 0
            for (var j = 0; j < array.length; j++) {
                if (array[i][j] == "x") {
                    xCount++;
                }
                else if (array[i][j] == "o") {
                    oCount++;
                }

            }
            if (xCount == 3 || oCount == 3) {
                break;
            }

        }
        return xCount, oCount, index;
    }
    //********column scan */
    function colScan(array) {
        for (var i = 0; i < array.length; i++) {
            xCount = 0;
            oCount = 0
            for (var j = 0; j < array.length; j++) {
                if (array[j][i] == signal) {
                    if (array[j][i] == "x") {
                        xCount++;
                    }
                    else if (array[j][i] == "o") {
                        oCount++;
                    }
                    else if (array[j][i] != "x" && array[j][i] != "o") {
                        var index = array[j][i];

                    }
                }
                if (xCount == 2 || oCount == 2 && index != null) {
                    break;
                }
            }
        }
        return index;
    }
    //******diagonal scan ===>1 */
    for (var i = 0, j = 0; i < array.length; j++ , i++) {
        array[i][j]
    }
    //***************diagonal scan ===>2 */
    for (var i = 2, j = 2; i < array.length; i-- , j--) {
        array[i][j]

    }
}
console.log(arrayScan());
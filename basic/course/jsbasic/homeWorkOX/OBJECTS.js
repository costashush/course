
// var a =1;
// function pushToObject(name,sname,address,tel){
// var obj ={}
// obj.name=name;
// obj.sname=sname;
// obj.address=address;
// obj.tel=tel;
// return obj;
// }

// pushToObject("costa","s","tel aviv","0527071059");

var t =[["o","o","x"],["-","x","-"],["-","x","x"]];

 function colScan(array) {
        for (var i = 0; i < array.length; i++) {
            xCount = 0;
            oCount = 0;

            for (var j = 0; j < array.length; j++) {
                if (array[j][i] == "x") {
                    xCount++;
                }
                else if (array[j][i] == "o") {
                    oCount++;
                }
                else if (array[j][i]=="-"){
                    var index =[i,j]
                   
                }
            }
            if (xCount==2||oCount==2&&index!=null){
                break;
            }
                

        }
        // return xCount;
        // return oCount;
        return index;
    }
   var q = rowScan(t);
//    console.log(q)
    console.log(q);
    console.log(rowScan(t));
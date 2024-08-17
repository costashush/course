
//***********Fn replacer for json  */

function replacer(key,value){
    if (typeof value==="function"){
        return value.tostring();
    }

}


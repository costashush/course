//***********split str to array by " " */

function split (str,delimiter){
var newArray=[];
var newStr= "";
var j = 0;
    for (var i = 0; i < str.length; ++i) {
        if (str[i]==delimiter){
            
              newArray[j]='';
              j++;
        }else{
            while(str[i]!==delimiter&& i<str.length){
                newStr+=str[i];
                i++;
            }
    newArray[j]=newStr;
    newStr="";
    j++;    
         }
       
        }
         if(str[str.length-1]==delimiter){
            newArray[j]='';
    }
    return newArray;
}
var strToSplit=split("aaababbbbbabbbaaa","a");
console.log(strToSplit);



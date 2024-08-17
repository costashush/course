//***********split str to array by " " */

function split (str,delimiter){
var newArray=[];
var newStr= "";//temp str
var j = 0;
    for (var i = 0; i < str.length; ++i) {
        if (str[i]==delimiter){//find delimiter in str
            
              newArray[j]=''; //insert blanc in array
              j++;
        }else{
            while(str[i]!==delimiter&& i<str.length){//run trow the strin and combines char to string
                newStr+=str[i];
                i++;
            }
    newArray[j]=newStr;//inserts combined string to array
    newStr="";
    j++;    
         }
       
        }
         if(str[str.length-1]==delimiter){ //last dilimiter rule ----original Fn
            newArray[j]='';
    }
    return newArray;
}
var strToSplit=split("aaabaabbbbbabbbaaa","a");
console.log(strToSplit);
var strToSplit=split("aa aa bb ccccccc"," ");
console.log(strToSplit);
var strToSplit=split("123,645,756756,87654",",");
console.log(strToSplit);



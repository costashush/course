function jigsaw(string, firstLater) {

    let newString = "";


    for (let i = 0 ; i < string.length ; i++) {
        if(firstLater==true)
        {
          
            newString += string.charAt(i).toUpperCase() + string.charAt(i+1);
            ++i
        }else{

        }
    }
    console.log(newString);
}

jigsaw("costaaasdfas",true);
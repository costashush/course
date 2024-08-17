


function jigsaw(string, firstLater) {
    let newString;
    for (let char of string) {
        if (firstLater == true) {

            newString = string.charAt(char).toUpperCase() + string.charAt(char + 1)
        }

        // return string.charAt(0).toUpperCase() + string.slice(1);
    }
    console.log(newString);

}
jigsaw("costa",true);

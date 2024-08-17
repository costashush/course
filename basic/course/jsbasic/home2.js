

//*********************keygen */
function keyGen() {
    var key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (var i = 0; i < key.length; i++) {
        var kj = parseInt(Math.random() * key.length);
        var temp = key[i];
        key[i] = key[kj];
        key[kj] = temp;
    }
    return key;
}
//****************encryp */
function encrypt(plainText, encryptKey) {
    var encrip = "";

    for (var i = 0; i < plainText.length; i++) {
        for (var j = 0; j < abc.length; j++) {
            if (plainText[i] == abc[j]) {
                encrip += enkey[j];
                break;
            }
            
        }
        if (plainText[i] == ' ') {
            encrip += ' ';
        }
    }
    return encrip;
}
//***********decryp */
function dencrypt(cipherText, dencryptKey) {
    var decrip = "";

    for (var i = 0; i < cipherText.length; i++) {
        for (var j = 0; j < enkey.length; j++) {
            if (cipherText[i] == enkey[j]) {
                decrip += abc[j];
            }
        }
        if (cipherText[i] == ' ') {
            decrip += ' ';
        }
    }
    return decrip;
}
//**************print and func call */
var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var text = "i want to go to the beach";
var enkey = keyGen();
var entext = encrypt(text, enkey);
var detext = dencrypt(entext, abc);
console.log("untouched text: " + text);
console.log(entext);
console.log(detext);




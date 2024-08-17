
// //************function palindrome */

function testPalindrome(string) {

    if (typeof string === 'string') {
        var poli = true;

        for (var i = 0, j = string.length - 1; i <= j; ++i, --j) {

            if (string[i] !== string[j]) {
                poli = false;
            }
        }
    } else {
        console.log("not a string")
    }
    return poli;
}
//*************print to console */
function print(){

}






// *****************test func */
function test(){

    var isPol;
var isPol = testPalindrome("123321");
var isPol = testPalindrome("asdfdsa");
var isPol = testPalindrome("123");
var isPol = testPalindrome(321);


}


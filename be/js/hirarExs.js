function Expresion() {
    this.val = val;
console.log("ok");
}
function evaluate() {

    return this.val
}

Expresion.prototype.value = function (val) {
    Expresion.call(this, val);
}
Expresion.prototype.add = function (exp1, exp2) {


}

Expresion.prototype.multy = function (exp1, exp2) {


}

Expresion.prototype.subtract = function (exp1, exp2) {


}
Expresion.prototype.power = function (exp1, exp2) {


}
// console.log(new Expresion.prototype.value(2));
function Expression(val) {
    this.val = val;
}

Expression.prototype.evaluate = function() {
    return this.val;
}

function Value(val) {
    Expression.call(this, val);
}
// Value.prototype.constructor = Expression; // repair the inherited constructor

Value.prototype = Object.create(Expression.prototype);

function Add(exp1, exp2) {
    var a = exp1.evaluate();
    var b = exp2.evaluate();
    var val = a + b;
    Expression.call(this, val);
}
// Add.prototype.constructor = Expression; // repair the inherited constructor

Add.prototype = Object.create(Expression.prototype);


function MultiPly(exp1, exp2) {
    var a = exp1.evaluate();
    var b = exp2.evaluate();
    var val = a * b;
    Expression.call(this, val);
}

// MultiPly.prototype.constructor = Expression; // repair the inherited constructor

MultiPly.prototype = Object.create(Expression.prototype);



function Sub(exp1, exp2) {
    var a = exp1.evaluate();
    var b = exp2.evaluate();
    var val = a - b;
    Expression.call(this, val);
}

Sub.prototype.constructor = Expression; // repair the inherited constructor

Sub.prototype = Object.create(Expression.prototype);

function Devide(exp1, exp2) {
    var a = exp1.evaluate();
    var b = exp2.evaluate();
    var val = a / b;
    Expression.call(this, val);
}

Devide.prototype.constructor = Expression; // repair the inherited constructor

Devide.prototype = Object.create(Expression.prototype);


function Power(exp1) { //Power is using MultiPly constructor
    MultiPly.call(this, exp1, exp1);
}

// Devide.prototype.constructor = Expression; // repair the inherited constructor

Power.prototype = Object.create(Expression.prototype);


var val1 = new Value(1);
var val2 = new Value(2);
var add = new Add(val1, val2);
console.log(add.evaluate());
console.log(new Add(new Value(1), new Add(new Value(2), new Value(3))).evaluate());
console.log(new Add(new Value(1), new MultiPly(new Value(2), new Value(3))).evaluate());
console.log(new Power(new Value(3)).evaluate());
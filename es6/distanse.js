//////////////////es 5
function dis(x, y) {

    this.x = x;
    this.y = y;
    this.calc = function() {

        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

var ccc = new dis(3, 4);
console.log(ccc.calc());

///////////////////es 6 constractor=============class

class Point {

}
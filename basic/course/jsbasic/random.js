console.time("");


var array = [];

for (var i = 0; i < 10000000; i++) {
    array[i] = parseInt(Math.random() * 100);
}
console.timeEnd("");
console.time("");

var array1 = [];

for (var i = 0; i < 10000000; ++i) {
    array1[i] = parseInt(Math.random() * 100);
}
console.timeEnd("");

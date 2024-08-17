const express = require('express')
const app = express()


app.get('/', function(req, res) {
    var num = req.query.num;
    console.log(num);
    var num = parseInt(num);
    var fibo = fib(num);
    res.status(200).write(`<html>${fibo}</html>`);
    res.end();
});
app.listen(2222, function() {
    console.log('Start server-----------------');
});

function fib(n) {
    var sum
    var a = 0
    var b = 1;

    for (var i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;


    }
    // console.log(b);
    return b;
};
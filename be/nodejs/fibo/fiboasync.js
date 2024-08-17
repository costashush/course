const express = require('express')
const app = express()
var EventEmitter = require('events').EventEmitter;
var recQ = 0

var eventX = new EventEmitter();

app.get('/', function(req, res) {
    var num = req.query.num;
    // console.log(num);
    var num = parseInt(num);

    eventX.emit('start', num);
    // var fibo = fib(num);
    res.status(200).write(`<html>${fibo}</html>`);
    fibo = 0;
    res.end();
    ++recQ;
    console.log(recQ);
});
app.listen(2222, function() {
    console.log('Start server-----------------');
});



var fibo;


eventX.on('start', (n) => {
    setImmediate(() => {

        var sum;
        var a = 0
        var b = 1;

        for (var i = 2; i <= n; i++) {
            sum = a + b;
            a = b;
            b = sum;


        }
        // console.log(b);
        fibo = b;
    });
});
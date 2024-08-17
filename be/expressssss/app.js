var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

///Add another get with callback

var server = app.listen(1200, function() {

    var addr = server.address();
    console.log('Listening at http://%s:%s', addr.address, addr.port);
});
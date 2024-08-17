var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var login = require('./login');
var session = require('express-session');

//loggedIn = false;
//session examle//
////////////////////////////////////////////////////
app.use(session({ secret: 'rt46903', cookie: { maxAge: 6000 } }));


////////////////////////////////////////////

app.get('/', function(req, res) {
    if (login.loggedInCheck(req, res)) {
        res.sendFile(__dirname + '/index.html');
    }

})

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html');
})

app.get('/about', function(req, res) {
    if (login.loggedInCheck(req, res)) {
        res.sendFile(__dirname + '/about.html');
    }
})

app.post('/tryToLogin', urlencodedParser, function(req, res) {

    var username = req.body.username;
    var password = req.body.password;
    //console.log(username);
    //console.log(password);
    res.send(login.validate(username, password));
})

var server = app.listen(9999, function() {
    var addr = server.address();
    console.log('Listening at http://%s:%s', addr.address, addr.port);
})
express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });



app.get('/form', function(req, res) {
    res.sendFile(__dirname + "/formExpressPOST.html");
    // res.end("here");

});
app.post("/user_form", urlencodedParser, function(req, res) {

    var response = {

        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    res.send(response);
});
var server = app.listen(3000);
console.log('run');
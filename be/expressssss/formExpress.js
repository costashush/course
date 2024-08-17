var express = require('express');
var app = express();

app.get('/form', function(req, res) {
    res.sendFile(__dirname + "/formExpress.html");

});
app.get("/user_form", function(req, res) {

    var response = {

        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response))
});
var server = app.listen(3000);
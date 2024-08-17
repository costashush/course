const express = require('express');
const app = express();


app.use(express.static(__dirname));


app.get('/bmi', function(req, res) {
    // res.send('.index.html');

    var person = req.query;
    bmi(person);
    res.end();
});
app.listen(2222, function() {
    console.log('Example app listening on port 2222!')
});


function bmi(person) {
    var bmi = person.weigth / (person.heigth * person.heigth);
    person['bmi'] = bmi;

    console.log(person);

}

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "costa83",
    database: "costaPR"
});


con.connect(function(err) {

    if (err) throw err;
    console.log("Connected!");

    con.query('select*from PETS', function(err, result) {
        if (err) throw err;

        console.log(result);


    })

});

















// app.post('/', function(req, res) {
//     console.log(req.body);

// });





// app.get('/', function(req, res) {
//     // var num = req.query.num;

//     // var num = parseInt(num);

//     res.status(200)
//         // .write(`<html>${fibo}</html>`);
//     res.end();
// });
// app.listen(2222, function() {
//     console.log('Start server-----------------');
// });
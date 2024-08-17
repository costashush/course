const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.static(__dirname));


app.get('/bmi', function(req, res) {
    // res.send('.index.html');

    var person = req.query;
    bmi(person);

    // fs.appendFile("users bmi/" + person.first_name + ".txt", JSON.stringify(person), function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("The file was saved!");
    // });

    res.send("<h2> First Name: " + person.first_name + "</h2> <br> <h2>Last Name: " + person.last_name + "</h2> <br> <h2>Wieght: " + person.weigth + "</h2>" +
        "<br> <h2>Height: " + person.heigth + "</h2> <br> <h2>Age: " + person.age + "</h2> <br> <h2>" + person.bmi + '</h2>');
    res.end();

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "costa83",
        database: "costaPR"
    });

    var personToUpLoad = "INSERT INTO bmi_data(first_name,family_name,weigth,height,age,bmi)values('" + person.first_name + "','" + person.last_name + "'," + parseInt(person.weigth) + "," + parseInt(person.heigth) + "," + parseInt(person.age) + "," + parseInt(person.bmi) + ");"


    con.connect(function(err) {

        if (err) throw err;
        console.log("Connected!");

        con.query(personToUpLoad, function(err, result) {



            if (err) throw err;

            console.log(result);


        })

    });


























});
app.listen(2222, function() {
    console.log('Example app listening on port 2222!')
});


function bmi(person) {
    var bmi = person.weigth / (person.heigth * person.heigth);
    person['bmi'] = bmi;

    // console.log(bmi);
    // console.log(person);

}
















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
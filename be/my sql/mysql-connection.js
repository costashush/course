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
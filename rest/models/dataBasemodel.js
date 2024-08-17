var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "costa83",
    database: "shop"
});

module.exports = con;
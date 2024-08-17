module.exports.Cartfunctions = (function() {


    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "costa83",
        database: "shop"
    });

    function getData(query) {


        con.query(query, function(err, result) {

            if (err) throw err;

            return result;
        });

    }


    function arrayer(obj) {
        var mainArray = [];
        for (keys in obj) {
            var smallArray = [];
            smallArray.push(obj[keys].id);
            // smallArray.push(obj[keys].cat_id);
            smallArray.push(1);
            smallArray.push(obj[keys].qty);

            mainArray.push(smallArray);

        }

        //    console.log(mainArray);
        return mainArray;
    }
    return {
        arrayer:
    }

}());
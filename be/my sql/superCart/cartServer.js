var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var myquery = require("./query");
http.listen(3000);


var products;
var categories;



app.use(express.static(__dirname));
///////////////////////////////////////////////////////////////////
app.get('/favicon.ico', function(req, res) {
    res.status(204);
});
///////////////////////////////////////////////////////////////////////
io.on('connection', function(socket) {
    socket.emit('dataload', categories);
    // socket.on('my other event', function(data) {
    // console.log(data);
    // });

    app.get('/:catName', function(req, res) {


        var catName = req.params.catName;



        con.query(myquery.getProducts(catName), function(err, result) {

            if (err) {
                throw err;

            } else {
                // console.log(result);
                products = result;
                res.redirect('cart/cart.html')
                    // socket.emit('productsLoad', products);


            }
        });



        // res.sendfile(__dirname + '/index.html');
    });
    socket.on('sendCart', function(data) {
        // console.log(data);
        var values = data;
        con.query(myquery.deletCart, function(err, result) {

            if (err) {
                throw err;
            } else {


            }
        });
        //  console.log(values);
        if (Object.keys(data).length !== 0) {

            con.query(myquery.insertToCart, [arrayer(values)], function(err, result) {

                if (err) {
                    throw err;
                } else {

                    console.log("ha HAAAA");
                }

            });

        }

    });


    socket.on('needProducts', function() {
        socket.emit('productsLoad', products);
    });



});

console.log('Server running!');


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "costa83",
    database: "shop"
});
/***************************cat query pull */

con.query(myquery.getCategories, function(err, result) {

    if (err) throw err;

    categories = result;
});

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

//////////////////////curenccy rates api////////////////        
// var api = require('fixer-io-node');
// api.base('USD').then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.log(error)
// });
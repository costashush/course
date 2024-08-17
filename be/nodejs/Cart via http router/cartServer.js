var http = require('http');
var router = require('./CartRouter.js');
var hostname = 'localhost',
    port = 3000;

router.register('/', mainPage);
// router.register('/1', loadCart);
// router.register('/2', loadCart);
// router.register('/3', loadCart);
// router.register('/4', loadCart);
// router.register('/5', loadCart);
// router.register('/6', loadCart);
http.createServer(onRequest).listen(port, hostname);

function onRequest(req, res) {
    router.route(req, res);
}

// var products;
// var categories;


// app.use(express.static(__dirname));
///////////////////////////////////////////////////////////////////
// app.get('/favicon.ico', function(req, res) {
//     res.status(204);
// });
///////////////////////////////////////////////////////////////////////
// io.on('connection', function(socket) {
//     socket.emit('dataload', categories);
//     // socket.on('my other event', function(data) {
//     // console.log(data);
//     // });

//     app.get('/:catName', function(req, res) {


//         var catName = req.params.catName;



//         con.query(myquery.getProducts(catName), function(err, result) {

//             if (err) {
//                 throw err;

//             } else {
//                 // console.log(result);
//                 products = result;
//                 res.redirect('cart/cart.html')
//                     // socket.emit('productsLoad', products);


//             }
//         });



//         // res.sendfile(__dirname + '/index.html');
//     });
//     socket.on('sendCart', function(data) {
//         // console.log(data);
//         var values = data;
//         con.query(myquery.deletCart, function(err, result) {

//             if (err) {
//                 throw err;
//             } else {


//             }
//         });
//         //  console.log(values);
//         if (Object.keys(data).length !== 0) {

//             con.query(myquery.insertToCart, [arrayer(values)], function(err, result) {

//                 if (err) {
//                     throw err;
//                 } else {

//                     console.log("ha HAAAA");
//                 }

//             });

//         }

//     });


//     socket.on('needProducts', function() {
//         socket.emit('productsLoad', products);
//     });



// });

console.log('Server running!');
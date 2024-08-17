var express = require('express');
var router = express.Router();
var products = require('../models/productsModel');
var checkUserAuth  =require('../models/checkUserAuth');

//show products
router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    function callback(result) {
        console.log("this is call back");
        res.json(result);
    }
    products.pullData(id, callback);
    console.log(req.body);
});

router.post('/', checkUserAuth, function (req, res, next) {
    var callback = function (result) {
        res.json("data added to prod");
    }
    var data = req.body;

    prodModel.addProd(callback, data);
})

router.delete('/:id', checkUserAuth, function (req, res, next) {
    var callback = function () {
        res.send('prod delete');
    }
    prodModel.deleteProd(callback, req.params.id);
})


router.put('/:id', checkUserAuth, function (req, res, next) {
    var callback = function () {
        res.send('prod updated');
    }
    productModel.updateProd(callback, req.params.id,req.body);
})


module.exports = router;
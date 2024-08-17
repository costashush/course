var express = require('express');
var router = express.Router();
var categories = require('../models/categoriesModel');


router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    function callback(result) {
        console.log("this is call back");
        res.json(result);
    }
    categories.pullData(id, callback);
    console.log(req.body);
});

module.exports = router;
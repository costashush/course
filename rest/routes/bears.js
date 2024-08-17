var express = require('express');
var router = express.Router();
var bears = require('../json/eurobears.json');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(bears);
    console.log(req.body);
});

router.get('/:bear_id', function(req, res, next) {
    var id = req.params.bear_id;
    for (var i = 0; i < bears.length; i++) {
        if (id == bears[i].id) {

            res.json(bears[i]);
        }
    }

});


router.post('/', function(req, res, next) {
    var newitem = {

        id: req.body.id,
        name: req.body.name
    };
    bears.push(newitem);
    // console.log(newitem);

    res.json(bears);
});

router.put('/:prapapam', function(req, res, next) {
    var id = req.params.prapapam;
    for (var i = 0; i < bears.length; i++) {
        if (id == bears[i].id) {
            bears[i].name = req.body.data;

        }
    }

    res.json(bears);
});
router.delete('/:prapapam', function(req, res, next) {
    var id = req.params.prapapam;
    for (var i = 0; i < bears.length; i++) {
        if (id == bears[i].id) {
            bears[i].name = req.body.data;
            bears.splice(i, 1);
        }
    }

    res.json(bears);
});
module.exports = router;
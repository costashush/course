var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/costa', function(req, res, next) {
    res.render('costa', { title: 'Express' });
});
router.get('/london', function(req, res, next) {
    res.render('london', { title: 'Express', backer: '/costa' });
});

module.exports = router;
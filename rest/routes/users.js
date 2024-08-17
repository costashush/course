var express = require('express');
var router = express.Router();
var sha1 = require('sha1');
var auth = require('basic-auth');
var checkUserAuth  = require('../models/checkUserAuth');
var userModel = require('../models/userModel');
/* GET users listing. */

router.post('/', checkUserAuth, function (req, res, next) {
    var callback = function () {
        res.send('user is added');
    }
    var pass = req.body.password;
    req.body.password = sha1(pass);
    console.log(req.body);
    userModel.addUser(callback, req.body);
})



router.get('/', function (req, res, next) {
    console.log('here---------------');
    var callback = function (result) {
        res.send(result);
    }
    userModel.getUsers(callback);
})

router.delete('/:username', function (req, res, next) {
    var callback = function (result) {
        res.send("user is deleted");
    }
    userModel.deleteUser(callback,req.params.username);
})


router.put('/:username', function (req, res, next) {
    var callback = function (result) {
        res.send("user is updated");
    }
    console.log(req.params.username,'------',req.body);
    userModel.updateUser(callback,req.params.username,req.body);
})
module.exports = router;
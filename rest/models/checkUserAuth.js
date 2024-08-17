var sha1 = require('sha1');
var auth = require('basic-auth');
var userModel = require('../models/userModel');

var checkUserAuth = function (req, res, next) {
    var callback = function (result) {
        console.log("THE LENGTH IS  :   "+result.length);
        if (result.length > 0) {
            console.log('auth is good');
            next();
        }else{
            res.send("USER IS NOT AUTHORIZED");
        }
    }
    var credentials = auth(req);
    var user = credentials.name;
    var pass = sha1(credentials.pass);
    console.log(credentials);
    console.log(user,pass);
    
    userModel.authUser(user, pass, callback);
}

module.exports = checkUserAuth;
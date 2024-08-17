var con = require('./dataBasemodel');
var sha1 = require('sha1');

var userModel = function (con) {
    function deleteUser(callback, username) {
        var deleteUserQuery = "delete from users where username='" + username + "'";
        console.log(deleteUserQuery);
        con.query(deleteUserQuery, function (err, result) {
            callback(result);
        })
    }

    function updateUser(callback, username,data) {
        var ecodePass = sha1(data.password);
        var updateUserQuery = `update users set email='${data.email}', firstname='${data.firstname}',lastname='${data.lastname}',username='${data.username}',password='${ecodePass}',cartId=${data.cartId} where username ='${username}'`;
        console.log(updateUserQuery);
        con.query(updateUserQuery, function (err, result) {
            callback(result);
        })
    }

    function authUser(username, pass, callback) {
        var queryGetUserCredentials = "select * from users where username='" + username + "' and password='" + pass + "'";
        console.log(queryGetUserCredentials);
        con.query(queryGetUserCredentials, function (err, result) {
            callback(result);
        })
    }
    function addUser(callback, user) {
        var userAddQuery = `insert into users (username,email,firstname,lastname,password,cartid) values ('${user.username}','${user.email}','${user.firstname}','${user.lastname}','${user.password}','${user.cartId}')`;
        console.log(userAddQuery);
        con.query(userAddQuery, function (err, result) {
            callback(result);
        })
    }

    function getUsers(callback) {
        var getUserQuery = "select username,email,firstname,lastname,cartid from users";
        con.query(getUserQuery, function (err, result) {
            callback(result);
        })
    }

    return {
        'addUser': addUser,
        'getUsers': getUsers,
        'authUser': authUser,
        'deleteUser': deleteUser,
        'updateUser':updateUser
    }
}(con);


module.exports = userModel;
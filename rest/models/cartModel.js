var con = require('./dataBasemodel');


var cartModel = function (con) {

    function updateCartQty(callback,cart_id,prod_id,qty){
        var updateQuery = `update Cart set qty=${qty} where cart_id=${cart_id} and prod_id='${prod_id}'`;
        con.query(updateQuery,function(err,result){
            callback(result);
        })
    }
    function addCart(callback, data) {
        var addQuery = `insert into Cart (product_id,cart_id,qty) values (${data.product_id},${data.cart_id},${data.qty})`;
        con.query(addQuery, function (err, result) {
            callback(result);
        })
    }
    function getCart(callback, id) {
        var cartProds = "select title from Products inner join (select * from Cart where cart_id =" + id + ") as cart1 on cart1.product_id=Products.sku";

        con.query(cartProds, function (err, result) {
            callback(result);
        })
    }

    function deleteCart(calback, id) {
        var deleteQuery = "delete from Cart where cart_id=" + id;
        con.query(deleteQuery, function (err, result) {
            calback(result);
        })
    }


    function deleteCartItemBySku(calback, id,prod_id) {
        var deleteQuery = "delete from Cart where cart_id=" + id + " and prod_id='"+prod_id+"'";
        console.log(deleteQuery);
        con.query(deleteQuery, function (err, result) {
            calback(result);
        })
    }
    return {
        'getCart': getCart,
        'deleteCart': deleteCart,
        'addCart': addCart,
        'updateCartQty':updateCartQty,
        'deleteCartItemBySku':deleteCartItemBySku
    }
}(con);



module.exports = cartModel
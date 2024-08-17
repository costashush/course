var con = require('./dataBasemodel');


var products = (function (connection) {

   

    function pullData(id, callback) {
        var getProducts= "select*from products where cat_id=" + id + ";"
        con.query(getProducts, function (err, result) {

console.log(result);
            callback(result);

        });

    }
    function addProd(callback, prod) {
        var addProdQuery = `insert into Products (cat_id,price,image,product,id) values (${prod.cat_id},'${prod.price}','${prod.image}','${prod.product}','${prod.id}')`;
        console.log(addProdQuery);
        con.query(addProdQuery, function (err, result) {
            console.log("success");
            callback(result)
        });

    }
    function deleteProd(callback, id) {
        var deleteProdQuery = `delete from Products where id='${id}'`;
        con.query(deleteProdQuery, function (err, result) {
            callback(result);
        })
    }
    function updateProd(callback, id, data) {
        var updateProdQuery = `update Products set category_id=${data.cat_id},price=${data.price},image='${data.image}',title='${data.product}' where id=${id}`;
        con.query(updateProdQuery, function (err, result) {
            if (err) {
                throw err.message;
            }
            callback(result);
        })
    }


    return {
        'pullData': pullData,
        'addProd': addProd,
        'deleteProd': deleteProd,
        'updateProd': updateProd
    }

}(con));

module.exports = products;
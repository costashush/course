  var con = require('./dataBasemodel');


var categoriesModel = (function (con) {


    function getCategories(callback) {
        //need to return from callback functions
        con.query("SELECT * FROM Categories", function (err, result) {
            console.log("success");
            callback(result);
        });
    }
    function getCategoriesWithCount(callback) {
        var queryCatWithCount = "SELECT (categoties),COUNT(product)as total FROM products,categories where categories.id="+id+" and products.cat_id ="+id+";"  

        con.query(queryCatWithCount, function (err, result) {
            callback(result);
        });
    }

    function addCategory(data, callback) {
        var addCatquery = `insert into Categories (name) values ('${data.name}')`;
        con.query(addCatquery, function (err, result) {
            if (err) { throw err; }
            callback(result);
        });
    }

    function updateCategory(data,name, callback) {
        var updateCatquery = `update Categories set name=${data.name} where name=${name}`;
        con.query(updateCatquery, function (err, result) {
            if (err) { throw err; }
            callback(result);
        });
    }
    function deleteCategory(data, callback) {
        var deleteCatquery = `delete from Categories where ${data.id}`;
        con.query(deleteCatquery, function (err, result) {
            if (err) { throw err; }
            callback(result);
        });
    }





    return {

        'getCategories': getCategories,
        'getCategoriesWithCount': getCategoriesWithCount,
        'addCategory': addCategory,
        'updateCategory': updateCategory,
        'deleteCategory': deleteCategory
    }
})(con);





module.exports = categoriesModel;

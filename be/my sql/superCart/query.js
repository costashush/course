var querys = module.exports = {

    getCategories: "select*from categories;",
    getProducts: function(id) {
        return "select*from products where cat_id=" + id + ";"
    },
    getCart: "select*from cart;",
    deletCart: "truncate table cart;",
    insertToCart:"INSERT INTO cart ( prod_id,cart_id,qty) VALUES ?"
}
        



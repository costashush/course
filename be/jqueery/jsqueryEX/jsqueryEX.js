$(document).ready(function () {

    var products = [
        { "title": "Beer - Upper Canada Light", "price": "9.61" },
        { "title": "Ginger - Pickled", "price": "7.58" },
        { "title": "Wine - Niagara,vqa Reisling", "price": "1.04" },
        { "title": "Sprouts - Corn", "price": "6.83" },
        { "title": "Pastry - Banana Tea Loaf", "price": "1.92" },
        { "title": "Juice - Propel Sport", "price": "1.15" },
        { "title": "Hog / Sausage Casing - Pork", "price": "8.74" },
        { "title": "Lamb - Bones", "price": "6.23" },
        { "title": "Broccoli - Fresh", "price": "4.88" },
        { "title": "Container - Hngd Cll Blk 7x7x3", "price": "0.14" },
        { "title": "Dried Figs", "price": "1.79" },
        { "title": "Piping Jelly - All Colours", "price": "0.06" },
        { "title": "Buttons", "price": "2.78" },
        { "title": "Water - Tonic", "price": "5.04" },
        { "title": "Pork - Bacon Cooked Slcd", "price": "9.83" },
        { "title": "Lamb - Pieces, Diced", "price": "5.37" },
        { "title": "Tomatoes - Vine Ripe, Red", "price": "6.22" },
        { "title": "Cheese - Le Cru Du Clocher", "price": "3.86" },
        { "title": "Tea - Green", "price": "0.19" },
        { "title": "Pike - Frozen Fillet", "price": "8.36" }
    ]

    insertHtml(products);

    $("#container div").click(function () {
        var value = parseFloat($(this).attr("data-price"));
        var newVal =parseFloat($('#total').html()) + value
        $('#total').html(newVal);

    });

});

function insertHtml(products) {

    for (var i = 0; i < products.length; i++) {


        var newProDiv = $('<div>', { "data-price": products[i].price, "text":products[i].title + '\n' +products[i].price});

        $('#container').append(newProDiv);
    }

}





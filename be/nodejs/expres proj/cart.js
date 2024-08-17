$(document).ready(function() {

    $("#shop").shop("#table");

});




$.fn.shop = function(cartselector) {

    var options = {
        add_to_cart_image_url: "*ignore for now*",
        products_load_json: 12,
        products_load_url: 'http://wpwith.us/experis/cart-products-ajax.php',
        url_load_page_count: "How many items to load from the server each load request",
        paypal: "ignore for now"
    }


    var products = [];

    var mainselector = '#' + this[0].id;

    ///////////////////////////sroll cart stick///////////////////////////////////
    $(window).scroll(cartScrollSticker);

    ///////////////////////////start-stop counters////////////////////////////////
    var start = 1;
    var stop = start + options.products_load_json - 1;
    ///////////ajax firts call/////////////////////
    loadAj();
    //////////ajax scroll handler/////////////////
    $(window).scroll(function() {
        var hT = $('#scroll-to').offset().top,
            hH = $('#scroll-to').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {


            loadAj();
            goOn = true;

        }
    });

    $("#paypalbutton").click(checkOut);

    function cartScrollSticker() {
        var wS = $(this).scrollTop();
        if (wS > 100) {

            $(cartselector).css("position", "fix");


            $('#table').addClass('stick');
        } else {
            $('#table').removeClass('stick');

        }
    }

    function insertHtml(products, selector, start) {

        for (var i = 0; i < products.length; i++) {

            var newName = $('<h3>', { "text": products[i].name, });
            var newPic = $('<img>', { id: 'proImg', src: products[i].image });
            var newPrice = $('<h4>', { "text": products[i].price + "$" });
            var newAddButton = $('<button>', { "class": "addButton", "text": "Add to cart" });
            var newProDiv = $('<div>', { 'class': "prod", 'data-id': [start + i] }).append(newName, newPic, newPrice, newAddButton);

            $(selector).append(newProDiv);

            $(newAddButton).click(function() {
                var value = parseFloat($(this).parent().attr("data-id"));

                Cart.addToCart(value);
                Cart.anima($(this).parent().find("img"), $("tr[data-id=" + value + "] input"));


            });
        }

        procesData();
    }


    function checkOut() {

        var basket = Cart.getCart();
        var i = 1;
        for (items in basket) {
            var prodname = $('<input>', { "type": "hidden", "name": "item_name_" + i, "value": basket[items].name });
            var prodprice = $('<input>', { "type": "hidden", "name": "amount_" + i, "value": basket[items].price });
            var prodqty = $('<input>', { "type": "hidden", "name": "quantity_" + i, "value": basket[items].qty });
            i++;

            $('#paypalform').append(prodname, prodprice, prodqty);
        }
    }

    function procesData() {


        // var start = options.products_load_json;
        // var stop = start + options.products_load_json - 1;

    }

    var goOn = true;

    function loadAj() {

        $.ajax({
            url: options.products_load_url,
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
            cache: false,
            // async: false,
            data: { from: start, to: stop },
            success: function(data) {

                if (goOn) {
                    Array.prototype.push.apply(products, data);



                    insertHtml(data, mainselector, start);
                    start += data.length;
                    stop += data.length;

                    console.log(start, stop);
                    goOn = false;
                }
            }

        });

    }




    /////////////////////////////////cart object/////////////////////////////////
    var Cart = (function() {


        var cart = {};

        function getCart() {
            return cart;

        }

        function addToCart(id) {

            if (!cart[id]) {
                //adding prod to cart obj
                cart[id] = products[id];
                cart[id]["qty"] = 1;
                ////////////////////adding and displaying in cart/////////
                var name = $('<td>', { "text": "      " + products[id].name });
                var delButton = $('<span>', { "class": "delBtn", 'text': "X" });
                name.prepend(delButton);
                var qtyTd = $('<td>', { "class": "qtyFild" });
                var qty = $('<input>', { "type": 'number', "value": 1, "min": 1, "max": 99 });

                qtyTd.append(qty);

                var price = $('<td>', { "text": products[id].price });
                var smallTotal = $('<td>', { "class": "smalltotal", "text": products[id].price });
                var newItem = $('<tr>', { "data-id": id }).append(name, qtyTd, price, smallTotal);

                $(cartselector + ' tbody').append(newItem);

                $("#totalqty").text(bigTotal()[0])
                $("#totalprice").text(bigTotal()[1]);
                ////////////////////////////       
                delButton.click(function() {
                    //removing prod from cart obj       
                    delete cart[id];
                    newItem.remove();
                    $("#totalqty").text(bigTotal()[0]);
                    $("#totalprice").text(bigTotal()[1]);

                });
            } else {

                var oldVal = $("tr[data-id=" + id + "] input")[0].value;
                var newVal = parseFloat(oldVal) + 1;
                $("tr[data-id=" + id + "] input")[0].value = newVal;
                ////update qty to obj cart///////
                cart[id]["qty"] += 1;

                $("tr[data-id=" + id + "] .smalltotal").text(smallTotalCalc(id));
                $("#totalqty").text(bigTotal()[0])
                $("#totalprice").text(bigTotal()[1]);
            }
            /////////input event///////////////////////
            $('input').on('input', iputEvent);



        };


        function iputEvent() {
            // alert(this.value);
            var tr = $(this).parent().parent();
            var id = tr.attr("data-id");
            cart[id]["qty"] = parseFloat(this.value);
            // $(this).parent().parent().css( "background-color", "red" );

            $("tr[data-id=" + id + "] .smalltotal").text(smallTotalCalc(id));
            $("#totalqty").text(bigTotal()[0])
            $("#totalprice").text(bigTotal()[1]);
        }


        function smallTotalCalc(productId) {
            var total = ((cart[productId]['qty']) * (cart[productId]['price'])).toFixed(2);

            return total;
        };

        function bigTotal() {
            var allQty = 0;
            var alltotal = 0;
            for (id in cart) {
                allQty += cart[id]["qty"]
                alltotal += (cart[id]["qty"] * parseFloat(cart[id]["price"]));

            }
            alltotal = alltotal.toFixed(2);
            return [allQty, alltotal];
        };

        function anima(image, destination) {

            var cart = $(destination);
            var imgtofly = image;

            if (imgtofly) {

                var imgclone = imgtofly.clone()

                .offset({
                    top: imgtofly.offset().top,
                    left: imgtofly.offset().left
                })

                .css({
                    'opacity': '0.7',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '1000'
                })

                .appendTo($('body'))
                    .animate({

                        'top': cart.offset().top + 10,

                        'left': cart.offset().left + 30,

                        'width': 55,

                        'height': 55
                    }, 1000);

                imgclone.animate({
                    'width': 0,
                    'height': 0
                }, function() {
                    $(this).detach()
                });
            }
        }

        return {
            anima: anima,
            // bigTotal:bigTotal,
            // smallTotalCalc:smallTotalCalc,
            addToCart: addToCart,
            getCart: getCart
        }
    })(cartselector);



}
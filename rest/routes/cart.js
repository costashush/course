var express = require('express');
var router = express.Router();
var cart = require('../models/cartModel');
var checkUserAuth  =require('../models/checkUserAuth');



router.get('/:id', function (req, res, next) {
    var callback = function (result) {
        res.json(result);
    }
    cart.getCart(callback, req.params.id);
})


router.delete('/:id',checkUserAuth,function(req,res,next){
    var callback = function(result){
        res.send("cart deleted");
    }
    cartModel.deleteCart(callback,req.params.id);
})


router.delete('/:id/:prod_id',checkUserAuth,function(req,res,next){
    var callback = function(result){
        res.send("cart row deleted");
    }
    console.log(req.params.id,'-------',req.params.prod_id);
    cartModel.deleteCartItemBySku(callback,req.params.id,req.params.prodId);
})

router.post('/',checkUserAuth,function(req,res,next){
    var callback  =function(result){
        res.send("data added to cart");
    }
    cartModel.addCart(callback,req.body);
})

router.put('/:id/:pro_id',checkUserAuth,function(req,res,next){
    var callback = function(result){
        res.send("qty updated in cart");
    }
    cartModel.updateCartQty(callback,req.params.id,req.params.prod_id,req.body.qty);
})

module.exports = router;
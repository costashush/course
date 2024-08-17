app.provider("vat", [function() {
    var val = 0;

    function Vat(vat) {
        this.vat = vat;
    }

    Vat.prototype.calc = function(num) {
        return num * val;
    }

    this.setRate = function(rate) {
        val = rate;
    };

    this.$get = [function vatFactory() {
        // var service = {};
        return new Vat(val);
        // return service
    }];
}]);



app.config(["vatProvider", function(


    vat) {
    vat.setRate(0.17);
}])
var linklist = (function() {

    var listProtoFunction = {

        pushhead: function(data) {

            var item = {}
            item.data = data;
            item.next = this.head;
            if (this.head != null) {
                this.head.prev = item;
            }
            item.prev = null;
            this.head = item;
            if (this.tail == null) {

                this.tail = item;
            }

            console.log(item);
            // console.log(this.tail);
            // console.log(this.head);
        },
        pushtail: function(data) {
            var item = {}
            item.data = data;
            item.prev = this.tail;
            if (this.tail != null) {
                this.tail.next = item;
            }
            item.next = null;
            this.tail = item;
            if (this.head == null) {

                this.head = item;
            }

            console.log(item);
            // console.log(this.tail);
            // console.log(this.head);
        },
        pophead: function() {
            if (this.head == null) {
                return;
            } else if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                var temp = this.head;
                this.head = temp.next;
                temp.next.prev = null;
            }

            console.log(this.tail);
            console.log(this.head);
            return this.head;

        },
        poptail: function() {
            if (this.tail == null) {
                return;
            } else if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                var temp = this.tail;
                this.tail = temp.prev;
                temp.prev.next = null;
            }


            console.log(this.tail);
            console.log(this.head);
            return this.tail;
        },


        findObj: function(data) {
            var temp = this.head;

            while (temp != null) {


                if (comper(data, temp) == true) {


                    var iterator = function() {

                        var iterFunction = {

                            next: function(temp) {
                                return this.item.next;
                            },
                            prev: function(temp) {
                                return this.item.prev;
                            },
                            getData: function() {
                                console.log("toda lee");
                                return this.item.data;
                            },
                            setData: function(temp, newData) {
                                this.item.data = newData;
                            }

                        }
                        var iterConstruc = function() {
                            this.item = temp;
                        }
                        iterConstruc.prototype = iterFunction;
                        return iterConstruc;
                    }();
                    return iterator;
                }

                temp = temp.next;



            }

            return null;
        }
    }
    var list = function() {
        this.tail = null;
        this.head = null;



    };


    list.prototype = listProtoFunction;
    return list;

})();


function comper(data, temp) {
    if (data == temp.data) {
        return true;
    }
    return false;
}


module.exports = linklist;

var list1 = new linklist();

list1.pushhead(11);
list1.pushhead(12);

// list1.pushhead(13);
// list1.pushhead(14);
// list1.pushhead(15);
// list1.pushhead(16);
// // list1.pushtail(4);
// list1.pophead();

// var iterat = list1.findObj(14, comper);
// var iter = new iterat();
// iter.getData();
// iter.next();
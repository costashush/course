



function createList() {
    var list = {
        tail: null,
        head: null,
    }

    /////////////////////////////////function closure///////////////////////object
    var returnObj = {};


    function pushHead(data) {
        var item = {}
        item.data = data;
        item.next = list.head;
        if(list.head!=null){
        list.head.prev=item;
        }
        item.prev = null;
        list.head = item;
        if (list.tail == null) {

            list.tail = item;
        }

    }
    function pushTail(data) {
        var item = {}
        item.data = data;
        item.prev = list.tail;
        if(list.tail!=null){
        list.tail.next=item;
        }
        item.next = null;
        list.tail = item;
        if (list.head == null) {

            list.head = item;
        }
    }
    function popHead() {
        if (list.head == null) {
            return;
        }
        else if (list.head == list.tail) {
            list.head = null;
            list.tail = null;
        }
        else {
            var temp = list.head;
            list.head = temp.next;
            temp.next.prev = null;
        }

    }
    function popTail() {
        if (list.tail == null) {
            return;
        }
        else if (list.head == list.tail) {
            list.head = null;
            list.tail = null;
        }
        else {
            var temp = list.tail;
            list.tail = temp.prev;
            temp.prev.next = null;
        }
    }
    function find(data) {
        var temp = list.head;
        var flag = false;
        while (temp != null) {
            if (temp.data == data) {
                flag = true;

            }


            temp = temp.next;
        }
        if (flag) {
            console.log("found")
        } else {
            console.log("not found")

        }
    }
    function print() {
        var temp = list.head;
        var string = "";
        while (temp != null) {
            string += temp.data + " >>";

            temp = temp.next;
        }


        console.log(string);


    }
    returnObj.pushHead = pushHead;
    returnObj.pushTail = pushTail;
    returnObj.popHead = popHead;
    returnObj.popTail = popTail;
    returnObj.find = find;
    returnObj.print = print;
    return returnObj;
}


var init = createList();
init.pushHead(4);
init.pushHead(5);
init.pushHead(44);
init.popHead();
init.popHead();
init.popHead();
init.pushTail("lee kol hakavod");
init.pushTail("lee kol hakavod");
init.popTail()
init.find(4);
init.print();

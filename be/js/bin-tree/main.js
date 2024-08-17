function Node(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
}





// ************ TREE SECTION *********************************************
function Tree(compareFunc) {
    this.root = null;
    this.compareFunc = compareFunc;

    Object.defineProperty(this, 'length', {
        get: function() {
            var current = this.root;
            return returnLength(current);

            function returnLength(current) {
                if (current == null) return 0;
                return 1 + (returnLength(current.left) + returnLength(current.right));
            }
        }
    });

    Object.defineProperty(this, 'height', {
        get: function() {
            var current = this.root;
            return returnHeight(current);

            function returnHeight(current) {
                if (current == null) return 0;
                return 1 + Math.max(returnHeight(current.left), returnHeight(current.right));
            }
        }
    });

    Tree.prototype.insert = function(data) {

            var current;
            if (this.root == null)
                this.root = new Node(data);
            else {
                data = new Node(data);
                current = this.root;
                while (current) {
                    if (this.compareFunc(data.data, current.data) > 0) {
                        if (current.right == null) {
                            current.right = data;
                            break;
                        }
                        current = current.right;
                    } else {
                        if (current.left == null) {
                            current.left = data;
                            break;
                        }
                        current = current.left;
                    }
                }
            }
        }
        ////////////////////swap/////////////////

    Tree.prototype.swap = function(node) {
        if (node == null) {
            return;
        }
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
        swap(node.left);
        swap(node.right);

    }
    Tree.prototype.sum = function(node) {
        if (node == null) {
            return 0;
        }


    }


    Tree.prototype.find = function(data) {
        data = new Node(data);
        current = this.root;
        while (current) {
            if (this.compareFunc(data.data, current.data) == 0) {
                return data;
            } else {
                if (this.compareFunc(data.data, current.data) > 0) {
                    current = current.right;
                } else {
                    current = current.left;
                }
            }
        }

    }
    Tree.prototype.toString = function(node) {

        if (node.left != null) { this.toString(node.left); }
        console.log(node.data);
        if (node.right != null) { this.toString(node.right); }
        return 0;
    }
    Tree.prototype.forEach = function(action, context, traverseMode) {
        switch (traverseMode) {
            case "inOrder":
                if (context.left != null) { this.forEach(action, context.left, traverseMode); }
                action(context.data);
                if (context.right != null) { this.forEach(action, context.right, traverseMode); }
                return 0;

            case "preOrder":
                action(context.data);
                if (context.left != null) { this.forEach(action, context.left, traverseMode); }
                if (context.right != null) { this.forEach(action, context.right, traverseMode); }
                return 0;

            case "postOrder":
                if (context.left != null) { this.forEach(action, context.left, traverseMode); }
                if (context.right != null) { this.forEach(action, context.right, traverseMode); }
                action(context.data);;
                return 0;

        }

    }

}

(function() {
    function sallery(node) {
        node.sallery += 100000;
    }

    function Person(id, name, sallery) {
        this.id = id;
        this.name = name;
        this.sallery = sallery;
    }

    function compareFunction(p1, p2) {
        if (p1.id === p2.id) {
            return 0;
        }
        if (p1.id > p2.id) {
            return 1;
        } else {
            return -1;
        }
    }
    var binaryTree = new Tree(compareFunction);
    binaryTree.root
    var p1 = new Person(222, "as2saf", 100);
    var p2 = new Person(333, "ss2s", 1);
    var p12 = new Person(332, "####", 12);
    var p3 = new Person(111, "ddd", 123);
    var p4 = new Person(555, "cc3", 1232);
    var p6 = new Person(777, "c12c", 1232);
    var p7 = new Person(888, "c2c", 155);
    var p13 = new Person(887, "####", 13542);
    var p8 = new Person(999, "1c32c", 123123);
    var p9 = new Person(1000, "c2c", 1111);
    var p10 = new Person(22, "1cc23", 2022);
    var p11 = new Person(23, "####", 213);
    var p5 = new Person(555, "cc", 221);
    binaryTree.insert(p1);
    binaryTree.insert(p2);
    binaryTree.insert(p3);
    binaryTree.insert(p4);
    binaryTree.insert(p6);
    binaryTree.insert(p7);
    binaryTree.insert(p8);
    binaryTree.insert(p9);
    binaryTree.insert(p10);
    binaryTree.insert(p11);
    binaryTree.insert(p12);
    binaryTree.insert(p13);
    console.log(binaryTree.height);
    console.log(binaryTree.length);
    binaryTree.toString(binaryTree.root);
    binaryTree.forEach(sallery, binaryTree.root, "postOrder");
    binaryTree.toString(binaryTree.root);

})();
var TreeCreate = (function(compareFunc) {



            var tree = function() {
                    this.root = null;

                }
                // Object.defineProperties(tree, "length", {
                //     writeble: true,
                //     get: function() {
                //         //length calc
                //     }
                // });
                // Object.defineProperties(tree, "height", {
                //     writeble: true,
                //     get: function() {
                //         //heigth calc
                //     }
                // });

            function Node(val) {
                this.data = val;
                this.left = null;
                this.right = null;
            }



            var treePrototypeFunc = {


                insert: function(data) {


                    var curentNode = this.root;
                    if (this.root == null) {
                        this.root = new Node(data);
                        // console.log()
                        console.log("helllllllllllppppppppppppppppp!!!!!!!!!!!!!!!!!!!!");

                    } else {
                        while (compare(curentNode.data, data) !== 0) {


                            if (compare(curentNode.data, data) == 1) {
                                if (curentNode.right == null) {
                                    curentNode.right = new Node(data);
                                }
                                curentNode = curentNode.right;
                                console.log("hahaghaagagagaga!!!!!!!!!!!!!!!!");

                            }
                            if (compare(curentNode.data, data) == -1) {
                                if (curentNode.left == null) {
                                    curentNode.left = new Node(data);
                                }
                                curentNode = curentNode.left;
                                console.log("hohohohohohoho!!!!!!!!!!!!!!!!");

                            }



                        }

                    }
                },


                find: function(data) {

                    var curentNode = this.root;
                    while (curentNode && compare(curentNode, data) !== 0) {

                        if (compare(curentNode.data, data) == 1) {
                            curentNode = curentNode.data.right;

                        }
                        if (compare(curentNode.data, data) == -1) {
                            curentNode = curentNode.left;
                        }

                    }
                    return curentNode;
                },



                toString: function toString() {


                    print(this.root);

                    if (curentNode.left !== null) {
                        curentNode = curentNode.left;
                        return print(curentNode.data);

                    }

                    //     if (curentNode.right !== null) {
                    //         curentNode = curentNode.right;
                    //         return print(curentNode.data);
                    //     }
                    // },





                    //         console.log("helllllllllllppppppppppppppppp!!!!!!!!!!!!!!!!!!!!");
                    //     return this;
                    // },

                    forEach: function(action, context, traverseMode) {


                    }

                }


                    tree.prototype = treePrototypeFunc;
                return tree;


            }(compare));


        function print(node) {

            if (curentNode.left !== null) {
                return "";
                print(node.left)


            }
            return print()

            function compare(aaa, bbb) {
                if (aaa == bbb) {
                    return 0;

                } else if (aaa > bbb) {
                    return 1;
                } else if (aaa < bbb) {
                    return -1;
                }
            }

            var tree1 = new TreeCreate(compare);
            tree1.insert(1);
            tree1.insert(5);
            tree1.insert(4);
            tree1.toString();
            // console.log(tree1);
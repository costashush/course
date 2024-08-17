// Your task is to:

// 1.    Download two files from a server
// 2.    Extract some data from each of them
// 3.    Use this to decide on a third file to download
// 4.    Display the data from the third file to the user with alert(), or in case of an error, display an alert() with the received error message instead.

// While the functions to download the first two files return promises, the function which accesses the third file unfortunately only accepts a callback.

// Here are the functions available:
// *    initialRequestA() returns a promise to an A object
// *    initialRequestB() returns a promise to an B object
// *    getOptionsFromInitialData(a, b) returns the options argument required for finalRequest
// *    finalRequest(options, callback) retrieves the third file from the server, calling callback(error, data) when done. data is undefined in case of an error, and error is undefined in case of success (note: this is a common pattern in node.js).

// You can test your work with http://jsbin.com/hotile/15/edit?js,console , where the above functions are set up.


//
// DON'T CHANGE THESE FOUR FUNCTIONS
//
var fs = require("fs");


function initialRequestA() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            fs.readFile('file1.txt', 'utf-8', function read(err, data) {
                if (err) {
                    throw err;
                }
                console.log(data);
                resolve({ a: data });
            });

        }, 20);
    });
}


function initialRequestB() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            fs.readFile('file2.txt', 'utf-8', function read(err, data) {
                    if (err) {
                        throw err;
                    }
                    console.log(data);
                    resolve({ b: data });
                }

            );

        }, 50);
    });
}

function getOptionsFromInitialData(a, b) {
    return { c: a.a * b.b };
}

function finalRequest(options, cb) {
    if (options.c == 10) {
        cb(null, 'You win!');
    } else {
        cb('Access denied.');
    }
}


//
// ADD YOUR CODE BELOW HERE
//

function cb(arg1, arg2) {
    console.log(arguments);

}
Promise.all([initialRequestA(), initialRequestB()])
    .then(function(results) {
        var options = getOptionsFromInitialData(results[0], results[1]);
        finalRequest(options, cb);

    }).catch(function(err) {

        console.log('error acured');
    });
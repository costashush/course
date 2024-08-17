var maxTime = 1000;
var eventDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if (v % 2) {
        setTimeout(function() {
            callback(new Error("odd input"));
        }, waitTime);
    } else {

        setTimeout(function() {
            callback(null, v * 2, waitTime);

        }, waitTime);
    }

};

var processResults = function(err, results, time) {
    if (err) {
        console.log("ERROR: " + err.message);
    } else {
        console.log("The results are: " + results + " (" + time + "ms)");

    }
};

eventDoubler(4, processResults);
eventDoubler(5, processResults);
eventDoubler(7, processResults);
eventDoubler(9, processResults);
eventDoubler(12, processResults);
eventDoubler(6, processResults);
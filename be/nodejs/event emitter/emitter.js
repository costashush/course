var EventEmitter = require('events').EventEmitter;

var getResource = function(countX) {
    var eventX = new EventEmitter();
    process.nextTick(function() {
        var count = 0;
        eventX.emit('start');
        var interval = setInterval(function() {
            eventX.emit('data', ++count);
            if (count === countX) {
                eventX.emit('end', count);
                clearInterval(interval)
            }
        }, 10);
    });
    return (eventX);
};

var r = getResource(5);

r.on('start', function() {
    console.log("I`ve started!!!");

});
r.on('data', function(data) {
    console.log("        I`ve recived data => =" + data);

});
r.on('end', function(interval) {
    console.log("good bye" + interval);

});
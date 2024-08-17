var EventEmitter = require('events').EventEmitter;

var getResource = function(str) {
    // var string = str

    var eventX = new EventEmitter();
    process.nextTick(function() {


        var count = 0;
        eventX.emit('start');
        var interval = setInterval(function() {

            eventX.emit('print', str.charAt(count));

            ++count

            if (count === str.length) {
                eventX.emit('end', count);
                clearInterval(interval)
            }
        }, 200);
    });
    return (eventX);
};


var r = getResource('costa hezliah');

r.on('start', function() {
    console.log("I`ve started!!!");

});
r.on('print', function(char) {
    process.stdout.write(char);



});
r.on('end', function(interval) {
    console.log('');
    console.log("good bye" + interval);

});
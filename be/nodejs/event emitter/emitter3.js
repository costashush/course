var EventEmitter = require('events').EventEmitter;


var em = new emitter();

em.on('start', function(data) {
    console.log('first data' + data);

});

em.on('second', function(data) {
    console.log('first data' + data);

});


em.emit('start', "this is data from first");
em.emit('end', "dession ended");
em.emit('second', "this is data from second");
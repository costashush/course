const event = require('emitter').EventEmitter;
const util = require('util');


function Count(num) {
    this.num = num

    this.on('start', function() {
        var self = this;
        var id = setInterval(function() {
            console.log(self.num++);
            if (self.num == 10) {
                clearInterval(id);
            }
        }, 1000);
    });

}

util.inherits(Count, event);

var c = new Count(1);
c.emit('start');
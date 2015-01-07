//var fs = require('fs');
//var filename = '/home/';
//
//fs.stat(filename, function(err, stat) {
//    if(err) {
//        console.log(filename, ' does not exists');
//    } else {
//        console.log(require('util').inspect(stat));
//    }
//});
//
//process.nextTick(function() {
//    console.log('nextTick handler is executing');
//});

//while(1) {}

var EventEmitter = require('events').EventEmitter;

function getEmitter() {
    var emitter = new EventEmitter();
    emitter.emit('Start');
    return emitter;
}

var myEmitter = getEmitter();

myEmitter.on('Start', function() {
    console.log('Started');
});
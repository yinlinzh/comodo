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

//var EventEmitter = require('events').EventEmitter;
//
//function getEmitter() {
//    var emitter = new EventEmitter();
//    process.nextTick(function() {
//        emitter.emit('Start');
//    });
//    return emitter;
//}
//
//var myEmitter = getEmitter();
//
//myEmitter.on('Start', function() {
//    console.log('Started');
//});



//setTimeout(function() {
////    console.log('Now stop');
//    while(1) {console.log('abc')}
//}, 100);
//
//var intervalId = setInterval(function() {
//    console.log('Run me every 1 millisecond');
//}, 1);
//
//intervalId.unref();

var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var pos = 0;
var messenger = new EventEmitter();

// Listener for EventEmitter
messenger.on("message", function(msg) {
    console.log(++pos + " MESSAGE: " + msg);
});

console.log(++pos + " FIRST");



setTimeout(function() {
    console.log(++pos + " QUICK TIMER")
}, 0);

process.nextTick(function() {
    console.log(++pos + " NEXT")
});

setTimeout(function() {
    console.log(++pos + " LONG TIMER")
}, 10);

setImmediate(function() {
    console.log(++pos + " IMMEDIATE")
});

messenger.emit("message", "Hello!");

fs.stat(__filename, function() {
    console.log(++pos + " FIRST STAT");
});

fs.stat(__filename, function() {
    console.log(++pos + " LAST STAT");
});

console.log(++pos + " LAST");

// MY ANSWER:
// 1 FIRST
// 2 MESSAGE: Hello!
// 3 LAST
// 4 NEXT
// 5 QUICK TIMER
// 6 LONG TIMER
// 7 FIRST STAT
// 8 LAST STAT
// 9 IMMEDIATE

// RIGHT ANSWER:
// 1 FIRST
// 2 MESSAGE: Hello!
// 3 LAST
// 4 NEXT
// 5 QUICK TIMER
// 6 FIRST STAT
// 7 LAST STAT
// 8 IMMEDIATE
// 9 LONG TIMER
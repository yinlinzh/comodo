"use strict";

//
// function foo () {
//     var self = this;
//     // body...
//     a.abc = 10;
// }
//
// foo();
//
// module.exports = a;

// var redis = require('redis').createClient();
// redis.spop('letters', function(err, item) {
//   if (err ) console.log('err -----> ' + err);
//   console.log('item -----> ' + item);
//   redis.quit();
// });

//(function foo() {
//  console.log('foo');
//  setTimeout(function() {
//    console.log('time out');
//  }, 1000);
//  setImmediate(foo);
//})();



//var util = require('util');
//var EventEmitter = require('events').EventEmitter;
//
//var Counter = function(init) {
//    var self = this;
//    EventEmitter.call(self);
//    self.init = init;
//};
//
//util.inherits(Counter, EventEmitter);
//
//Counter.prototype.increment = function() {
//    var self = this;
//    self.init++;
//    self.emit('increment', self.init);
//};
//
//var cb = function(counter) {
//    console.info('Counter: ' + counter);
//};
//
//var counter = new Counter(10);
//counter.on('increment', cb);
//
//counter.increment();
//counter.increment();



//var Readable = require('stream').Readable;
//var readable = new Readable;
//var count = 0;
//readable._read = function() {
//    if(++count > 10) {
//        return readable.push(null);
//    }
//    setTimeout(function() {
//        readable.push(count + "\n");
//    }, 500); };
//readable.pipe(process.stdout);



//var count = 0;
//(function curse() {
//    console.log(++count);
//    curse();
//})();



//setInterval(function() {}, 1e6);
//process.on('SIGINT', function() {
//    console.log('SIGINT signal received');
////    console.log('fuck you, i will never stop');
//    process.exit(1);
//});

//for(var i = 0; i < 4; i++) {
//    setTimeout(function() {
//        console.log(i);
//    }, 0);
//}
//
//for(var i = 0; i < 4; i++) {
//    (function(item) {
//        setTimeout(function() {
//            console.log(item);
//        }, 0);
//    })(i);
////    setTimeout(function() {
////        console.log(i);
////    }, 0);
//}
//
//console.log('--------');
//
//[0, 1, 2, 3]
//    .forEach(function(item) {
//        setTimeout(function() {
//            console.log(item);
//        }, 0);
//    });
//
//var EventEmitter = require('events').EventEmitter;
//console.info(Object.getPrototypeOf(new EventEmitter()));

//var start = new Date();
//setTimeout(function() {
//    var now = new Date();
//    console.log('Elapsed %d ms' , now - start);
//}, 500);
//while(new Date() - start < 2000) {}

//var fireCount = 0;
//var start = new Date();
//var timer = setInterval(function() {
//    if(new Date() - start > 1000) {
//        clearInterval(timer);
//        console.log(fireCount);
//        return;
//    }
//    fireCount++;
//}, 0);

//var functionHasReturned = false;
//process.nextTick(function() {
//    console.assert(functionHasReturned);
//});
//
//functionHasReturned = true;

//setTimeout(function A() {
//    setTimeout(function B() {
//        setTimeout(function C() {
//            throw new Error("Something terrible has happened!");
//        }, 0);
//    }, 0);
//}, 0);

//try {
//    setTimeout(function() {
//        throw new Error("Catch me if you can!");
//    }, 0);
//} catch(e) {
//    console.error('---------', e);
//}
//
//['room', 'moon', 'cow jumping over the moon']
//    .forEach(function(item) {
//        process.on('exit', function() {
//            console.log('Goodnight', item);
//        });
//    });

var EventEmitter = require('events').EventEmitter;
var myEE = new EventEmitter();

myEE.on('evacuate', function(msg) {
    console.log('Come on! ', msg, ' issued!!');
});

myEE.emit('evacuate', 'Women and children first!!');

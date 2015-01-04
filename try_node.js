
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

var count = 0;
(function curse() {
    console.log(++count);
    curse();
})();
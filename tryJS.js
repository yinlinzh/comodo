'use strict';

var util = require('util');

function NewType() {}

util.inherits(NewType, Object);

//NewType.prototype.toString = function() {
//    return '113';
//};

var nt = new NewType();

console.info(1 + nt);


// for(var i = 0; i < 3; i++) {
//     setTimeout(function() {console.log(i)}, 0);
// }
//
// var start = new Date();
//
// setTimeout(function() {
//     var end = new Date();
//     console.log('time elapsed: ', end - start, 'ms');
// }, 500);
//
// while(new Date - start < 1000) {}

var fireCount = 0,
    start = new Date(),
    timer = setInterval(function() {
        if(new Date() - start > 1000) {
            clearInterval(timer);
            console.log(fireCount);
            return;
        }
        fireCount++;
    }, 0);


['room', 'moon', 'cow jumping over the moon']
.forEach(function(item) {
    process.on('exit', function() {
        console.log('Goodnight, ', item);
    });
});

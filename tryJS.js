////'use strict';
////
////var util = require('util');
////
////function NewType() {
////  Object.call(this);
////}
////
////util.inherits(NewType, Object);
////
////NewType.prototype.toString = function() {
////    return '113';
////};
////
////var nt = new NewType();
////
////console.info(1 + nt);
////
////var abc = 10;
//////delete abc;
////var arr = [1,2,3,4,,5];
////console.log(arr[5])
////delete arr[0]
////console.log(arr)
////
////for(var attr in [1,2,3,4,5]) {
////  console.log('--------->')
////  console.log(attr)
////}
////
//////debugger
////
////var o = {
////  t: 1,
////  get trace() {
////    var self = this;
////    return self.t * 100;
////  },
////  set trace(t) {
////    var self = this;
////    self.t = t * 100;
////  }
////};
////
////o.trace = 100;
////console.log(o.trace);'use strict';
////
////var util = require('util');
////
////function NewType() {
////  Object.call(this);
////}
////
////util.inherits(NewType, Object);
////
////NewType.prototype.toString = function() {
////    return '113';
////};
////
////var nt = new NewType();
////
////console.info(1 + nt);
////
////var abc = 10;
//////delete abc;
////var arr = [1,2,3,4,,5];
////console.log(arr[5])
////delete arr[0]
////console.log(arr)
////
////for(var attr in [1,2,3,4,5]) {
////  console.log('--------->')
////  console.log(attr)
////}
////
//////debugger
////
////var o = {
////  t: 1,
////  get trace() {
////    var self = this;
////    return self.t * 100;
////  },
////  set trace(t) {
////    var self = this;
////    self.t = t * 100;
////  }
////};
////
////o.trace = 100;
////console.log(o.trace);'use strict';
////
////var util = require('util');
////
////function NewType() {
////  Object.call(this);
////}
////
////util.inherits(NewType, Object);
////
////NewType.prototype.toString = function() {
////    return '113';
////};
////
////var nt = new NewType();
////
////console.info(1 + nt);
////
////var abc = 10;
//////delete abc;
////var arr = [1,2,3,4,,5];
////console.log(arr[5])
////delete arr[0]
////console.log(arr)
////
////for(var attr in [1,2,3,4,5]) {
////  console.log('--------->')
////  console.log(attr)
////}
////
//////debugger
////
////var o = {
////  t: 1,
////  get trace() {
////    var self = this;
////    return self.t * 100;
////  },
////  set trace(t) {
////    var self = this;
////    self.t = t * 100;
////  }
////};
////
////o.trace = 100;
////console.log(o.trace);
//
//function foo() {
//    return function() {
//        console.log(this);
//    }
//}
//
////foo()();
//
//var o = {
//    f: foo()
//};
//
//o.f();
//
//
//foo().call({name: 'name'});
//
//var o1 = {x: 1, y: 2},
//    o2 = {x: 3, y: 4};
//
//function f() {
//    var self = this;
//    console.log(self.x * self.y);
//}
//
//var g = f.bind(o1),
//    h = f.bind(o2);
//
//g(); h();

function Foo() {}

var f = new Foo();
console.log(f instanceof Foo);
console.log(Foo.prototype.constructor === Foo)
console.log(Foo.prototype.isPrototypeOf(f));

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

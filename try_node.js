
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

(function foo() {
  console.log('foo');
  setTimeout(function() {
    console.log('time out');
  }, 1000);
  setImmediate(foo);
})();

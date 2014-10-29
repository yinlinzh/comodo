var env = require('./env');

// var ops = {};


// // ops.

// ops.dumpInfo = function() {
//     var self = this;
//     console.log('self.dumpInfo');
// }

// ops.insertSeed = function(seed, next) {
//     var self = this;

//     self.dumpInfo();

//     env.seedsCollection.insert(seed, function(err) {
//         if(err) {
//             ;
//         }
//     });
// };

// ops.insertSchedule = function(schedule, next) {

// };

// ops.insertPage = function(page, next) {

// };

// ops.findSeed = function(seed, next) {

// };
var app = {env: {}};
env.initAll(app.env, function(env) {
  var schedules = env.schedules;
  schedules.insert({a: 1, b: 46}, function(err) {});
});

// module.exports = {
//     initAll: function(env) {
//         e.initMongo(function(err, results) {
//             if(err) throw err;
//             env.schedulesCollection = results[0];
//             env.seedsCollection = results[1];
//             env.pagesCollection = results[2];
//
//             e.initRedis(function(err, results) {
//
//             });
//         });
//     }
// };

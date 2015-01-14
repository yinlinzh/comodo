/**
 * Created by Yinlin on 1/10/15.
 */

var env = require('./try_node_mongo');
var async = require('async');

env.initEnv(function(env) {
    async.series([
        function(next) {
            env.schedulesColl.insert(
                {player: 'Durant', age: '26', height: '215cm'},
                function(err, result) {
                    if(err) throw new Error(err);
                    console.log(result);
                    next(null);
                }
            );
        },
        function(next) {
            env.newCollection.find({vehicle: "plane"}, function (err, results) {
                if (err) throw new Error(err);
                //        console.log(results);
                results.toArray(function (err, items) {
                    if(err) next(err);
                    console.log(items);
                    next(err);
                });
            });
        }
    ], function(err, result) {
        env.db.close();
    });
});

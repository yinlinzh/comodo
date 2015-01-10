/**
 * Created by Yinlin on 1/10/15.
 */

var env = require('./try_node_mongo');

env.initEnv(function(env) {
    env.schedulesColl.insert(
        {player: 'Durant', age: '26', height: '215cm'},
        function(err, result) {
            if(err) throw new Error(err);
            console.log(result);
        }
    );
    env.newCollection.findOne({vehicle: "plane"}, function(err, results) {
        if(err) throw new Error(err);
        console.log(results);
    });
});

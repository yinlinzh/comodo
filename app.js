// var redis = require('redis'),
//     client = redis.createClient();
//     client.select(1);
var async = require('async');
var cp = require('child_process');

async.forever(
    function(next) {
        // client.spop('bbs', function(err, item) {
        //     if (item) {
        //         console.log('--------->' + item);
        //         child_process.exec(callback)
        //     }
        //     // while(1);
        // });
        console.log('-------->');
        var childProcess = cp.spawn('node', ['run.js'], function(){
            console.log('done');
        });
        childProcess.stdout.on('data',function(data) {
            console.log('cps data: ' + data);
        });
        childProcess.on('exit', function(status) {
            console.log('exit with code: ' + status);
        });
        setImmediate(next);
        // process.nextTick(next);
    }, function(err) {
        console.log('two');
    }
);

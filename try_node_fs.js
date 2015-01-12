/**
 * Created by Yinlin on 1/12/15.
 */

var fs = require('fs');
var async = require('async');
var path = require('path');

function findLargestFile(dirname, next) {
    async.waterfall([
        function(next) {
            fs.readdir(dirname, next);
        },
        function(files, next) {
            files = files.map(function(item) {
                return path.join(dirname, item);
            });
            async.map(files, fs.stat, function(err, results) {
                var target;
                results = results
                    .filter(function(item) {
                        return item.isFile();
                    });
                target = results.reduce(function(pre, cur) {
                    if(cur.size > pre.size) return cur;
                    else return pre;
                });
                // Learn usage of Array.prototype.indexOf
                target = results.indexOf(target);
                next(null, files[target], results[target].size);
            }, 0);
        }
//        function()
//        function() {}
    ], function(err, file, size) {
        if(err) {
            throw new Error(err);
        } else {
            next(null, file, size);
        }
    });
}

findLargestFile(process.argv[2], function(err, name, size) {
    console.log('Haha ---> File: ', name, ', Size: ', size);
});


/**
 * Created by Yinlin on 1/9/15.
 */

var async = require('async');
var MongoClient = require('mongodb').MongoClient;

module.exports = {
//    initEnv: function(options) {
//        async.waterfall();
//
//    }
    initEnv: initMongo
};


function initMongo(next) {
    var self = this;
//    var host = options.host || 'localhost';
//    var post = options.port || '27017';
//    var db = options.port || '27017';

//    async.waterfall();
    var mongoStr = 'mongodb://localhost:27017/newDB';
    MongoClient.connect(mongoStr, function (err, db) {
        if (err) {
            throw new Error(err);
        } else {
            self.db = db;
            async.waterfall([
                // initSchedules
                function (next) {
                    db.collection('schedules', function (err, schedulesColl) {
                        self.schedulesColl = schedulesColl;
                        next(err, db);
                    });
                },
                // initSeeds
                function (db, next) {
                    db.collection('seeds', function (err, seedsColl) {
                        self.seedsColl = seedsColl;
                        next(err, db);
                    });
                },
                // initNewCollection
                function (db, next) {
                    db.collection('newCollection', function (err, newColl) {
                        self.newCollection = newColl;
                        next(err, db);
                    });
                },
                // initWebpages
                function (db, next) {
                    db.collection('webpages', function (err, webpagesColl)  {
                        self.webpagesColl = webpagesColl;
                        next(err);
                    });
                }
            ], function(err, result) {
                if(err) {
                    throw new Error(err);
                } else {
                    next(self);
                }
            });
        }
    });
}


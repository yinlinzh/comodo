'use strict';

// TODO: move below to conf
var MONGOURI = 'mongodb://127.0.0.1:27017/local-test';
var mongo = require('mongodb').MongoClient;

var async = require('async');

function initMongo(env, next) {
  var msg = '';

  mongo.connect(MONGOURI, function(err, db) {
  // connect MongoDB by URI
    if(err) {
      msg = "env:initMongo:mongo.connect(mongoURI): " + err;
      // next(msg);
      throw err;
    } else {
      // seeds collection
      async.parallel([
        function(cb) {
          db.collection('schedules', function(err, collection) {
            cb(err, collection);
          });
        },
        function(cb) {
            db.collection('seeds', function(err, collection) {
                cb(err, collection);
            });
        },
        function(cb) {
            db.collection('pages', function(err, collection) {
                cb(err, collection);
            });
        }
      ], function(err, results) {
        env.schedules = results.shift();
        env.seeds = results.shift();
        env.pages = results.shift();
        next(err, env);
      });
    }
  });
}

function initRedis(env, next) {

}

module.exports = {
    initAll: function(env, next) {
      var self = this;

      initMongo(env, function(err, env) {
        next(env);
        // initRedis(env, next);
      });
    }
};

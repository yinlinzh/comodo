'use strict';

var util = require('util'),
    events = require('events'),
    ct = require('./childTask');

function Nursery(options) {
    var self = this;
}

util.inherits(Nursery, events.EventEmitter);

// task conf

function buildConcurrencyRules() {
    // premiumLeague: 10,
    // lfp: 20,
    // serieA: 5
}

var checkConcurrencyRules = (function() {
    var rules = {
        premiumLeague: 10,
        lfp: 20,
        serieA: 5
    };
    // var rules = buildConcurrencyRules(target);
    return function(target) {
        if (!target in rules) console.log('!target in rules');
        rules[target] -= 1;
        console.log('rules: ' + target + ' : ' + rules[target]);
    };

}());

checkConcurrencyRules('lfp');
checkConcurrencyRules('lfp');
checkConcurrencyRules('lfp');


Nursery.prototype.addTask = function(task, next) {
    var self = this,
        taskPermitted = checkConcurrencyRules(target)();



    var childTask = ct.createChildTask('ls', ['-l']);
    childTask.stdout.on('data', function(chunk) {
        console.log('hey dude, the data is: ' + chunk);
    });
    childTask.on('exit', function(code, signal) {
        console.log('status code: ' + code + signal);
    });
    childTask.on('close', function(code, signal) {
        console.log('status code: ' + code + signal);
    });

    childTask = ct.createChildTask('ls', ['-a']);
    childTask.stdout.on('data', function(chunk) {
        console.log('hey dude, the data is: ' + chunk);
    });
    childTask.on('exit', function(status) {
        console.log('status code: ' + status);
        next(null, status);
    });
    childTask.on('error', function(err) {
        next(err);
    });

    // setTimeout(function() {
    //     childTask = ct.createChildTask('ls', ['-R']);
    //     childTask.stdout.on('data', function(chunk) {
    //         console.log('hey dude, the data is: ' + chunk);
    //     });
    //     childTask.on('exit', function(status) {
    //         console.log('status code: ' + status);
    //     });
    // }, 10000);
};

Nursery.prototype.resumeTasks = function(next) {};

// var n = new Nursery();
// n.addTask();


// var childTask = ct.create();
// childTask.on('fuck', function(chunk) {
//     console.log('let me fuck what: ' + chunk);
// });
//
// setTimeout(function() {
//     childTask.emit('fuck', 'adfadafafafa');
//     childTask.emit('error', new Error('abdad'));
//     childTask = null;
// }, 10000);

//
// var spawn = require('child_process').spawn,
//     child = spawn('tail', ['-f', '/var/log/system.log']);

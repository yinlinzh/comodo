'use strict';

var util = require('util'),
    events = require('events'),
    childProcess = require('child_process'),
    spawn = childProcess.spawn;

function ChildTask() {}

util.inherits(ChildTask, events.EventEmitter);

ChildTask.prototype.create = function(command, cmdOptions) {
    var self = this;

    if (arguments.length < 2) {
        throw new Error();
    }

    self.command = command;
    self.cmdOptions = cmdOptions;

    return spawn(command, cmdOptions);
};

exports.createChildTask = function(command, cmdOptions) {
    return new ChildTask().create(command, cmdOptions);
};

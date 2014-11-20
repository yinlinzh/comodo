'use strict';

var util = require('util');

function NewType() {}

util.inherits(NewType, Object);

//NewType.prototype.toString = function() {
//    return '113';
//};

var nt = new NewType();

console.info(1 + nt);


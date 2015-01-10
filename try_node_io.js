/**
 * Created by Yinlin on 1/8/15.
 */


//var accountStr = '{"name": "Jedi", "members": ["Yoda", "Obi Wan"],' +
//    '"number": 34512, "location": "A galaxy far, far away"}';
//
//var accountObj = JSON.parse(accountStr);
//console.log(accountObj.name);
//console.log(accountObj.members);
//
//
//console.log(JSON.stringify(accountObj));
//
//var buf256 = new Buffer(256);
//buf256.fill(0);
//buf256.write('abc', 'utf-8'); //, 'utf-8');
//console.log(buf256); //.toString());
//
//buf256.writeInt8(19, 4);
//console.log(buf256); //.toString());

var stream = require('stream');
var util = require('util');

function Answer(opt) {
    stream.Readable.call(this, opt);
    this.quotes = ['yes', 'no', 'maybe'];
    this._index = 0;
}

util.inherits(Answer, stream.Readable);

Answer.prototype._read = function() {
    if(this._index >= this.quotes.length) {
        this.push(null);
    } else {
        this.push(this.quotes[this._index]);
        ++this._index;
    }
};


var a = new Answer();
//console.log(a.read().toString());

a.on('readable', function() {
    var data = a.read();
    !!data && console.log(data.toString());
});

a.on('data', function(data) {
    console.log('Callback read: ', data.toString());
});

a.on('end', function(data) {
    console.log('No more answers');
});

function Writer(opt) {
    stream.Writable.call(this, opt);
    this.data = new Array();
}

util.inherits(Writer, stream.Writable);

Writer.prototype._write = function(data, encoding, callback) {
    this.data.push(data);
    console.log('Adding: ' + data);
    callback();
};

var w = new Writer();
for(var i = 1; i <= 5; i++) {
    w.write("Item" + i, 'utf8');
}
w.end("ItemLast");
console.log(w.data);

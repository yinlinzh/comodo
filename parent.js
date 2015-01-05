var path = require('path');
var cp = require('child_process');
var child = cp.fork(path.join(__dirname, 'lovechild.js'));

child.on('exit', function(msg) {
    console.log('Child said: ' + msg);
});

child.send('I love you');
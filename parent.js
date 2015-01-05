var path = require('path');
var cp = require('child_process');
var child = cp.fork(path.join(__dirname, 'lovechild.js'));

//child.on('message', function(msg) {
//    console.log('Child said: ', msg);
//    process.exit(13);
//});

child.send('I love you');
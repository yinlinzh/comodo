//var path = require('path');
//var cp = require('child_process');
//var child = cp.fork(path.join(__dirname, 'lovechild.js'));
//
////child.on('message', function(msg) {
////    console.log('Child said: ', msg);
////    process.exit(13);
////});
//
//child.send('I love you');

var child = require('child_process').fork('./child.js');
var server = require('net').createServer();
server.on('connection', function(socket) {
    socket.end('Parent handled connection');
});
server.listen(8080, function() {
    child.send('The parent message', server);
});
var http = require('http');
var r;

var server = http.createServer(function(req, res) {
    r = req;
    r.on('close', function() {
        console.log('client req closed');
    });
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello world!');
})

server.on('connection', function(socket) {
    console.log('Remote address: ' + socket.remoteAddress + ' , port: ' + socket.remotePort + ' connected.');
});

// server.on('close')

server.listen(3000);

console.log('Server started on localhost:3000; press Ctrl-c to terminate....');

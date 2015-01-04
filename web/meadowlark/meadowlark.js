var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

app.set('port', process.env.PORT || 3000);

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());

app.get('/headers', function(req, res) {
    console.log('req.params: ' + JSON.stringify(req.params));
    console.log('req.query: ' + JSON.stringify(req.query));
    console.log('req.ip: ' + req.ip);
    console.log('req.path: ' + req.path);
    res.set('content-type', 'text/plain');
    res.status(201);
    var s ='';
    for(var attr in req.headers) {
        s += attr + ': ' + req.headers[attr] + '\n';
    }
    res.send(s);
});

app.post('/headers', function(req, res) {
    console.log(req.method);
    console.log(req.params);
    console.log(req.body);
    // res.set('content-type', 'text/plain');
    // res.status(201);
    // var s ='';
    // for(var attr in req.headers) {
    //     s += attr + ': ' + req.headers[attr] + '\n';
    // }
    // res.end('POST issued.');
    res.json({who: 'me', me: 'sb'});
});

app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});

app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// console.log(app.get('port'));


app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-c to terminate.');
});

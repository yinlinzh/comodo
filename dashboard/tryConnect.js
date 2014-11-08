var connect = require('connect'),
    app = connect();

var bodyParser = require('body-parser');
var logger = require('morgan');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(logger);
// app.use(bodyParser());
// app.use(connect.query());
app.use(logger(':method :url :response-time ms'));
app.use(function (req, res, next) {
    console.log(req.body);
    console.log(req.query);
    next();
});
app.listen(3000);

// function logger(req, res, next) {
//     console.log('%s %s', req.method, req.url);
//     next();
// }

var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

// logging system



app.get('/', function(req, res) {
    res.render('example',
        {layout: 'dashboard',
         tours: [
            {name: 'Hood River', price: '$99.95'},
            {name: 'Oregon Coast', price: '$159.95'}
         ]
        }
    );
});

app.listen(process.env.PORT || 6543, function() {
    // console.log('nodejs + express server is starting...');
});
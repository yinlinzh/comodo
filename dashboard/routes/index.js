var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/newsletter', function(req, res) {
    res.render('newsletter', { csrf: 'CSRF token goes here' });
});

router.post('/process', function(req, res) {
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.redirect(303, '/thank-you')
});


router.get('/fruits/banana', function(req, res) {
    res.send(200, 'The banana tastes delicious!');
});
router.get('/fruits/apple', function(req, res) {
    res.send(200, 'The apple tastes delicious!');
});
router.get('/fruits/orange', function(req, res) {
    res.send(200, 'The orange tastes delicious!');
});

module.exports = router;
